import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'

import { Blog, Blogs, Home } from '../pages'
import { Loader } from '../components'

const Router = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/blog:id' element={<Blog />} />
      </Routes>
    </Suspense>
  )
}

export default Router