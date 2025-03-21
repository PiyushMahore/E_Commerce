import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home.tsx';
import App from './App.tsx';
import IndividualItem from './pages/individualItem.tsx';
import BestSellers from './pages/bestSellers.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
        <Route index element={<Home />} />
        <Route path='/all' element={<BestSellers />} />
        <Route path='product/:id' element={<IndividualItem />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
