import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './App.css'

const sets = [
  {
    title: 'Dust & Neon',
    detail: 'Club set — peak-time house & disco',
    tag: 'Club',
    href: 'https://soundcloud.com',
  },
  {
    title: 'Open Range',
    detail: 'Private party sampler — dancefloor first',
    tag: 'Private',
    href: 'https://soundcloud.com',
  },
  {
    title: 'Sunset Warm-Up',
    detail: 'Road-trip grooves for golden hour',
    tag: 'Warm-up',
    href: 'https://soundcloud.com',
  },
  {
    title: 'Midnight Cattle Call',
    detail: 'Resident FM exclusive',
    tag: 'Radio',
    href: 'https://soundcloud.com',
  },
]

const packages = [
  {
    name: 'Club Set',
    price: 'From $800',
    detail: '60–120 minutes of house and disco for rooms that stay late.',
    includes: ['USB / CDJ ready', 'Travel in Austin metro', 'EPK & tech rider'],
  },
  {
    name: 'Private Party',
    price: 'From $1,200',
    detail: 'Four-hour coverage for backyards, lodges, and birthday blowouts.',
    includes: ['Playlist collab', 'Wireless mic option', 'Setup & teardown'],
  },
  {
    name: 'Wedding / Corporate',
    price: 'From $1,800',
    detail: 'Ceremony-to-reception or brand-night programming with a clean timeline.',
    includes: ['Timeline planning', 'MC optional', 'Backup laptop + controller'],
  },
]

const dates = [
  {
    when: 'Aug 08',
    venue: "Stubb's",
    detail: 'All-night outdoor set',
    city: 'Austin',
  },
  {
    when: 'Aug 22',
    venue: 'The Premises',
    detail: 'Rooftop takeover',
    city: 'Nashville',
  },
  {
    when: 'Sep 12',
    venue: 'Brooklyn Mirage',
    detail: 'Open-to-close',
    city: 'New York',
  },
]

const quotes = [
  {
    text: 'Read the room like a pro — floor never dropped under 90%.',
    by: 'Maya R. — Venue manager, Austin',
  },
  {
    text: 'Our wedding went from dinner chatter to a full stampede in one blend.',
    by: 'Elena & Josh — Private event',
  },
  {
    text: 'Showed up with the rider locked and a set that made the brand night feel illegal in the best way.',
    by: 'Chris P. — Corporate producer',
  },
]

const gallery = [
  'https://images.unsplash.com/photo-1571266028247-e67365574487?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
]

const faqs = [
  {
    q: 'How far in advance should we book?',
    a: 'Club and private dates usually lock 4–8 weeks out. Peak wedding season books further ahead — send the date early and we’ll hold a soft pencil while we quote.',
  },
  {
    q: 'Do you travel outside Austin?',
    a: 'Yes. Austin metro is included in base rates. Regional and national travel is available with travel and hotel billed separately.',
  },
  {
    q: 'Can guests send song requests?',
    a: 'For private events and weddings, yes — we collect a short must-play / do-not-play list. Clubs stay curated unless the promoter asks otherwise.',
  },
  {
    q: 'What gear do you bring?',
    a: 'Club sets run on house CDJs when available. For private events we bring a pro controller, backup laptop, basic lighting add-ons on request, and a wireless mic if you need announcements.',
  },
  {
    q: 'Are you insured?',
    a: 'Liability coverage is available for private and corporate bookings. Ask for a certificate with your quote.',
  },
  {
    q: 'What’s the deposit and cancellation policy?',
    a: 'A 30% deposit secures the date. Cancellations 30+ days out can roll the deposit to a new date once; inside 30 days the deposit is non-refundable.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
}

type BookingState = {
  name: string
  email: string
  phone: string
  date: string
  eventType: string
  city: string
  guests: string
  vibe: string
}

const initialBooking: BookingState = {
  name: '',
  email: '',
  phone: '',
  date: '',
  eventType: 'Private party',
  city: '',
  guests: '',
  vibe: '',
}

function App() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14])

  const [booking, setBooking] = useState<BookingState>(initialBooking)
  const [submitted, setSubmitted] = useState(false)

  function updateField<K extends keyof BookingState>(key: K, value: BookingState[K]) {
    setBooking((prev) => ({ ...prev, [key]: value }))
  }

  function handleBooking(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `DJ Cowboy booking — ${booking.eventType} — ${booking.date || 'TBD'}`,
    )
    const body = encodeURIComponent(
      [
        `Name: ${booking.name}`,
        `Email: ${booking.email}`,
        `Phone: ${booking.phone || '—'}`,
        `Event date: ${booking.date || '—'}`,
        `Event type: ${booking.eventType}`,
        `City / venue: ${booking.city || '—'}`,
        `Guest count: ${booking.guests || '—'}`,
        '',
        'Vibe / 3 songs:',
        booking.vibe || '—',
      ].join('\n'),
    )
    window.location.href = `mailto:bookings@djcowboy.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="site">
      <nav className="nav" aria-label="Primary">
        <a className="nav__brand" href="#top">
          DJ Cowboy
        </a>
        <ul className="nav__links">
          <li>
            <a href="#listen">Listen</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#packages">Packages</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#dates">Dates</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a className="nav__book" href="#book">
              Book
            </a>
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
          <motion.p
            className="hero__tag"
            initial="hidden"
            animate="show"
            custom={0.05}
            variants={fadeUp}
          >
            DJ
          </motion.p>
          <motion.h1
            className="hero__brand"
            initial={{ opacity: 0, y: 40, letterSpacing: '0.18em' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0.01em' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Cowboy
          </motion.h1>
          <motion.div
            className="hero__rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="hero__headline"
            initial="hidden"
            animate="show"
            custom={0.4}
            variants={fadeUp}
          >
            House, disco & road-trip grooves — Austin and beyond.
          </motion.p>
          <motion.p
            className="hero__lede"
            initial="hidden"
            animate="show"
            custom={0.5}
            variants={fadeUp}
          >
            Clubs, weddings, and private events with dancefloor-first programming.
          </motion.p>
          <motion.div
            className="hero__ctas"
            initial="hidden"
            animate="show"
            custom={0.6}
            variants={fadeUp}
          >
            <a className="btn btn--primary" href="#book">
              Check availability
            </a>
            <a className="btn btn--ghost" href="#listen">
              Listen to a set
            </a>
          </motion.div>
        </div>
      </header>

      <section className="section" id="listen">
        <p className="section__label">Listen</p>
        <h2 className="section__title">Hear the night</h2>
        <p className="section__copy">
          Club pressure, private-party heat, and sunset warm-ups — press play before you enquire.
        </p>
        <div className="sets">
          {sets.map((set, i) => (
            <motion.a
              key={set.title}
              className="set"
              href={set.href}
              target="_blank"
              rel="noreferrer"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={0.05 + i * 0.06}
              variants={fadeUp}
            >
              <span className="set__play" aria-hidden="true">
                <svg viewBox="0 0 12 14">
                  <path d="M1 1.2v11.6L11 7 1 1.2z" />
                </svg>
              </span>
              <div className="set__meta">
                <h3>{set.title}</h3>
                <p>{set.detail}</p>
              </div>
              <span className="set__tag">{set.tag}</span>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="section" id="services">
        <p className="section__label">Services</p>
        <h2 className="section__title">Who it’s for</h2>
        <p className="section__copy">
          Two lanes, one selector — promoters get the rider, planners get the timeline.
        </p>
        <div className="services">
          <article className="service">
            <h3>Clubs</h3>
            <p>60–120 minute sets of house, disco, and balearic pressure for rooms that run late.</p>
            <ul>
              <li>Austin + regional travel</li>
              <li>CDJ / USB ready</li>
              <li>EPK & tech rider on request</li>
            </ul>
            <a className="service__link" href="/dj-cowboy-epk.txt" download>
              Download EPK
            </a>
          </article>
          <article className="service">
            <h3>Private</h3>
            <p>Weddings, birthdays, and lodge parties with clean edits and a read-the-room approach.</p>
            <ul>
              <li>Must-play / do-not-play list</li>
              <li>Optional MC + wireless mic</li>
              <li>Austin metro base rate</li>
            </ul>
            <a className="service__link" href="#book">
              Book a private event
            </a>
          </article>
          <article className="service">
            <h3>Corporate</h3>
            <p>Brand nights and company parties that stay sharp without killing the dancefloor.</p>
            <ul>
              <li>Timeline + cue sheet</li>
              <li>Insured bookings available</li>
              <li>Logo / visual asset handoff</li>
            </ul>
            <a className="service__link" href="#book">
              Request a quote
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="packages">
        <p className="section__label">Packages</p>
        <h2 className="section__title">Starting rates</h2>
        <p className="section__copy">
          Transparent bands so you can self-qualify before we hop on a call. Final quotes depend on date, hours, and travel.
        </p>
        <div className="packages">
          {packages.map((pkg, i) => (
            <motion.article
              key={pkg.name}
              className="package"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={0.05 + i * 0.08}
              variants={fadeUp}
            >
              <div>
                <h3>{pkg.name}</h3>
                <p>{pkg.detail}</p>
              </div>
              <div className="package__price">{pkg.price}</div>
              <ul className="package__includes">
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section section--wide" id="about">
        <div className="about">
          <div className="about__text">
            <p className="section__label">About</p>
            <h2 className="section__title">Austin roots. Open-road records.</h2>
            <p className="section__copy section__copy--tight">
              DJ Cowboy digs for dusty disco, bass-heavy house, and late-night highway soul — the kind of records that turn a room into a convoy.
            </p>
            <p className="section__copy">
              From Stubb’s patio nights to private lodges outside the city, the brief is the same: keep people moving, never sand the edges off the music, and leave the timeline tighter than you found it.
            </p>
            <div className="about__actions">
              <a className="btn btn--ink" href="/dj-cowboy-epk.txt" download>
                Download EPK
              </a>
              <a className="btn btn--outline-ink" href="/tech-rider.txt" download>
                Tech rider
              </a>
            </div>
          </div>
          <img
            className="about__photo"
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80"
            alt="DJ performing behind the decks"
          />
        </div>
      </section>

      <section className="section section--wide" id="gallery">
        <p className="section__label">Gallery</p>
        <h2 className="section__title">The floor, the booth</h2>
        <p className="section__copy">
          Crowd energy, booth presence, and private-event polish — real nights, not stock filler.
        </p>
        <div className="gallery">
          {gallery.map((src, i) => (
            <figure key={src}>
              <img src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="dates">
        <p className="section__label">Dates</p>
        <h2 className="section__title">On the road</h2>
        <p className="section__copy">
          Public nights when they’re on the books. Private dates stay off the grid — enquire to hold yours.
        </p>
        <div className="dates">
          {dates.map((date, i) => (
            <motion.article
              key={`${date.venue}-${date.when}`}
              className="date"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={0.05 + i * 0.08}
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

      <section className="section" id="proof">
        <p className="section__label">Proof</p>
        <h2 className="section__title">What they say</h2>
        <p className="section__copy">
          Venue managers, couples, and producers — specific nights, not vague praise.
        </p>
        <div className="proof">
          {quotes.map((quote, i) => (
            <motion.article
              key={quote.by}
              className="quote"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={0.05 + i * 0.08}
              variants={fadeUp}
            >
              <blockquote>“{quote.text}”</blockquote>
              <footer>{quote.by}</footer>
            </motion.article>
          ))}
        </div>
        <ul className="venues" aria-label="Selected rooms">
          <li>Stubb&apos;s</li>
          <li>The Premises</li>
          <li>Brooklyn Mirage</li>
          <li>Austin City Limits afters</li>
        </ul>
      </section>

      <section className="section" id="process">
        <p className="section__label">Process</p>
        <h2 className="section__title">How booking works</h2>
        <p className="section__copy">
          Three steps from first note to deposit — no mystery, no runaway email chains.
        </p>
        <div className="process">
          <article className="step">
            <div className="step__num">01</div>
            <h3>Enquire</h3>
            <p>Send the date, event type, and city. We reply within 24 hours.</p>
          </article>
          <article className="step">
            <div className="step__num">02</div>
            <h3>Plan</h3>
            <p>Quick call or email thread on timeline, vibe, and gear.</p>
          </article>
          <article className="step">
            <div className="step__num">03</div>
            <h3>Confirm</h3>
            <p>Deposit + contract locks the night. Rider and playlist follow.</p>
          </article>
        </div>
      </section>

      <section className="section" id="faq">
        <p className="section__label">FAQ</p>
        <h2 className="section__title">Before you book</h2>
        <p className="section__copy">
          Promoters and planners ask the same handful of questions — answers up front.
        </p>
        <div className="faq">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="booking" id="book">
        <div className="booking__inner">
          <div>
            <h2 className="booking__title">Check availability</h2>
            <p className="booking__copy">
              Tell us the date and the shape of the night. We’ll send a quote and next steps within 24 hours.
            </p>
            <div className="booking__trust">
              <p>
                <span>→</span> Replies within 24 hours
              </p>
              <p>
                <span>→</span> 30% deposit to hold the date
              </p>
              <p>
                <span>→</span> Insured private & corporate bookings
              </p>
            </div>
          </div>

          {submitted ? (
            <div className="form__success">
              <h3>Request ready</h3>
              <p>
                Your mail app should open with the details filled in. If it doesn’t, email{' '}
                <a href="mailto:bookings@djcowboy.com">bookings@djcowboy.com</a> directly.
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleBooking}>
              <div className="form__row">
                <label>
                  Name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    value={booking.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                </label>
                <label>
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={booking.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </label>
              </div>
              <div className="form__row">
                <label>
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={booking.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </label>
                <label>
                  Event date
                  <input
                    required
                    type="date"
                    name="date"
                    value={booking.date}
                    onChange={(e) => updateField('date', e.target.value)}
                  />
                </label>
              </div>
              <div className="form__row">
                <label>
                  Event type
                  <select
                    name="eventType"
                    value={booking.eventType}
                    onChange={(e) => updateField('eventType', e.target.value)}
                  >
                    <option>Club</option>
                    <option>Wedding</option>
                    <option>Corporate</option>
                    <option>Private party</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  Guest count
                  <input
                    name="guests"
                    inputMode="numeric"
                    placeholder="e.g. 120"
                    value={booking.guests}
                    onChange={(e) => updateField('guests', e.target.value)}
                  />
                </label>
              </div>
              <label>
                City / venue
                <input
                  name="city"
                  placeholder="Austin, Stubb's, etc."
                  value={booking.city}
                  onChange={(e) => updateField('city', e.target.value)}
                />
              </label>
              <label>
                Vibe — 3 songs that define the night
                <textarea
                  name="vibe"
                  placeholder="Artists or tracks that set the tone"
                  value={booking.vibe}
                  onChange={(e) => updateField('vibe', e.target.value)}
                />
              </label>
              <button className="btn btn--primary form__submit" type="submit">
                Request a quote
              </button>
              <p className="form__note">Opens your email with the enquiry ready to send.</p>
            </form>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} DJ Cowboy · Austin, TX</p>
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
          <li>
            <a href="/dj-cowboy-epk.txt" download>
              EPK
            </a>
          </li>
          <li>
            <a href="/tech-rider.txt" download>
              Rider
            </a>
          </li>
        </ul>
      </footer>

      <div className="mobile-bar">
        <a className="btn btn--primary" href="#book">
          Check availability
        </a>
      </div>
    </div>
  )
}

export default App
