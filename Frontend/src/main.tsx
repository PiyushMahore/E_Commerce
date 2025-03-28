import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home.tsx';
import App from './App.tsx';
import SignUp from './pages/signUp.tsx';
import ContactUs from './pages/contactUs.tsx';
import BestSellers from './pages/bestSellers.tsx';
import AllNewLaunches from './pages/allNewLaunches.tsx';
import AllHealthySnaking from './pages/allHealthySnaking.tsx';
import ExotixRange from './pages/exotixRange.tsx';
import Combos from './pages/combos.tsx';
import IndividualItem from './pages/individualItem.tsx';
import { UserContextProvider } from './context/userContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          <Route index element={<Home />} />
          <Route path='/account/register' element={<SignUp />} />
          <Route path='/collections/all' element={<BestSellers />} />
          <Route path='/collections/new-launches' element={<AllNewLaunches />} />
          <Route path='/collections/wholesome-mixes-for-anytime-snacking' element={<AllHealthySnaking />} />
          <Route path='/collections/exotic-fruits-berries' element={<ExotixRange />} />
          <Route path='/collections/combos' element={<Combos />} />
          <Route path='/products/:productName' element={<IndividualItem />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </UserContextProvider>
)
