import { useState, useEffect } from 'react';
import LineSidebar from './LineSidebar';

const navItems = ['About', 'Experience', 'Research', 'Skills', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const handleSidebarClick = (_index: number, label: string) => {
    scrollTo(label);
  };

  return (
    <>
      {/* Header */}
      <header
        className="anim-fade-up"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 30,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          padding: 'clamp(20px, 4vw, 32px) clamp(24px, 5vw, 40px)',
          animationDelay: '800ms',
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(239,238,233,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(10,10,10,0.08)' : '1px solid transparent',
        }}
      >
        {/* Brand */}
        <button
          onClick={() => scrollTo('about')}
          style={{
            background: 'none',
            border: 'none',
            color: '#0a0a0a',
            fontSize: 'clamp(16px, 2vw, 18px)',
            fontWeight: 700,
            letterSpacing: '0.02em',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Min Xuanbo
        </button>

        {/* Desktop: LineSidebar */}
        <div className="desktop-sidebar" style={{ display: 'flex' }}>
          <LineSidebar
            items={navItems}
            accentColor="#0a0a0a"
            textColor="rgba(10,10,10,0.55)"
            markerColor="rgba(10,10,10,0.15)"
            showIndex
            showMarker
            proximityRadius={80}
            maxShift={24}
            falloff="smooth"
            markerLength={48}
            markerGap={4}
            tickScale={0.5}
            scaleTick
            itemGap={16}
            fontSize={1.0}
            smoothing={120}
            defaultActive={null}
            onItemClick={handleSidebarClick}
            className="anim-fade-up"
          />
        </div>

        {/* Mobile: hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-hamburger anim-fade-up"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            width: 40,
            height: 40,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            zIndex: 50,
            position: 'relative',
            animationDelay: '900ms',
          }}
        >
          <span style={{
            display: 'block',
            width: 24,
            height: 1.5,
            background: '#0a0a0a',
            transition: 'all 500ms cubic-bezier(0.76, 0, 0.24, 1)',
            transform: mobileOpen ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
          }} />
          <span style={{
            display: 'block',
            width: 24,
            height: 1.5,
            background: '#0a0a0a',
            transition: 'opacity 300ms',
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block',
            width: 24,
            height: 1.5,
            background: '#0a0a0a',
            transition: 'all 500ms cubic-bezier(0.76, 0, 0.24, 1)',
            transform: mobileOpen ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
          }} />
        </button>
      </header>

      {/* Mobile drawer */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'rgba(239,238,233,0.6)',
          backdropFilter: 'blur(4px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'auto' : 'none',
          transition: 'opacity 500ms',
        }}
      />
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 40,
        width: '80%',
        maxWidth: 360,
        background: '#e5e4de',
        padding: 'clamp(32px, 5vw, 40px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 40,
        transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 600ms cubic-bezier(0.76, 0, 0.24, 1)',
      }}>
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'absolute',
            right: 24,
            top: 24,
            background: 'none',
            border: 'none',
            color: '#0a0a0a',
            fontSize: 22,
            cursor: 'pointer',
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'rotate(0deg)' : 'rotate(90deg)',
            transition: 'all 500ms 300ms',
            fontFamily: 'inherit',
          }}
        >
          &times;
        </button>

        {/* Site Index */}
        <div>
          <p style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(10,10,10,0.45)',
            marginBottom: 20,
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 500ms 250ms',
          }}>
            Site Index
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0a0a0a',
                  fontSize: 'clamp(28px, 5vw, 36px)',
                  fontWeight: 700,
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  opacity: mobileOpen ? 1 : 0,
                  transform: mobileOpen ? 'translateY(0)' : 'translateY(24px)',
                  transition: `all 500ms ${300 + i * 80}ms`,
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Find Me */}
        <div>
          <p style={{
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(10,10,10,0.45)',
            marginBottom: 16,
            opacity: mobileOpen ? 1 : 0,
            transform: mobileOpen ? 'translateY(0)' : 'translateY(8px)',
            transition: 'all 500ms 500ms',
          }}>
            Find Me
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 20px' }}>
            <a
              href="https://github.com/minxuanbo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0a0a0a',
                fontSize: 14,
                textDecoration: 'none',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(16px)',
                transition: 'all 500ms 550ms',
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
