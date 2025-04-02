
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, Award, Users, Scissors, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

const CareerPage = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  // Career benefits data
  const benefits = [
    {
      icon: <Calendar className="text-barber-gold w-10 h-10" />,
      title: language === 'en' ? "Flexible Hours" : "Horaires Flexibles",
      description: language === 'en' 
        ? "Work-life balance with schedules that fit your lifestyle" 
        : "Équilibre travail-vie avec des horaires adaptés à votre style de vie"
    },
    {
      icon: <Award className="text-barber-gold w-10 h-10" />,
      title: language === 'en' ? "Professional Growth" : "Développement Professionnel",
      description: language === 'en' 
        ? "Regular training and certification opportunities" 
        : "Opportunités régulières de formation et de certification"
    },
    {
      icon: <Users className="text-barber-gold w-10 h-10" />,
      title: language === 'en' ? "Amazing Team" : "Équipe Formidable",
      description: language === 'en' 
        ? "Join our diverse and talented community of barbers" 
        : "Rejoignez notre communauté diversifiée et talentueuse de barbiers"
    },
    {
      icon: <Scissors className="text-barber-gold w-10 h-10" />,
      title: language === 'en' ? "Creative Freedom" : "Liberté Créative",
      description: language === 'en' 
        ? "Express your artistic talent and barbering style" 
        : "Exprimez votre talent artistique et votre style de coiffure"
    }
  ];

  // Current job openings
  const openings = [
    {
      position: language === 'en' ? "Senior Barber" : "Barbier Senior",
      type: language === 'en' ? "Full-time" : "Temps plein",
      experience: language === 'en' ? "Minimum 3 years" : "Minimum 3 ans"
    },
    {
      position: language === 'en' ? "Junior Barber" : "Barbier Junior",
      type: language === 'en' ? "Full-time / Part-time" : "Temps plein / Temps partiel",
      experience: language === 'en' ? "Entry level welcome" : "Débutant bienvenu"
    },
    {
      position: language === 'en' ? "Shop Manager" : "Gérant de Boutique",
      type: language === 'en' ? "Full-time" : "Temps plein",
      experience: language === 'en' ? "Minimum 5 years in barbering" : "Minimum 5 ans dans la coiffure"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    toast({
      title: language === 'en' ? "Application Submitted" : "Candidature Soumise",
      description: language === 'en' 
        ? "We'll review your application and get back to you soon!" 
        : "Nous examinerons votre candidature et vous recontacterons bientôt !",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-barber-charcoal text-white py-24 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            {language === 'en' ? "Join Our Team" : "Rejoignez Notre Équipe"}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? "Become part of the KMD Pro Barber family and build your career with us" 
              : "Devenez membre de la famille KMD Pro Barber et construisez votre carrière avec nous"}
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 text-lg rounded-sm"
              onClick={() => {
                const element = document.getElementById('apply');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {language === 'en' ? "Apply Now" : "Postuler Maintenant"}
            </Button>
          </div>
        </div>
      </section>

      {/* About Working Here */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              {language === 'en' ? "Why Work With Us" : "Pourquoi Travailler Avec Nous"}
            </h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              {language === 'en' 
                ? "At KMD Pro Barber, we value talent, creativity, and dedication. Established in 1992, we've built a reputation for excellence and innovation in the barbering industry." 
                : "Chez KMD Pro Barber, nous valorisons le talent, la créativité et le dévouement. Établis en 1992, nous avons bâti une réputation d'excellence et d'innovation dans l'industrie de la coiffure."}
            </p>
          </div>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-barber-cream p-8 text-center shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-playfair font-semibold mb-2 text-barber-charcoal">{benefit.title}</h3>
                <p className="text-barber-charcoal/90">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-barber-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
            {language === 'en' ? "Current Openings" : "Postes Disponibles"}
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <div key={index} className="bg-white p-6 md:p-8 shadow-md border-l-4 border-barber-gold">
                <div className="md:flex md:justify-between md:items-center">
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-barber-charcoal mb-2">{job.position}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
                      <span className="inline-flex items-center text-sm text-barber-charcoal/80">
                        <MapPin className="w-4 h-4 mr-1 text-barber-gold" />
                        {language === 'en' ? "Pretoria, South Africa" : "Pretoria, Afrique du Sud"}
                      </span>
                      <span className="inline-flex items-center text-sm text-barber-charcoal/80">
                        <Calendar className="w-4 h-4 mr-1 text-barber-gold" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center text-sm text-barber-charcoal/80">
                        <Award className="w-4 h-4 mr-1 text-barber-gold" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <Button 
                    className="bg-barber-brown hover:bg-barber-gold text-white mt-4 md:mt-0"
                    onClick={() => {
                      const element = document.getElementById('apply');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {language === 'en' ? "Apply" : "Postuler"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
              {language === 'en' ? "Apply Now" : "Postuler Maintenant"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-barber-charcoal mb-1">
                    {language === 'en' ? "Full Name" : "Nom Complet"}*
                  </label>
                  <Input id="fullName" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-barber-charcoal mb-1">
                    {language === 'en' ? "Email Address" : "Adresse Email"}*
                  </label>
                  <Input id="email" type="email" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-barber-charcoal mb-1">
                    {language === 'en' ? "Phone Number" : "Numéro de Téléphone"}*
                  </label>
                  <Input id="phone" required />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-barber-charcoal mb-1">
                    {language === 'en' ? "Position Applying For" : "Poste Convoité"}*
                  </label>
                  <select 
                    id="position" 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                  >
                    <option value="">{language === 'en' ? "Select position" : "Sélectionner un poste"}</option>
                    <option value="senior-barber">{language === 'en' ? "Senior Barber" : "Barbier Senior"}</option>
                    <option value="junior-barber">{language === 'en' ? "Junior Barber" : "Barbier Junior"}</option>
                    <option value="shop-manager">{language === 'en' ? "Shop Manager" : "Gérant de Boutique"}</option>
                    <option value="other">{language === 'en' ? "Other" : "Autre"}</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-barber-charcoal mb-1">
                  {language === 'en' ? "Years of Experience" : "Années d'Expérience"}*
                </label>
                <Input id="experience" type="number" min="0" required />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-barber-charcoal mb-1">
                  {language === 'en' ? "Tell us about yourself" : "Parlez-nous de vous"}*
                </label>
                <Textarea 
                  id="message" 
                  rows={5} 
                  placeholder={language === 'en' 
                    ? "Your skills, experience, and why you want to join our team..." 
                    : "Vos compétences, expérience et pourquoi vous souhaitez rejoindre notre équipe..."}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-barber-charcoal mb-1">
                  {language === 'en' ? "Upload your Resume/CV" : "Téléchargez votre CV"}*
                </label>
                <Input id="resume" type="file" required />
                <p className="text-xs text-barber-charcoal/70 mt-1">
                  {language === 'en' 
                    ? "PDF or Word documents only (max 5MB)" 
                    : "Documents PDF ou Word uniquement (max 5MB)"}
                </p>
              </div>
              
              <div className="flex items-center">
                <input 
                  id="terms" 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-barber-gold focus:ring-barber-gold"
                  required
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-barber-charcoal">
                  {language === 'en' 
                    ? "I agree that my submitted data is being collected and stored." 
                    : "J'accepte que mes données soumises soient collectées et stockées."}*
                </label>
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="w-full bg-barber-gold hover:bg-barber-brown text-white py-3"
                >
                  {language === 'en' ? "Submit Application" : "Soumettre la Candidature"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CareerPage;
