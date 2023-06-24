import Header from '../../Components/Header';
import HeaderImage from '../../Images/img.jpg';
import './About.css';
import StoryImage from '../../Images/dog2.jpg';
import VisionImage from '../../Images/3.jpg';
import MissionImage from '../../Images/Cute-Dog-Images.jpg';


function About(){
    return(
        <div>
            <Header> 
             < img src={HeaderImage}></img>
             <section className='about-section'>
             <h2>About Us</h2>
         <p> We know pet adoption, because we're adopters too. We think it's just about the best thing you can do. But we'll be real: it can be a lengthy (paperwork-filled) process. Adopting a pet comes with a sense of responsibility. You commit to providing a safe and nurturing environment, meeting their physical and emotional needs, and ensuring their health and happiness</p>
         </section>
            </Header>

        <section className='about_story'>
            <div className='container about_story-container'>
                <div className='about_section-image'>
                    <img src={StoryImage} alt='img'></img>

                </div>
                <div className='about_section-conent'>
                   <h1>Don’t Buy Dogs, Adopt them</h1>
                   <p>
                   Dogs are the most beautiful creatures in the earth who are loyal, adorable, caring and true friend to human being. We believe that everyone deserves the better life so they do. We are in a favor of adopting a dog with out selling or purchasing. We believe there is nothing in this world which can set the price for them.


                   </p>
                </div>
            </div>
        </section>


        <section className='about_Vision'>
            <div className='container about_Vision-container'>
               
                <div className='about_section-conent'>
                   <h1>Our Values</h1>
                   <p>
                   We believe pets are family, you can’t buy a family member.Pet adoption is a decision that goes beyond simply bringing an animal into your home. It reflects a set of core values that promote compassion, responsibility, and love. By adopting a pet, you not only change the life of an animal in need but also contribute to a more humane and caring society. In this article, we will explore the values associated with pet adoption and why it is a meaningful choice for individuals and families.


                   </p>
                </div>
                <div className='about_section-image'>
                    <img src={VisionImage} alt='img'></img>

                </div>
            </div>
        </section>
 
        <section className='about_mission'>
            <div className='container about_mission-container'>
                <div className='about_section-image'>
                    <img src={MissionImage} alt='img'></img>

                </div>
                <div className='about_section-conent'>
                   <h1>Adopt Dog Organization</h1>
                   <p>
                   We believe everyone deserve love, care and affection. We want to have better home, shelter and food for our furry friends. Come forward to support them, to love them and find your buddy with us.By adopting, you directly contribute to saving lives. Shelters and rescue organizations are often overcrowded, and adopting a pet frees up space and resources for other animals in need.


                   </p>
                </div>
            </div>
        </section>


        </div>
    );
}
 
export default About;