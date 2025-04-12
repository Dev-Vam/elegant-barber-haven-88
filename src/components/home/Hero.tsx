
import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';
import { useIsMobile } from '@/hooks/use-mobile';

// Hero background images - all 3 verified working
const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    alt: "Barber cutting hair in professional setting"
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2070&auto=format&fit=crop",
    alt: "Barber shop interior with vintage styling"
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop",
    alt: "Barber giving client a haircut"
  }
];

const Hero = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  
  // Initialize embla carousel with loop enabled and slower slide duration
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    duration: 20,
    dragFree: false
  });

  // Auto-scroll function
  const autoScroll = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    
    // Set up the auto-scroll interval with 3 second delay
    const intervalId = setInterval(autoScroll, 3000);
    
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [emblaApi, autoScroll]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Carousel */}
      <div className="w-full h-full">
        <Carousel 
          ref={emblaRef}
          className="w-full h-full"
        >
          <CarouselContent className="h-full">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full w-full">
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
                      <p className="text-barber-gold font-medium animate-fade-in">{t('hero.subtitle')}</p>
                      <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-playfair font-bold animate-fade-in text-white`}>
                        KMD <span className="text-barber-gold">Pro</span> Barber
                      </h1>
                      <p className={`${isMobile ? 'text-base' : 'text-lg md:text-xl'} opacity-90 animate-fade-in text-white max-w-lg`}>
                        Elevating the art of grooming with precision cuts, classic shaves, and a premium barbershop experience for the modern gentleman.
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
          
          {/* Carousel Controls - positioned at bottom */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            <CarouselPrevious className={`relative left-0 translate-x-0 translate-y-0 bg-white/20 hover:bg-white/30 border-none text-white ${isMobile ? 'h-8 w-8' : 'h-10 w-10'}`} />
            <CarouselNext className={`relative right-0 translate-x-0 translate-y-0 bg-white/20 hover:bg-white/30 border-none text-white ${isMobile ? 'h-8 w-8' : 'h-10 w-10'}`} />
          </div>
          
          {/* Decorative element at bottom */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent z-10"></div>
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;
