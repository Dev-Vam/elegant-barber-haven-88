
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Tiktok = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
    <path d="M15 8c0 1.66-1.34 3-3 3h-1V6c0-1.66 1.34-3 3-3h1v5Z" />
    <path d="M15 5c1.66 0 3 1.34 3 3v14" />
  </svg>
);

const Footer = () => {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-barber-charcoal text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1 - Logo and brief info */}
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-4">KMD <span className="text-barber-gold">Pro</span> Barber</h3>
            <p className="text-gray-300 mb-4">{t('footer.brief')}</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="hover:text-barber-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-barber-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://tiktok.com" className="hover:text-barber-gold transition-colors" aria-label="Tiktok">
                <Tiktok size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Contact Info */}
          <div>
            <h4 className="text-xl font-playfair mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-barber-gold" size={16} />
                <span>599 Catherina Street, <br />Pretoria</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-barber-gold" size={16} />
                <a href="tel:+27788246963" className="hover:text-barber-gold transition-colors">+27 78 824 6963</a>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 mt-1 text-barber-gold" size={16} />
                <div>
                  <p>{language === 'en' ? 'Monday' : 'Lundi'}: {language === 'en' ? 'Closed' : 'Fermé'}</p>
                  <p>{language === 'en' ? 'Tuesday-Friday' : 'Mardi-Vendredi'}: 07:00 - 18:00</p>
                  <p>{language === 'en' ? 'Saturday-Sunday' : 'Samedi-Dimanche'}: 07:00 - 15:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-xl font-playfair mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-barber-gold transition-colors">{t('nav.home')}</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-barber-gold transition-colors">{t('nav.services')}</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-barber-gold transition-colors">{t('nav.about')}</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-barber-gold transition-colors">{t('nav.gallery')}</Link>
              </li>
              <li>
                <Link to="/merch" className="hover:text-barber-gold transition-colors">{t('nav.merch')}</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-barber-gold transition-colors">{t('nav.contact')}</Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-barber-gold transition-colors">{t('hero.bookAppointment')}</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="text-xl font-playfair mb-4">{t('footer.newsletter')}</h4>
            <p className="text-gray-300 mb-4">{t('footer.subscribeDesc')}</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder={t('footer.yourEmail')} 
                className="px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-barber-gold"
              />
              <button 
                type="submit" 
                className="bg-barber-gold text-white px-4 py-2 rounded hover:bg-barber-brown transition-colors"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} KMD Pro Barber. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
