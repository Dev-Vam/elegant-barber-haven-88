
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

  // Auto-scroll function with 0.3 second interval
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
    
    // Set up the auto-scroll interval with 0.3 second delay
    const intervalId = setInterval(autoScroll, 300); // 0.3 seconds
    
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [emblaApi, autoScroll]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Carousel */}
      <Carousel 
        ref={emblaRef}
        opts={{ 
          loop: true, 
          duration: 40,
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
                  className="w-full h-full object-cover"
                />
                
                {/* Lighter gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-barber-charcoal/60 to-barber-brown/60"></div>
                
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-10" 
                  style={{ 
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                ></div>
                
                {/* Content - centered in the slide */}
                <div className="absolute inset-0 container-custom flex flex-col justify-center items-start z-10">
                  <div className="max-w-2xl animate-fade-in">
                    <p className="text-barber-gold font-medium mb-2 animate-fade-in">{t('hero.subtitle')}</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 animate-fade-in text-white">
                      KMD <span className="text-barber-gold">Pro</span> Barber
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in text-white">
                      {t('hero.experience')}
                    </p>
                    <div className="flex flex-wrap gap-4 animate-fade-in">
                      <Button asChild className="bg-barber-brown hover:bg-barber-gold text-white px-8 py-6 rounded-sm">
                        <Link to="/booking">{t('hero.bookAppointment')}</Link>
                      </Button>
                      <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-barber-charcoal px-8 py-6 rounded-sm transition-all duration-300">
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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          <CarouselPrevious className="relative left-0 translate-x-0 translate-y-0 bg-white/20 hover:bg-white/30 border-none text-white h-10 w-10" />
          <CarouselNext className="relative right-0 translate-x-0 translate-y-0 bg-white/20 hover:bg-white/30 border-none text-white h-10 w-10" />
        </div>
        
        {/* Decorative element at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      </Carousel>
    </section>
  );
};

export default Hero;
