import type { Config } from '@react-router/dev/config'

export default {
  ssr: false,
  prerender: [
    '/',
    '/services/custom-website',
    '/services/small-business-website',
    '/services/online-store',
    '/services/website-redesign',
    '/services/web-app-portal',
    '/services/seo-management',
    '/services/website-care',
    '/es',
    '/es/services/custom-website',
    '/es/services/small-business-website',
    '/es/services/online-store',
    '/es/services/website-redesign',
    '/es/services/web-app-portal',
    '/es/services/seo-management',
    '/es/services/website-care',
    '404',
  ],
} satisfies Config
