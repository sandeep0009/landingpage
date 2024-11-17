import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { images } from '@/lib/image';

const MobileCarousel = () => {
  return (
    <div className="relative">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image.src}              
                className="w-full object-cover rounded-lg" 
                alt={`Slide ${index}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

     
        <CarouselPrevious
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full shadow-lg hover:bg-black/70"
        >
          ←
        </CarouselPrevious>

        {/* Next Button */}
        <CarouselNext
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full shadow-lg hover:bg-black/70"
        >
          →
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default MobileCarousel;
