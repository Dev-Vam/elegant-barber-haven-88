
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Barber cutting hair"
              className="rounded-sm aspect-[4/5] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-barber-gold rounded-sm z-[-1]"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">{t('about.ourStory')}</h2>
            <p className="text-barber-charcoal/80 mb-6">
              {t('about.storyDescription')}
            </p>
            
            <h3 className="text-xl font-playfair font-semibold mb-4">{t('about.ourValues')}</h3>
            <p className="text-barber-charcoal/80 mb-6">
              {t('about.valuesDescription')}
            </p>
            
            <h3 className="text-xl font-playfair font-semibold mb-4">{t('about.ourTeam')}</h3>
            <p className="text-barber-charcoal/80 mb-6">
              {t('about.teamDescription')}
            </p>
            
            <Button asChild className="bg-barber-brown hover:bg-barber-gold text-white px-6 py-5 rounded-sm">
              <Link to="/about">{t('nav.about')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
