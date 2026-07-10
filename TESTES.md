# Testes Unitários — Formação BEĨ Educação

## 1. Análise Inicial: Faz Sentido Usar RTL + Jest?

Antes de implementar qualquer coisa, vale entender quando testes unitários agregam valor real — e quando não agregam.

### O que RTL + Jest cobrem bem neste projeto

- **Comportamento de componentes com estado**: o dark mode toggle funciona? O `localStorage` é salvo corretamente? A sidebar abre e fecha?
- **Props e renderização condicional**: o hero renderiza o título? Mostra fallback quando subtitle não é fornecido?
- **Interações do usuário**: clique no botão chama `router.push`? Clique no overlay fecha a sidebar?
- **Acessibilidade básica**: os `aria-label` estão corretos? Links abrem em `_blank`?

### O que RTL + Jest **não** cobrem bem aqui

- **Visual e layout**: testes unitários não verificam se o gradiente azul está bonito, se o bento grid está alinhado, ou se o dark mode parece correto visualmente. Para isso, ferramentas como Storybook + Chromatic ou Playwright com screenshots são mais adequadas.
- **Animações**: `framer-motion` e `animate-bounce` são ignorados pelo jsdom. Não há como testar se a animação "parece" suave.
- **Conteúdo estático**: verificar se "Aprendizagem Baseada em Projetos" está no DOM tem valor zero — se o texto mudar, o teste quebra sem motivo funcional.

### Conclusão da análise

Para um projeto majoritariamente educacional e de conteúdo fixo como este, o ROI do RTL + Jest é **médio-baixo** em produção. O melhor uso é **educacional e de prática**, exatamente o objetivo aqui. Se o projeto crescer para incluir autenticação, formulários ou lógica de negócio, o valor dos testes aumenta consideravelmente.

> **Alternativa mais eficaz para este tipo de projeto**: Playwright (E2E) — testa navegação entre páginas, abertura da sidebar, scroll suave, toggle de tema — exatamente o que o usuário real faz, sem os limites do jsdom.

---

## 2. Stack de Testes

| Pacote | Versão | Papel |
|---|---|---|
| `jest` | ^30 | Test runner — executa os testes, gera relatórios |
| `jest-environment-jsdom` | ^30 | Simula um DOM de browser dentro do Node.js |
| `@testing-library/react` | ^16 | Renderiza componentes React e expõe queries de DOM |
| `@testing-library/jest-dom` | ^6 | Matchers extras para o `expect` (`toBeInTheDocument`, `toHaveClass`, etc.) |
| `@testing-library/user-event` | ^14 | Simula interações reais do usuário (cliques, teclado) |

### Por que `@testing-library/user-event` em vez de `fireEvent`?

`fireEvent` dispara eventos DOM sintéticos diretamente. `userEvent` simula o comportamento real do browser: hover → mousedown → mouseup → click → focus. Para estados que dependem de sequências de eventos (como `isOpen` na Sidebar), `userEvent` é mais confiável.

---

## 3. Configuração

### `jest.config.js`

```js
const nextJest = require('next/jest')
const createJestConfig = nextJest({ dir: './' })

const customConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/src/$1' },
}

module.exports = createJestConfig(customConfig)
```

**Pontos importantes:**

- `next/jest` usa o compilador SWC embutido no Next.js — sem precisar configurar Babel. Ele também mocka automaticamente `next/image` (renderiza como `<img>`) e `next/link` (renderiza como `<a>`).
- `setupFilesAfterEnv` (não `setupFilesAfterFramework`!) — carrega o `jest.setup.js` **depois** que o jsdom está pronto, mas **antes** de cada arquivo de teste. A chave correta é `AfterEnv`, referindo-se ao ambiente de testes (jsdom), não ao framework.
- `moduleNameMapper` resolve o alias `@/` definido no `jsconfig.json` para que imports como `@/contexts/SidebarContext` funcionem nos testes.

### `jest.setup.js`

```js
import '@testing-library/jest-dom'
```

Estende o `expect` do Jest com matchers semânticos: `toBeInTheDocument()`, `toHaveTextContent()`, `toHaveAttribute()`, `toHaveClass()` etc.

---

## 4. Estratégia de Mocks

### `next/navigation` (manual)

O `next/jest` **não** mocka `next/navigation` automaticamente. É necessário mockar manualmente em cada arquivo de teste:

```js
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}))
```

O `jest.fn()` cria uma função mock que pode ser configurada por teste:
```js
usePathname.mockReturnValue('/modulo1')
```

### `next/image` e `next/link` (automáticos)

O `next/jest` já mocka esses dois. `next/image` vira um `<img>` simples, `next/link` vira um `<a>`. Isso permite testar `src`, `href` e `alt` normalmente.

### `SidebarContext` (provider real)

Em vez de mockar o contexto, os testes da Sidebar usam o `SidebarProvider` real. Isso é mais robusto: testa a integração entre o componente e seu contexto, não apenas o componente isolado.

```jsx
function renderSidebar(props = {}, pathname = '/') {
  usePathname.mockReturnValue(pathname)
  return render(
    <SidebarProvider>
      <Sidebar {...props} />
    </SidebarProvider>
  )
}
```

O helper aceita `pathname` como segundo argumento para evitar que o mock interno sobrescreva configurações do teste.

### `localStorage` e `document.documentElement`

O jsdom fornece `localStorage` funcional por padrão. Apenas é necessário limpar entre testes:

```js
beforeEach(() => {
  localStorage.clear()
  document.documentElement.classList.remove('dark')
})
```

---

## 5. Os Testes

### `HeroBento.test.jsx` — 13 testes

O hero é um componente majoritariamente de apresentação, mas tem lógica suficiente para valer testar:

| Teste | O que verifica | Por quê |
|---|---|---|
| Renderiza título via prop | `getByRole('heading', { level: 1 })` | Props chegam corretamente |
| Renderiza tag quando fornecida | `getByText('Módulo 1')` | Renderização condicional |
| Não renderiza tag quando ausente | `queryByText` → `not.toBeInTheDocument` | Garante que o `&&` funciona |
| Renderiza subtitle | `getByText(subtitle)` | Prop string exibida |
| Fallback sem subtitle | `getByText('Formação de educadores BEĨ')` | Branch else do ternário |
| statNumber e statLabel | `getByText('42')` | Props numéricas |
| Fallback stat (travessão) | `getByText('—')` | `undefined` tratado |
| Link com buttonText | `getByRole('link')` + `toHaveAttribute('href')` | CTA com href correto |
| Botão scroll sem buttonText | `getByRole('button')` | Renderização condicional |
| scrollIntoView no clique | Mock de `document.querySelector` | Comportamento do scroll suave |
| Animação (opacity-100) | `waitFor` + `querySelector` | `useEffect` dispara animação |
| Links sociais | `getByRole('link', { name: /instagram/i })` | 3 redes sociais presentes |
| Links abrem em nova aba | `toHaveAttribute('target', '_blank')` | Segurança/UX |
| Imagem trio | `getByAltText('Trio')` | `next/image` mockado corretamente |

### `Navbar.test.jsx` — 14 testes

O Navbar tem a lógica de dark mode — a mais rica do projeto para testar:

| Teste | O que verifica | Por quê |
|---|---|---|
| Renderiza logo | `getByAltText` | Componente monta |
| Logo light mode por padrão | `src` contém `logo-blue.png` | Estado inicial correto |
| Logo dark quando `localStorage='dark'` | `src` contém `logo_white.png` | Persistência de tema |
| Botão dark mode com aria-label correto | `getByRole('button', { name: 'Modo escuro' })` | Acessibilidade |
| Toggle muda aria-label | Após clique → `'Modo claro'` | Estado `dark` alternando |
| Adiciona classe `.dark` ao `<html>` | `document.documentElement.classList` | Tailwind dark mode funciona |
| Remove classe `.dark` ao alternar de volta | `classList.contains` → false | Toggle bidirecional |
| Salva `'dark'` no localStorage | `localStorage.getItem('theme')` | Persistência |
| Salva `'light'` ao voltar | Segunda alternância | Toggle persistente bidirecional |
| Inicializa em dark se localStorage='dark' | `classList.contains('dark')` → true | Hidratação do tema |
| Hamburger mobile presente | `getByRole('button', { name: 'Abrir menu' })` | Acessibilidade mobile |
| Menu mobile abre | Após clique → `'Fechar menu'` | Interação mobile |
| Links no dropdown mobile | `getAllByText('Apresentação')` | Menu expandido exibe links |
| Link ativo tem `text-blue-700` | `className.toContain` | Destaque da página atual |
| Backdrop-blur após scroll > 20px | `dispatchEvent(scroll)` + `querySelector` | Comportamento ao rolar |
| Blur remove ao voltar ao topo | `scrollY = 0` + evento | Estado reverso do scroll |

### `Sidebar.test.jsx` — 16 testes

A Sidebar é o componente mais complexo: combina contexto, roteamento e DOM manipulation.

| Teste | O que verifica | Por quê |
|---|---|---|
| Toggle com aria-label correto | `getByRole('button', { name: 'Abrir menu' })` | Acessibilidade |
| Inicia fechada (`-translate-x-full`) | `querySelector` | Estado inicial |
| Abre ao clicar no toggle | `translate-x-0` aparece | Toggle funciona |
| Muda aria-label ao abrir | `'Fechar menu'` | Acessibilidade dinâmica |
| Overlay renderizado quando aberta | `[class*="bg-black"]` | Backdrop presente |
| Fecha ao clicar no overlay | `-translate-x-full` volta | Clique fora fecha |
| Botões de seção renderizados | Nomes exatos (sem regex) | Estrutura de navegação |
| Seção ativa tem `text-blue-600` | `className.toContain` | Highlight da página atual |
| Sub-itens da seção Apresentação | `getByRole('button', { name: /Apresentação do Curso/i })` | Estrutura aninhada |
| `router.push` ao clicar em seção diferente | `mockPush` chamado com `/modulo1` | Navegação funciona |
| `scrollIntoView` ao clicar em sub-item na mesma página | `jest.spyOn(document, 'getElementById')` | Scroll suave funciona |
| Círculo vazio para itens não vistos | `querySelector('.border-slate-300')` | Estado de progresso |
| `forceOpen=true` abre a sidebar | `translate-x-0` sem clique | Prop controlada |
| `onToggle` chamado com `true` ao abrir | `mockOnToggle` verificado | Callback para o pai |
| `onToggle` chamado com `false` ao fechar | `toHaveBeenLastCalledWith(false)` | Callback bidirecional |
| Texto de rodapé presente | `getByText(/BEĨ Educação © 2026/)` | Conteúdo do footer |

---

## 6. Problemas Encontrados e Soluções

### `setupFilesAfterFramework` não é uma chave válida

**Problema**: Tentamos usar `setupFilesAfterFramework` (nome intuitivo mas incorreto). Jest 30 rejeitou com "Unknown option".

**Solução**: A chave correta é `setupFilesAfterEnv` — "after the test environment (jsdom)", não "after the framework".

### Seletores regex ambíguos na Sidebar

**Problema**: `getByRole('button', { name: /Módulo 1/i })` encontrava tanto o botão de seção "Módulo 1" quanto o sub-item "O Módulo 1".

**Solução**: Usar strings exatas: `{ name: 'Módulo 1' }`. A string exata faz match perfeito com o `aria-name` calculado pelo browser (texto visível do elemento).

### Mock de pathname sobrescrito pelo helper

**Problema**: O helper `renderSidebar()` chamava `usePathname.mockReturnValue('/')` internamente, sobrescrevendo qualquer mock definido antes.

**Solução**: Adicionar `pathname` como segundo parâmetro do helper com valor padrão `'/'`:
```js
function renderSidebar(props = {}, pathname = '/') {
  usePathname.mockReturnValue(pathname)
  ...
}
// Uso:
renderSidebar({}, '/modulo1')
```

---

## 7. Como Executar

```bash
# Rodar todos os testes uma vez
npm test

# Modo watch (re-executa ao salvar arquivos)
npm run test:watch

# Com relatório de cobertura
npm run test:coverage
```

### Resultado esperado

```
PASS src/components/__tests__/HeroBento.test.jsx
PASS src/components/__tests__/Navbar.test.jsx
PASS src/components/__tests__/Sidebar.test.jsx

Test Suites: 3 passed, 3 total
Tests:       46 passed, 46 total
```

---

## 8. Estrutura de Arquivos

```
formacoes_bei/
├── jest.config.js                          # Configuração do Jest com next/jest
├── jest.setup.js                           # Import do jest-dom (matchers)
└── src/
    └── components/
        └── __tests__/
            ├── HeroBento.test.jsx          # 14 testes
            ├── Navbar.test.jsx             # 16 testes
            └── Sidebar.test.jsx            # 16 testes
```

---

## 9. Próximos Passos (opcional)

Se quiser expandir a cobertura de testes:

1. **Testes E2E com Playwright**: navegar entre páginas, verificar scroll suave, testar o quiz de encerramento — o que o usuário real faz.
2. **Testar o `SidebarContext`**: verificar que `markAsViewed` adiciona IDs ao Set e que `isViewed` retorna `true` após isso.
3. **Snapshot tests**: capturar a estrutura HTML de componentes estáticos para detectar mudanças acidentais de markup.
4. **Cobertura de código**: rodar `npm run test:coverage` para identificar branches não testados.
