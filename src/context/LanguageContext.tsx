
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'fr';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Create translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.merch': 'Merch',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',

    // Hero
    'hero.subtitle': 'Where traditional barbering meets modern elegance.',
    'hero.experience': 'Experience premier grooming services in Pretoria\'s finest barber shop.',
    'hero.bookAppointment': 'Book Appointment',
    'hero.ourServices': 'Our Services',

    // Home page
    'home.ourWork': 'Our Work',
    'home.ourWorkDesc': 'Take a look at some of our finest work, crafted with precision and style',
    'home.ourServices': 'Our Premium Services',
    'home.ourServicesDesc': 'Discover our range of expert grooming services designed for the modern gentleman who appreciates quality and style.',
    'home.viewAllServices': 'View All Services',
    'home.testimonials': 'What Our Clients Say',
    'home.testimonialsDesc': 'Don\'t just take our word for it. Hear from the gentlemen who experience our premium services.',
    'home.ctaTitle': 'Experience Premium Grooming Today',
    'home.ctaDesc': 'Book your appointment now and discover why KMD Pro Barber is Pretoria\'s premier destination for the modern gentleman.',
    'home.findUs': 'Find Us',
    'home.findUsDesc': 'Visit our elegant barber shop in the heart of Pretoria for the ultimate grooming experience.',
    'home.address': 'Address',
    'home.hours': 'Hours',
    'home.contact': 'Contact',

    // Gallery page
    'gallery.title': 'Our Gallery',
    'gallery.description': 'Browse our collection of premium haircuts, fades, and beard grooming styles',
    'gallery.all': 'All',
    'gallery.ctaTitle': 'Ready for Your Next Premium Cut?',
    'gallery.ctaDesc': 'Book an appointment today and let our master barbers create your perfect look.',

    // Footer
    'footer.brief': 'Premium grooming services for the modern gentleman in Pretoria.',
    'footer.contactUs': 'Contact Us',
    'footer.quickLinks': 'Quick Links',
    'footer.newsletter': 'Newsletter',
    'footer.subscribeDesc': 'Subscribe for updates and special offers',
    'footer.yourEmail': 'Your Email',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',

    // Services
    'services.from': 'From',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.gallery': 'Galerie',
    'nav.merch': 'Boutique',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Réserver',

    // Hero
    'hero.subtitle': 'Où l\'art traditionnel du barbier rencontre l\'élégance moderne.',
    'hero.experience': 'Découvrez des services de coiffure premium dans le meilleur salon de coiffure de Pretoria.',
    'hero.bookAppointment': 'Prendre Rendez-vous',
    'hero.ourServices': 'Nos Services',

    // Home page
    'home.ourWork': 'Notre Travail',
    'home.ourWorkDesc': 'Découvrez certaines de nos meilleures réalisations, façonnées avec précision et style',
    'home.ourServices': 'Nos Services Premium',
    'home.ourServicesDesc': 'Découvrez notre gamme de services d\'experts conçus pour le gentleman moderne qui apprécie la qualité et le style.',
    'home.viewAllServices': 'Voir Tous les Services',
    'home.testimonials': 'Ce que Disent Nos Clients',
    'home.testimonialsDesc': 'Ne vous fiez pas seulement à notre parole. Écoutez les gentlemen qui vivent notre expérience premium.',
    'home.ctaTitle': 'Vivez l\'Expérience Premium Dès Aujourd\'hui',
    'home.ctaDesc': 'Réservez votre rendez-vous maintenant et découvrez pourquoi KMD Pro Barber est la destination privilégiée de Pretoria pour le gentleman moderne.',
    'home.findUs': 'Nous Trouver',
    'home.findUsDesc': 'Visitez notre élégant salon de coiffure au cœur de Pretoria pour une expérience de coiffure ultime.',
    'home.address': 'Adresse',
    'home.hours': 'Horaires',
    'home.contact': 'Contact',

    // Gallery page
    'gallery.title': 'Notre Galerie',
    'gallery.description': 'Parcourez notre collection de coupes de cheveux, dégradés et styles de barbe haut de gamme',
    'gallery.all': 'Tous',
    'gallery.ctaTitle': 'Prêt pour Votre Prochaine Coupe Premium?',
    'gallery.ctaDesc': 'Prenez rendez-vous aujourd\'hui et laissez nos maîtres barbiers créer votre look parfait.',

    // Footer
    'footer.brief': 'Services de coiffure premium pour le gentleman moderne à Pretoria.',
    'footer.contactUs': 'Contactez-nous',
    'footer.quickLinks': 'Liens Rapides',
    'footer.newsletter': 'Newsletter',
    'footer.subscribeDesc': 'Abonnez-vous pour recevoir des mises à jour et des offres spéciales',
    'footer.yourEmail': 'Votre Email',
    'footer.subscribe': 'S\'abonner',
    'footer.rights': 'Tous droits réservés.',

    // Services
    'services.from': 'À partir de',
  },
};

// Create the provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
