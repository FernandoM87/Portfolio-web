import React, { useRef } from 'react';
import EducationCard from './EducationCard';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Slider({ items, renderItem, scrollAmount = 300 }){
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="">
      

      {/* Contenedor del slider */}
      <div ref={sliderRef} className="flex overflow-x-scroll no-scrollbar space-x-4 p-4">
        {items.map((item, index) => (
          <div key={index} className="shrink-0">
            {renderItem(item)}
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between">
      
      {/* Botón izquierdo */}
      <button
        onClick={scrollLeft}
        className="p-2 bg-gray-800 text-white rounded-full shadow-lg"
      >
        <FiChevronLeft size={24} />
      </button>

      {/* Botón derecho */}
      <button
        onClick={scrollRight}
        className="p-2 bg-gray-800 text-white rounded-full shadow-lg"
      >
        <FiChevronRight size={24} />
      </button>

      </div>
    </div>
  );
}