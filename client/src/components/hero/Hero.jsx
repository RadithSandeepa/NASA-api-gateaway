import "./hero.scss";
import heroImg from "../../../public/hero.svg";
import { motion } from "framer-motion";

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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer"  variants={textVariants} initial="initial" animate="animate">
                <motion.h2>Stars & Galaxies in Cosmos</motion.h2>
                <motion.h1>Unveil the Universe...</motion.h1>
                <motion.img src="/scroll.png" alt="" variants={textVariants} animate="scrollButton"/>
            </motion.div>
            <div className="imgContainer">
                <img src={heroImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero