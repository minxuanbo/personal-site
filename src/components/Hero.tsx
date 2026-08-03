import { useEffect, useState } from 'react'
import ParticleCanvas from './ParticleCanvas'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 700,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#030305',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(30,41,59,0.15) 0%, transparent 70%)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <ParticleCanvas />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div className="mono" style={{ fontSize: 13, color: '#475569', letterSpacing: '0.12em', marginBottom: 24 }}>
            SOFTWARE ENGINEER · XMNU
          </div>
          <h1
            style={{
              fontSize: 'clamp(48px, 6vw, 88px)',
              fontWeight: 500,
              color: '#e2e8f0',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: 28,
              maxWidth: 900,
            }}
          >
            闵煊博
            <span style={{ display: 'block', fontSize: '0.45em', fontWeight: 400, color: '#475569', marginTop: 12, letterSpacing: '0.02em' }}>
              构建严谨、优雅的软件系统
            </span>
          </h1>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: '#64748b',
              maxWidth: 560,
              marginBottom: 40,
            }}
          >
            厦门大学软件工程本科在读。专注于全栈 Web 开发与游戏编程，
            热爱通过代码解决真实问题，追求工程上的精确与体验上的克制。
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 28px',
                background: '#e2e8f0',
                color: '#030305',
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 4,
                textDecoration: 'none',
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
            <a
              href="#about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 28px',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#94a3b8',
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 4,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
                e.currentTarget.style.color = '#e2e8f0'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.color = '#94a3b8'
              }}
            >
              了解更多
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          color: '#475569',
          animation: 'bounce 2s infinite',
        }}
      >
        <ArrowDown size={20} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
          40% { transform: translateX(-50%) translateY(-8px); }
          60% { transform: translateX(-50%) translateY(-4px); }
        }
      `}</style>
    </section>
  )
}
