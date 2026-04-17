import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('../src/pages/Home.tsx'),
  route('services/:slug', '../src/pages/ServicePage.tsx'),
  route('es', '../src/pages/HomeEs.tsx'),
  route('es/services/:slug', '../src/pages/ServicePageEs.tsx'),
  route('404', '../src/pages/NotFound.tsx'),
  route('*', '../src/pages/NotFoundCatchAll.tsx'),
] satisfies RouteConfig
