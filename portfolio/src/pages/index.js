import { lazy } from 'react'

const Home  = lazy(() => import('./Home'))
const Project = lazy(() => import('./Project'))

export { Home, Project }