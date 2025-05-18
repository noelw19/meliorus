import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging, faGlobe, faEye } from '@fortawesome/free-solid-svg-icons'
import {faGithub} from "@fortawesome/free-brands-svg-icons"

export function Card({ img, identifier, title, description, link, num, unfinished = false}) {
  const [overlay, setOverlay] = useState(false)

  window.addEventListener("DOMContentLoaded", () => {
    let cardEl = document.querySelector(`.card-${num}`);

    cardEl.addEventListener("mouseenter", () => {
      setOverlay(true)
    })

    cardEl.addEventListener("mouseleave", () => {
      setOverlay(false)
    })
  })

  function viewHandle() {
    window.open(link, "_blank")
  }

  function infoHandle() {
    window.location.href = window.location.origin + `?view=${identifier}`
  }

  return (
    <div className={`card-${num} card card-compact w-[80%] lg:w-[35%] h-fit shadow-xl bg-white m-4 hover:translate-y-2`}>
      <div className={`rounded-lg `}>
        <figure>
          <img
            src={img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="font-bold text-md md:text-lg">{title}</h2>
          <p className="text-sm md:text-md">{description}</p>
          {unfinished && <div>
            <p className="text-red-500 absolute md:text-2xl font-bold left-0 bottom-20 bg-white p-2 rounded"><FontAwesomeIcon icon={faPersonDigging} /></p>
          </div>
          }
        </div>
      </div>
      {overlay && <div className=" z-10 absolute w-full h-full bg-black opacity-70 rounded-lg">
        </div>}
        {(overlay && unfinished) && <p className=" z-10 absolute top-[35%] text-black w-full flex justify-center mt-5 bg-red-500"> <span className="bg-white px-2">Under Construction</span>
          </p>}
      {overlay && <div className="absolute z-40 bottom-10 w-full text-white flex gap-4 justify-center">
          <button onClick={viewHandle} className="rounded-lg bg-white text-black hover:text-white hover:bg-black hover:cursor-pointer p-2 w-[100px]"><FontAwesomeIcon icon={link.includes("github") ? faGithub : faGlobe} /> {link.includes("github") ? "Code" : "Website"}</button>
          <button onClick={infoHandle} className="rounded-lg bg-white text-black hover:text-white hover:bg-black hover:cursor-pointer p-2 w-[100px]"><FontAwesomeIcon icon={faEye}/> Info</button>
        </div>}
    </div>
  )
}