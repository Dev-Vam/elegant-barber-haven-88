
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const founder = {
  name: "Doudou Madoucha",
  title: "Founder Master Barber",
  experience: "33+ years",
  bio: "Doudou founded KMD Pro Barber with a vision to blend traditional techniques with contemporary style. His precision cuts have earned him recognition throughout Pretoria. With over three decades of experience, he continues to lead the team with passion and dedication to the craft of barbering.",
};

const AboutPage = () => {
  const { t, language } = useLanguage();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{language === 'en' ? 'About KMD Pro Barber' : 'À Propos de KMD Pro Barber'}</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            {language === 'en' 
              ? 'A legacy of excellence in the art of barbering since 1992' 
              : 'Un héritage d\'excellence dans l\'art de la coiffure depuis 1992'}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-barber-charcoal to-black rounded-sm"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border-2 border-barber-gold rounded-sm z-[-1]"></div>
            </div>
            
            <div>
              <h2 className="text-3xl font-playfair font-bold mb-6">{language === 'en' ? 'Our Story' : 'Notre Histoire'}</h2>
              <p className="text-barber-charcoal/80 mb-4">
                {language === 'en'
                  ? 'Founded in 1992 by master barber Doudou Madoucha, KMD Pro Barber began as a small, dedicated space focused on premium styling services. From those humble beginnings, we\'ve grown into Pretoria\'s premier destination for sophisticated men\'s styling.'
                  : 'Fondé en 1992 par le maître barbier Doudou Madoucha, KMD Pro Barber a commencé comme un petit espace dédié aux services de coiffage premium. Depuis ces humbles débuts, nous sommes devenus la destination première de Pretoria pour le coiffage sophistiqué des hommes.'}
              </p>
              <p className="text-barber-charcoal/80 mb-4">
                {language === 'en'
                  ? 'Our philosophy centers on the perfect blend of traditional barbering techniques and modern style. We believe that a great haircut is about more than appearance—it\'s about confidence, self-expression, and the experience of being pampered with expert care.'
                  : 'Notre philosophie s\'articule autour du mélange parfait entre les techniques traditionnelles de barbier et le style moderne. Nous croyons qu\'une grande coupe de cheveux concerne plus que l\'apparence—il s\'agit de confiance, d\'expression de soi et de l\'expérience d\'être choyé avec des soins d\'experts.'}
              </p>
              <p className="text-barber-charcoal/80 mb-4">
                {language === 'en'
                  ? 'Over the years, we\'ve refined our craft and expanded our services while maintaining our commitment to personalized attention and exceptional results. Our barbers are continuously trained in the latest techniques while honoring the classic traditions that form the foundation of our craft.'
                  : 'Au fil des années, nous avons affiné notre métier et élargi nos services tout en maintenant notre engagement envers une attention personnalisée et des résultats exceptionnels. Nos barbiers sont continuellement formés aux dernières techniques tout en honorant les traditions classiques qui constituent le fondement de notre métier.'}
              </p>
              <p className="text-barber-charcoal/80">
                {language === 'en'
                  ? 'Today, KMD Pro Barber stands as a testament to our dedication to excellence, creating a space where gentlemen can relax, rejuvenate, and leave looking and feeling their absolute best.'
                  : 'Aujourd\'hui, KMD Pro Barber témoigne de notre dévouement à l\'excellence, créant un espace où les messieurs peuvent se détendre, se rajeunir et partir en se sentant au mieux de leur forme.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-barber-cream">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              {language === 'en' ? 'Meet Our Founder' : 'Rencontrez Notre Fondateur'}
            </h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              {language === 'en'
                ? 'The visionary behind KMD Pro Barber who brings decades of experience and passion to every cut.'
                : 'Le visionnaire derrière KMD Pro Barber qui apporte des décennies d\'expérience et de passion à chaque coupe.'}
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 shadow-md hover:shadow-lg transition-shadow border-t-2 border-barber-gold">
              <h3 className="text-2xl font-playfair font-semibold mb-1">{founder.name}</h3>
              <p className="text-barber-gold mb-2">{language === 'en' ? founder.title : 'Fondateur Maître Barbier'}</p>
              <p className="text-sm mb-3">{language === 'en' ? 'Experience: ' : 'Expérience: '}{founder.experience}</p>
              <p className="text-barber-charcoal/70">
                {language === 'en'
                  ? founder.bio
                  : 'Doudou a fondé KMD Pro Barber avec la vision de mélanger les techniques traditionnelles avec le style contemporain. Ses coupes de précision lui ont valu une reconnaissance dans tout Pretoria. Avec plus de trois décennies d\'expérience, il continue de diriger l\'équipe avec passion et dévouement au métier de barbier.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              {language === 'en' ? 'Our Values' : 'Nos Valeurs'}
            </h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              {language === 'en'
                ? 'These principles guide everything we do at KMD Pro Barber.'
                : 'Ces principes guident tout ce que nous faisons chez KMD Pro Barber.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border-l-2 border-barber-gold bg-white shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4">
                {language === 'en' ? 'Excellence' : 'Excellence'}
              </h3>
              <p className="text-barber-charcoal/80">
                {language === 'en'
                  ? 'We are committed to delivering the highest quality of service in every aspect of our work, from the moment you walk in until you leave our shop.'
                  : 'Nous nous engageons à fournir la plus haute qualité de service dans tous les aspects de notre travail, depuis le moment où vous entrez jusqu\'à ce que vous quittiez notre salon.'}
              </p>
            </div>
            
            <div className="p-8 border-l-2 border-barber-gold bg-white shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4">
                {language === 'en' ? 'Craftsmanship' : 'Savoir-faire'}
              </h3>
              <p className="text-barber-charcoal/80">
                {language === 'en'
                  ? 'We honor the traditions of barbering while embracing innovation, continuously honing our skills to perfect our craft.'
                  : 'Nous honorons les traditions du métier de barbier tout en embrassant l\'innovation, en affinant continuellement nos compétences pour perfectionner notre art.'}
              </p>
            </div>
            
            <div className="p-8 border-l-2 border-barber-gold bg-white shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4">
                {language === 'en' ? 'Respect' : 'Respect'}
              </h3>
              <p className="text-barber-charcoal/80">
                {language === 'en'
                  ? 'We value each client as an individual, listening carefully to your needs and preferences to provide a truly personalized experience.'
                  : 'Nous valorisons chaque client en tant qu\'individu, écoutant attentivement vos besoins et préférences pour fournir une expérience véritablement personnalisée.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-barber-charcoal to-barber-brown text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            {language === 'en'
              ? 'Experience the KMD Pro Barber Difference'
              : 'Découvrez la Différence KMD Pro Barber'}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Join our community of satisfied clients and discover premium styling services tailored to your unique style.'
              : 'Rejoignez notre communauté de clients satisfaits et découvrez des services de coiffage premium adaptés à votre style unique.'}
          </p>
          <Button asChild className="bg-barber-gold hover:bg-white hover:text-barber-charcoal text-white px-8 py-6 rounded-sm">
            <Link to="/booking">
              {language === 'en' ? 'Book Your Appointment' : 'Réservez Votre Rendez-vous'}
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
