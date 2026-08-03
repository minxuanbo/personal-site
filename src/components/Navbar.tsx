import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '经历', href: '#about' },
  { label: '优势', href: '#skills' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 72,
        display: 'flex',
        alignItems: 'center',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : '1px solid transparent',
        background: scrolled ? 'rgba(3,3,5,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a
          href="#hero"
          className="mono"
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: '#e2e8f0',
            letterSpacing: '0.08em',
            textDecoration: 'none',
          }}
        >
          MIN.XUANBO
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 13,
                color: '#64748b',
                textDecoration: 'none',
                letterSpacing: '0.04em',
                transition: 'color 0.25s ease',
                position: 'relative',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#e2e8f0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontSize: 13,
              color: '#030305',
              background: '#e2e8f0',
              padding: '8px 18px',
              borderRadius: 4,
              textDecoration: 'none',
              fontWeight: 500,
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#94a3b8'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#e2e8f0'
            }}
          >
            联系我
          </a>
        </div>

        <button
          className="nav-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', color: '#e2e8f0', cursor: 'pointer', display: 'none' }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="nav-mobile"
          style={{
            position: 'absolute',
            top: 72,
            left: 0,
            right: 0,
            background: 'rgba(3,3,5,0.96)',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 14, color: '#94a3b8', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
