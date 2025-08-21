import './App.css';
import alo from "./images/alo.png"
import tempus from "./images/tempus.png"
import profile from "./images/selfie.png"
import docbot from "./images/docbot.png"
import pottery from "./images/pottery.png"
import minotaur from "./images/minotaur.png"
import dct from "./images/dct1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Card } from './components/Card';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [viewInfo, setViewInfo] = useState(false)

  let projects = useMemo(() => {
    return [
      {
        id: 1,
        img: alo,
        title: "A Loved One (Alo)",
        shortDesc: "A Place to store your loved ones memory",
        description:"An app to store information about loved ones that have passed, includes QR code that can be placed on gravestone and points to the individuals digital resting point.",
        link: "https://alo.meliorus.co.nz",
        identifier: "Alo"
      },
      {
        id: 5,
        img: minotaur,
        title: "Minotaur",
        shortDesc:"Minotaur is a lightweight command-line tool for managing multiple servers. It lets you connect to servers via SSH, copy files to one or many machines using tags, and manage environments through simple JSON configs—all in one streamlined workflow powered by tmux.",
        description: `Minotaur is a command-line tool designed to streamline multi-server management and file deployment, built for developers and system administrators who need to manage multiple machines efficiently. Traditional tools like RDM and WinSCP can be slow and cumbersome when handling many servers, requiring repeated logins, file transfers, and context switching. Minotaur solves this by combining SSH access, file copying, and environment management into a single, cohesive workflow.
<br/>With Minotaur, you can:
<br/>- Connect to multiple servers simultaneously using tags and tmux, allowing parallel operations across machines.

- Copy single files, directories, or multiple items at once to many servers with a simple command.

- Define multiple environments (e.g., development, pre-production, production) with separate JSON configuration files.

- Use SSH key authentication for secure, passwordless logins, with the option to override usernames on a per-server basis.

- Quickly access servers by IP address or by the custom name you assign in your config, reducing the need to remember multiple credentials.

<br/>Minotaur is ideal for teams or individuals managing multiple servers, deploying updates, or performing batch administrative tasks. By leveraging tmux sessions, it keeps all connections organized in one terminal window.`,
        link: "https://github.com/noelw19/minotaur",
        identifier: "Minotaur"
      },
      {
        id: 2,
        img: docbot,
        title: "DocBot",
        shortDesc:"AI Rag Application to upload documents and query the AI about these documents.",
        description: "AI Retrieval Augmented Generation application. Create an account and upload multiple documents, choose a document to chat about and ask questions regarding the document.",
        link: "https://rag.meliorus.co.nz",
        identifier: "DocBot"
      },
      {
        id: 3,
        img: dct,
        title: "Digital Certificate Tool",
        shortDesc:"Tool to create certificates, csr's and to decode pem files.",
        description: "A tool that allows you to create CA certificates, and subordinate certificates with provided CA certificates and key, including DNS sans, key usages and extended key usages. This small app also has the ability to create CSR's and decode pem files whether they are uploaded or pasted into the GUI. This is built using ReactJS and WASM with golang.",
        link: "https://dct.meliorus.co.nz",
        identifier: "DCT"
      },
      {
        id: 4,
        img: pottery,
        title: "Pottery",
        shortDesc:"Honey pot instance application to allow monitoring of requests sent by scanners that may be hitting your open ports.",
        description: "Deploys multiple honeypot instances on your server, with options to connect securely to a parent instance via MTLS ",
        link: "https://github.com/noelw19/Pottery",
        identifier: "Pottery"
      },
    ]
  }, [])

  useEffect(() => {
    let param = window.location.href.split("?")[1]
    let view = decodeURI(param).split("=")[1]
    if (view) {
      setViewInfo(projects.filter(p => p.identifier === view)[0])

    }
  }, [projects])


  function showAll() {
    return (
      <div className='w-full h-[80%] md:h-[90vh] pt-0 md:pt-14 pr-2 flex flex-row flex-wrap justify-evenly overflow-scroll pb-4'>
        {projects.map((proj) => {
          return (
            <Card key={proj.title} identifier={proj.identifier} num={proj.id} unfinished={proj.unfinished} img={proj.img} title={proj.title} description={proj.shortDesc} link={proj.link} />
          )
        })}
      </div>)
  }

  function showSelected() {
    return (
      <div className=' card bg-white p-4 h-full shadow-xl'>
        <div className=' pl-4 flex justify-start'>
          <button className='p-2 border-2 border-black rounded-lg hover:bg-black hover:text-white' onClick={() => window.location.href = window.location.origin}>Back</button>
        </div>
        <div className='  w-fit h-[90%]  m-4 overflow-scroll h-[80%]'>
          {viewInfo.unfinished && <p className='mt-10 text-red-500 text-bold'>This project is still a work in progress.</p>}
          <div className='p-10'>
            <p className='text-lg font-bold'>{viewInfo.title}</p>

            {viewInfo.description.split("\n").map(paragraph => {
              if (paragraph.includes("<br/>")) {
                const newP = paragraph.replace("<br/>", "")
                return <p className='text-left mt-4'>{newP}</p>
              }
              return <p className='text-left'>{paragraph}</p>
            })}
            <img
              className='w-fit mt-10 border-t-2 border-black'
              src={viewInfo.img}
              alt="Shoes" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className='w-full flex gap-1 flex-col md:flex-row md:gap-8 p-2 overflow-hidden'>
        {/* left container */}
        <div className='w-[100%] md:w-[45%] h-fit md:h-[98vh] pt-8 md:pt-16 md:pl-8 flex items-center md:items-left flex-col md:justify-between justify-start'>

          <div className='w-full flex items-center justify-evenly gap-2 md:block'>

            <div className="avatar w-[150px] md:w-[250px] h-[150px] md:h-[250px] flex justify-left">
              <div className="w-full md:w-[100%] rounded-full border-4 border-white">
                <img src={profile} alt="portrait of portfolio creator" />
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
            <p className='text-left text-base'>I enjoy building software about things I am interested in.</p>
            <p className='text-left text-base'>I want to build software with utility.</p>
            <p className='text-left'></p>
          </div>

          <div className='w-full pt-4 pl-4 md:my-8 text-sm md:p-0 md:border-none sm:border-b-2 sm:border-black sm:pb-2 sm:mb-2 '>
            <p className='text-left text-base'><span className='text-xl'>Meliorus</span> <br /> <span className='text-md'>Taken from Meliorism</span> <span className='text-gray-500 text-md'> noun</span></p>
            <p className='text-left text-base'>[ me·​lio·​rism ]</p>
            <p className='text-left pt-4 p-2 text-base'>:the idea that progress is a real concept and that humans can interfere with natural processes in order to improve the world</p>
          </div>
        </div>

        {/* right container */}
        <div className='w-full h-[90%] md:h-[98vh] pt-0 md:pt-14 pr-2 flex flex-row flex-wrap justify-evenly overflow-none'>
          {!viewInfo ? showAll() : showSelected()}
        </div>
      </div>
    </div>
  );
}

export default App;
