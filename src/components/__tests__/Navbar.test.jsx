import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Navbar from '../Navbar'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

import { usePathname } from 'next/navigation'

describe('Navbar', () => {
  beforeEach(() => {
    usePathname.mockReturnValue('/')
    localStorage.clear()
    document.documentElement.classList.remove('dark')
  })

  // ── Renderização básica ───────────────────────────────────────────────────

  it('renderiza a logo da BEĨ Educação', () => {
    render(<Navbar />)
    expect(screen.getByAltText('BEĨ Educação')).toBeInTheDocument()
  })

  it('usa logo do light mode por padrão (sem tema salvo)', () => {
    render(<Navbar />)
    expect(screen.getByAltText('BEĨ Educação').getAttribute('src')).toContain('logo-blue.png')
  })

  it('usa logo do dark mode quando tema "dark" está no localStorage', () => {
    localStorage.setItem('theme', 'dark')
    render(<Navbar />)
    expect(screen.getByAltText('BEĨ Educação').getAttribute('src')).toContain('logo_white.png')
  })

  // ── Toggle dark mode ──────────────────────────────────────────────────────

  it('renderiza o botão de dark mode com aria-label "Modo escuro" no light mode', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Modo escuro' })).toBeInTheDocument()
  })

  it('alterna aria-label para "Modo claro" após clicar no toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Modo escuro' }))
    expect(screen.getByRole('button', { name: 'Modo claro' })).toBeInTheDocument()
  })

  it('adiciona classe "dark" ao <html> ao ativar dark mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Modo escuro' }))
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('remove classe "dark" do <html> ao voltar para light mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Modo escuro' }))
    await user.click(screen.getByRole('button', { name: 'Modo claro' }))
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('salva "dark" no localStorage ao ativar dark mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Modo escuro' }))
    expect(localStorage.getItem('theme')).toBe('dark')
  })

  it('salva "light" no localStorage ao voltar para light mode', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Modo escuro' }))
    await user.click(screen.getByRole('button', { name: 'Modo claro' }))
    expect(localStorage.getItem('theme')).toBe('light')
  })

  it('inicializa em dark mode se localStorage contém "dark"', () => {
    localStorage.setItem('theme', 'dark')
    render(<Navbar />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  // ── Menu mobile ───────────────────────────────────────────────────────────

  it('renderiza o botão hamburger com aria-label "Abrir menu"', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toBeInTheDocument()
  })

  it('exibe aria-label "Fechar menu" após abrir o menu mobile', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toBeInTheDocument()
  })

  it('exibe links de navegação no dropdown mobile ao abrir', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Abrir menu' }))
    // O dropdown mobile renderiza os nomes completos
    const links = screen.getAllByText('Módulo 4')
    expect(links.length).toBeGreaterThanOrEqual(1)
  })

  // ── Link ativo ────────────────────────────────────────────────────────────

  it('aplica text-blue-700 ao link que corresponde ao pathname atual', () => {
    usePathname.mockReturnValue('/metodosavaliativos')
    render(<Navbar />)
    // Múltiplos navs (desktop/tablet) — todos os links ativos devem ter a classe
    const activeLinks = screen.getAllByRole('link', { name: 'Métodos Avaliativos' })
    activeLinks.forEach(link => expect(link.className).toContain('text-blue-700'))
  })

  // ── Scroll ────────────────────────────────────────────────────────────────

  it('adiciona backdrop-blur-md após scroll além de 20px', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(document.querySelector('.backdrop-blur-md')).toBeInTheDocument()
  })

  it('remove backdrop-blur-md ao voltar ao topo (scrollY ≤ 20)', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 50, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 0, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(document.querySelector('.backdrop-blur-md')).not.toBeInTheDocument()
  })
})
