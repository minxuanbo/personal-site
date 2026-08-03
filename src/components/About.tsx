import { type ReactNode, useRef } from 'react'
import { useInView } from 'framer-motion'
import { Gamepad2, Globe, Code2, Database } from 'lucide-react'
import ProfileCard from './ProfileCard'

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
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

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '140px 0',
        background: '#030305',
        borderTop: '1px solid rgba(255,255,255,0.03)',
      }}
    >
      <div className="container">
        <FadeIn>
          <div className="mono" style={{ fontSize: 12, color: '#475569', letterSpacing: '0.15em', marginBottom: 16 }}>
            01 / 关于我
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
          <FadeIn delay={0.1}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ProfileCard
                name="闵煊博"
                title="软件工程本科生"
                handle="minxuanbo"
                status="Available"
                contactText="联系我"
                showUserInfo={true}
                enableTilt={true}
                behindGlowEnabled
                innerGradient="linear-gradient(145deg,#1e293b8c 0%,#3b82f644 100%)"
                behindGlowColor="rgba(59, 130, 246, 0.5)"
                onContactClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
            </div>
          </FadeIn>

          <div>
            <FadeIn delay={0.15}>
              <h2
                style={{
                  fontSize: 'clamp(28px, 3vw, 38px)',
                  fontWeight: 500,
                  color: '#e2e8f0',
                  lineHeight: 1.25,
                  marginBottom: 28,
                  letterSpacing: '-0.02em',
                }}
              >
                软件工程本科生，
                <br />
                全栈开发者与游戏创作者。
              </h2>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: '#64748b', marginBottom: 20 }}>
                在校期间系统学习软件工程核心课程，通过项目实践与实习积累了扎实的编程开发能力和软件项目经验，熟悉软件开发流程与行业技术栈。具备优秀的团队协作与跨部门沟通能力，对技术研发充满热情，始终保持对前沿技术的学习热情与探索精神。
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 1,
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 6,
                  overflow: 'hidden',
                  marginTop: 40,
                }}
              >
                {[
                  { icon: <Code2 size={18} />, label: '技术栈', value: 'Java / React / Unity' },
                  { icon: <Database size={18} />, label: '项目经验', value: '2 个完整项目' },
                  { icon: <Globe size={18} />, label: '语言能力', value: 'CET-6 550' },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: '28px 24px',
                      background: '#08080c',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                    }}
                  >
                    <div style={{ color: '#475569' }}>{item.icon}</div>
                    <div className="mono" style={{ fontSize: 11, color: '#475569', letterSpacing: '0.08em' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 14, color: '#e2e8f0', fontWeight: 500 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.35}>
              <div style={{ marginTop: 48 }}>
                <div className="mono" style={{ fontSize: 11, color: '#475569', letterSpacing: '0.1em', marginBottom: 20 }}>
                  项目经历
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    {
                      icon: <Gamepad2 size={16} />,
                      title: '《真爱降临》2D 横版卷轴冒险游戏',
                      tags: ['Unity', 'C#', '独立开发'],
                      desc: '独立开发横版闯关冒险小游戏，包含角色移动、跳跃攻击、怪物 AI、关卡切换、生命值道具系统完整游戏逻辑。',
                    },
                    {
                      icon: <Globe size={16} />,
                      title: '智能校园自习室管理平台',
                      tags: ['Spring Boot', 'React', 'PostgreSQL'],
                      desc: '面向高校师生的自习室预约管理一体化 Web 平台，实现空位查询、在线预约、超时释放、管理员后台管理等核心功能。',
                    },
                  ].map((proj, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '24px',
                        background: 'rgba(255,255,255,0.015)',
                        border: '1px solid rgba(255,255,255,0.04)',
                        borderRadius: 6,
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                        e.currentTarget.style.background = 'rgba(255,255,255,0.015)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <div style={{ color: '#475569' }}>{proj.icon}</div>
                        <div style={{ fontSize: 14, fontWeight: 500, color: '#e2e8f0' }}>{proj.title}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
                        {proj.tags.map((tag) => (
                          <span
                            key={tag}
                            className="mono"
                            style={{
                              fontSize: 10,
                              color: '#64748b',
                              padding: '3px 8px',
                              borderRadius: 3,
                              border: '1px solid rgba(255,255,255,0.06)',
                              letterSpacing: '0.04em',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div style={{ fontSize: 13, lineHeight: 1.7, color: '#64748b' }}>{proj.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
