import SiOpenaigym from 'react-icons/si';
import CountUp from 'react-countup';
import pet1 from './Images/pet1.jpg';
import pet2 from './Images/pet2.jpg';
import pet3 from './Images/pet3.jpg';






export const links = [
    {
        name: "Home",
        path: '/'
    },

    {
        name: "About",
        path: '/About'
    },

    {
        name: "Gallery",
        path: '/Gallery' 
    },

    {
        name: "Vaccine",
        path: '/Vaccine' 
    },

    {
        name: "Contacts",
        path: '/Contacts' 
    },

]


export const programs = [
    {
        id:1,
      
        count:<CountUp end={18000} 
        duration={6}/>,
        title: "PETS PLACED ANNUALLY",
        info: "Every year, we place nearly 18,000 pets into loving homes. ",
        path: "/programs/111"
    },

    {
        id:2,
        
        count:<CountUp end={65000} 
        duration={6}/>,
        title: "VACCINATIONS",
        info: "Administered vaccinations given to help prevent disease. ",
        path: "/programs/222"
    },

    {
        id:3,
     
        count:<CountUp end={200}
        duration={6}/>,
        title: "FOSTER PARENTS",
        info: "Provide foster homes for almost 500 animals yearly. ",
        path: "/programs/333"
    },  

    {
        id:4,
       
        count:<CountUp end={42000} 
        duration={6}/>,
        title: "ADDITIONAL ADOPTIONS",
        info: "Facilitated through our nation wide adoption events ",
        path: "/programs/444"   
    },

]




export const values = [
    {
        id: 1,
        img: <img src={pet1} alt='img'/>,
        info: "Brownie 2 Month Old Indie Dog for Adoption in DELHI.",
        path: "/values/111"
    },

    {
        id: 2,
        img: <img src={pet2} alt='img'/>,
        info: "Zorro 2 Month Old Indie Dog for Adoption in JABALPUR.",
        path: "/values/222"
    },

    {
        id: 3,
        img: <img src={pet3} alt='img'/>,
        info: "Snowy 1.7 Month Old Corgi Dog for Adoption in BHOPAL.",
        path: "/values/333"
    },

    {
        id: 4,
        img: <img src={pet3} alt='img'/>,
        info: "Snowy 1.7 Month Old Corgi Dog for Adoption in BHOPAL.",
        path: "/values/333"
    },

   
]   




export const faqs = [

    {
        id: 1,
        question: " How much does adopting a dog cost? ",
        answer: "The cost of adopting a dog can vary depending on the location and the organization you adopt from. Some shelters or rescue groups may charge an adoption fee, which can include the cost of vaccinations, spay/neuter surgery, and other veterinary care. This fee can range anywhere from a few hundred rupees to a few thousand rupees."

    },

    {
        id: 2,
        question: "Can I adopt a dog for free in India?" ,
        answer: "Yes, there are no charges for pet adoption on our platform. We are strictly against of Dog Buying or selling."
    },

    {
        id: 3,
        question: "Is it cheaper to adopt a dog?",
        answer: "Yes, it is free on our platform.However, it is important to keep in mind that even if you adopt a dog for free, there will still be ongoing expenses such as food, veterinary care, and training. It is important to budget for these expenses before adopting a dog to ensure that you are able to provide for the furbaby’s needs."

    },

    {
        id: 4,
        question: "Is it legal to adopt dog in India?",
        answer: "Yes, it is legal to adopt a dog in India. However, there may be local regulations that apply, so it is important to check with your housing society before adopting a dog or puppy."

    },

    {
        id: 5,
        question: "How can I get a free dog",
        answer: "If you are interested in adopting a dog, login to our website and browse through the available dogs. Once you find a dog that you are interested in, you can get connected with dog parent or shelter."

    },

    {
        id: 6,
        question: "What are the legal formalities for adoption",
        answer: "If you are interested in adopting a dog, login to our website and browse through the available dogs. Once you find a dog that you are interested in, you can get connected with dog parent or shelter."

    }
]







export const testimonials = [
    {
        id:1,
        name: "Ruby",
        quote: "Ruby was found in a paralytic state by good samaritans. She risks permanent paralysis without proper care. She needs your support to recover and receive the care she needs. Please donate towards her recovery.",
        avatar: require("./Images/dog-nose.jpg")
    },

    {
        id:2,
        name: "Chutku",
        quote: "Chutku was found with a broken pelvis and is in excruciating pain. This little boy requires your support so he can receive the best of care that will ensure he can walk again. Please donate towards his treatment.",
        avatar: require("./Images/dog2.jpg")
    },

    {
        id:3,
        name: "Kalu",
        quote: "Kalu Mama was found in a dump, barely conscious after being viciously attacked by big dogs. A little girl discovered him and brought him to us for treatment. This 2-month-old has bite marks all over his body and is unable to even stand. Please help Kalu mama by donating towards his treatment and care.",
        avatar: require("./Images/dog3.jpg")
    },

]