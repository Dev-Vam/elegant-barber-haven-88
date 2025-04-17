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
    'nav.careers': 'Careers',

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
    'home.visitUs': 'Visit Us',
    'home.closed': 'Closed',

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
    'services.title': 'Our Services',
    'services.subtitle': 'Premium Styling Experiences',
    'services.description': 'Discover our range of expert services designed for the modern gentleman who values quality and style.',
    'services.haircuts': 'Haircuts',
    'services.shaving': 'Shaving',
    'services.styling': 'Styling',
    'services.treatments': 'Treatments',
    'services.book': 'Book Service',
    'services.duration': 'Duration',
    'services.minutes': 'minutes',
    'services.filter': 'Filter',
    'services.all': 'All',
    'services.haircut': 'Haircut',
    'services.coloring': 'Coloring',
    'services.expertGrooming': 'Exceptional Barbering Services',
    'services.premiumProducts': 'Premium Products',
    'services.productsDesc1': 'At KMD Pro Barber, we use and sell only the highest quality styling products to ensure you look your best long after you leave our shop.',
    'services.productsDesc2': 'Our curated selection includes premium hair styling products, beard care essentials, and skincare items from trusted brands worldwide.',
    'services.product1': 'Styling pomades, clays, and waxes',
    'services.product2': 'Beard oils, balms, and washes',
    'services.product3': 'Shaving creams and aftershaves',
    'services.product4': 'Hair and scalp treatments',
    'services.inquireProducts': 'Inquire About Products',
    'services.giftCards': 'Gift Cards Available',
    'services.giftCardsDesc': 'Give the gift of distinguished styling. Our gift cards are perfect for birthdays, anniversaries, or any special occasion.',
    'services.purchaseGift': 'Purchase a Gift Card',
    'services.readyExperience': 'Ready to Experience Excellence?',
    'services.bookingDesc': 'Book your appointment today and discover why KMD Pro Barber is Pretoria\'s premier destination for sophisticated styling.',
    'services.hairDye': 'Hair Dye & Haircut',
    'services.hairDyeDesc': 'Full color service with expert cutting and styling, available in all colors. Includes consultation and aftercare advice.',
    'services.fade': 'Fade Cut',
    'services.fadeDesc': 'Expert fade haircut with precision shaving for a clean, fresh look that transitions smoothly between lengths.',
    'services.baldShave': 'Bald Shave & Beard Shave',
    'services.baldShaveDesc': 'Complete head and beard shave with hot towel treatment for the ultimate smooth, clean finish.',
    'services.buzzcut': 'Buzzcut',
    'services.buzzcutDesc': 'Quick and clean buzzcut with consistent length all around using premium clippers for a low-maintenance style.',
    'services.crewcut': 'Crewcut',
    'services.crewcutDesc': 'Classic short cut that\'s slightly longer on top with tapered sides for a timeless, versatile look.',
    'services.designs': 'Lined Designs',
    'services.designsDesc': 'Custom hair designs with precision lines and patterns by our expert barbers, add personality to any haircut.',
    'services.beardShave': 'Beard Shave',
    'services.beardShaveDesc': 'Beard shave with hot towel treatment for the ultimate smooth, clean finish.',
    
    // About
    'about.title': 'About Us',
    'about.subtitle': 'Our Story',
    'about.description': 'Learn about KMD Pro Barber and our commitment to excellence in grooming.',
    'about.ourStory': 'Our Story',
    'about.storyDescription': 'Founded in 2015, KMD Pro Barber has been delivering premium grooming services to the gentlemen of Pretoria.',
    'about.ourValues': 'Our Values',
    'about.valuesDescription': 'We believe in quality, attention to detail, and exceptional customer service.',
    'about.ourTeam': 'Our Team',
    'about.teamDescription': 'Meet our team of skilled and passionate barbers who excel in their craft.',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get In Touch',
    'contact.description': 'Have a question or want to book an appointment? Reach out to us.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.phone': 'Phone',
    'contact.send': 'Send Message',
    'contact.findUs': 'Find Us',
    'contact.reachUs': 'Reach us at',
    
    // Booking
    'booking.title': 'Book Appointment',
    'booking.subtitle': 'Reserve Your Spot',
    'booking.description': 'Schedule your next grooming experience with our expert barbers.',
    'booking.service': 'Service',
    'booking.date': 'Date',
    'booking.time': 'Time',
    'booking.barber': 'Barber',
    'booking.confirm': 'Confirm Booking',
    'booking.yourInfo': 'Your Information',
    'booking.selectService': 'Select Service',
    'booking.selectBarber': 'Select Barber',
    'booking.selectDate': 'Select Date',
    'booking.selectTime': 'Select Time',
    'booking.available': 'Available',
    'booking.booked': 'Booked',
    
    // Merchandise
    'merch.title': 'Merchandise Store',
    'merch.subtitle': 'Premium Quality Products',
    'merch.description': 'Premium quality products for the modern gentleman',
    'merch.seeStore': 'See Printify Store',
    'merch.freeShipping': 'Free shipping on orders over R100',
    'merch.exclusiveDesigns': 'Exclusive KMD Pro Barber designs',
    'merch.securePayment': 'Secure online payment',
    'merch.shopCollection': 'Shop Our Collection',
    'merch.shopDescription': 'Quality merchandise that reflects our premium barbershop experience. Each item is carefully selected and designed with our signature elegant style.',
    'merch.quality': 'Quality You Can Trust',
    'merch.qualityDescription': 'We\'ve partnered with Printify to ensure that all our merchandise meets the highest standards of quality. Each item is printed on-demand and shipped directly to you.',
    'merch.designDescription': 'Our designs reflect the elegant style and attention to detail that KMD Pro Barber is known for, allowing you to bring a piece of our premium experience into your everyday life.',
    'merch.materials': 'Premium quality materials',
    'merch.eco': 'Eco-friendly production processes',
    'merch.comfortable': 'Comfortable, durable designs',
    'merch.satisfaction': 'Satisfaction guaranteed',
    'merch.contactBulk': 'Contact for Bulk Orders',
    'merch.takeHome': 'Take the KMD Pro Barber Experience Home',
    'merch.browseCollection': 'Browse our collection of premium merchandise and find the perfect addition to your style. From grooming products to apparel, we\'ve got you covered.',
    'merch.visitStore': 'Visit Our Printify Store',
    
    // 404 Page
    'notFound.title': '404',
    'notFound.message': 'We couldn\'t find the page you\'re looking for.',
    'notFound.home': 'Return to Home',
    'notFound.contact': 'Contact Us'
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
    'nav.careers': 'Carrières',
    
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
    'home.visitUs': 'Visitez-Nous',
    'home.closed': 'Fermé',

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
    'services.title': 'Nos Services',
    'services.subtitle': 'Expériences de Coiffage Premium',
    'services.description': 'Découvrez notre gamme de services d\'experts conçus pour le gentleman moderne qui valorise la qualité et le style.',
    'services.haircuts': 'Coupes de Cheveux',
    'services.shaving': 'Rasage',
    'services.styling': 'Coiffage',
    'services.treatments': 'Traitements',
    'services.book': 'Réserver',
    'services.duration': 'Durée',
    'services.minutes': 'minutes',
    'services.filter': 'Filtrer',
    'services.all': 'Tous',
    'services.haircut': 'Coupe',
    'services.coloring': 'Coloration',
    'services.expertGrooming': 'Services d\'Excellence en Coiffage',
    'services.premiumProducts': 'Produits Premium',
    'services.productsDesc1': 'Chez KMD Pro Barber, nous utilisons et vendons uniquement des produits de coiffage de la plus haute qualité pour vous assurer d\'être au meilleur de votre forme longtemps après avoir quitté notre salon.',
    'services.productsDesc2': 'Notre sélection comprend des produits de coiffage, des essentiels pour la barbe et des produits de soins de la peau des meilleures marques du monde entier.',
    'services.product1': 'Pommades, argiles et cires coiffantes',
    'services.product2': 'Huiles, baumes et nettoyants pour barbe',
    'services.product3': 'Crèmes à raser et après-rasages',
    'services.product4': 'Traitements pour les cheveux et le cuir chevelu',
    'services.inquireProducts': 'Se Renseigner sur les Produits',
    'services.giftCards': 'Cartes Cadeaux Disponibles',
    'services.giftCardsDesc': 'Offrez le cadeau d\'un style distingué. Nos cartes cadeaux sont parfaites pour les anniversaires ou toute occasion spéciale.',
    'services.purchaseGift': 'Acheter une Carte Cadeau',
    'services.readyExperience': 'Prêt à Vivre l\'Excellence?',
    'services.bookingDesc': 'Réservez votre rendez-vous aujourd\'hui et découvrez pourquoi KMD Pro Barber est la destination privilégiée de Pretoria pour un style sophistiqué.',
    'services.hairDye': 'Coloration & Coupe',
    'services.hairDyeDesc': 'Service de coloration complet avec coupe et coiffage expert, disponible dans toutes les couleurs. Comprend une consultation et des conseils d\'entretien.',
    'services.fade': 'Coupe Dégradée',
    'services.fadeDesc': 'Coupe de cheveux dégradée experte avec rasage de précision pour un look propre et frais qui transition en douceur entre les longueurs.',
    'services.baldShave': 'Rasage Crâne & Barbe',
    'services.baldShaveDesc': 'Rasage complet de la tête et de la barbe avec traitement à la serviette chaude pour une finition lisse et propre.',
    'services.buzzcut': 'Coupe Courte',
    'services.buzzcutDesc': 'Coupe courte rapide et nette avec une longueur uniforme tout autour à l\'aide de tondeuses premium pour un style facile à entretenir.',
    'services.crewcut': 'Coupe Classique',
    'services.crewcutDesc': 'Coupe courte classique légèrement plus longue sur le dessus avec des côtés effilés pour un look intemporel et polyvalent.',
    'services.designs': 'Motifs Rasés',
    'services.designsDesc': 'Motifs personnalisés avec des lignes et des motifs de précision par nos barbiers experts, ajoutez de la personnalité à n\'importe quelle coupe de cheveux.',
    'services.beardShave': 'Rasage de Barbe',
    'services.beardShaveDesc': 'Rasage de barbe avec traitement à la serviette chaude pour une finition lisse et propre.',
    
    // About
    'about.title': 'À Propos de Nous',
    'about.subtitle': 'Notre Histoire',
    'about.description': 'Découvrez KMD Pro Barber et notre engagement envers l\'excellence en matière de toilettage.',
    'about.ourStory': 'Notre Histoire',
    'about.storyDescription': 'Fondé en 2015, KMD Pro Barber offre des services de toilettage premium aux gentlemen de Pretoria.',
    'about.ourValues': 'Nos Valeurs',
    'about.valuesDescription': 'Nous croyons en la qualité, l\'attention aux détails et un service client exceptionnel.',
    'about.ourTeam': 'Notre Équipe',
    'about.teamDescription': 'Rencontrez notre équipe de barbiers qualifiés et passionnés qui excellent dans leur métier.',
    
    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Entrer en Contact',
    'contact.description': 'Vous avez une question ou souhaitez prendre rendez-vous? Contactez-nous.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.phone': 'Téléphone',
    'contact.send': 'Envoyer le Message',
    'contact.findUs': 'Trouvez-nous',
    'contact.reachUs': 'Contactez-nous au',
    
    // Booking
    'booking.title': 'Réserver un Rendez-vous',
    'booking.subtitle': 'Réservez Votre Place',
    'booking.description': 'Planifiez votre prochaine expérience de toilettage avec nos barbiers experts.',
    'booking.service': 'Service',
    'booking.date': 'Date',
    'booking.time': 'Heure',
    'booking.barber': 'Barbier',
    'booking.confirm': 'Confirmer la Réservation',
    'booking.yourInfo': 'Vos Informations',
    'booking.selectService': 'Sélectionner le Service',
    'booking.selectBarber': 'Sélectionner le Barbier',
    'booking.selectDate': 'Sélectionner la Date',
    'booking.selectTime': 'Sélectionner l\'Heure',
    'booking.available': 'Disponible',
    'booking.booked': 'Réservé',
    
    // Merchandise
    'merch.title': 'Boutique de Marchandise',
    'merch.subtitle': 'Produits de Qualité Premium',
    'merch.description': 'Produits de qualité premium pour le gentleman moderne',
    'merch.seeStore': 'Voir la Boutique Printify',
    'merch.freeShipping': 'Livraison gratuite pour les commandes de plus de R100',
    'merch.exclusiveDesigns': 'Designs exclusifs KMD Pro Barber',
    'merch.securePayment': 'Paiement en ligne sécurisé',
    'merch.shopCollection': 'Découvrez Notre Collection',
    'merch.shopDescription': 'Des articles de qualité qui reflètent notre expérience premium de salon de coiffure. Chaque article est soigneusement sélectionné et conçu avec notre style élégant signature.',
    'merch.quality': 'Une Qualité à Laquelle Vous Pouvez Faire Confiance',
    'merch.qualityDescription': 'Nous nous sommes associés à Printify pour garantir que tous nos produits répondent aux normes de qualité les plus élevées. Chaque article est imprimé à la demande et expédié directement chez vous.',
    'merch.designDescription': 'Nos designs reflètent le style élégant et l\'attention aux détails qui caractérisent KMD Pro Barber, vous permettant d\'apporter un peu de notre expérience premium dans votre vie quotidienne.',
    'merch.materials': 'Matériaux de qualité premium',
    'merch.eco': 'Processus de production écologiques',
    'merch.comfortable': 'Designs confortables et durables',
    'merch.satisfaction': 'Satisfaction garantie',
    'merch.contactBulk': 'Contact pour Commandes en Gros',
    'merch.takeHome': 'Ramenez l\'Expérience KMD Pro Barber Chez Vous',
    'merch.browseCollection': 'Parcourez notre collection d\'articles premium et trouvez le complément parfait à votre style. Des produits de toilettage aux vêtements, nous avons ce qu\'il vous faut.',
    'merch.visitStore': 'Visitez Notre Boutique Printify',
    
    // 404 Page
    'notFound.title': '404',
    'notFound.message': 'Nous n\'avons pas pu trouver la page que vous cherchez.',
    'notFound.home': 'Retour à l\'Accueil',
    'notFound.contact': 'Contactez-Nous'
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
