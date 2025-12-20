import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export function Card({ img, identifier, title, description, link, num, unfinished = false}) {
  function handleClick() {
    window.location.href = window.location.origin + `?view=${identifier}`
  }

  return (
    <article 
      className="group w-full bg-[#FFFBF8] border border-[#E8E3DD] rounded-lg overflow-hidden hover:border-[#D4CEC6] hover:shadow-sm cursor-pointer transition-all duration-300 flex flex-col"
      onClick={handleClick}
    >
      {/* Image Container */}
      <figure className="relative overflow-hidden bg-[#E8E3DD] aspect-[16/10] flex-shrink-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
        />
        {unfinished && (
          <div className="absolute top-3 left-3">
            <span className="bg-[#FFFBF8]/95 backdrop-blur-sm text-[#C97D60] px-2.5 py-1 rounded text-xs font-medium border border-[#E8E3DD] flex items-center gap-1.5">
              <FontAwesomeIcon icon={faPersonDigging} className="text-xs" />
              <span>In Progress</span>
            </span>
          </div>
        )}
      </figure>
      
      {/* Content */}
      <div className="p-5 md:p-6 flex-1 flex flex-col">
        <h2 className="font-light text-xl md:text-2xl text-[#2C2416] mb-2.5 leading-tight group-hover:text-[#C97D60] transition-colors duration-200">
          {title}
        </h2>
        <p className="text-sm md:text-base text-[#5A5248] font-light leading-relaxed line-clamp-2 mb-4 flex-1">
          {description}
        </p>
        
        {/* View link */}
        <div className="flex items-center gap-2 text-sm text-[#5A5248] group-hover:text-[#2C2416] transition-colors duration-200 mt-auto pt-2">
          <span className="font-light">View details</span>
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="text-xs group-hover:translate-x-1 transition-transform duration-200" 
          />
        </div>
      </div>
    </article>
  )
}