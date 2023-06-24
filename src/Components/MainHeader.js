import { useNavigate } from "react-router-dom";
import './MainHeader.css';
import Image from '../Images/adopt.jpg';
   


function MainHeader(props){

    const navigate = useNavigate();
    return(
        <header className="main_header">
            
            <div className="container main_header-container">
                
                <div className="main_header-right">
                    <div className="main_header-circle"></div>
                    <div className="main_header-image">
                       <img src={Image} alt="img"></img>
                    </div>
                </div>

                <div className="main_header-left">
                    <h6>We are their voices</h6>
                    <h1><b>Re-Home and Adopt a Pet in India</b></h1>
                    <br></br>
                    <h4>Every Pet Deserves a Good Home. #Adoptlove</h4>
                    <br></br>
                    <p>
                        <h6>Let them know someone cares. Rescue the needy</h6>
        <button onClick={() => navigate("/Contacts")} className="styled-btn" >Adopt a Pet</button>
      </p>
                    
                </div>
            </div>

        </header>
    );
} 

export default MainHeader;
  