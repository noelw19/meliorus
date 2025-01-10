import './App.css';

function App() {
  return (
    <div className="App">
      <div className='w-full flex justify-between flex-wrap'>
        <div className='md:w-[35%] py-6 border-2 border-black px-6 m-1 bg-white'>
          <p className='text-left pl-4'><span className='text-6xl'>Meliorus</span> <br/> <span className='text-2xl py-6'>Taken from Meliorism</span> <span className='text-gray-500 text-xl'> noun</span></p>
          <p className='text-left pl-4'>[ me·​lio·​rism ]</p>
          <p className='text-left pl-4 pt-4'>:the idea that progress is a real concept and that humans can interfere with natural processes in order to improve the world</p>
        </div>
      </div>
      <div className='px-4'>
        <p className='text-lg mt-4'>A place where I build small software that serves a purpose</p>
      </div>
    </div>
  );
}

export default App;
