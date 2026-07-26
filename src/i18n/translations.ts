export type Lang = 'en' | 'es'

export type Translation = {
  metaTitle: string
  metaDescription: string
  nav: {
    listen: string
    services: string
    packages: string
    about: string
    dates: string
    faq: string
    book: string
    aria: string
  }
  lang: {
    en: string
    es: string
    switchTo: string
  }
  hero: {
    headline: string
    lede: string
    ctaBook: string
    ctaListen: string
  }
  listen: {
    label: string
    title: string
    copy: string
    sets: { title: string; detail: string; tag: string; href: string }[]
  }
  services: {
    label: string
    title: string
    copy: string
    clubs: { title: string; body: string; items: string[]; link: string }
    private: { title: string; body: string; items: string[]; link: string }
    corporate: { title: string; body: string; items: string[]; link: string }
  }
  packages: {
    label: string
    title: string
    copy: string
    items: { name: string; price: string; detail: string; includes: string[] }[]
  }
  about: {
    label: string
    title: string
    p1: string
    p2: string
    epk: string
    rider: string
    photoAlt: string
  }
  gallery: {
    label: string
    title: string
    copy: string
  }
  dates: {
    label: string
    title: string
    copy: string
    items: { when: string; venue: string; detail: string; city: string }[]
  }
  proof: {
    label: string
    title: string
    copy: string
    quotes: { text: string; by: string }[]
    venuesLabel: string
    venues: string[]
  }
  process: {
    label: string
    title: string
    copy: string
    steps: { title: string; body: string }[]
  }
  faq: {
    label: string
    title: string
    copy: string
    items: { q: string; a: string }[]
  }
  book: {
    title: string
    copy: string
    trust: string[]
    successTitle: string
    successBody: string
    successBodyAfter: string
    name: string
    email: string
    phone: string
    date: string
    eventType: string
    guests: string
    city: string
    vibe: string
    guestsPlaceholder: string
    cityPlaceholder: string
    vibePlaceholder: string
    submit: string
    note: string
    eventTypes: { value: string; label: string }[]
    mailSubject: string
    mailLabels: {
      name: string
      email: string
      phone: string
      date: string
      eventType: string
      city: string
      guests: string
      vibe: string
    }
  }
  footer: {
    rights: string
    rider: string
  }
  mobileBar: string
}

const galleryHrefs = [
  'https://soundcloud.com',
  'https://soundcloud.com',
  'https://soundcloud.com',
  'https://soundcloud.com',
] as const

export const translations: Record<Lang, Translation> = {
  en: {
    metaTitle: 'DJ Cowboy | Latin DJ in Houston — Bachata, Salsa, Cumbia & More',
    metaDescription:
      'DJ Cowboy | Latin DJ in Houston — bachata, salsa, cumbia, and all Latin sounds for clubs, weddings, quinceañeras, and private events.',
    nav: {
      listen: 'Listen',
      services: 'Services',
      packages: 'Packages',
      about: 'About',
      dates: 'Dates',
      faq: 'FAQ',
      book: 'Book',
      aria: 'Primary',
    },
    lang: {
      en: 'EN',
      es: 'ES',
      switchTo: 'Language',
    },
    hero: {
      headline: 'Bachata, salsa, cumbia — Houston’s Latin dancefloor.',
      lede: 'Clubs, weddings, quinceañeras, and private events with all Latin sounds.',
      ctaBook: 'Check availability',
      ctaListen: 'Listen to a set',
    },
    listen: {
      label: 'Listen',
      title: 'Hear the night',
      copy: 'Club heat, wedding warm-ups, and private-party cumbia — press play before you enquire.',
      sets: [
        {
          title: 'Noche Caliente',
          detail: 'Club set — bachata, salsa & Latin peak-time',
          tag: 'Club',
          href: galleryHrefs[0],
        },
        {
          title: 'Cumbia Forever',
          detail: 'Private party sampler — dancefloor first',
          tag: 'Private',
          href: galleryHrefs[1],
        },
        {
          title: 'Bachata Smooth',
          detail: 'Wedding & dinner-to-dance warm-up',
          tag: 'Wedding',
          href: galleryHrefs[2],
        },
        {
          title: 'Salsa After Dark',
          detail: 'Live Latin night exclusive mix',
          tag: 'Radio',
          href: galleryHrefs[3],
        },
      ],
    },
    services: {
      label: 'Services',
      title: 'Who it’s for',
      copy: 'Clubs, family milestones, and brand nights — promoters get the rider, planners get the timeline.',
      clubs: {
        title: 'Clubs',
        body: '60–120 minute Latin sets — bachata, salsa, cumbia, and tropical heat for rooms that run late.',
        items: ['Houston + regional travel', 'CDJ / USB ready', 'EPK & tech rider on request'],
        link: 'Download EPK',
      },
      private: {
        title: 'Private',
        body: 'Weddings, quinceañeras, and birthday nights with requests honored and the floor always full.',
        items: ['Must-play / do-not-play list', 'Optional MC + wireless mic', 'Houston metro base rate'],
        link: 'Book a private event',
      },
      corporate: {
        title: 'Corporate',
        body: 'Brand nights and company parties that stay festive without losing the Latin groove.',
        items: ['Timeline + cue sheet', 'Insured bookings available', 'Logo / visual asset handoff'],
        link: 'Request a quote',
      },
    },
    packages: {
      label: 'Packages',
      title: 'Starting rates',
      copy: 'Transparent bands so you can self-qualify before we hop on a call. Final quotes depend on date, hours, and travel.',
      items: [
        {
          name: 'Club Set',
          price: 'From $800',
          detail:
            '60–120 minutes of bachata, salsa, cumbia, and Latin heat for rooms that stay late.',
          includes: ['USB / CDJ ready', 'Travel in Houston metro', 'EPK & tech rider'],
        },
        {
          name: 'Private Party',
          price: 'From $1,200',
          detail: 'Four-hour coverage for birthdays, quinceañeras, and backyard Latin nights.',
          includes: ['Playlist collab', 'Wireless mic option', 'Setup & teardown'],
        },
        {
          name: 'Wedding / Corporate',
          price: 'From $1,800',
          detail: 'Ceremony-to-reception or brand-night programming with a clean timeline.',
          includes: ['Timeline planning', 'MC optional', 'Backup laptop + controller'],
        },
      ],
    },
    about: {
      label: 'About',
      title: 'Houston heat. Latin forever.',
      p1: 'DJ Cowboy lives in the Latin catalog — bachata that slows the room down, salsa that snaps it back, cumbias that refuse to end, plus merengue, reggaetón, and the classics every tío requests.',
      p2: 'From Houston club nights to quinceañeras and weddings across the metro, the brief is the same: keep every generation dancing, honor the requests, and leave the timeline tighter than you found it.',
      epk: 'Download EPK',
      rider: 'Tech rider',
      photoAlt: 'DJ performing behind the decks',
    },
    gallery: {
      label: 'Gallery',
      title: 'The floor, the booth',
      copy: 'Crowd energy, booth presence, and private-event polish — real nights, not stock filler.',
    },
    dates: {
      label: 'Dates',
      title: 'On the road',
      copy: 'Public nights when they’re on the books. Private dates stay off the grid — enquire to hold yours.',
      items: [
        {
          when: 'Aug 08',
          venue: 'Stereo Live',
          detail: 'Latin night guest set',
          city: 'Houston',
        },
        {
          when: 'Aug 22',
          venue: 'Warehouse Live',
          detail: 'Salsa & bachata takeover',
          city: 'Houston',
        },
        {
          when: 'Sep 12',
          venue: 'Private estate',
          detail: 'Quinceañera open-to-close',
          city: 'Sugar Land',
        },
      ],
    },
    proof: {
      label: 'Proof',
      title: 'What they say',
      copy: 'Venue managers, couples, and producers — specific nights, not vague praise.',
      quotes: [
        {
          text: 'Switched from salsa to cumbia without losing a single couple on the floor.',
          by: 'Maya R. — Venue manager, Houston',
        },
        {
          text: 'Our wedding went from dinner to a full Latin dancefloor in one blend.',
          by: 'Elena & Carlos — Private event',
        },
        {
          text: 'Knew every request — bachata, salsa, even the deep cuts our parents wanted.',
          by: 'Ana P. — Quinceañera planner',
        },
      ],
      venuesLabel: 'Selected rooms',
      venues: ['Stereo Live', 'Warehouse Live', 'Houston Latin nights', 'Private estates · TX'],
    },
    process: {
      label: 'Process',
      title: 'How booking works',
      copy: 'Three steps from first note to deposit — no mystery, no runaway email chains.',
      steps: [
        {
          title: 'Enquire',
          body: 'Send the date, event type, and city. We reply within 24 hours.',
        },
        {
          title: 'Plan',
          body: 'Quick call or email thread on timeline, vibe, and gear.',
        },
        {
          title: 'Confirm',
          body: 'Deposit + contract locks the night. Rider and playlist follow.',
        },
      ],
    },
    faq: {
      label: 'FAQ',
      title: 'Before you book',
      copy: 'Promoters and planners ask the same handful of questions — answers up front.',
      items: [
        {
          q: 'How far in advance should we book?',
          a: 'Club and private dates usually lock 4–8 weeks out. Peak wedding season books further ahead — send the date early and we’ll hold a soft pencil while we quote.',
        },
        {
          q: 'Do you travel outside Houston?',
          a: 'Yes. Houston metro is included in base rates. Regional Texas and national travel is available with travel and hotel billed separately.',
        },
        {
          q: 'Can guests send song requests?',
          a: 'For private events, quinceañeras, and weddings, yes — we collect a short must-play / do-not-play list across bachata, salsa, cumbia, and more. Clubs stay curated unless the promoter asks otherwise.',
        },
        {
          q: 'What styles do you play?',
          a: 'Bachata, salsa, cumbia, merengue, reggaetón, and tropical Latin classics — mixed to read the room from abuelos to the late-night crowd.',
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
      ],
    },
    book: {
      title: 'Check availability',
      copy: 'Tell us the date and the shape of the night. We’ll send a quote and next steps within 24 hours.',
      trust: [
        'Replies within 24 hours',
        '30% deposit to hold the date',
        'Insured private & corporate bookings',
      ],
      successTitle: 'Request ready',
      successBody: 'Your mail app should open with the details filled in. If it doesn’t, email',
      successBodyAfter: 'directly.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      date: 'Event date',
      eventType: 'Event type',
      guests: 'Guest count',
      city: 'City / venue',
      vibe: 'Vibe — 3 songs that define the night',
      guestsPlaceholder: 'e.g. 120',
      cityPlaceholder: 'Houston, Stereo Live, etc.',
      vibePlaceholder: 'Bachata, salsa, cumbia — artists or tracks that set the tone',
      submit: 'Request a quote',
      note: 'Opens your email with the enquiry ready to send.',
      eventTypes: [
        { value: 'club', label: 'Club' },
        { value: 'wedding', label: 'Wedding' },
        { value: 'quinceanera', label: 'Quinceañera' },
        { value: 'corporate', label: 'Corporate' },
        { value: 'private', label: 'Private party' },
        { value: 'other', label: 'Other' },
      ],
      mailSubject: 'DJ Cowboy booking',
      mailLabels: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        date: 'Event date',
        eventType: 'Event type',
        city: 'City / venue',
        guests: 'Guest count',
        vibe: 'Vibe / 3 songs',
      },
    },
    footer: {
      rights: 'DJ Cowboy · Houston, TX',
      rider: 'Rider',
    },
    mobileBar: 'Check availability',
  },
  es: {
    metaTitle: 'DJ Cowboy | DJ Latino en Houston — Bachata, Salsa, Cumbia y más',
    metaDescription:
      'DJ Cowboy | DJ latino en Houston — bachata, salsa, cumbia y todos los sonidos latinos para clubes, bodas, quinceañeras y eventos privados.',
    nav: {
      listen: 'Escuchar',
      services: 'Servicios',
      packages: 'Paquetes',
      about: 'Nosotros',
      dates: 'Fechas',
      faq: 'Preguntas',
      book: 'Reservar',
      aria: 'Principal',
    },
    lang: {
      en: 'EN',
      es: 'ES',
      switchTo: 'Idioma',
    },
    hero: {
      headline: 'Bachata, salsa, cumbia — la pista latina de Houston.',
      lede: 'Clubes, bodas, quinceañeras y eventos privados con todos los sonidos latinos.',
      ctaBook: 'Ver disponibilidad',
      ctaListen: 'Escuchar un set',
    },
    listen: {
      label: 'Escuchar',
      title: 'Escucha la noche',
      copy: 'Calor de club, warm-ups de boda y cumbia para fiestas — dale play antes de preguntar.',
      sets: [
        {
          title: 'Noche Caliente',
          detail: 'Set de club — bachata, salsa y peak-time latino',
          tag: 'Club',
          href: galleryHrefs[0],
        },
        {
          title: 'Cumbia Forever',
          detail: 'Sampler para fiestas privadas — primero la pista',
          tag: 'Privado',
          href: galleryHrefs[1],
        },
        {
          title: 'Bachata Smooth',
          detail: 'Warm-up de boda — de la cena al baile',
          tag: 'Boda',
          href: galleryHrefs[2],
        },
        {
          title: 'Salsa After Dark',
          detail: 'Mix exclusivo de noche latina en vivo',
          tag: 'Radio',
          href: galleryHrefs[3],
        },
      ],
    },
    services: {
      label: 'Servicios',
      title: 'Para quién es',
      copy: 'Clubes, hitos familiares y noches de marca — el promoter recibe el rider, el planner recibe el timeline.',
      clubs: {
        title: 'Clubes',
        body: 'Sets latinos de 60–120 minutos — bachata, salsa, cumbia y calor tropical para salas que cierran tarde.',
        items: [
          'Houston + viajes regionales',
          'Listo para CDJ / USB',
          'EPK y tech rider a pedido',
        ],
        link: 'Descargar EPK',
      },
      private: {
        title: 'Privados',
        body: 'Bodas, quinceañeras y cumpleaños con peticiones respetadas y la pista siempre llena.',
        items: [
          'Lista de must-play / no-play',
          'MC opcional + micrófono inalámbrico',
          'Tarifa base en el metro de Houston',
        ],
        link: 'Reservar evento privado',
      },
      corporate: {
        title: 'Corporativo',
        body: 'Noches de marca y fiestas de empresa que se mantienen alegres sin perder el groove latino.',
        items: [
          'Timeline + cue sheet',
          'Reservas aseguradas disponibles',
          'Entrega de logo / assets visuales',
        ],
        link: 'Pedir cotización',
      },
    },
    packages: {
      label: 'Paquetes',
      title: 'Tarifas desde',
      copy: 'Rangos claros para que sepas si encajamos antes de la llamada. La cotización final depende de fecha, horas y viaje.',
      items: [
        {
          name: 'Set de club',
          price: 'Desde $800',
          detail:
            '60–120 minutos de bachata, salsa, cumbia y calor latino para salas que se quedan hasta tarde.',
          includes: ['Listo para USB / CDJ', 'Viaje en el metro de Houston', 'EPK y tech rider'],
        },
        {
          name: 'Fiesta privada',
          price: 'Desde $1,200',
          detail: 'Cuatro horas para cumpleaños, quinceañeras y noches latinas en casa.',
          includes: ['Colaboración de playlist', 'Micrófono inalámbrico opcional', 'Montaje y desmontaje'],
        },
        {
          name: 'Boda / Corporativo',
          price: 'Desde $1,800',
          detail: 'De la ceremonia a la recepción, o programación para noches de marca con timeline limpio.',
          includes: ['Planeación de timeline', 'MC opcional', 'Laptop + controlador de respaldo'],
        },
      ],
    },
    about: {
      label: 'Nosotros',
      title: 'Calor de Houston. Latino para siempre.',
      p1: 'DJ Cowboy vive en el catálogo latino — bachata que baja el ritmo, salsa que lo enciende, cumbias que no terminan, más merengue, reggaetón y los clásicos que pide cada tío.',
      p2: 'De las noches de club en Houston a quinceañeras y bodas en todo el metro, el brief es el mismo: que baile cada generación, honrar las peticiones y dejar el timeline más firme de lo que lo encontramos.',
      epk: 'Descargar EPK',
      rider: 'Tech rider',
      photoAlt: 'DJ tocando detrás de las tornamesas',
    },
    gallery: {
      label: 'Galería',
      title: 'La pista, la cabina',
      copy: 'Energía de público, presencia en cabina y pulido de evento privado — noches reales, no relleno de stock.',
    },
    dates: {
      label: 'Fechas',
      title: 'En la ruta',
      copy: 'Noches públicas cuando están en agenda. Las fechas privadas se quedan fuera del mapa — escribe para apartar la tuya.',
      items: [
        {
          when: '08 ago',
          venue: 'Stereo Live',
          detail: 'Set invitado de noche latina',
          city: 'Houston',
        },
        {
          when: '22 ago',
          venue: 'Warehouse Live',
          detail: 'Takeover de salsa y bachata',
          city: 'Houston',
        },
        {
          when: '12 sep',
          venue: 'Residencia privada',
          detail: 'Quinceañera de abierto a cerrado',
          city: 'Sugar Land',
        },
      ],
    },
    proof: {
      label: 'Prueba',
      title: 'Lo que dicen',
      copy: 'Managers de venues, parejas y productores — noches concretas, no elogios vagos.',
      quotes: [
        {
          text: 'Pasó de salsa a cumbia sin perder ni una pareja en la pista.',
          by: 'Maya R. — Manager de venue, Houston',
        },
        {
          text: 'Nuestra boda pasó de la cena a una pista latina llena en un solo blend.',
          by: 'Elena & Carlos — Evento privado',
        },
        {
          text: 'Supo cada petición — bachata, salsa, hasta los deep cuts que querían nuestros padres.',
          by: 'Ana P. — Planner de quinceañera',
        },
      ],
      venuesLabel: 'Salas seleccionadas',
      venues: ['Stereo Live', 'Warehouse Live', 'Noches latinas en Houston', 'Residencias privadas · TX'],
    },
    process: {
      label: 'Proceso',
      title: 'Cómo se reserva',
      copy: 'Tres pasos del primer mensaje al depósito — sin misterio ni cadenas eternas de email.',
      steps: [
        {
          title: 'Consulta',
          body: 'Envía la fecha, el tipo de evento y la ciudad. Respondemos en 24 horas.',
        },
        {
          title: 'Plan',
          body: 'Llamada o hilo rápido sobre timeline, vibe y equipo.',
        },
        {
          title: 'Confirma',
          body: 'Depósito + contrato cierran la noche. Luego van rider y playlist.',
        },
      ],
    },
    faq: {
      label: 'Preguntas',
      title: 'Antes de reservar',
      copy: 'Promoters y planners hacen las mismas preguntas — aquí van las respuestas.',
      items: [
        {
          q: '¿Con cuánta anticipación debemos reservar?',
          a: 'Las fechas de club y privadas suelen cerrarse con 4–8 semanas. La temporada alta de bodas se llena antes — manda la fecha temprano y la apartamos en lápiz mientras cotizamos.',
        },
        {
          q: '¿Viajas fuera de Houston?',
          a: 'Sí. El metro de Houston va incluido en la tarifa base. Viajes regionales en Texas y nacionales están disponibles con viaje y hotel por separado.',
        },
        {
          q: '¿Los invitados pueden pedir canciones?',
          a: 'En eventos privados, quinceañeras y bodas, sí — juntamos una lista corta de must-play / no-play con bachata, salsa, cumbia y más. En clubes el set va curado salvo que el promoter pida otra cosa.',
        },
        {
          q: '¿Qué estilos tocas?',
          a: 'Bachata, salsa, cumbia, merengue, reggaetón y clásicos tropicales latinos — mezclados para leer la sala desde los abuelos hasta la madrugada.',
        },
        {
          q: '¿Qué equipo llevas?',
          a: 'En clubes usamos los CDJs de la casa cuando hay. En eventos privados llevamos controlador pro, laptop de respaldo, iluminación básica a pedido y micrófono inalámbrico si hacen falta anuncios.',
        },
        {
          q: '¿Tienes seguro?',
          a: 'Hay cobertura de responsabilidad civil para reservas privadas y corporativas. Pide el certificado con tu cotización.',
        },
        {
          q: '¿Cuál es el depósito y la cancelación?',
          a: 'Un depósito del 30% asegura la fecha. Cancelaciones con 30+ días pueden mover el depósito a una nueva fecha una vez; dentro de 30 días el depósito no es reembolsable.',
        },
      ],
    },
    book: {
      title: 'Ver disponibilidad',
      copy: 'Cuéntanos la fecha y la forma de la noche. Enviamos cotización y siguientes pasos en 24 horas.',
      trust: [
        'Respuesta en 24 horas',
        'Depósito del 30% para apartar la fecha',
        'Reservas privadas y corporativas aseguradas',
      ],
      successTitle: 'Solicitud lista',
      successBody: 'Tu app de correo debería abrirse con los datos. Si no, escribe a',
      successBodyAfter: 'directamente.',
      name: 'Nombre',
      email: 'Correo',
      phone: 'Teléfono',
      date: 'Fecha del evento',
      eventType: 'Tipo de evento',
      guests: 'Número de invitados',
      city: 'Ciudad / venue',
      vibe: 'Vibe — 3 canciones que definen la noche',
      guestsPlaceholder: 'ej. 120',
      cityPlaceholder: 'Houston, Stereo Live, etc.',
      vibePlaceholder: 'Bachata, salsa, cumbia — artistas o tracks que marquen el tono',
      submit: 'Pedir cotización',
      note: 'Abre tu correo con la solicitud lista para enviar.',
      eventTypes: [
        { value: 'club', label: 'Club' },
        { value: 'wedding', label: 'Boda' },
        { value: 'quinceanera', label: 'Quinceañera' },
        { value: 'corporate', label: 'Corporativo' },
        { value: 'private', label: 'Fiesta privada' },
        { value: 'other', label: 'Otro' },
      ],
      mailSubject: 'Reservación DJ Cowboy',
      mailLabels: {
        name: 'Nombre',
        email: 'Correo',
        phone: 'Teléfono',
        date: 'Fecha del evento',
        eventType: 'Tipo de evento',
        city: 'Ciudad / venue',
        guests: 'Invitados',
        vibe: 'Vibe / 3 canciones',
      },
    },
    footer: {
      rights: 'DJ Cowboy · Houston, TX',
      rider: 'Rider',
    },
    mobileBar: 'Ver disponibilidad',
  },
}
