import React from "react";

export function Card({img, title, description, click}) {
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
              
            </div>
          </div>
    )
}