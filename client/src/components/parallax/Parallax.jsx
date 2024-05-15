import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
  });
  
   const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);  


  return (
    <div className="parallax" ref={ref}>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{ y: yBg }}></motion.div>
        <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  )
}

export default Parallax;