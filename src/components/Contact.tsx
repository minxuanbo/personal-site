import { type ReactNode, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 0',
        background: '#030305',
        borderTop: '1px solid rgba(255,255,255,0.03)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 70% 30%, rgba(30,41,59,0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: 900 }}>
          <FadeIn>
            <div className="mono" style={{ fontSize: 12, color: '#475569', letterSpacing: '0.15em', marginBottom: 16 }}>
              03 / 联系方式
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 500,
                color: '#e2e8f0',
                lineHeight: 1.12,
                letterSpacing: '-0.03em',
                marginBottom: 24,
              }}
            >
              期待与你交流。
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p style={{ fontSize: 16, lineHeight: 1.75, color: '#64748b', maxWidth: 520, marginBottom: 60 }}>
              无论是项目合作、技术探讨还是职业机会，欢迎随时联系我。我会尽快回复你的消息。
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 80 }}>
              {[
                {
                  icon: <Mail size={18} />,
                  label: '邮箱',
                  value: '2105132558@qq.com',
                  href: 'mailto:2105132558@qq.com',
                },
                {
                  icon: <Phone size={18} />,
                  label: '电话',
                  value: '189-2138-2369',
                  href: 'tel:18921382369',
                },
                {
                  icon: <MapPin size={18} />,
                  label: '所在地',
                  value: '福建省厦门市 · 厦门大学',
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    paddingBottom: 24,
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <div style={{ color: '#475569', width: 24 }}>{item.icon}</div>
                  <div style={{ minWidth: 56 }}>
                    <div className="mono" style={{ fontSize: 11, color: '#475569', letterSpacing: '0.08em' }}>
                      {item.label}
                    </div>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontSize: 16,
                        color: '#e2e8f0',
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        transition: 'color 0.25s ease',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#94a3b8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#e2e8f0')}
                    >
                      {item.value}
                      <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
                    </a>
                  ) : (
                    <div style={{ fontSize: 16, color: '#e2e8f0' }}>{item.value}</div>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 40,
                borderTop: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <div className="mono" style={{ fontSize: 12, color: '#334155', letterSpacing: '0.06em' }}>
                © 2026 闵煊博. All rights reserved.
              </div>
              <div className="mono" style={{ fontSize: 12, color: '#334155', letterSpacing: '0.06em' }}>
                DESIGNED WITH PRECISION
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
