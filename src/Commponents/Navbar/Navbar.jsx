import { useState } from "react"
import { FaSkype, FaTwitter, FaVimeo } from "react-icons/fa"
import { IoMdRocket } from "react-icons/io"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {

    const [NavToggle, setNavToggle] = useState(false)
    function navHandular(){
        return setNavToggle(!NavToggle)
    }
    return(
        <nav className="navbar w-100 flex">
            <div className="container w-100">
                <div className="navbar-content flex fw-7">
                    <div className="brand-and-toggler flex flex-between w-100">
                        <Link to="/" className="navbar-brand fs-26">SolnHub.</Link>
                        <div type="button" className={`hamburger-menu ${NavToggle? 'hamburger-menu-change':""}`} onClick={navHandular}>
                            <div className="bar-top"></div>
                            <div className="bar-middle"></div>
                            <div className="bar-bottom"></div>
                        </div>
                    </div>

                    <div className={`navbar-collapse ${NavToggle ? 'show-navbar-collapse':''}`}>
                        <div className="navbar-collapse-content">
                            <ul className="navbar-nav">
                                <li className="text-white">
                                    <a href = "#about">About</a>
                                </li>
                                <li className="text-white">
                                    <a href = "#features">Featuers</a>
                                </li>
                                <li className="text-white">
                                    <a href = "#">Pricing</a>
                                </li>
                                <li className="text-white">
                                    <a href = "#contact">Contacts</a>
                                </li>
                            </ul>
                            <ul className="navbar-social flex">
                                <li className="text-white">
                                    <Link to="" className="flex flex-center"><FaTwitter/></Link>
                                </li>
                                <li className="text-white">
                                    <Link to="" className="flex flex-center"><FaSkype/></Link>
                                </li>
                                <li className="text-white">
                                    <Link to="" className="flex flex-center"><FaVimeo/></Link>
                                </li>
                            </ul>
                            <div className="navbar-btns">
                                <button type="button" className="btn">
                                    <IoMdRocket/>
                                    <span>get started</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </nav>
    )
}

    export default Navbar