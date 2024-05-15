import Navbar from '../../components/navbar/Navbar';
import Hero from '../../components/hero/Hero';
import Parallax from '../../components/parallax/Parallax';
import APIS from '../../components/apis/APIS';
import Contact from '../../components/contact/Contact';
import Cursor from '../../components/cursor/Cursor';

const Home = () => {
  return (
    <div className='home'>
         <Cursor />
        <section id='Home'>
          <Navbar />
          <Hero />
        </section>
        <section>
          <Parallax />
        </section>
        <APIS />
        <section id='Contact'>
          <Contact />
        </section>
    </div>
  )
}

export default Home;