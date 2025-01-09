import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { Frontpage } from './pages/Frontpage'
import { Contactpage } from './pages/Contactpage'
import { Login } from './pages/Login'
import { Productpage} from './pages/Productpage'
import { ProductDetailspage} from './pages/ProductDetailspage'
import { NotFound } from './pages/NotFound'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
      <Route index element={<Frontpage/>}></Route>
      <Route path='/contact' element={<Contactpage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/products' element={<Productpage/>}></Route>
      <Route path='/productDetails' element={<ProductDetailspage/>}></Route>
      <Route path='/*' element={<NotFound/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
