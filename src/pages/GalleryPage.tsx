
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Gallery carousel images
const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Professional fade haircut",
    caption: "Premium Fade & Style"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Man getting a haircut",
    caption: "Expert Precision Cuts"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Beard trimming",
    caption: "Professional Beard Grooming"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    alt: "Clean up service",
    caption: "Complete Styling Services"
  }
];

// Gallery categories
const galleryCategories = [
  {
    title: "Haircuts",
    description: "Classic and modern haircut styles for all hair types.",
    count: 12
  },
  {
    title: "Beard Grooming",
    description: "Professional beard shaping, trimming and styling.",
    count: 8
  },
  {
    title: "Fades",
    description: "Various fade techniques from skin to high fades.",
    count: 10
  },
  {
    title: "Hair Designs",
    description: "Custom hair designs and detailed line work.",
    count: 6
  }
];

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    alt: "Modern haircut style"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fades",
    alt: "Fade haircut"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beard Grooming",
    alt: "Beard trimming"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    alt: "Stylish haircut"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1593702288056-f5834dbea6c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Hair Designs",
    alt: "Hair design pattern"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fades",
    alt: "Fade haircut with beard"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beard Grooming",
    alt: "Beard styling"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    alt: "Professional haircut"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Hair Designs",
    alt: "Creative hair design"
  }
];

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  
  // Handle carousel navigation
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // Filter images based on selected category
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <Layout>
      {/* Hero Section with Carousel */}
      <section className="relative pt-16 h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10"></div>
        
        {/* Carousel */}
        <div className="relative h-full">
          {carouselImages.map((image, index) => (
            <div 
              key={image.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover object-center"
              />
              
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center text-white max-w-2xl px-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">Our Gallery</h1>
                  <p className="text-xl mb-8 opacity-90">{image.caption}</p>
                  <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
                    <Link to="/booking">Book Appointment</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transform -translate-y-1/2"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transform -translate-y-1/2"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Carousel Indicators */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-barber-gold' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Work Categories</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Browse our collection of premium grooming styles and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div 
              className={`bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-2 border-barber-gold p-6 cursor-pointer ${
                selectedCategory === "All" ? 'bg-barber-gold/10' : ''
              }`}
              onClick={() => setSelectedCategory("All")}
            >
              <h3 className="text-xl font-playfair font-semibold mb-2">All Work</h3>
              <p className="text-barber-charcoal/70 mb-4">View our complete collection of styles.</p>
              <p className="text-sm text-barber-gold">{galleryImages.length} photos</p>
            </div>
            
            {galleryCategories.map((category, index) => (
              <div 
                key={index} 
                className={`bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-2 border-barber-gold p-6 cursor-pointer ${
                  selectedCategory === category.title ? 'bg-barber-gold/10' : ''
                }`}
                onClick={() => setSelectedCategory(category.title)}
              >
                <h3 className="text-xl font-playfair font-semibold mb-2">{category.title}</h3>
                <p className="text-barber-charcoal/70 mb-4">{category.description}</p>
                <p className="text-sm text-barber-gold">{category.count} photos</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-barber-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              {selectedCategory === "All" ? "Our Featured Work" : selectedCategory}
            </h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Take a look at some of our recent haircuts and styles to get inspired for your next visit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative aspect-square rounded-sm overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <span className="text-xs text-barber-gold font-medium">{image.category}</span>
                    <p className="text-white text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-barber-charcoal to-barber-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready for Your Next Premium Cut?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Book an appointment today and let our master barbers create your perfect look.
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/booking">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
