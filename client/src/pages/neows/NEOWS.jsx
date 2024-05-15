import { Link } from "react-router-dom";
import Cursor from "../../components/cursor/Cursor";
import "./neows.scss";
import { motion } from "framer-motion";
import Calendar2 from "../../components/calendar2/Calendar2";
import { useState } from "react";

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

const NEOWS = () => {

  const [selectedRange, setSelectedRange] = useState(null);

  const handleDateChange = (range) => {
    setSelectedDate(range); 
  };

  return (
    <div className="neows">
    <Cursor />
        <Link to="/">
        <div className="home">
          <i class="fa-solid fa-house"></i>
        </div>
        </Link>
        <section className="intro">
            <motion.div className="textContainer"  variants={textVariants} initial="initial" animate="animate">
                <motion.h2>Near Earth Object Web Service</motion.h2>
                <motion.h1>What is NeoWs?</motion.h1>
            </motion.div>
            <motion.div className="infoContainer" variants={textVariants} initial="initial" animate="animate"> 
                <motion.p>The NASA Near-Earth Object Web Service (NEOWS) is a remarkable resource provided by NASA, offering a wealth of information about 
                near-Earth objects (NEOs) and their trajectories. This service provides daily updates on NEOs, including asteroids and comets, offering valuable 
                insights into their orbits and potential impact risks. With the NEOWS API, users can access a treasure trove of data about NEOs, from their sizes 
                and velocities to their closest approach dates to Earth. This information is crucial for astronomers, researchers, and space enthusiasts alike, allowing 
                them to monitor and study NEOs and assess any potential threats they may pose to our planet. Each day, the NEOWS API delivers new data and updates on NEOs, 
                helping to enhance our understanding of these celestial bodies and their behavior. Whether you're a professional astronomer, an educator teaching about space, 
                or simply someone fascinated by the wonders of the cosmos, the NEOWS API offers a gateway to explore the mysteries of near-Earth objects and the dynamic universe beyond.
                </motion.p>
            </motion.div>
        </section>
        <section className="body">
           <Calendar2 onDateChange={handleDateChange}/>
        </section>
    </div>
  )
}

export default NEOWS;