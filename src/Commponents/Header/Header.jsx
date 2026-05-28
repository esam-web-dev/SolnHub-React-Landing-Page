import Navbar from '../Navbar/Navbar';
import './Header.css'
import { FaPaperPlane } from 'react-icons/fa';

function Header() {
    return(
        <header>
            <Navbar/>
            <div className='container'>
                <div className='header-content text-center flex flex-column' style={{paddingTop:"130px", paddingBottom:"50px"}}>
                    <h1 className='text-uppercase header-title'>markiting solution agency</h1>
                    <p className='text-lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius in, architecto accusamus quasi similique cupiditate quaerat!</p>
                    <a href='/' className='btn header-btn btn-blue'>
                    <FaPaperPlane/>
                    <span>get started</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

    export default Header