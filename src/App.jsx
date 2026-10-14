import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import About from './pages/About'
import ComingSoon from './pages/ComingSoon'
import Home from './pages/Home'
import Services from './pages/Services'
import NotFound from './pages/NotFound'

// Replace each <ComingSoon /> with the real page as it gets built.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<ComingSoon title="Products" />} />
        <Route path="products/:slug" element={<ComingSoon title="Product Category" />} />
        <Route path="contact" element={<ComingSoon title="Contact Us" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
