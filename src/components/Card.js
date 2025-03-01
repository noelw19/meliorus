import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'

export function Card({img, title, description, click, unfinished=false}) {
    return (
        <div className="card card-compact w-[80%] md:w-[35%] h-fit shadow-xl bg-white  m-4 hover:cursor-pointer hover:translate-y-2" onClick={click}>
            <figure>
              <img
                src={img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="font-bold text-md md:text-lg">{title}</h2>
              <p className="text-sm md:text-md">{description}</p>
              {unfinished && <div>
                <p className="text-red-500 absolute md:text-2xl font-bold bottom-20 bg-white p-2 rounded"><FontAwesomeIcon icon={faPersonDigging}/> UNDER CONSTRUCTION</p>
                </div>
                }
            </div>
          </div>
    )
}