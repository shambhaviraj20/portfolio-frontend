import './Marquee.css';

/**
 * items: string[]
 * reverse: bool
 * speed: 'normal' | 'slow'
 * className: string
 */
export default function Marquee({ items, reverse = false, speed = 'normal', className = '' }) {
  // Double items so the loop is seamless
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className={`marquee-wrapper ${className}`}>
      <div
        className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''} ${speed === 'slow' ? 'marquee-track--slow' : ''}`}
      >
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
