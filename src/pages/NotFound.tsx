
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useEffect } from "react";
import { useLanguage } from '@/context/LanguageContext';

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-barber-cream">
        <div className="text-center max-w-md px-4">
          <h1 className="text-6xl font-playfair font-bold mb-4 text-barber-charcoal">{t('notFound.title')}</h1>
          <p className="text-xl text-barber-charcoal/80 mb-8">
            {t('notFound.message')}
          </p>
          <div className="space-y-4">
            <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-6 py-3 w-full">
              <Link to="/">{t('notFound.home')}</Link>
            </Button>
            <Button asChild variant="outline" className="border-barber-charcoal text-barber-charcoal hover:bg-barber-charcoal hover:text-white px-6 py-3 w-full">
              <Link to="/contact">{t('notFound.contact')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
