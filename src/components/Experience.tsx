import DriftWall from './DriftWall';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: '—',
    period: '—',
    description: 'Describe your internship experience here. What did you build? What technologies did you use? What impact did you make?',
  },
  {
    role: 'Research Assistant',
    company: '—',
    period: '—',
    description: 'Describe your research assistant experience. What projects did you work on? What were the outcomes?',
  },
];

const wallItems = [
  { image: 'https://picsum.photos/id/0/600/400', title: '' },
  { image: 'https://picsum.photos/id/1/600/400', title: '' },
  { image: 'https://picsum.photos/id/20/600/400', title: '' },
  { image: 'https://picsum.photos/id/26/600/400', title: '' },
  { image: 'https://picsum.photos/id/48/600/400', title: '' },
  { image: 'https://picsum.photos/id/60/600/400', title: '' },
  { image: 'https://picsum.photos/id/96/600/400', title: '' },
  { image: 'https://picsum.photos/id/160/600/400', title: '' },
  { image: 'https://picsum.photos/id/180/600/400', title: '' },
  { image: 'https://picsum.photos/id/201/600/400', title: '' },
  { image: 'https://picsum.photos/id/250/600/400', title: '' },
  { image: 'https://picsum.photos/id/366/600/400', title: '' },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
        Experience
      </p>

      {/* Two-column layout */}
      <div className="exp-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 'clamp(40px, 6vw, 80px)',
        alignItems: 'center',
      }}>
        {/* Left: text content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(48px, 8vh, 80px)',
        }}>
          {experiences.map((exp, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px 40px',
                paddingBottom: 'clamp(40px, 6vh, 64px)',
                borderBottom: i < experiences.length - 1 ? '1px solid rgba(10,10,10,0.08)' : 'none',
              }}
            >
              <div>
                <h3 style={{
                  fontSize: 'clamp(22px, 3.5vw, 32px)',
                  fontWeight: 700,
                  color: '#0a0a0a',
                  letterSpacing: '-0.02em',
                  marginBottom: 4,
                }}>
                  {exp.role}
                </h3>
                <p style={{
                  fontSize: 'clamp(13px, 1.6vw, 15px)',
                  color: 'rgba(10,10,10,0.45)',
                }}>
                  {exp.company} &middot; {exp.period}
                </p>
              </div>
              <p style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                lineHeight: 1.7,
                color: 'rgba(10,10,10,0.6)',
                maxWidth: 640,
              }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right: DriftWall (desktop only on larger screens) */}
        <div className="exp-driftwall" style={{ height: 'clamp(450px, 70vh, 650px)' }}>
          <DriftWall
            items={wallItems}
            columns={4}
            tileWidth={170}
            tileHeight={112}
            gap={14}
            radius={12}
            tilt={14}
            turn={-10}
            perspective={1100}
            depth={100}
            speed={32}
            direction="up"
            variance={0.4}
            parallax={0.5}
            lift={48}
            fade={0.5}
            dim={0.5}
            grayscale
            overlayColor="#dedcd7"
          />
        </div>
      </div>
    </section>
  );
}
