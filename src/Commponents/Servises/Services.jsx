import sections from "../../assets/constants/data"
import SingleService from "../SingleService/SingleService"
import "./Services.css"

function Services(){
    return(<>
    <section className="services section-p bg-md-black" id="services">
        <div className="container">
            <div className="services-content">
                <svg width="1em" height="1em">
                    <linearGradient id="blue-gradient" x1= "100%" y1= "100%" x2="0%" y2="0%">
                        <stop stopColor="#55b3d5" offset="0%"></stop>
                        <stop stopColor="#5764de" offset="0%"></stop>
                    </linearGradient>
                </svg>

                <div className="item-list grid text-white text-center">
                    {sections.services.map((ser)=>{return(<SingleService key={ser.id} service={ser}/>)})}
                </div>
            </div>
        </div>key
    </section>
    
    </>)
}

export default Services