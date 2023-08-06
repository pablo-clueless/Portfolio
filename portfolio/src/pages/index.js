import { lazy } from 'react'

const Blog  = lazy(() => import('./Blog'))
const Blogs  = lazy(() => import('./Blogs'))
const Home  = lazy(() => import('./Home'))

export {
  Blog,
  Blogs,
  Home,
}