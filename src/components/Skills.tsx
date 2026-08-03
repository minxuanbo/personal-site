import { type ReactNode, useRef } from 'react'
import { useInView } from 'framer-motion'
import {
  Layers,
  Terminal,
  Users,
  Lightbulb,
  Cpu,
  GitBranch,
} from 'lucide-react'

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number; key?: string | number }) {
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

const skills = [
  {
    icon: <Terminal size={22} />,
    title: '全栈开发',
    desc: '熟练运用 Java / Spring Boot 搭建后端服务，配合 React 与现代化前端工具链完成完整产品交付。',
  },
  {
    icon: <Layers size={22} />,
    title: '软件工程素养',
    desc: '系统掌握软件工程核心课程，熟悉需求分析、架构设计、测试验证与持续交付的完整开发流程。',
  },
  {
    icon: <Cpu size={22} />,
    title: '游戏开发',
    desc: '使用 Unity 引擎与 C# 独立开发 2D 游戏，掌握动画状态机、碰撞体系统与 AI 行为树。',
  },
  {
    icon: <GitBranch size={22} />,
    title: '数据库设计',
    desc: '能够设计合理的关系型数据库结构，编写高效 SQL，使用索引与联表查询优化数据访问性能。',
  },
  {
    icon: <Users size={22} />,
    title: '团队协作',
    desc: '具备优秀的跨部门沟通能力，在代码协作、需求评审与迭代推进中推动团队高效运转。',
  },
  {
    icon: <Lightbulb size={22} />,
    title: '持续学习',
    desc: '对前沿技术保持敏锐度，自我要求严格，在工作中严谨细致、责任心强，追求工程卓越。',
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        padding: '140px 0',
        background: '#08080c',
        borderTop: '1px solid rgba(255,255,255,0.03)',
      }}
    >
      <div className="container">
        <FadeIn>
          <div className="mono" style={{ fontSize: 12, color: '#475569', letterSpacing: '0.15em', marginBottom: 16 }}>
            02 / 个人优势
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3vw, 38px)',
              fontWeight: 500,
              color: '#e2e8f0',
              lineHeight: 1.25,
              marginBottom: 64,
              letterSpacing: '-0.02em',
              maxWidth: 600,
            }}
          >
            扎实的技术栈，
            <br />
            与对工程细节的执着。
          </h2>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {skills.map((skill, i) => (
            <FadeIn key={skill.title} delay={0.1 + i * 0.06}>
              <div
                style={{
                  padding: '36px 32px',
                  background: 'rgba(255,255,255,0.015)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  borderRadius: 6,
                  height: '100%',
                  transition: 'all 0.35s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.015)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ color: '#475569', marginBottom: 20 }}>{skill.icon}</div>
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: '#e2e8f0',
                    marginBottom: 12,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {skill.title}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: '#64748b' }}>{skill.desc}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
