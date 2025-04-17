
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { ShoppingBag, Package, Tag, CreditCard, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const PRINTIFY_SHOP_URL = "https://kmd-pro-barber-fc86120d5e.printify.me/";

const MerchStore = () => {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 animate-fade-in">{t('merch.title')}</h1>
          <p className="text-xl opacity-90 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('merch.description')}
          </p>
          <div className="mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
              <a href={PRINTIFY_SHOP_URL} target="_blank" rel="noopener noreferrer">{t('merch.seeStore')}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-barber-gold py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white text-center md:text-left">
            <div className="flex items-center gap-3">
              <Package size={24} />
              <span>{t('merch.freeShipping')}</span>
            </div>
            <div className="flex items-center gap-3">
              <Tag size={24} />
              <span>{t('merch.exclusiveDesigns')}</span>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard size={24} />
              <span>{t('merch.securePayment')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Replaced with Shop Our Collection section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">{t('merch.shopCollection')}</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              {t('merch.shopDescription')}
            </p>
            <div className="mt-6">
              <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-3 rounded-sm">
                <a href={PRINTIFY_SHOP_URL} target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-2">
                    {t('merch.seeStore')} <ExternalLink size={16} />
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Printify */}
      <section className="py-16 bg-barber-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">{t('merch.quality')}</h2>
              <p className="text-barber-charcoal/80 mb-4">
                {t('merch.qualityDescription')}
              </p>
              <p className="text-barber-charcoal/80 mb-4">
                {t('merch.designDescription')}
              </p>
              <div className="mb-8 space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>{t('merch.materials')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>{t('merch.eco')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>{t('merch.comfortable')}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>{t('merch.satisfaction')}</span>
                </div>
              </div>
              <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
                <Link to="/contact">{t('merch.contactBulk')}</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <ShoppingBag size={280} className="text-barber-gold opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-barber-charcoal to-barber-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            {t('merch.takeHome')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('merch.browseCollection')}
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <a href={PRINTIFY_SHOP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              {t('merch.visitStore')} <ExternalLink size={16} />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default MerchStore;
