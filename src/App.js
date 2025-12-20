import './App.css';
import profile from "./images/selfie.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import { ProjectsGrid } from './components/ProjectsGrid';
import { ProjectView } from './components/ProjectView';
import { useEffect, useState } from 'react';
import { getAllProjects, getProjectByIdentifier } from './data/projects';

function App() {
  const [viewInfo, setViewInfo] = useState(null);
  const projects = getAllProjects();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewIdentifier = params.get('view');
    
    if (viewIdentifier) {
      const project = getProjectByIdentifier(viewIdentifier);
      if (project) {
        setViewInfo(project);
      }
    } else {
      setViewInfo(null);
    }
  }, []);

  const handleBack = () => {
    window.history.pushState({}, '', window.location.origin);
    setViewInfo(null);
  };


  function showAll() {
    return (
      <div className='w-full max-w-7xl mx-auto'>
        <div className='mb-8 md:mb-12'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-light text-[#2C2416] mb-2'>Projects</h1>
          <p className='text-sm md:text-base text-[#5A5248] font-light'>A collection of software I've built</p>
        </div>
        <ProjectsGrid projects={projects} />
      </div>
    );
  }

  return (
    <div className="App">
      <div className='w-full min-h-screen'>
        {!viewInfo ? (
          <div className='h-screen bg-[#FAF8F5] overflow-hidden'>
            <div className='flex flex-col lg:flex-row h-full'>
              {/* Left Sidebar - Fixed height, no scroll */}
              <div className='w-full lg:w-[35%] xl:w-[30%] h-auto lg:h-screen bg-[#FFFBF8] border-b lg:border-b-0 lg:border-r border-[#E8E3DD] p-8 md:p-10 lg:p-12 flex flex-col overflow-hidden'>
                {/* Profile Section */}
                <div className="flex flex-col items-center lg:items-start mb-10 flex-shrink-0">
                  <div className="avatar w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 mb-6 flex-shrink-0">
                    <div className="w-full h-full rounded-full border-2 border-[#E8E3DD] overflow-hidden">
                      <img src={profile} alt="Noel Williams" className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <h1 className='text-3xl md:text-4xl lg:text-5xl font-light text-[#2C2416] mb-4 text-center lg:text-left'>Noel Williams</h1>
                  <div className='flex flex-col gap-2.5 text-[#5A5248] mb-8'>
                    <div className='flex items-center justify-center lg:justify-start gap-2 text-base font-light'>
                      <FontAwesomeIcon icon={faLocationDot} className="text-xs" />
                      <span>New Zealand</span>
                    </div>
                    <div className='flex items-center justify-center lg:justify-start gap-2 text-base font-light'>
                      <FontAwesomeIcon icon={faHeart} className="text-xs" />
                      <span>Software Engineer</span>
                    </div>
                  </div>
                </div>
                
                {/* Bio Section */}
                <div className='mb-10 pb-10 border-b border-[#E8E3DD] flex-shrink-0'>
                  <p className='text-base md:text-lg text-[#5A5248] font-light leading-relaxed text-center lg:text-left'>
                    I build software with purpose and utility, focusing on projects that solve real problems.
                  </p>
                </div>

                {/* Footer - Meliorus definition */}
                <div className='mt-auto pt-8 border-t border-[#E8E3DD] flex-shrink-0'>
                  <p className='text-sm md:text-base text-[#5A5248] font-light leading-relaxed text-center lg:text-left'>
                    <span className='text-base md:text-lg text-[#2C2416] font-light'>Meliorus</span> — from <em>Meliorism</em> [me·lio·rism]: 
                    the idea that progress is a real concept and that humans can interfere with natural processes in order to improve the world.
                  </p>
                </div>
              </div>

              {/* Projects Section - Scrollable */}
              <div className='w-full lg:w-[65%] xl:w-[70%] h-full lg:h-screen overflow-y-auto p-8 md:p-10 lg:p-12'>
                {showAll()}
              </div>
            </div>
          </div>
        ) : (
          <div className='max-w-4xl mx-auto px-4 md:px-8 py-8 md:py-12'>
            <ProjectView project={viewInfo} onBack={handleBack} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
