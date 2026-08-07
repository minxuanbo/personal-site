const contactItems = [
  {
    label: 'Email',
    value: 'mxb9127@gmail.com',
    href: null,
  },
  {
    label: 'QQ',
    value: '2105132558',
    href: null,
  },
  {
    label: 'WeChat',
    value: 'Mxb050924',
    href: null,
  },
  {
    label: 'GitHub',
    value: 'github.com/minxuanbo',
    href: 'https://github.com/minxuanbo',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
        Contact
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(20px, 3vh, 32px)',
      }}>
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 48px)',
          fontWeight: 700,
          color: '#0a0a0a',
          letterSpacing: '-0.03em',
          lineHeight: 1.1,
          maxWidth: 700,
        }}>
          Let&rsquo;s work together.
        </h2>
        <p style={{
          fontSize: 'clamp(14px, 1.8vw, 17px)',
          color: 'rgba(10,10,10,0.5)',
          lineHeight: 1.7,
          maxWidth: 500,
        }}>
          Always open to new opportunities, collaborations, and interesting conversations.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(20px, 3vh, 28px)',
          marginTop: 'clamp(16px, 3vh, 32px)',
        }}>
          {contactItems.map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 'clamp(20px, 4vw, 48px)',
                paddingBottom: 'clamp(16px, 2.5vh, 24px)',
                borderBottom: '1px solid rgba(10,10,10,0.08)',
              }}
            >
              <span style={{
                fontSize: 11,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(10,10,10,0.35)',
                minWidth: 72,
              }}>
                {item.label}
              </span>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#0a0a0a',
                    fontSize: 'clamp(16px, 2.2vw, 22px)',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'opacity 300ms',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.5')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  {item.value}
                </a>
              ) : (
                <span style={{
                  color: '#0a0a0a',
                  fontSize: 'clamp(16px, 2.2vw, 22px)',
                  fontWeight: 500,
                }}>
                  {item.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
