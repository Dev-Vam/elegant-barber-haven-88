
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Hero carousel images
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    alt: "Barber cutting hair in professional setting",
    title: "KMD <span class='text-barber-gold'>Pro</span> Barber",
    subtitle: "Classic Cuts",
    description: "Elevating the art of grooming with precision cuts, classic shaves, and a premium barbershop experience for the modern gentleman."
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=2070&auto=format&fit=crop",
    alt: "Barber performing a professional shave",
    title: "Premium <span class='text-barber-gold'>Shaves</span>",
    subtitle: "Traditional Techniques",
    description: "Experience traditional hot towel shaves and grooming services delivered with meticulous attention to detail."
  },
  {
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070&auto=format&fit=crop",
    alt: "Barbershop interior with vintage styling",
    title: "Stylish <span class='text-barber-gold'>Environment</span>",
    subtitle: "Relaxing Atmosphere",
    description: "Step into a world where classic barbering traditions meet modern styling in an atmosphere of relaxed sophistication."
  }
];

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {heroImages.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                {/* Background image */}
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-barber-charcoal/60 to-barber-brown/60"></div>
                
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-10" 
                  style={{ 
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                ></div>
                
                {/* Content */}
                <div className="absolute inset-0 container-custom flex flex-col justify-center items-start z-10 px-6 md:px-10">
                  <div className={`${isMobile ? 'max-w-full' : 'max-w-2xl'} space-y-4 md:space-y-6`}>
                    <p className="text-barber-gold font-medium animate-fade-in">{image.subtitle || t('hero.subtitle')}</p>
                    <h1 
                      className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-playfair font-bold animate-fade-in text-white`}
                      dangerouslySetInnerHTML={{ __html: image.title }}
                    ></h1>
                    <p className={`${isMobile ? 'text-base' : 'text-lg md:text-xl'} opacity-90 animate-fade-in text-white max-w-lg`}>
                      {image.description}
                    </p>
                    <div className={`flex flex-wrap ${isMobile ? 'gap-3 pt-2' : 'gap-4 pt-4'} animate-fade-in`}>
                      <Button asChild className={`bg-barber-brown hover:bg-barber-gold text-white ${isMobile ? 'text-sm px-4 py-2' : 'px-6 py-2.5'} rounded-sm`}>
                        <Link to="/booking">{t('hero.bookAppointment')}</Link>
                      </Button>
                      <Button asChild variant="outline" className={`bg-white/10 border-white text-white hover:bg-white hover:text-barber-charcoal ${isMobile ? 'text-sm px-4 py-2' : 'px-6 py-2.5'} rounded-sm transition-all duration-300`}>
                        <Link to="/services">{t('hero.ourServices')}</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Carousel Controls */}
        <div className="absolute bottom-1/2 left-0 right-0 flex justify-between transform translate-y-1/2 z-20 px-4 md:px-10">
          <CarouselPrevious 
            className="bg-barber-brown/60 hover:bg-barber-gold border-none text-white h-10 w-10 lg:h-12 lg:w-12 rounded-full" 
          />
          <CarouselNext 
            className="bg-barber-brown/60 hover:bg-barber-gold border-none text-white h-10 w-10 lg:h-12 lg:w-12 rounded-full" 
          />
        </div>
        
        {/* Decorative element at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
      </Carousel>
    </section>
  );
};

export default Hero;
