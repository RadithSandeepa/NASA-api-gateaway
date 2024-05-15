import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className="wrapper">
            <motion.span 
                initial={{opacity:0, scale: 0.5}} 
                animate={{opacity:1, scale: 1}} 
                transition={{duration: 0.5}}
            >
                NASA
            </motion.span>
            <div className="social">
                <a href="https://www.nasa.gov/"><img className='img' src="/nasa.png" alt="nasa" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar;