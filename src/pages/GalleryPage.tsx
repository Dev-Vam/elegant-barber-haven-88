
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Filter images based on selected category
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-barber-charcoal text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Gallery</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Browse our collection of premium haircuts, fades, and beard grooming styles
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-barber-cream">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-sm transition ${
                selectedCategory === "All" 
                ? "bg-barber-gold text-white" 
                : "bg-white text-barber-charcoal hover:bg-barber-gold/10"
              }`}
            >
              All
            </button>
            
            {galleryCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.title)}
                className={`px-4 py-2 rounded-sm transition ${
                  selectedCategory === category.title 
                  ? "bg-barber-gold text-white" 
                  : "bg-white text-barber-charcoal hover:bg-barber-gold/10"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden border-none transition-all duration-300 hover:shadow-lg">
                <AspectRatio ratio={1 / 1}>
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
                <CardContent className="p-3">
                  <p className="text-sm font-medium text-barber-gold">{image.category}</p>
                </CardContent>
              </Card>
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
