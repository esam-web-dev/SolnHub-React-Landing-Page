import images from '../../assets/constants/images'
import './About.css'


function About() {
    return(
    <section className='about section-p bg-dark' id='about'> 
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className='content-left'>
                    <img src={images.about_main_img} alt=''></img>
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3>About Us</h3>
                    </div>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores ab in architecto optio, soluta deserunt perspiciatis quam nihil, excepturi sunt quo, rem accusantium nulla consectetur sapiente neque consequatur labore?</p>
                    <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores ab in architecto optio, soluta deserunt perspiciatis quam nihil, excepturi sunt quo, rem accusantium nulla consectetur sapiente neque consequatur labore?</p>

                </div>
            </div>
        </div>
    </section>)
}

export default About