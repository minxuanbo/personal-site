import backgroundImg from '../assets/background.jpg'
import portraitImg from '../assets/portrait.png'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100dvh',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Background image — full-bleed */}
      <img
        src={backgroundImg}
        alt=""
        className="anim-fade-in"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Marquee name — above background, below portrait */}
      <div
        className="anim-fade-up"
        style={{
          position: 'absolute',
          top: 'clamp(18vh, 22vh, 26vh)',
          left: 0,
          right: 0,
          zIndex: 10,
          overflow: 'hidden',
          animationDelay: '500ms',
        }}
      >
        <div
          className="marquee"
          style={{
            display: 'flex',
            width: 'max-content',
            whiteSpace: 'nowrap',
            fontSize: 'clamp(14vh, 18vh, 28vh)',
            lineHeight: 1,
            color: '#0a0a0a',
            fontFamily: "'Helvetica Neue ME', Helvetica, Arial, sans-serif",
            fontWeight: 700,
            animation: 'marquee 30s linear infinite',
          }}
        >
          <span style={{ paddingRight: '6vw' }}>Min Xuanbo&nbsp;</span>
          <span style={{ paddingRight: '6vw' }}>Min Xuanbo&nbsp;</span>
          <span style={{ paddingRight: '6vw' }}>Min Xuanbo&nbsp;</span>
          <span style={{ paddingRight: '6vw' }}>Min Xuanbo&nbsp;</span>
        </div>
      </div>

      {/* Front portrait — cutout over marquee, centered */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          bottom: 0,
          height: '88%',
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <img
          src={portraitImg}
          alt="Portrait"
          className="anim-rise-in"
          style={{
            height: '100%',
            display: 'block',
          }}
        />
      </div>

      {/* Subtitle */}
      <div
        className="anim-fade-up"
        style={{
          position: 'absolute',
          bottom: 'clamp(80px, 12vh, 120px)',
          left: 'clamp(24px, 5vw, 80px)',
          zIndex: 10,
          animationDelay: '700ms',
        }}
      >
        <p style={{
          fontSize: 'clamp(15px, 2vw, 18px)',
          color: 'rgba(10,10,10,0.55)',
          letterSpacing: '0.04em',
          lineHeight: 1.6,
          maxWidth: 560,
        }}>
          Xiamen University &middot; Software Engineering
        </p>
      </div>

      {/* Cream rule */}
      <div
        className="anim-line"
        style={{
          position: 'absolute',
          left: 'clamp(24px, 5vw, 80px)',
          right: 'clamp(24px, 5vw, 80px)',
          bottom: 'clamp(56px, 8vh, 88px)',
          height: 1,
          background: '#0a0a0a',
          zIndex: 10,
          opacity: 0.25,
        }}
      />

      {/* Footer blurb */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(16px, 3vh, 32px)',
          left: 'clamp(24px, 5vw, 80px)',
          right: 'clamp(24px, 5vw, 80px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: 'clamp(11px, 1.4vw, 13px)',
          lineHeight: 1.7,
          color: 'rgba(10,10,10,0.45)',
          zIndex: 10,
        }}
      >
        <div className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
          <p>Software Engineering</p>
          <p>Undergraduate</p>
        </div>
        <div className="anim-fade-up" style={{ animationDelay: '1550ms', textAlign: 'right' }}>
          <p>Xiamen University</p>
        </div>
      </div>
    </section>
  );
}
