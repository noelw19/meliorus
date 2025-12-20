import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Card } from './Card';

export function Carousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => 
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [projects.length]);

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Carousel Container */}
      <div className="flex-1 relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((proj) => (
            <div key={proj.id} className="min-w-full h-full px-2 md:px-4 flex items-center justify-center">
              <div className="w-full max-w-2xl h-full">
                <Card 
                  identifier={proj.identifier} 
                  num={proj.id} 
                  unfinished={proj.unfinished} 
                  img={proj.img} 
                  title={proj.title} 
                  description={proj.shortDesc} 
                  link={proj.link} 
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {projects.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-[#FFFBF8] border border-[#E8E3DD] rounded-full p-2 hover:bg-[#E8E3DD] transition-all duration-200 shadow-sm"
              aria-label="Previous project"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="text-[#2C2416] text-xs" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-[#FFFBF8] border border-[#E8E3DD] rounded-full p-2 hover:bg-[#E8E3DD] transition-all duration-200 shadow-sm"
              aria-label="Next project"
            >
              <FontAwesomeIcon icon={faChevronRight} className="text-[#2C2416] text-xs" />
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator and Counter */}
      {projects.length > 1 && (
        <div className="flex justify-center items-center gap-3 mt-4">
          <div className="flex justify-center items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-2 h-2 bg-[#C97D60]'
                    : 'w-1.5 h-1.5 bg-[#E8E3DD] hover:bg-[#D4CEC6]'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          <p className="text-xs text-[#5A5248] font-light">
            {currentIndex + 1} / {projects.length}
          </p>
        </div>
      )}
    </div>
  );
}

