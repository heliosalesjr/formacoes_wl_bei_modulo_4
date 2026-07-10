import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Sidebar from '../Sidebar'
import { SidebarProvider } from '@/contexts/SidebarContext'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}))

import { usePathname, useRouter } from 'next/navigation'

// Helper: renderiza a Sidebar dentro do seu provider de contexto
function renderSidebar(props = {}, pathname = '/') {
  const mockPush = jest.fn()
  useRouter.mockReturnValue({
    push: mockPush,
    replace: jest.fn(),
    back: jest.fn(),
    refresh: jest.fn(),
    prefetch: jest.fn(),
  })
  usePathname.mockReturnValue(pathname)

  const result = render(
    <SidebarProvider>
      <Sidebar {...props} />
    </SidebarProvider>
  )
  return { ...result, mockPush }
}

describe('Sidebar', () => {
  beforeEach(() => {
    usePathname.mockReturnValue('/')
  })

  // ── Estado inicial ────────────────────────────────────────────────────────

  it('renderiza o botão de toggle com aria-label "Abrir menu"', () => {
    renderSidebar()
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toBeInTheDocument()
  })

  it('inicia fechada (painel fora da tela com -translate-x-full)', () => {
    const { container } = renderSidebar()
    expect(container.querySelector('.-translate-x-full')).toBeInTheDocument()
  })

  // ── Abrir / Fechar ────────────────────────────────────────────────────────

  it('abre a sidebar ao clicar no toggle', async () => {
    const user = userEvent.setup()
    const { container } = renderSidebar()
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    expect(container.querySelector('.translate-x-0')).toBeInTheDocument()
  })

  it('muda aria-label do toggle para "Fechar menu" ao abrir', async () => {
    const user = userEvent.setup()
    renderSidebar()
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toBeInTheDocument()
  })

  it('renderiza o overlay (bg-black/40) quando aberta', async () => {
    const user = userEvent.setup()
    const { container } = renderSidebar()
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    // Tailwind escapa a barra, então buscamos pela classe parcial
    const overlay = container.querySelector('[class*="bg-black"]')
    expect(overlay).toBeInTheDocument()
  })

  it('fecha ao clicar no overlay', async () => {
    const user = userEvent.setup()
    const { container } = renderSidebar()
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    const overlay = container.querySelector('[class*="bg-black"]')
    await user.click(overlay)
    expect(container.querySelector('.-translate-x-full')).toBeInTheDocument()
  })

  // ── Navegação ─────────────────────────────────────────────────────────────

  it('renderiza os botões de seção (Módulo 4, Métodos Avaliativos, Encerramento...)', async () => {
    const user = userEvent.setup()
    renderSidebar()
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    expect(screen.getByRole('button', { name: 'Módulo 4' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Métodos Avaliativos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Encerramento' })).toBeInTheDocument()
  })

  it('aplica text-blue-600 à seção que corresponde ao pathname atual', async () => {
    const user = userEvent.setup()
    renderSidebar({}, '/metodosavaliativos')
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    const matrizBtn = screen.getByRole('button', { name: 'Métodos Avaliativos' })
    expect(matrizBtn.className).toContain('text-blue-600')
  })

  it('chama router.push ao clicar em seção de página diferente', async () => {
    const user = userEvent.setup()
    const { mockPush } = renderSidebar()
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    await user.click(screen.getByRole('button', { name: 'Métodos Avaliativos' }))
    expect(mockPush).toHaveBeenCalledWith('/metodosavaliativos')
  })

  // ── Props controladas ─────────────────────────────────────────────────────

  it('abre a sidebar quando forceOpen=true é passado', () => {
    const { container } = renderSidebar({ forceOpen: true })
    expect(container.querySelector('.translate-x-0')).toBeInTheDocument()
  })

  it('chama onToggle com o novo estado ao abrir', async () => {
    const user = userEvent.setup()
    const mockOnToggle = jest.fn()
    renderSidebar({ onToggle: mockOnToggle })
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    expect(mockOnToggle).toHaveBeenCalledWith(true)
  })

  it('chama onToggle com false ao fechar', async () => {
    const user = userEvent.setup()
    const mockOnToggle = jest.fn()
    renderSidebar({ onToggle: mockOnToggle })
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    await user.click(screen.getByRole('button', { name: 'Fechar menu' }))
    expect(mockOnToggle).toHaveBeenLastCalledWith(false)
  })

  // ── Footer ────────────────────────────────────────────────────────────────

  it('renderiza o texto de rodapé "BEĨ Educação © 2026"', async () => {
    const user = userEvent.setup()
    renderSidebar()
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    expect(screen.getByText(/BEĨ Educação © 2026/)).toBeInTheDocument()
  })
})
