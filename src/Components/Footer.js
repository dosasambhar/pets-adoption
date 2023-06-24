
import {Link} from 'react-router-dom';
import Logo from '../Images/th.jpg';
import {FaLinkedin} from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import FooterImg from '../Images/logo.jpg';




function Footer(){
    return(
        <footer>
               <div className='container footer_container'>
                 <article>
                   <Link to="/" className='logo'>
                     <img src={FooterImg} alt="Footer Logo"></img>
                   </Link>

                  <p>
                  We have hundreds of animals waiting eagerly to find their forever homes. Many of them have been rescued from the streets and each of them is deserving of a loving, caring family they can call their own. 
                  </p>
                    <div className="footer_socials">
                        <a href='https://in.linkedin.com/' target="_blank" rel='noreferrer noopener'><FaLinkedin/>

                        </a>
                        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer noopener' ><FaFacebookF/>

                        </a>
                         <a href='https://twitter.com/?lang=en-in' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/>

                         </a>
                         <a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'><AiFillInstagram/>

                         </a>

                    </div>
                 
                 </article>
                 <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/contacts">Contacts</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/vaccine">Vaccine</Link>
                 </article>

                 <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">FAQs</Link>
                 </article>

                 <article>
                    <h4>Get In Touch</h4>
                    <Link to="/s">Support</Link>
                    <Link to="/Contacts">Contact Us</Link>
                 </article>

               </div>
               <div className="footer_copyright">
                <small>Pets Adoption PVT LTD &copy;</small>

               </div>
        </footer>
    );
}

export default Footer;