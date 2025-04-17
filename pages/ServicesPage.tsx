
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Scissors, Star, Award, Sparkles, Coffee, Wind, Palette, SlidersHorizontal } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ServicesPage = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [filteredServices, setFilteredServices] = useState([]);
  
  const services = [
    {
      icon: <Award className="text-barber-brown" size={32} />,
      title: t("services.hairDye"),
      description: t("services.hairDyeDesc"),
      price: "R400",
      priceValue: 400,
      duration: "90 min",
      category: "coloring"
    },
    {
      icon: <Star className="text-barber-brown" size={32} />,
      title: t("services.fade"),
      description: t("services.fadeDesc"),
      price: "R150",
      priceValue: 150,
      duration: "60 min",
      category: "haircut"
    },
    {
      icon: <Palette className="text-barber-brown" size={32} />,
      title: t("services.baldShave"),
      description: t("services.baldShaveDesc"),
      price: "R75",
      priceValue: 75,
      duration: "45 min",
      category: "shaving"
    },
    {
      icon: <Scissors className="text-barber-brown" size={32} />,
      title: t("services.buzzcut"),
      description: t("services.buzzcutDesc"),
      price: "R100",
      priceValue: 100,
      duration: "25 min",
      category: "haircut"
    },
    {
      icon: <Coffee className="text-barber-brown" size={32} />,
      title: t("services.crewcut"),
      description: t("services.crewcutDesc"),
      price: "R85",
      priceValue: 85,
      duration: "45 min",
      category: "haircut"
    },
    {
      icon: <Wind className="text-barber-brown" size={32} />,
      title: t("services.designs"),
      description: t("services.designsDesc"),
      price: "R30",
      priceValue: 20,
      duration: "15 min",
      category: "styling"
    },
    {
      icon: <Coffee className="text-barber-brown" size={32} />,
      title: t("services.beardShave"),
      description: t("services.beardShaveDesc"),
      price: "R30",
      priceValue: 30,
      duration: "45 min",
      category: "shaving"
    }
  ];

  // Sort services from highest to lowest price
  const sortedServices = [...services].sort((a, b) => b.priceValue - a.priceValue);

  const categories = ["all", "haircut", "shaving", "styling", "coloring"];

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    if (filter === "all") {
      setFilteredServices([...sortedServices]);
    } else {
      setFilteredServices(
        [...sortedServices]
          .filter(service => service.category === filter)
      );
    }
  }, [filter, sortedServices]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 animate-fade-in">{t('services.title')}</h1>
          <p className="text-xl opacity-90 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">{t('services.expertGrooming')}</h2>
            <p className="text-barber-charcoal/90 max-w-2xl mx-auto">
              {t('services.description')}
            </p>
            
            {/* Filter Controls */}
            <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
              <span className="flex items-center mr-2 text-barber-charcoal">
                <SlidersHorizontal size={18} className="mr-1" /> {t('services.filter')}:
              </span>
              {categories.map((category) => (
                <Button 
                  key={category}
                  variant={filter === category ? "default" : "outline"} 
                  className={filter === category ? "bg-barber-brown hover:bg-barber-gold" : "border-barber-brown text-barber-charcoal"}
                  onClick={() => setFilter(category)}
                >
                  {t(`services.${category}`)}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-8 shadow-md hover:shadow-lg transition-shadow border-t-2 border-barber-brown transform hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-playfair font-semibold mb-2 text-barber-charcoal">{service.title}</h3>
                <p className="text-barber-charcoal/90 mb-4">{service.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <p className="text-barber-brown font-playfair font-bold">{t('services.from')} {service.price}</p>
                  <p className="text-sm text-barber-charcoal/90">{service.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-24 bg-barber-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">{t('services.premiumProducts')}</h2>
              <p className="text-barber-charcoal/80 mb-4">
                {t('services.productsDesc1')}
              </p>
              <p className="text-barber-charcoal/80 mb-6">
                {t('services.productsDesc2')}
              </p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>{t('services.product1')}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>{t('services.product2')}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>{t('services.product3')}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                  <span>{t('services.product4')}</span>
                </li>
              </ul>
              <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
                <Link to="/contact">{t('services.inquireProducts')}</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Barber cutting hair"
                className="aspect-[4/5] w-full object-cover rounded-sm"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-barber-gold rounded-sm z-[-1]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-barber-charcoal to-barber-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            {t('services.giftCards')}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t('services.giftCardsDesc')}
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/contact">{t('services.purchaseGift')}</Link>
          </Button>
        </div>
      </section>

      {/* Booking */}
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">{t('services.readyExperience')}</h2>
          <p className="text-barber-charcoal/80 mb-8 max-w-2xl mx-auto">
            {t('services.bookingDesc')}
          </p>
          <Button asChild className="bg-barber-charcoal hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
            <Link to="/booking">{t('booking.title')}</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
