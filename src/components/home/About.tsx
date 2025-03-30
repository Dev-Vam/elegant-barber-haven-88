
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Craftsmanship & Excellence Since 1992</h2>
            <p className="text-barber-charcoal/80 mb-4">
              At KMD Pro Barber, we blend traditional barbering techniques with modern style to deliver an exceptional grooming experience. Our master barbers bring decades of combined expertise to every service.
            </p>
            <p className="text-barber-charcoal/80 mb-6">
              We pride ourselves on creating a sophisticated yet welcoming environment where clients can relax and enjoy premium care. From classic cuts to contemporary styles, we're dedicated to helping you look and feel your best.
            </p>
            <ul className="mb-8 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                <span>Award-winning master barbers</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                <span>Premium grooming products</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                <span>Comfortable, elegant atmosphere</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-barber-gold rounded-full mr-2"></span>
                <span>Complimentary consultation with every service</span>
              </li>
            </ul>
            <Button asChild className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 rounded-sm">
              <Link to="/about">Meet Our Team</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-barber-charcoal to-black rounded-sm relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="data:image/jpeg;base64,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"
                  alt="Barber Img" 
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 border-2 border-barber-gold rounded-sm z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
