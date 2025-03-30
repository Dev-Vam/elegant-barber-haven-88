
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import HomeCarousel from '@/components/home/HomeCarousel';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Testimonials from '@/components/home/Testimonials';
import CallToAction from '@/components/home/CallToAction';
import Map from '@/components/home/Map';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Our Work</h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              Take a look at some of our finest work, crafted with precision and style
            </p>
          </div>
          <HomeCarousel />
        </div>
      </div>
      <Services />
      <About />
      <Testimonials />
      <CallToAction />
      <Map />
    </Layout>
  );
};

export default Index;
