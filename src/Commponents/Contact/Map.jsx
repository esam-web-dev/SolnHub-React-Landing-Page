
import "./Contact.css";

const Map = () => {
  return (
    <div className='map-content'>
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13309.701089047889!2d36.286886855887644!3d33.490311023976105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0e7f862917b%3A0xe5da2f3c7217c400!2sAl%20Midan%2C%20Damascus%2C%20Syria!5e0!3m2!1sen!2snl!4v1779967780987!5m2!1sen!2snl"
        
        width="100%"
        height="450"
        
        style={{ border: 0 }}

        allowFullScreen=""
        
        loading="lazy"
        
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

    </div>
  );
};

export default Map;