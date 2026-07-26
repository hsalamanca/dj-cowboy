import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import './App.css'

const sets = [
  {
    title: 'Pressure Room 04',
    detail: 'Live at Warehouse District — Berlin',
    time: '72:18',
  },
  {
    title: 'Night Shift',
    detail: 'Boiler Room guest mix',
    time: '58:40',
  },
  {
    title: 'Acid Line',
    detail: 'Resident FM exclusive',
    time: '64:05',
  },
]

const dates = [
  {
    when: 'Aug 08',
    venue: 'Tresor',
    detail: 'All-night warehouse set',
    city: 'Berlin',
  },
  {
    when: 'Aug 22',
    venue: 'Fabric',
    detail: 'Room Two takeover',
    city: 'London',
  },
  {
    when: 'Sep 12',
    venue: 'Nowadays',
    detail: 'Open-to-close',
    city: 'New York',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
}

function App() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.18])

  return (
    <div className="site">
      <nav className="nav" aria-label="Primary">
        <a className="nav__brand" href="#top">
          Kairo
        </a>
        <ul className="nav__links">
          <li>
            <a href="#sound">Sound</a>
          </li>
          <li>
            <a href="#dates">Dates</a>
          </li>
          <li>
            <a href="#booking">Book</a>
          </li>
        </ul>
      </nav>

      <header className="hero" id="top" ref={heroRef}>
        <div className="hero__media" aria-hidden="true">
          <motion.img
            src="https://images.unsplash.com/photo-1571266028247-e67365574487?auto=format&fit=crop&w=2400&q=80"
            alt=""
            style={{ y: imageY, scale: imageScale }}
          />
          <div className="hero__veil" />
        </div>

        <div className="hero__content">
          <motion.h1
            className="hero__brand"
            initial="hidden"
            animate="show"
            custom={0.05}
            variants={fadeUp}
          >
            Kairo
          </motion.h1>
          <motion.p
            className="hero__headline"
            initial="hidden"
            animate="show"
            custom={0.2}
            variants={fadeUp}
          >
            Late-night pressure. Warehouse pulse.
          </motion.p>
          <motion.p
            className="hero__lede"
            initial="hidden"
            animate="show"
            custom={0.32}
            variants={fadeUp}
          >
            DJ and producer cutting hard techno, acid, and industrial heat for rooms that stay open until morning.
          </motion.p>
          <motion.div
            className="hero__ctas"
            initial="hidden"
            animate="show"
            custom={0.45}
            variants={fadeUp}
          >
            <a className="btn btn--primary" href="#sound">
              <span className="eq" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
              Listen
            </a>
            <a className="btn btn--ghost" href="#booking">
              Book Kairo
            </a>
          </motion.div>
        </div>
      </header>

      <section className="section" id="sound">
        <motion.p
          className="section__label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Sound
        </motion.p>
        <motion.h2
          className="section__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={0.05}
          variants={fadeUp}
        >
          Recent sets
        </motion.h2>
        <motion.p
          className="section__copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={0.12}
          variants={fadeUp}
        >
          Peak-time selections built for concrete floors and long transitions.
        </motion.p>
        <div className="sets">
          {sets.map((set, i) => (
            <motion.a
              key={set.title}
              className="set"
              href="#booking"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={0.08 + i * 0.08}
              variants={fadeUp}
            >
              <span className="set__index">{String(i + 1).padStart(2, '0')}</span>
              <div className="set__meta">
                <h3>{set.title}</h3>
                <p>{set.detail}</p>
              </div>
              <span className="set__time">{set.time}</span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="section" id="dates">
        <motion.p
          className="section__label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          Dates
        </motion.p>
        <motion.h2
          className="section__title"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={0.05}
          variants={fadeUp}
        >
          On the road
        </motion.h2>
        <motion.p
          className="section__copy"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          custom={0.12}
          variants={fadeUp}
        >
          Upcoming club nights and festival rooms.
        </motion.p>
        <div className="dates">
          {dates.map((date, i) => (
            <motion.article
              key={`${date.venue}-${date.when}`}
              className="date"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={0.08 + i * 0.08}
              variants={fadeUp}
            >
              <time className="date__when">{date.when}</time>
              <div className="date__where">
                <h3>{date.venue}</h3>
                <p>{date.detail}</p>
              </div>
              <span className="date__city">{date.city}</span>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking__inner">
          <motion.h2
            className="booking__title"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.05}
            variants={fadeUp}
          >
            Book the night
          </motion.h2>
          <motion.p
            className="booking__copy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.15}
            variants={fadeUp}
          >
            Club residencies, festival stages, and private rooms. Send dates, city, and format.
          </motion.p>
          <motion.a
            className="booking__email"
            href="mailto:bookings@kairo.audio"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.25}
            variants={fadeUp}
          >
            bookings@kairo.audio
          </motion.a>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Kairo</p>
        <ul className="footer__socials">
          <li>
            <a href="https://soundcloud.com" target="_blank" rel="noreferrer">
              SoundCloud
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://ra.co" target="_blank" rel="noreferrer">
              RA
            </a>
          </li>
        </ul>
      </footer>
    </div>
  )
}

export default App
