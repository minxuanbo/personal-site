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

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: 'clamp(40px, 6vw, 64px)',
      }}>
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
                    fontSize: 'clamp(15px, 2vw, 18px)',
                    color: '#0a0a0a',
                    lineHeight: 1.6,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
