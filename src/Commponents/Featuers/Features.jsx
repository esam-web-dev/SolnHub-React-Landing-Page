import SingleFeature from "./SingleFeature"
import "./Featuers.css"
import sections from "../../assets/constants/data"



function Features() {
return(<section className="features section-p bg-black" id="features">
    <div className="container">
        <div className="features-content">
            <div className="item-list text-white">
                {sections.features.map((feature)=>{return(
                    <SingleFeature key={feature.id} feature={feature}/>
                )})}
            </div>
        </div>
    </div>
</section>)
}

export default Features