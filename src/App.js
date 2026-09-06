import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjectByIdentifier } from './data/projects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { NowSection } from './components/NowSection';
import { CurrentProject } from './components/CurrentProject';
import { SelectedWork } from './components/SelectedWork';
import { Principles } from './components/Principles';
import { OutsideTheKeyboard } from './components/OutsideTheKeyboard';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { ProjectDetail } from './components/ProjectDetail';
import cvImage from './images/newcv.webp';
import './App.css';

function App() {
  const [viewInfo, setViewInfo] = useState(null);

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
      <div style={{ backgroundColor: '#F4F1EC', minHeight: '100vh' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '2.5rem 1.5rem' }}>
          <ProjectDetail project={viewInfo} onBack={handleBack} />
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/cv" element={<CV imageSrc={cvImage} />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainPage() {
  return (
    <div style={{ backgroundColor: '#F4F1EC', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <StorySection />
      <NowSection />
      <CurrentProject />
      <SelectedWork />
      <Principles />
      <OutsideTheKeyboard />
      <Footer />
      <BackToTop />
    </div>
  );
}

function CV({ imageSrc }) {
  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: '#0E1014', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50 }}>
      <img src={imageSrc} alt="CV" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
    </div>
  );
}

export default App;
