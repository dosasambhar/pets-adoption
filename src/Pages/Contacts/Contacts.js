import Header from '../../Components/Header';
import HeaderImage from '../../Images/1.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import './Contacts.css';
import { useState } from 'react';

 function Contacts(){
 


  return( <div>

  <Header>
    <img src={HeaderImage} alt='img'></img>
    <div className='contact-section'>
    <h2>Looking for Pets.</h2>
    <p>We will notify you when a new dog becomes available for adoption.</p>
    </div>
  </Header>




    <div className='contacts-form'>
  <form >
    <section className='form-container'>
    <h1>Contact <span>Here</span></h1>
    <div>
    <label>Name*</label>
    <input type='text' name='name' id='' placeholder='Enter Name'></input>
    </div>

    <div>
    <label>Email*</label>
    <input type='email' name='email' id='' placeholder='example@gmail.com'></input>
    </div>

    <div>
    <label>Phone No.*</label>
    <input type='phone' name='phone' id='' placeholder='+91'></input>
    </div>

    <div>
      <label>Message</label>
      <textarea name='message' id='' cols='30' rows='10' placeholder='Type Here'></textarea>
    </div>

    <div>
      <button type='submit'>SUBMIT</button>
    </div>
    </section>
  </form>
  </div>
      
<section className='contact'>
  <div className='container contact_container'>
    <div className='contact_wrapper'>
      <a href='mailto:jhaurvija2002@gmail.com' target='_blank' rel='noreferrer noopener'><MdEmail/></a>

      <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer noopener'><BsMessenger/></a>

      <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>

    </div>

  </div>

</section>

  
  </div>
    );
 }

export default Contacts;