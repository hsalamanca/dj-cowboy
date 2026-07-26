import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLanguage } from './i18n/LanguageContext'
import type { Lang } from './i18n/translations'
import './App.css'

const gallery = [
  'https://images.unsplash.com/photo-1571266028247-e67365574487?auto=format&fit=crop&w=1600&q=80',
  'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?auto=format&fit=crop&w=1200&q=80',
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
  eventType: 'private',
  city: '',
  guests: '',
  vibe: '',
}

function App() {
  const { lang, t, setLang } = useLanguage()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14])

  const [booking, setBooking] = useState<BookingState>(initialBooking)
  const [submitted, setSubmitted] = useState(false)

  const epkHref = lang === 'es' ? '/dj-cowboy-epk-es.txt' : '/dj-cowboy-epk.txt'

  function updateField<K extends keyof BookingState>(key: K, value: BookingState[K]) {
    setBooking((prev) => ({ ...prev, [key]: value }))
  }

  function eventTypeLabel(value: string) {
    return t.book.eventTypes.find((item) => item.value === value)?.label ?? value
  }

  function handleBooking(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const typeLabel = eventTypeLabel(booking.eventType)
    const subject = encodeURIComponent(
      `${t.book.mailSubject} — ${typeLabel} — ${booking.date || 'TBD'}`,
    )
    const body = encodeURIComponent(
      [
        `${t.book.mailLabels.name}: ${booking.name}`,
        `${t.book.mailLabels.email}: ${booking.email}`,
        `${t.book.mailLabels.phone}: ${booking.phone || '—'}`,
        `${t.book.mailLabels.date}: ${booking.date || '—'}`,
        `${t.book.mailLabels.eventType}: ${typeLabel}`,
        `${t.book.mailLabels.city}: ${booking.city || '—'}`,
        `${t.book.mailLabels.guests}: ${booking.guests || '—'}`,
        '',
        `${t.book.mailLabels.vibe}:`,
        booking.vibe || '—',
      ].join('\n'),
    )
    window.location.href = `mailto:bookings@djcowboy.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  function switchLang(next: Lang) {
    setLang(next)
    setSubmitted(false)
  }

  return (
    <div className="site" lang={lang}>
      <nav className="nav" aria-label={t.nav.aria}>
        <a className="nav__brand" href="#top">
          DJ Cowboy
        </a>
        <ul className="nav__links">
          <li>
            <a href="#listen">{t.nav.listen}</a>
          </li>
          <li>
            <a href="#services">{t.nav.services}</a>
          </li>
          <li>
            <a href="#packages">{t.nav.packages}</a>
          </li>
          <li>
            <a href="#about">{t.nav.about}</a>
          </li>
          <li>
            <a href="#dates">{t.nav.dates}</a>
          </li>
          <li>
            <a href="#faq">{t.nav.faq}</a>
          </li>
          <li>
            <div className="lang-switch" role="group" aria-label={t.lang.switchTo}>
              <button
                type="button"
                className={`lang-switch__btn${lang === 'en' ? ' is-active' : ''}`}
                onClick={() => switchLang('en')}
                aria-pressed={lang === 'en'}
              >
                {t.lang.en}
              </button>
              <span className="lang-switch__sep" aria-hidden="true">
                /
              </span>
              <button
                type="button"
                className={`lang-switch__btn${lang === 'es' ? ' is-active' : ''}`}
                onClick={() => switchLang('es')}
                aria-pressed={lang === 'es'}
              >
                {t.lang.es}
              </button>
            </div>
          </li>
          <li>
            <a className="nav__book" href="#book">
              {t.nav.book}
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
            {t.hero.headline}
          </motion.p>
          <motion.p
            className="hero__lede"
            initial="hidden"
            animate="show"
            custom={0.5}
            variants={fadeUp}
          >
            {t.hero.lede}
          </motion.p>
          <motion.div
            className="hero__ctas"
            initial="hidden"
            animate="show"
            custom={0.6}
            variants={fadeUp}
          >
            <a className="btn btn--primary" href="#book">
              {t.hero.ctaBook}
            </a>
            <a className="btn btn--ghost" href="#listen">
              {t.hero.ctaListen}
            </a>
          </motion.div>
        </div>
      </header>

      <section className="section" id="listen">
        <p className="section__label">{t.listen.label}</p>
        <h2 className="section__title">{t.listen.title}</h2>
        <p className="section__copy">{t.listen.copy}</p>
        <div className="sets">
          {t.listen.sets.map((set, i) => (
            <motion.a
              key={`${lang}-${set.title}`}
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
        <p className="section__label">{t.services.label}</p>
        <h2 className="section__title">{t.services.title}</h2>
        <p className="section__copy">{t.services.copy}</p>
        <div className="services">
          <article className="service">
            <h3>{t.services.clubs.title}</h3>
            <p>{t.services.clubs.body}</p>
            <ul>
              {t.services.clubs.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="service__link" href={epkHref} download>
              {t.services.clubs.link}
            </a>
          </article>
          <article className="service">
            <h3>{t.services.private.title}</h3>
            <p>{t.services.private.body}</p>
            <ul>
              {t.services.private.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="service__link" href="#book">
              {t.services.private.link}
            </a>
          </article>
          <article className="service">
            <h3>{t.services.corporate.title}</h3>
            <p>{t.services.corporate.body}</p>
            <ul>
              {t.services.corporate.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="service__link" href="#book">
              {t.services.corporate.link}
            </a>
          </article>
        </div>
      </section>

      <section className="section" id="packages">
        <p className="section__label">{t.packages.label}</p>
        <h2 className="section__title">{t.packages.title}</h2>
        <p className="section__copy">{t.packages.copy}</p>
        <div className="packages">
          {t.packages.items.map((pkg, i) => (
            <motion.article
              key={`${lang}-${pkg.name}`}
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
            <p className="section__label">{t.about.label}</p>
            <h2 className="section__title">{t.about.title}</h2>
            <p className="section__copy section__copy--tight">{t.about.p1}</p>
            <p className="section__copy">{t.about.p2}</p>
            <div className="about__actions">
              <a className="btn btn--ink" href={epkHref} download>
                {t.about.epk}
              </a>
              <a className="btn btn--outline-ink" href="/tech-rider.txt" download>
                {t.about.rider}
              </a>
            </div>
          </div>
          <img
            className="about__photo"
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1400&q=80"
            alt={t.about.photoAlt}
          />
        </div>
      </section>

      <section className="section section--wide" id="gallery">
        <p className="section__label">{t.gallery.label}</p>
        <h2 className="section__title">{t.gallery.title}</h2>
        <p className="section__copy">{t.gallery.copy}</p>
        <div className="gallery">
          {gallery.map((src, i) => (
            <figure key={src}>
              <img src={src} alt="" loading={i === 0 ? 'eager' : 'lazy'} />
            </figure>
          ))}
        </div>
      </section>

      <section className="section" id="dates">
        <p className="section__label">{t.dates.label}</p>
        <h2 className="section__title">{t.dates.title}</h2>
        <p className="section__copy">{t.dates.copy}</p>
        <div className="dates">
          {t.dates.items.map((date, i) => (
            <motion.article
              key={`${lang}-${date.venue}-${date.when}`}
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
        <p className="section__label">{t.proof.label}</p>
        <h2 className="section__title">{t.proof.title}</h2>
        <p className="section__copy">{t.proof.copy}</p>
        <div className="proof">
          {t.proof.quotes.map((quote, i) => (
            <motion.article
              key={`${lang}-${quote.by}`}
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
        <ul className="venues" aria-label={t.proof.venuesLabel}>
          {t.proof.venues.map((venue) => (
            <li key={venue}>{venue}</li>
          ))}
        </ul>
      </section>

      <section className="section" id="process">
        <p className="section__label">{t.process.label}</p>
        <h2 className="section__title">{t.process.title}</h2>
        <p className="section__copy">{t.process.copy}</p>
        <div className="process">
          {t.process.steps.map((step, i) => (
            <article className="step" key={step.title}>
              <div className="step__num">{String(i + 1).padStart(2, '0')}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="faq">
        <p className="section__label">{t.faq.label}</p>
        <h2 className="section__title">{t.faq.title}</h2>
        <p className="section__copy">{t.faq.copy}</p>
        <div className="faq">
          {t.faq.items.map((item) => (
            <details key={`${lang}-${item.q}`}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="booking" id="book">
        <div className="booking__inner">
          <div>
            <h2 className="booking__title">{t.book.title}</h2>
            <p className="booking__copy">{t.book.copy}</p>
            <div className="booking__trust">
              {t.book.trust.map((line) => (
                <p key={line}>
                  <span>→</span> {line}
                </p>
              ))}
            </div>
          </div>

          {submitted ? (
            <div className="form__success">
              <h3>{t.book.successTitle}</h3>
              <p>
                {t.book.successBody}{' '}
                <a href="mailto:bookings@djcowboy.com">bookings@djcowboy.com</a>{' '}
                {t.book.successBodyAfter}
              </p>
            </div>
          ) : (
            <form className="form" onSubmit={handleBooking}>
              <div className="form__row">
                <label>
                  {t.book.name}
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    value={booking.name}
                    onChange={(e) => updateField('name', e.target.value)}
                  />
                </label>
                <label>
                  {t.book.email}
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
                  {t.book.phone}
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={booking.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </label>
                <label>
                  {t.book.date}
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
                  {t.book.eventType}
                  <select
                    name="eventType"
                    value={booking.eventType}
                    onChange={(e) => updateField('eventType', e.target.value)}
                  >
                    {t.book.eventTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  {t.book.guests}
                  <input
                    name="guests"
                    inputMode="numeric"
                    placeholder={t.book.guestsPlaceholder}
                    value={booking.guests}
                    onChange={(e) => updateField('guests', e.target.value)}
                  />
                </label>
              </div>
              <label>
                {t.book.city}
                <input
                  name="city"
                  placeholder={t.book.cityPlaceholder}
                  value={booking.city}
                  onChange={(e) => updateField('city', e.target.value)}
                />
              </label>
              <label>
                {t.book.vibe}
                <textarea
                  name="vibe"
                  placeholder={t.book.vibePlaceholder}
                  value={booking.vibe}
                  onChange={(e) => updateField('vibe', e.target.value)}
                />
              </label>
              <button className="btn btn--primary form__submit" type="submit">
                {t.book.submit}
              </button>
              <p className="form__note">{t.book.note}</p>
            </form>
          )}
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {t.footer.rights}
        </p>
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
            <a href={epkHref} download>
              EPK
            </a>
          </li>
          <li>
            <a href="/tech-rider.txt" download>
              {t.footer.rider}
            </a>
          </li>
        </ul>
      </footer>

      <div className="mobile-bar">
        <a className="btn btn--primary" href="#book">
          {t.mobileBar}
        </a>
      </div>
    </div>
  )
}

export default App
