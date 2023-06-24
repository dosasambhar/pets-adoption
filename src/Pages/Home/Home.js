

import Programs from '../../Components/Programs';
import MainHeader from '../../Components/MainHeader';
import Values from '../../Components/Values';
import FAQs from '../../Components/FAQs';
import Testimonials from '../../Components/Testimonials';


import './Home.css';

function Home(){
    return(
      <div>
      <MainHeader/>
      <Programs/> 
      <Values/>
      <FAQs/>
      <Testimonials/>
      
      </div>
     
    );      
}

export default Home;