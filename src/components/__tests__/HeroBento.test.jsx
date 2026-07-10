import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeroBento from '../HeroBento'

// next/image e next/link são auto-mockados pelo next/jest
// next/image renderiza como <img>, next/link renderiza como <a>

const defaultProps = {
  title: 'Formação BEĨ',
  subtitle: 'Uma descrição do curso',
  tag: 'Módulo 4',
  tagLabel: 'BEĨ Educação',
  statNumber: '42',
  statLabel: 'Educadores',
  buttonHref: '#content',
}

describe('HeroBento', () => {
  // ── Renderização básica ──────────────────────────────────────────────────

  it('renderiza o título via prop', () => {
    render(<HeroBento {...defaultProps} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Formação BEĨ')
  })

  it('renderiza a tag quando a prop tag é fornecida', () => {
    render(<HeroBento {...defaultProps} />)
    expect(screen.getByText('Módulo 4')).toBeInTheDocument()
  })

  it('não renderiza a tag quando a prop tag não é fornecida', () => {
    render(<HeroBento {...defaultProps} tag={undefined} />)
    expect(screen.queryByText('Módulo 4')).not.toBeInTheDocument()
  })

  it('renderiza o subtítulo quando a prop subtitle é fornecida', () => {
    render(<HeroBento {...defaultProps} />)
    expect(screen.getByText('Uma descrição do curso')).toBeInTheDocument()
  })

  it('exibe texto alternativo quando subtitle não é fornecido', () => {
    render(<HeroBento {...defaultProps} subtitle={undefined} />)
    expect(screen.getByText('Formação de educadores BEĨ')).toBeInTheDocument()
  })

  // ── Stat box ─────────────────────────────────────────────────────────────

  it('renderiza statNumber e statLabel', () => {
    render(<HeroBento {...defaultProps} />)
    expect(screen.getByText('42')).toBeInTheDocument()
    expect(screen.getByText('Educadores')).toBeInTheDocument()
  })

  it('renderiza travessão (—) quando statNumber não é fornecido', () => {
    render(<HeroBento {...defaultProps} statNumber={undefined} />)
    expect(screen.getByText('—')).toBeInTheDocument()
  })

  // ── CTA ──────────────────────────────────────────────────────────────────

  it('renderiza um link com href correto quando buttonText é fornecido', () => {
    render(<HeroBento {...defaultProps} buttonText="Ir para módulo" buttonHref="/modulo1" />)
    const link = screen.getByRole('link', { name: 'Ir para módulo' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/modulo1')
  })

  it('renderiza botão de scroll "Ver conteúdo" quando buttonText não é fornecido', () => {
    render(<HeroBento {...defaultProps} />)
    expect(screen.getByRole('button', { name: /ver conteúdo/i })).toBeInTheDocument()
  })

  it('chama scrollIntoView ao clicar em "Ver conteúdo"', async () => {
    const user = userEvent.setup()
    const mockScroll = jest.fn()
    document.querySelector = jest.fn(() => ({ scrollIntoView: mockScroll }))

    render(<HeroBento {...defaultProps} />)
    await user.click(screen.getByRole('button', { name: /ver conteúdo/i }))
    expect(mockScroll).toHaveBeenCalledWith({ behavior: 'smooth' })
  })

  // ── Animação de entrada ───────────────────────────────────────────────────

  it('aplica opacity-100 após montagem do componente (animação isLoaded)', async () => {
    const { container } = render(<HeroBento {...defaultProps} />)
    await waitFor(() => {
      expect(container.querySelector('.opacity-100')).toBeInTheDocument()
    })
  })

  // ── Links sociais ─────────────────────────────────────────────────────────

  it('renderiza os links de Instagram, YouTube e Website', () => {
    render(<HeroBento {...defaultProps} />)
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /website/i })).toBeInTheDocument()
  })

  it('os links sociais abrem em nova aba (target="_blank")', () => {
    render(<HeroBento {...defaultProps} />)
    const instagram = screen.getByRole('link', { name: /instagram/i })
    expect(instagram).toHaveAttribute('target', '_blank')
    expect(instagram).toHaveAttribute('rel', 'noopener noreferrer')
  })

  // ── Imagem ────────────────────────────────────────────────────────────────

  it('renderiza a imagem trio com alt correto', () => {
    render(<HeroBento {...defaultProps} />)
    expect(screen.getByAltText('Trio')).toBeInTheDocument()
  })
})
