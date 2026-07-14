import './App.css';
import profile from "./images/selfie.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeart, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ProjectsGrid } from './components/ProjectsGrid';
import { ProjectView } from './components/ProjectView';
import { useEffect, useState } from 'react';
import { getAllProjects, getProjectByIdentifier } from './data/projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import cvImage from './images/cv1.jpg';
import hero from "./images/hero.jpg"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Meliorus />} />
        <Route path="/cv" element={<CV imageSrc={cvImage} />} />
      </Routes>
    </BrowserRouter>
  );
}

/* ================= CV OVERLAY ================= */
function CV({ imageSrc }) {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <img src={imageSrc} alt="CV" className="max-w-full max-h-full object-contain" />
    </div>
  );
}

/* ================= NAV ================= */
function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-[#FFFBF8] border-b border-[#E8E3DD] z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="font-light text-[#2C2416]">Meliorus</div>

        <div className="flex gap-6 text-sm text-[#5A5248]">
          <button onClick={() => scrollTo('hero')}>Home</button>
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('projects')}>Projects</button>
        </div>
      </div>
    </div>
  );
}

/* ================= BACK TO TOP ================= */
function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-[#2C2416] text-white rounded-full shadow-lg"
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
}

/* ================= MAIN ================= */
function Meliorus() {
  const [viewInfo, setViewInfo] = useState(null);
  const projects = getAllProjects();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewIdentifier = params.get('view');

    if (viewIdentifier) {
      const project = getProjectByIdentifier(viewIdentifier);
      if (project) setViewInfo(project);
    }
  }, []);

  const handleBack = () => {
    window.history.pushState({}, '', window.location.origin);
    setViewInfo(null);
  };

  if (viewInfo) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <ProjectView project={viewInfo} onBack={handleBack} />
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <Navbar />
      <BackToTop />

      {/* spacer for fixed navbar */}
      <div className="h-20" />

      {/* HERO */}
      <section 
        id="hero" 
        className="max-w-6xl mx-auto px-6 py-24 bg-slate-500" 
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
          {/* Dark overlay */}
          {/* <div className="absolute inset-0 bg-black/45"></div> */}
        <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
          I build software for people, not systems.
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mb-8">
          Engineer • Builder • DevOps • Embedded Systems
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2 border border-[#2C2416] hover:border-orange-500 hover:text-orange-500"
          >
            View Projects
          </button>

          <a
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-[#E8E3DD] hover:border-orange-500 hover:text-orange-500"
          >
            View CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#E8E3DD]">
        <div className="flex flex-col md:flex-row gap-12">

          <img src={profile} className="w-44 h-44 rounded-full border border-[#E8E3DD] object-cover" alt="profile" />

          <div className="flex-1">
            <h2 className="text-2xl mb-6 font-light text-[#2C2416]">
              About Me
            </h2>

            <p className="text-[#5A5248] font-light leading-relaxed mb-4">
              I grew up in Papua New Guinea before moving to New Zealand for boarding school in 2010.
              Growing up between two very different countries gave me a different perspective on success,
              happiness and resilience. It taught me that you don't need much to live well, and that failure
              only matters when you stop trying.
            </p>

            <p className="text-[#5A5248] font-light leading-relaxed mb-4">
              I've always been fascinated by understanding how things work. As a kid I was constantly taking
              things apart (not always successfully putting them back together), building small inventions and
              experimenting with electronics. One of my favourite memories is building my own tattoo machine
              at eleven years old after studying one made by a neighbour. That same curiosity eventually led
              me to software engineering.
            </p>

            <p className="text-[#5A5248] font-light leading-relaxed mb-4">
              Today I enjoy working across software, DevOps, embedded systems and IoT, choosing the tools
              that best solve the problem rather than limiting myself to one technology stack. My biggest
              motivation is building products with genuine utility—especially ideas that can improve everyday
              life or create opportunities in developing countries.
            </p>

            <p className="text-[#5A5248] font-light leading-relaxed">
              Outside of engineering you'll usually find me travelling New Zealand in my campervan, learning
              to surf, foraging for edible plants, or diving into another rabbit hole simply because I want to
              understand how something works. I believe a life well lived is one spent learning, exploring and
              building things that leave a positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-[#E8E3DD]">
        <h2 className="text-3xl font-light mb-6">Projects</h2>
        <ProjectsGrid projects={projects} />
      </section>
    </div>
  );
}

export default App;