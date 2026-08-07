import { useRef } from 'react';
import VariableProximity from './VariableProximity';
import LogoLoop from './LogoLoop';
import { SiPython, SiCplusplus, SiTypescript, SiJavascript, SiReact, SiPytorch, SiNodedotjs, SiGit, SiDocker } from 'react-icons/si';

const techLogos = [
  { node: <SiPython />, title: 'Python' },
  { node: <SiCplusplus />, title: 'C++' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiJavascript />, title: 'JavaScript' },
  { node: <SiReact />, title: 'React' },
  { node: <SiPytorch />, title: 'PyTorch' },
  { node: <SiNodedotjs />, title: 'Node.js' },
  { node: <SiGit />, title: 'Git' },
  { node: <SiDocker />, title: 'Docker' },
];

const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'C/C++', 'TypeScript', 'JavaScript', 'Java'],
  },
  {
    label: 'Frameworks & Tools',
    items: ['React', 'PyTorch', 'TensorFlow', 'Node.js', 'Git', 'Docker'],
  },
  {
    label: 'Areas',
    items: ['Machine Learning', 'Computer Vision', 'Web Development', 'Data Structures'],
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="skills"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(60px, 10vh, 120px) clamp(24px, 5vw, 80px)',
        borderTop: '1px solid rgba(10,10,10,0.08)',
      }}
    >
      {/* Section label */}
      <p style={{
        fontSize: 11,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'rgba(10,10,10,0.35)',
        marginBottom: 'clamp(32px, 6vh, 64px)',
      }}>
        Skills
      </p>

      <div
        ref={containerRef}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 'clamp(40px, 6vw, 64px)',
          position: 'relative',
        }}
      >
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p style={{
              fontSize: 12,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,10,0.4)',
              marginBottom: 20,
            }}>
              {group.label}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {group.items.map((skill) => (
                <span
                  key={skill}
                  style={{
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                    color: '#0a0a0a',
                    lineHeight: 1.6,
                  }}
                >
                  <VariableProximity
                    label={skill}
                    fromFontVariationSettings="'wght' 400, 'opsz' 18"
                    toFontVariationSettings="'wght' 900, 'opsz' 36"
                    containerRef={containerRef}
                    radius={120}
                    falloff="gaussian"
                  />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* LogoLoop at bottom */}
      <div style={{ height: '80px', position: 'relative', overflow: 'hidden', marginTop: 'clamp(48px, 8vh, 80px)' }}>
        <LogoLoop
          logos={techLogos}
          speed={60}
          direction="left"
          logoHeight={36}
          gap={48}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#efeee9"
          ariaLabel="Technology logos"
        />
      </div>
    </section>
  );
}
