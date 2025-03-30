
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

// Sample images - replace with your actual image paths
const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop",
    alt: "Professional barber cutting client's hair"
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1374&auto=format&fit=crop",
    alt: "Close-up of haircut with scissors"
  },
  {
    src: "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?q=80&w=1470&auto=format&fit=crop",
    alt: "Barber shop interior design"
  }
];

const HomeCarousel = () => {
  return (
    <div className="mt-12 mb-8">
      <Carousel opts={{ loop: true }} className="w-full max-w-5xl mx-auto">
        <CarouselContent>
          {carouselImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover transition-all hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="static translate-y-0 mr-2" />
          <CarouselNext className="static translate-y-0 ml-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
