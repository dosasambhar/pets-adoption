
import SectionHead from "./SectionHead";
import {ImQuotesLeft} from 'react-icons/im';
import Card from "../UI/Card";
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import {testimonials} from '../data'
import { useState } from "react";


function Testimonials(){
    const [index , setIndex] = useState(0)
    const {name, quote,  avatar} = testimonials[index];

    const prevTestimonialHandler =() =>{
       
    }

    const nextTestimonialHandler =() =>{
        setIndex(prev => prev + 1);

    }



    return(
       <section className="testimonials">
        <div className="container testimonials_container">
            <SectionHead icon={<ImQuotesLeft/>} title="In Treatment" className="testimonials_head"></SectionHead>
            <br></br>
            <br></br>
            <Card className="testimonial">
                <div className="testimonial_avatar">
                    <img src={avatar} alt={name}></img>
                </div>
                <h4>{name}</h4>  
                  <p className="testimonial_quote">{quote}</p> 
                  
            </Card>
            <div className="testimonial_btn-container">

                <button className="testimonials_btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle/></button>

               <button className="testimonials_btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle/></button>

            </div>

        </div>
       </section>
    );
}

export default Testimonials;