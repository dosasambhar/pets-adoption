import Image from '../Images/th (1).jpg';
import SectionHead from './SectionHead';
import {GiCutDiamond} from 'react-icons/gi';
import {values} from '../data';
import Card from '../UI/Card';
import { Link } from 'react-router-dom';
import {AiFillCaretRight} from 'react-icons/ai';


function Values(){
    return(
       <section className='values'>
        <div className="container values_container">
            <div className="values_left">
                <div className="values_image">
                    <img src={Image} alt='img'/>

                </div>
            </div>
            <div className="values_right">
             
                <SectionHead icon={<GiCutDiamond/>} title="Newly Added Furry Friends"></SectionHead>

                <p> <b>Find Your New Furry Friend in Your Neighborhood</b></p>
              

                <div className="values_wrapper">
                    {
                        values.map(({ id, img, info, path}) => {
                            return <Card className="values_value">
                                <span>{img}</span>
                                <br></br>
                               <medium>{info}</medium>
                               <br></br>
                               <br></br>
                               <Link to={path} className='styled-btn sm'>Learn More <AiFillCaretRight/> </Link>
                            </Card>
                        })
                    }

                </div>

            </div>
        </div>

       </section>
    );
}

export default Values; 