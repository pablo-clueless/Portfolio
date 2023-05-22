import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { Loader } from '../components'
import { Home } from '../pages'

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Suspense>
  )
}

export default Router