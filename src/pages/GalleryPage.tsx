
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useLanguage } from '@/context/LanguageContext';

// Gallery categories
const galleryCategories = [
  {
    titleKey: "Haircuts",
    titleFr: "Coupes de Cheveux",
    descriptionKey: "Classic and modern haircut styles for all hair types.",
    descriptionFr: "Styles de coupe de cheveux classiques et modernes pour tous les types de cheveux.",
    count: 12
  },
  {
    titleKey: "Beard Grooming",
    titleFr: "Soins de Barbe",
    descriptionKey: "Professional beard shaping, trimming and styling.",
    descriptionFr: "Façonnage, taille et coiffage professionnels de la barbe.",
    count: 8
  },
  {
    titleKey: "Fades",
    titleFr: "Dégradés",
    descriptionKey: "Various fade techniques from skin to high fades.",
    descriptionFr: "Diverses techniques de dégradé, du dégradé à la peau au dégradé haut.",
    count: 10
  },
  {
    titleKey: "Hair Designs",
    titleFr: "Designs Capillaires",
    descriptionKey: "Custom hair designs and detailed line work.",
    descriptionFr: "Designs capillaires personnalisés et travail de ligne détaillé.",
    count: 6
  }
];

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    categoryFr: "Coupes de Cheveux",
    alt: "Modern haircut style",
    altFr: "Style de coupe de cheveux moderne"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fades",
    categoryFr: "Dégradés",
    alt: "Fade haircut",
    altFr: "Coupe de cheveux dégradée"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beard Grooming",
    categoryFr: "Soins de Barbe",
    alt: "Beard trimming",
    altFr: "Taille de barbe"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    categoryFr: "Coupes de Cheveux",
    alt: "Stylish haircut",
    altFr: "Coupe de cheveux élégante"
  },
  {
    id: 5,
    src: "https://th.bing.com/th/id/OIP.iKWVnDHEKn53PeL95OlsrgHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category: "Hair Designs",
    categoryFr: "Designs Capillaires",
    alt: "Hair design pattern",
    altFr: "Motif de design capillaire"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Fades",
    categoryFr: "Dégradés",
    alt: "Fade haircut with beard",
    altFr: "Coupe de cheveux dégradée avec barbe"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beard Grooming",
    categoryFr: "Soins de Barbe",
    alt: "Beard styling",
    altFr: "Coiffage de barbe"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Haircuts",
    categoryFr: "Coupes de Cheveux",
    alt: "Professional haircut",
    altFr: "Coupe de cheveux professionnelle"
  }
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const { language, t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    // Filter images based on selected category
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => 
        language === 'en' ? img.category === selectedCategory : img.categoryFr === selectedCategory
      ));
    }
  }, [selectedCategory, language]);

  // Get the appropriate category title based on language
  const getCategoryTitle = (category) => {
    return language === 'en' ? category.titleKey : category.titleFr;
  };

  // Get the appropriate image category and alt based on language
  const getImageCategory = (image) => {
    return language === 'en' ? image.category : image.categoryFr;
  };

  const getImageAlt = (image) => {
    return language === 'en' ? image.alt : image.altFr;
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="pt-24 pb-12 bg-barber-charcoal text-white">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{t('gallery.title')}</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            {t('gallery.description')}
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
              {t('gallery.all')}
            </button>
            
            {galleryCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(getCategoryTitle(category))}
                className={`px-4 py-2 rounded-sm transition ${
                  selectedCategory === getCategoryTitle(category) 
                  ? "bg-barber-gold text-white" 
                  : "bg-white text-barber-charcoal hover:bg-barber-gold/10"
                }`}
              >
                {getCategoryTitle(category)}
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
                    alt={getImageAlt(image)} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
                <CardContent className="p-3">
                  <p className="text-sm font-medium text-barber-gold">{getImageCategory(image)}</p>
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
            {t('gallery.ctaTitle')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('gallery.ctaDesc')}
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/booking">{t('hero.bookAppointment')}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
