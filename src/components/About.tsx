import styles from './About.module.css'

const STACK = [
  'React', 'Next.js', 'TypeScript', 'Vite',
  'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Figma',
  'Shopify', 'Sanity', 'Vercel', 'AWS',
]

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className="section-label">About me</span>
          <h2 className="section-title">Built by one.<br />Crafted with care.</h2>
          <p className={styles.body}>
            I'm Michelle — a full-stack developer with five years of professional
            experience and a genuine obsession with getting the details right.
            Spun Pages is my solo studio, and that's entirely by design. When you
            hire me, you work directly with the person writing your code, making
            your design decisions, and sweating every margin and millisecond.
          </p>
          <p className={styles.body}>
            As a woman in tech, I've built my career on precision and craft — two
            things I refuse to treat as optional. Every project I take on gets my
            full attention, delivered on time, with code I'd be proud to maintain
            for years to come. No shortcuts, no handoffs to someone you haven't met.
          </p>
          <p className={styles.body}>
            If you believe the gap between a good website and a great one lives in
            the details, we'll get along just fine.
          </p>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.stackBox}>
            <p className={styles.stackLabel}>My stack</p>
            <div className={styles.tags}>
              {STACK.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
