import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter , Route, Routes} from 'react-router-dom';

import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage'
import Pricing from './landing_page/pricing/Pricing.jsx'
import Product from './landing_page/products/ProductPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import NavBar from './landing_page/NavBar.jsx'
import Footer from './landing_page/Footer.jsx'
import Signup from './landing_page/signup/Signup.jsx';
import NotFound from './landing_page/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/support' element={<SupportPage/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    <Footer/>
  </BrowserRouter>
)
