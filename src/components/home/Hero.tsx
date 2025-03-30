
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const heroSlides = [
  {
    title: "KMD Pro Barber",
    subtitle: "Where traditional barbering meets modern elegance.",
    description: "Experience premier grooming services in Pretoria's finest barber shop.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Expert Grooming",
    subtitle: "Precision cuts & classic shaves",
    description: "Our master barbers deliver the perfect look tailored to your individual style.",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1374&auto=format&fit=crop"
  },
  {
    title: "Premium Experience",
    subtitle: "Relax & rejuvenate",
    description: "Enjoy a premium grooming experience in our sophisticated, welcoming environment.",
    image: "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?q=80&w=1470&auto=format&fit=crop"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <Carousel className="h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700" 
                  style={{ 
                    backgroundImage: `url(${slide.image})`,
                    transform: 'scale(1.05)'
                  }}
                ></div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-barber-gold/10 to-barber-brown/30"></div>
                
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-10" 
                  style={{ 
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                  }}
                ></div>
                
                {/* Content */}
                <div className="container-custom relative z-10 flex flex-col justify-center h-full text-white">
                  <div className="max-w-2xl animate-fade-in">
                    <p className="text-barber-gold font-medium mb-2 animate-fade-in">{slide.subtitle}</p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold mb-4 animate-fade-in">
                      {slide.title.includes("KMD") ? (
                        <>
                          KMD <span className="text-barber-gold">Pro</span> Barber
                        </>
                      ) : (
                        slide.title
                      )}
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 mb-8 animate-fade-in">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4 animate-fade-in">
                      <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
                        <Link to="/booking">Book Appointment</Link>
                      </Button>
                      <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-barber-charcoal px-8 py-6 rounded-sm transition-all duration-300">
                        <Link to="/services">Our Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
          <CarouselPrevious className="relative static translate-y-0 h-10 w-10 rounded-full bg-white/10 border-white/20 text-white hover:bg-barber-gold hover:text-white hover:border-transparent" />
          <div className="flex items-center gap-2">
            {heroSlides.map((_, index) => (
              <button 
                key={index}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-barber-gold" : "w-2 bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <CarouselNext className="relative static translate-y-0 h-10 w-10 rounded-full bg-white/10 border-white/20 text-white hover:bg-barber-gold hover:text-white hover:border-transparent" />
        </div>
      </Carousel>
      
      {/* Decorative element at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default Hero;
