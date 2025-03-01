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
      <div className='w-full flex gap-8 p-2'>
        {/* left container */}
        <div className='w-[55%] md:w-[35%] h-[98vh] pt-8 md:pt-16 md:pl-8 flex items-left flex-col justify-between'>

          <div>
            <div className="avatar w-full flex justify-left">
              <div className="w-[100%] lg:w-[60%]  h-fit rounded-full border-4 border-white">
                <img src={profile} />
              </div>
            </div>

            <div className='pt-4'>
              <p className='text-left pt-4 text-xl md:text-4xl'>Noel Williams</p>
              <div className='flex flex-wrap gap-1 lg:gap-4 pt-4 lg:pt-0'>
                <div className='flex justify-center items-center gap-1'>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p className='text-left text-sm lg:text-lg'>
                    New Zealand
                  </p>
                </div>
                <div className='flex justify-center items-center gap-1'>
                  <FontAwesomeIcon icon={faHeart} />
                  <p className='text-left text-sm lg:text-lg'>
                    Software Engineer
                  </p>
                </div>
              </div>

              <div className='flex justify-start pt-4'>
                {/* <FontAwesomeIcon icon={faFacebookF} /> */}
              </div>
            </div>
          </div>

          <div>
            <p className='text-left text-sm md:text-base'>I want to build software with utility.</p>
            <p className='text-left text-sm md:text-base'>Software that helps.</p>
            <p className='text-left'></p>
          </div>

          <div className='pt-4 my-8 text-sm'>
            <p className='text-left text-sm md:text-base'><span className='text-xl'>Meliorus</span> <br /> <span className='text-md py-6'>Taken from Meliorism</span> <span className='text-gray-500 text-md'> noun</span></p>
            <p className='text-left text-sm md:text-base'>[ me·​lio·​rism ]</p>
            <p className='text-left pt-4 p-2 text-sm md:text-base'>:the idea that progress is a real concept and that humans can interfere with natural processes in order to improve the world</p>
          </div>
        </div>

        {/* right container */}
        <div className='w-full h-[98vh] pt-14 pr-2 flex flex-row flex-wrap justify-evenly'>
          <Card img={img} title={"A Loved One (Alo)"} description={"A Place to store your loved ones memory"} click={() => { window.open("https://alo.meliorus.co.nz", "_blank") }} />

        </div>
      </div>
    </div>
  );
}

export default App;
