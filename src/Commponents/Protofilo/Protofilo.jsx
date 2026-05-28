import sections from "../../assets/constants/data"
import "./Protofilo.css"

function Protofilo() {
    return(
    <section className="portfolio section-p bg-dark" id="portfolio">
        <div className="container">
            <div className="portfolio-content">
                <div className="section-t text-center">
                    <h3>Our Portfalio</h3>
                    <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. In saepe animi, itaque maxime nobis recusandae perspiciatis, quo quae alias iusto voluptatem commodi velit. Adipisci soluta minus labore illum impedit nemo?</p>
                </div>

                <div className="item-list text-center text-white grid">
                    {sections.portfolio.map((p)=>{return(
                        <div className="item flex-center flex-column translate-effect" key={p.id} style={{
                            background:`url(${p.image})`
                        }}>
                            <div className="item-title fs-25 fw-6">{p.title}</div>
                            <div className="item-title fs-25 fw-6">{p.text}</div>

                        </div>
                    )})}
                </div>
            </div>
        </div>

    </section>
    )
}



export default Protofilo