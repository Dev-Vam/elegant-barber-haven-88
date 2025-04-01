
import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Map = () => {
  const { t, language } = useLanguage();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">{t('home.findUs')}</h2>
          <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
            {t('home.findUsDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-sm overflow-hidden shadow-md h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d224.66973031683696!2d28.193437063312647!3d-25.713835919462525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sza!4v1743269134192!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="KMD Pro Barber Location"
                className="w-full h-full"
              />
            </div>
          </div>
          
          <div className="bg-white p-8 shadow-md rounded-sm border-t-2 border-barber-gold">
            <h3 className="text-2xl font-playfair font-bold mb-6">{t('home.visitUs')}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-barber-gold mt-1 mr-3" size={22} />
                <div>
                  <h4 className="font-semibold mb-1">{t('home.address')}</h4>
                  <p className="text-barber-charcoal/70">
                    599 Catherina Street<br />
                    Pretoria, South Africa
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-barber-gold mt-1 mr-3" size={22} />
                <div>
                  <h4 className="font-semibold mb-1">{t('home.hours')}</h4>
                  <p className="text-barber-charcoal/70">
                    {language === 'en' ? 'Monday' : 'Lundi'}: {t('home.closed')}<br />
                    {language === 'en' ? 'Tuesday - Friday' : 'Mardi - Vendredi'}: 07:00 - 18:00<br />
                    {language === 'en' ? 'Saturday - Sunday' : 'Samedi - Dimanche'}: 07:00 - 15:00
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-barber-gold mt-1 mr-3" size={22} />
                <div>
                  <h4 className="font-semibold mb-1">{t('home.contact')}</h4>
                  <p className="text-barber-charcoal/70">
                    {language === 'en' ? 'Phone' : 'Téléphone'}: +27 78 824 6963<br />
                    Email: kdmprobarber@outlook.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
