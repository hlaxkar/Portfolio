import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <div className="section-divider" />
            <About />
            <div className="section-divider" />
            <Experience />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <Contact />
        </>
    );
}
export default Home;
