const CONFIG = {
  // profile setting (required) 
  profile: {
    name: 'PointsNerd',
    image: '/icon.png',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Reward Point Nerd',
    bio: 'Freebies give me a kick!',
    email: '',
    linkedin: '',
    github: '',
    instagram: '',
  },
  // blog setting (required)
  blog: {
    title: 'PointsNerd',
    description: 'Welcome to PointsNerd!',
    theme: 'light' // ['light', 'dark', 'auto']
  },
  projects: [
    {
      name: '',
      href: ''
    }
  ],
  // CONFIG configration (required)
  link: 'https://pointsnerd.in',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Credit Card', 'India', 'Reward Points', 'Vistara', 'Club', 'Axis', 'HDFC', 'SBI'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: false,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:titl',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
