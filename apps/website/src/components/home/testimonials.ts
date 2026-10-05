import { m } from '#/paraglide/messages'

type Testimonial = {
  quote: () => string
  originalQuote: string
  author: string
  source: 'X' | 'Reddit'
  date: string
  url: string
  language?: string
}

export const testimonials: readonly Testimonial[] = [
  {
    quote: m['testimonials.quotes.daniel_lockyer'],
    originalQuote: "I beg you all not to install Logitech Options+ and to use LinearMouse",
    author: "Daniel Lockyer",
    source: "X",
    date: "2026-01-07",
    language: "en",
    url: "https://x.com/DanielLockyer/status/2008917684314898536",
  },
  {
    quote: m['testimonials.quotes.inner_association448'],
    originalQuote: "Just set it to 'linear' and halfway speed and now scrolling feels as smooth as in Windows.",
    author: 'Inner-Association448',
    source: 'Reddit',
    date: '2026-03-29',
    url: 'https://www.reddit.com/r/macmini/comments/1s6itds/if_you_are_coming_to_macos_from_windows_like_me/',
  },
  {
    quote: m['testimonials.quotes.matt_emp'],
    originalQuote: 'linearmouse rocks, it just works',
    author: '@matt_emp',
    source: 'X',
    date: '2026-09-01',
    url: 'https://x.com/matt_emp/status/2094860468636824023',
  },
  {
    quote: m['testimonials.quotes.sercan_solmaz'],
    originalQuote: "çözüm: linearmouse (ivmeyi kapatır, windows'taki o net ve keskin imleç kontrolünü geri verir.)",
    author: "Sercan Solmaz",
    source: "X",
    date: "2025-12-12",
    language: "tr",
    url: "https://x.com/sercansolmaz/status/1999388754537251028",
  },
  {
    quote: m['testimonials.quotes.that_josh_guy'],
    originalQuote: "Replaces the god awful Logi Options+ with a native app, that actually works well.",
    author: "That Josh Guy",
    source: "X",
    date: "2026-06-07",
    language: "en",
    url: "https://x.com/thatjoshguy69/status/2063654962907758881",
  },
  {
    quote: m['testimonials.quotes.transporter_accident'],
    originalQuote: "This app is slept on. So much better than Logitech Options.",
    author: "TransporterAccident_",
    source: "Reddit",
    date: "2026-07-15",
    language: "en",
    url: "https://www.reddit.com/r/MacOS/comments/1uw4p7p/comment/oxmdwhl/",
  },
  {
    quote: m['testimonials.quotes.death02620085'],
    originalQuote: "LinearMouseとゆうものをインストールしたら戻るボタン機能し快適になたよ",
    author: "@death02620085",
    source: "X",
    date: "2026-09-30",
    language: "ja",
    url: "https://x.com/death02620085/status/2105280840267911451",
  },
  {
    quote: m['testimonials.quotes.daniel_dunderfelt'],
    originalQuote: 'The only third party app that solves it is LinearMouse which is what I’m using currently.',
    author: 'Daniel Dunderfelt',
    source: 'X',
    date: '2026-08-22',
    url: 'https://x.com/ddunderfelt/status/2091211174633263574',
  },
]
