import './App.css';
import img from "./images/alo.png"
import profile from "./images/selfie.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Card } from './components/Card';



function App() {
  return (
    <div className="App">
      <div className='w-full flex gap-1 flex-col md:flex-row md:gap-8 p-2'>
        {/* left container */}
        <div className='w-[100%] md:w-[35%] h-fit md:h-[98vh] pt-8 md:pt-16 md:pl-8 flex items-center md:items-left flex-col md:justify-between justify-start'>

          <div className='w-full flex items-center justify-evenly gap-2 md:block'>

            <div className="avatar w-[150px] md:w-[250px] h-[150px] md:h-[250px] flex justify-left">
              <div className="w-full md:w-[100%] rounded-full border-4 border-white">
                <img src={profile} />
              </div>
            </div>

            <div className='pt-4'>
              <p className='text-left pt-4 text-2xl md:text-4xl'>Noel Williams</p>
              <div className='flex flex-wrap gap-1 lg:gap-4 pt-4 lg:pt-0'>
                <div className='flex justify-center items-center gap-1'>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className='text-left text-base lg:text-lg'>
                    New Zealand
                  </p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                  <FontAwesomeIcon icon={faHeart} />
                  <p className='text-left text-base lg:text-lg'>
                    Software Engineer
                  </p>
                </div>
              </div>

              <div className='flex justify-start pt-4'>
                {/* <FontAwesomeIcon icon={faFacebookF} /> */}
              </div>
            </div>
          </div>

          <div className='w-full pt-8 pl-4 md:p-0'>
            <p className='text-left text-base'>I want to build software with utility.</p>
            <p className='text-left text-base'>Software that helps.</p>
            <p className='text-left'></p>
          </div>

          <div className='w-full pt-4 pl-4 md:my-8 text-sm md:p-0'>
            <p className='text-left text-base'><span className='text-xl'>Meliorus</span> <br /> <span className='text-md'>Taken from Meliorism</span> <span className='text-gray-500 text-md'> noun</span></p>
            <p className='text-left text-base'>[ me·​lio·​rism ]</p>
            <p className='text-left pt-4 p-2 text-base'>:the idea that progress is a real concept and that humans can interfere with natural processes in order to improve the world</p>
          </div>
        </div>

        {/* right container */}
        <div className='w-full h-fit md:h-[98vh] pt-0 md:pt-14 pr-2 flex flex-row flex-wrap justify-evenly '>
          <Card img={img} title={"A Loved One (Alo)"} description={"A Place to store your loved ones memory"} click={() => { window.open("https://alo.meliorus.co.nz", "_blank") }} />

        </div>
      </div>
    </div>
  );
}

export default App;
