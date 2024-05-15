import "./epic.scss";
import { useEffect, useRef, useState } from "react";
import Calendar from "../../components/calendar/Calendar";
import Cursor from "../../components/cursor/Cursor";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
};

const EPIC = () => {
    const [epicData, setEpicData] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -200, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 200, // Adjust the scroll distance as needed
      behavior: "smooth",
    });
  };
    
    useEffect(() => {
        const fetchEpicData = async () => {
          try {
            setError(null);
            setLoading(true);
            const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
            let url = `https://api.nasa.gov/EPIC/api/natural/date/${selectedDate}?api_key=${NASA_KEY}`;
    
            const response = await fetch(url);
    
            if (!response.ok) {
              if (response.status === 404) {
                setError(`No data available for date: ${selectedDate}`);
              } else {
                setError("Oops! Something went wrong.");
              }
              return;
            }
    
            const data = await response.json();
            setEpicData(data);
          } catch (error) {
            console.error(error);
            setError("Oops! Something went wrong.");
          } finally {
            setLoading(false);
          }
        };

        if (selectedDate) {
            fetchEpicData();
        }
    }, [selectedDate]);
   
  
    const handleDateChange = (date) => {
      setError(null);
      setSelectedDate(date); 
    };


  return (
    <div className="epic">
        <Cursor />
        <Link to="/">
        <div className="home">
          <i className="fa-solid fa-house"></i>
        </div>
        </Link>
        <section className="intro">
            <motion.div className="textContainer"  variants={textVariants} initial="initial" animate="animate">
                <motion.h2>Earth Polychromatic Imaging Camera</motion.h2>
                <motion.h1>What is Epic?</motion.h1>
            </motion.div>
            <motion.div className="infoContainer" variants={textVariants} initial="initial" animate="animate"> 
                <motion.p>The Earth Polychromatic Imaging Camera (EPIC) is a NASA service that offers daily images of Earth, 
                    captured from the Earth-Sun Lagrange point. Each day, new high-resolution images are featured, along with 
                    detailed metadata such as the image name, date, and positional coordinates. EPIC provides stunning views of Earth's 
                    surface and atmosphere, as well as unique moments like lunar transits. This collection is a valuable 
                    resource for earth science enthusiasts, educators, and anyone interested in observing our planet from space. 
                    Access these breathtaking images and metadata through NASA's EPIC API, which helps explore and understand Earth's 
                    dynamic environment.</motion.p>
            </motion.div>
        </section>
        <section className="body">
           <Calendar onDateChange={handleDateChange}/>
           <div className="container">
                {loading ? ( // Render loading state if loading is true
                    <div className="loadingState">
                    <motion.i className="fas fa-gear" animate={{ rotate: [0, 360], transition: { duration: 1, repeat: Infinity } }}></motion.i> 
                    </div>
                ) : error ? ( // Render error state if error is not null
                  <div className="errorState">
                    <motion.i class="fa-solid fa-triangle-exclamation"  animate={{ y: [0, -10, 0], transition: { duration: 0.5, repeat: Infinity } }}></motion.i>
                    <p>{error}</p>
                  </div>
                ) : epicData.length > 0 ? (
                    <motion.div className="carousel">
                        <motion.div className="inner-carousel" drag="x" >
                        {epicData.map((image) => {
                            return (
                                <motion.div className="item">
                                    <img
                                        src={`https://epic.gsfc.nasa.gov/archive/natural/${image.date.split(" ")[0].replace(/-/g, "/")}/png/${image.image}.png`}
                                        alt={image.caption}
                                    />
                                     <div className="cardInfo">
                                        <h2>{image.date}</h2>
                                        <p>{image.caption}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                        </motion.div>
                    </motion.div>    
                ) : null}
            </div>
        </section>
       
    </div>
  )
}

export default EPIC;

{/* <motion.div className="imagesContainer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                      <motion.div className="scrollContainer" ref={scrollContainerRef} drag="x" dragConstraints={{ left: -300 * epicData.length + window.innerWidth, right: 0 }}>
                        {epicData.map((image) => (
                          <motion.div className="card" key={image.identifier} whileHover={{ scale: 1.05 }}>
                            <img
                              src={`https://epic.gsfc.nasa.gov/archive/natural/${image.date.split(" ")[0].replace(/-/g, "/")}/png/${image.image}.png`}
                              alt={image.caption}
                            />
                            <div className="cardInfo">
                              <h2>{image.date}</h2>
                              <p>{image.caption}</p>
                            </div>
                          </motion.div>
                        ))}
                     </motion.div>
                    </motion.div> */}
                   
