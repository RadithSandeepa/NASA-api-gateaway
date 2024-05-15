import "./apis.scss";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";


const items = [
    {
        id: 1,
        title:"APOD",
        img:"https://apod.nasa.gov/apod/image/1907/FishheadNebula_Pham_960.jpg",
        desc:"Access breathtaking daily images of the cosmos with NASA's Astronomy Picture of the Day (APOD) API",
        link: "/apod"
    },
    {
        id: 2,
        title:"NeoWs",
        img:"https://apod.nasa.gov/apod/image/1908/PerseidsSlovakia_Horalek_960.jpg",
        desc:"Access information about near-Earth asteroids with NASA's Near Earth Object Web Service (NeoWs) API",
        link: "/neows"
    },
    {
        id: 3,
        title:"DONKI",
        img:"https://apod.nasa.gov/apod/image/1703/M42kaltseis_Cedic1024.jpg",
        desc:"Access comprehensive space weather data with NASA's Space Weather Database Of Notifications, Knowledge, Information (DONKI) API",
        link: "/apod"
    },
    {
        id: 4,
        title:"APOD",
        img:"https://apod.nasa.gov/apod/image/2203/Medusa_Nebula_141_x_180s.jpg",
        desc:"Access breathtaking daily images of the cosmos with NASA's Astronomy Picture of the Day (APOD) API",
        link: "/apod"
    },
    {
      id: 5,
      title:"APOD",
      img:"https://apod.nasa.gov/apod/image/0005/northamneb_ware_big.jpg",
      desc:"Access breathtaking daily images of the cosmos with NASA's Astronomy Picture of the Day (APOD) API",
      link: "/apod"
  },
  {
    id: 6,
    title:"EPIC",
    img:"https://epic.gsfc.nasa.gov/archive/natural/2024/05/13/jpg/epic_1b_20240513095527.jpg",
    desc:"Access stunning daily imagery of Earth with NASA's Earth Polychromatic Imaging Camera (EPIC) API",
    link: "/epic"
},
]

const Single = ({ item }) => {
    const ref = useRef();
  
    const { scrollYProgress } = useScroll({
      target: ref,
    });
  
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  
    return (
      <section >
        <div className="container">
          <div className={item.id % 2 === 0 ? "reverse wrapper" : "wrapper"}>
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <Link to={item.link} className="red">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="link-button"
              >
                See More..
              </motion.button>
            </Link>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

const APIS = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
    });
  
    return (
      <div className="apis" ref={ref} id="APIS">
        <div className="progress">
          <h1>Featured APIS</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
}

export default APIS;