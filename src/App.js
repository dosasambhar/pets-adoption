import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';
import Gallery from './Pages/Gallery/Gallery';
import Vaccine from './Pages/Vaccine/Vaccine';
import NotFound from './Pages/NotFoud/NotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='contacts' element={<Contacts/>}></Route> 
        <Route path='gallery' element={<Gallery/>}></Route>
        <Route path='vaccine' element={<Vaccine/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
        </Routes>
        <Footer/>
     
    </BrowserRouter>
  );
}

export default App;
