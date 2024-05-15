import { useEffect, useState } from "react";
import Calendar from "../../components/calendar/Calendar";
import Cursor from "../../components/cursor/Cursor";
import "./apod.scss";
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

const APOD = () => {

  const [apodData, setApodData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
      const fetchApodData = async () => {
        try {
          setError(null);
          setLoading(true);
          const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
          let url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

          if (selectedDate) {
            url += `&date=${selectedDate}`;
          }
  
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
          setApodData(data);
        } catch (error) {
          console.error(error);
          setError("Oops! Something went wrong.");
          console.log(error)
        }finally {
            setLoading(false); 
        }
      };
  
      fetchApodData();
  }, [selectedDate]);

  const handleDateChange = (date) => {
    setError(null);
    setSelectedDate(date); 
  };

  return (
    <div className="apod">
        <Cursor />
        <Link to="/">
        <div className="home">
          <i class="fa-solid fa-house"></i>
        </div>
        </Link>
        <section className="intro">
            <motion.div className="textContainer"  variants={textVariants} initial="initial" animate="animate">
                <motion.h2>Astronomy Picture of the Day</motion.h2>
                <motion.h1>What is APOD?</motion.h1>
            </motion.div>
            <motion.div className="infoContainer" variants={textVariants} initial="initial" animate="animate"> 
                <motion.p>The Astronomy Picture of the Day (APOD) is a service provided by NASA that offers daily images 
                showcasing the wonders of the cosmos. Each day, a new breathtaking image, accompanied by an informative 
                description, is featured on the APOD website. These images range from stunning photographs of celestial 
                bodies to captivating views of space phenomena, providing a glimpse into the beauty and mysteries of the 
                universe. With its vast collection of awe-inspiring images, APOD serves as a valuable
                resource for astronomy enthusiasts, educators, and anyone curious about the wonders of space.</motion.p>
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
                ) : apodData ? ( 
                    <>
                    <div className="left">
                      {apodData.media_type === 'image' ? ( // Render image if media type is image
                        <img src={apodData.url} alt="" />
                      ) : apodData.media_type === 'video' ? ( // Render video if media type is video
                        <iframe
                          src={apodData.url}
                          title="APOD Video"
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      ) : null}
                    </div>
                    <div className="right">
                        <h2>{apodData.title}</h2>
                        <p>Image Credit: {apodData.service_version}, NASA</p>
                        <p>{apodData.date}</p>
                        <p>{apodData.explanation}</p>
                    </div>
                    </>
                ) : null}
           </div>
        </section>
    </div>
  )
}

export default APOD;