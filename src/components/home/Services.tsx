
import React from 'react';
import { Scissors, Star, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  
  const serviceData = [
    {
      icon: <Award className="text-barber-brown" size={32} />,
      title: "Hair Dye & Haircut",
      description: "Full color service with expert cutting and styling, available in all colors.",
      price: "R400"
    },
    {
      icon: <Star className="text-barber-brown" size={32} />,
      title: "Fade Cut",
      description: "Expert fade haircut with precision shaving for a clean, fresh look.",
      price: "R150"
    },
    {
      icon: <Scissors className="text-barber-brown" size={32} />,
      title: "Buzzcut",
      description: "Quick and clean buzzcut with consistent length all around using premium clippers.",
      price: "R100"
    },
    {
      icon: <Sparkles className="text-barber-brown" size={32} />,
      title: "Lined Designs",
      description: "Custom hair designs with precision lines and patterns by our expert barbers.",
      price: "R20"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-barber-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">{t('home.ourServices')}</h2>
          <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
            {t('home.ourServicesDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-t-2 border-barber-brown"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-barber-charcoal">{service.title}</h3>
              <p className="text-barber-charcoal/90 mb-4">{service.description}</p>
              <p className="text-barber-brown font-playfair font-bold text-xl">{t('services.from')} {service.price}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-barber-brown hover:bg-barber-gold text-white px-8 py-6 rounded-sm transition-all duration-300">
            <Link to="/services">{t('home.viewAllServices')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
