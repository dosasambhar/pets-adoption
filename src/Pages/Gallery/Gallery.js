import './Gallery.css';
import HeaderImage from '../../Images/dog2.jpg';
import Header from '../../Components/Header';

function Gallery(){

    const galleryLength = 15;
    const Images = []

    for(let i = 0; i < galleryLength; i++ ){
        Images.push(require(`../../Images/gallery${i}.jpg`))
    }

    console.log(Images);

    return(
        <div>
            <img className='gallery-img' src={HeaderImage} alt='img'></img>
            
            <div className='gallery-head'>
         <Header title="Our Gallery" >
         ! Here you will find a delightful collection of adorable pets eagerly waiting to find their forever homes. Take a moment to browse through these charming photographs and heartfelt stories. Each pet has a unique tale to tell, and we hope you'll consider opening your heart and home to one of these deserving companions. Remember, adopting a pet not only brings joy to your life but also saves a precious life. Let's find the perfect match for you!
         </Header>

         <section className='gallery'>
            <div className='container gallery_container'>
                {
                    Images.map((image, index)=>{
                        return <article key={index}>
                           <img src={image} alt={`Gallery Image ${index+1}`}></img>
                        </article>
                    }

                    )
                }

            </div>
         </section>


         </div>




        </div>
    );
}

export default Gallery;