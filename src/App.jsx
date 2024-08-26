import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import footer from './components/footer'
import Navbar from './components/navbar'
import PrivacyPolicy from './screens/PrivacyPolicy'
import AboutUs from './screens/AboutUs'
import Author from './screens/Author'
import Home from './screens/Home'
import Blog from './screens/Blog'
import BlogPost from './screens/BlogPost'
import Category from './screens/Category'
import Contact from './screens/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/> 
      <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
      <Route path='/about' element={<AboutUs />}/>
      <Route path='/author' element={<Author />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/blog-post' element={<BlogPost />}/>
      <Route path='/category' element={<Category />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <footer/>
    </BrowserRouter>
  )
}

export default App
