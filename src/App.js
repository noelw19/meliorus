import './App.css';
import img from "./images/alo.png"

function App() {
  return (
    <div className="App">
      <div className='w-full flex justify-between flex-wrap'>
        <div className='md:w-[35%] py-6 border-2 border-black px-6 m-1 bg-white'>
          <p className='text-left pl-4'><span className='text-6xl'>Meliorus</span> <br/> <span className='text-2xl py-6'>Taken from Meliorism</span> <span className='text-gray-500 text-xl'> noun</span></p>
          <p className='text-left pl-4'>[ me·​lio·​rism ]</p>
          <p className='text-left pl-4 pt-4'>:the idea that progress is a real concept and that humans can interfere with natural processes in order to improve the world</p>
        </div>
        <div className='w-full md:w-[60%] flex justify-start md:justify-center items-center py-8 flex-col'>
          <p className='text-2xl mt-4 font-medium'>Software built with a purpose in mind</p>
          <p>let it and let god</p>
        </div>
      </div>
      <div className='w-full p-8 flex items-center flex-col'>
        <div className='w-[80%] py-6 border-2 border-black px-6 m-1 bg-white'>
          <p>List of Software</p>  
        </div>
          <div className='pt-8 flex flex-wrap gap-4'>
            <div className='bg-white p-4 border-2 border-black'>
              <img className='w-[400px]' src={img} alt='aef' />
              <p>A-LO</p>
              <p></p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
