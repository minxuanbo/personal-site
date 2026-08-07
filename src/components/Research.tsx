import DomeGallery from './DomeGallery';

const researches = [
  {
    title: 'Research Project Title',
    lab: '—',
    period: '—',
    description: 'Describe your research project here. What was the research question? What methodology did you use? What were the key findings or contributions?',
  },
  {
    title: 'Research Project Title',
    lab: '—',
    period: '—',
    description: 'Describe another research project. Mention any publications, conferences, or presentations.',
  },
];

export default function Research() {
  return (
    <section
      id="research"
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
        Research
      </p>

      <div
        className="research-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 6vw, 80px)',
          alignItems: 'start',
        }}
      >
        {/* Left: Research items */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(32px, 5vh, 56px)',
        }}>
          {researches.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '16px 40px',
                paddingBottom: 'clamp(24px, 3vh, 40px)',
                borderBottom: i < researches.length - 1 ? '1px solid rgba(10,10,10,0.08)' : 'none',
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
                  {r.title}
                </h3>
                <p style={{
                  fontSize: 'clamp(13px, 1.6vw, 15px)',
                  color: 'rgba(10,10,10,0.45)',
                }}>
                  {r.lab} &middot; {r.period}
                </p>
              </div>
              <p style={{
                fontSize: 'clamp(14px, 1.8vw, 16px)',
                lineHeight: 1.7,
                color: 'rgba(10,10,10,0.6)',
                maxWidth: 640,
              }}>
                {r.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right: DomeGallery */}
        <div style={{
          position: 'sticky',
          top: 'clamp(20px, 4vh, 60px)',
          width: '100%',
          height: 'clamp(320px, 45vw, 560px)',
          overflow: 'hidden',
          borderRadius: '24px',
        }}>
          <DomeGallery
            overlayBlurColor="#efeee9"
            grayscale={false}
            imageBorderRadius="12px"
            openedImageBorderRadius="16px"
            maxVerticalRotationDeg={3}
          />
        </div>
      </div>
    </section>
  );
}
