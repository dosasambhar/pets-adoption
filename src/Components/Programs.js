import {FaCrown} from 'react-icons/fa';
import SectionHead from './SectionHead';
import { programs } from '../data';
import Card from '../UI/Card';
import {Link} from 'react-router-dom';
import {AiFillCaretRight} from 'react-icons/ai';


function Programs(){
    return(
        <section className="programs" >
            <div className="container programs_container">
                <SectionHead  icon={<FaCrown/>} title="Achievements"/>

            </div>
            <div className='programs_wrapper'>
                {
                    programs.map(({id, icon,count, title, info, path})=>{
                        return (
                           <div>
                              <Card className="programs_program"  key={id}>
                               <span>{icon}</span>
                               <h3>{title}</h3>
                               <br></br>
                               <h1><b>{count}</b></h1>
                               <medium>{info}</medium>
                               <br></br>
                               <br></br>
                               <Link to={path} className='styled-btn sm'>Learn More <AiFillCaretRight/> </Link>
                          </Card>
                           </div>
                         
                        );
                    })
                } 
            </div>
 
        </section>
    );
}

export default Programs;