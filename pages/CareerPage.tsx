
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, Award, Users, Scissors, MapPin, Briefcase, GraduationCap, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CareerPage = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  // Barber training benefits
  const benefits = [
    {
      icon: <Calendar className="text-barber-gold w-10 h-10" />,
      title: language === 'en' ? "Flexible Schedule" : "Horaire Flexible",
      description: language === 'en' 
        ? "Learn while balancing your current responsibilities" 
        : "Apprenez tout en équilibrant vos responsabilités actuelles"
    },
    {
      icon: <Award className="text-barber-gold w-10 h-10" />,
      title: language === 'en' ? "Industry Certification" : "Certification Professionnelle",
      description: language === 'en' 
        ? "Receive recognized credentials upon completion" 
        : "Recevez des certifications reconnues à la fin de votre formation"
    },
    {
      icon: <Users className="text-barber-gold w-10 h-10" />,
      title: language === 'en' ? "Mentorship" : "Mentorat",
      description: language === 'en' 
        ? "Learn from experienced master barbers" 
        : "Apprenez des maîtres barbiers expérimentés"
    },
    {
      icon: <Scissors className="text-barber-gold w-10 h-10" />,
      title: language === 'en' ? "Hands-on Training" : "Formation Pratique",
      description: language === 'en' 
        ? "Practice with real clients in our prestigious shop" 
        : "Pratiquez avec de vrais clients dans notre prestigieux salon"
    }
  ];

  // Career path opportunities
  const careerPaths = [
    {
      title: language === 'en' ? "Apprentice Barber" : "Barbier Apprenti",
      description: language === 'en' 
        ? "Start your journey learning fundamental cutting and styling techniques" 
        : "Commencez votre parcours en apprenant les techniques fondamentales de coupe et de coiffage",
      duration: language === 'en' ? "6-12 months" : "6-12 mois"
    },
    {
      title: language === 'en' ? "Junior Barber" : "Barbier Junior",
      description: language === 'en' 
        ? "Build your client base while refining your skills" 
        : "Développez votre clientèle tout en affinant vos compétences",
      duration: language === 'en' ? "1-2 years" : "1-2 ans"
    },
    {
      title: language === 'en' ? "Senior Barber" : "Barbier Senior",
      description: language === 'en' 
        ? "Master advanced techniques and develop your unique style" 
        : "Maîtrisez des techniques avancées et développez votre style unique",
      duration: language === 'en' ? "3+ years" : "3+ ans"
    },
    {
      title: language === 'en' ? "Master Barber / Shop Owner" : "Maître Barbier / Propriétaire",
      description: language === 'en' 
        ? "Run your own shop or train the next generation of barbers" 
        : "Gérez votre propre salon ou formez la prochaine génération de barbiers",
      duration: language === 'en' ? "5+ years" : "5+ ans"
    }
  ];

  // Skills taught
  const skills = [
    {
      icon: <Scissors className="text-barber-gold w-8 h-8" />,
      name: language === 'en' ? "Classic & Modern Cuts" : "Coupes Classiques & Modernes"
    },
    {
      icon: <span className="text-barber-gold text-3xl font-bold">✂</span>,
      name: language === 'en' ? "Beard Styling & Trimming" : "Taille & Stylisme de Barbe"
    },
    {
      icon: <span className="text-barber-gold text-3xl font-bold">🪒</span>,
      name: language === 'en' ? "Straight Razor Shaving" : "Rasage au Rasoir Droit"
    },
    {
      icon: <span className="text-barber-gold text-3xl font-bold">💈</span>,
      name: language === 'en' ? "Client Consultation" : "Consultation Client"
    },
    {
      icon: <Briefcase className="text-barber-gold w-8 h-8" />,
      name: language === 'en' ? "Business Management" : "Gestion d'Entreprise"
    },
    {
      icon: <span className="text-barber-gold text-3xl font-bold">🧴</span>,
      name: language === 'en' ? "Product Knowledge" : "Connaissance des Produits"
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
            {language === 'en' ? "Become a Master Barber" : "Devenez un Maître Barbier"}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? "Join the KMD Pro Barber team and build your career in the art of barbering" 
              : "Rejoignez l'équipe KMD Pro Barber et construisez votre carrière dans l'art de la barberie"}
          </p>
          <div className="flex justify-center">
            <Button 
              className="bg-barber-gold hover:bg-barber-brown text-white px-8 py-6 text-lg rounded-sm"
              onClick={() => {
                const element = document.getElementById('apply');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {language === 'en' ? "Start Your Journey" : "Commencez Votre Parcours"}
            </Button>
          </div>
        </div>
      </section>

      {/* About Our Training Program */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              {language === 'en' ? "Why Train With Us" : "Pourquoi Se Former Avec Nous"}
            </h2>
            <p className="text-barber-charcoal/80 max-w-2xl mx-auto">
              {language === 'en' 
                ? "At KMD Pro Barber, we've been crafting exceptional barbers since 1992. Our training program combines traditional techniques with modern styles, preparing you for a successful career in this growing industry." 
                : "Chez KMD Pro Barber, nous formons d'excellents barbiers depuis 1992. Notre programme de formation combine techniques traditionnelles et styles modernes, vous préparant à une carrière réussie dans cette industrie en pleine croissance."}
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

      {/* Career Path */}
      <section className="py-16 bg-barber-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
            {language === 'en' ? "Your Career Path" : "Votre Parcours Professionnel"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {careerPaths.map((path, index) => (
              <Card key={index} className="border-t-4 border-barber-gold">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-playfair">{path.title}</CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-1 text-barber-gold" />
                    {path.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-barber-charcoal/90">{path.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills You'll Learn */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
            {language === 'en' ? "Skills You'll Master" : "Compétences Que Vous Maîtriserez"}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="bg-barber-cream p-6 text-center shadow-md rounded-sm flex flex-col items-center justify-center">
                <div className="mb-3">{skill.icon}</div>
                <h3 className="font-playfair font-semibold">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-barber-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
            {language === 'en' ? "Success Stories" : "Histoires de Réussite"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 shadow-md rounded-sm">
              <p className="italic text-barber-charcoal/90 mb-4">
                {language === 'en' 
                  ? "\"Training at KMD Pro Barber was the best decision of my life. Within 18 months I went from complete beginner to running my own chair with a loyal clientele.\"" 
                  : "\"Me former chez KMD Pro Barber a été la meilleure décision de ma vie. En 18 mois, je suis passé de débutant complet à gérer mon propre fauteuil avec une clientèle fidèle.\""}
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-barber-charcoal flex items-center justify-center text-white font-bold text-xl">D</div>
                <div className="ml-3">
                  <h4 className="font-playfair font-semibold">{language === 'en' ? "David M." : "David M."}</h4>
                  <p className="text-sm text-barber-charcoal/70">{language === 'en' ? "Graduate of 2021" : "Diplômé de 2021"}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 shadow-md rounded-sm">
              <p className="italic text-barber-charcoal/90 mb-4">
                {language === 'en' 
                  ? "\"The mentorship I received was invaluable. I learned not just cutting techniques but how to build relationships with clients and run a successful business.\"" 
                  : "\"Le mentorat que j'ai reçu était inestimable. J'ai appris non seulement les techniques de coupe mais aussi comment établir des relations avec les clients et gérer une entreprise prospère.\""}
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-barber-charcoal flex items-center justify-center text-white font-bold text-xl">S</div>
                <div className="ml-3">
                  <h4 className="font-playfair font-semibold">{language === 'en' ? "Sarah T." : "Sarah T."}</h4>
                  <p className="text-sm text-barber-charcoal/70">{language === 'en' ? "Graduate of 2020" : "Diplômée de 2020"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
              {language === 'en' ? "Apply For Training" : "Postuler Pour la Formation"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-barber-cream p-8 shadow-md rounded-sm">
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
                  <label htmlFor="age" className="block text-sm font-medium text-barber-charcoal mb-1">
                    {language === 'en' ? "Age" : "Âge"}*
                  </label>
                  <Input id="age" type="number" min="16" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-barber-charcoal mb-1">
                  {language === 'en' ? "Previous Experience" : "Expérience Antérieure"}
                </label>
                <select 
                  id="experience" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">{language === 'en' ? "Select your experience level" : "Sélectionnez votre niveau d'expérience"}</option>
                  <option value="none">{language === 'en' ? "No experience" : "Aucune expérience"}</option>
                  <option value="hobby">{language === 'en' ? "Hobbyist / Self-taught" : "Amateur / Autodidacte"}</option>
                  <option value="some-training">{language === 'en' ? "Some formal training" : "Formation partielle"}</option>
                  <option value="professional">{language === 'en' ? "Professional experience" : "Expérience professionnelle"}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="programType" className="block text-sm font-medium text-barber-charcoal mb-1">
                  {language === 'en' ? "Preferred Program" : "Programme Préféré"}*
                </label>
                <select 
                  id="programType" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                >
                  <option value="">{language === 'en' ? "Select program type" : "Sélectionnez le type de programme"}</option>
                  <option value="full-time">{language === 'en' ? "Full-time (5 days/week)" : "Temps plein (5 jours/semaine)"}</option>
                  <option value="part-time">{language === 'en' ? "Part-time (evenings & weekends)" : "Temps partiel (soirs et week-ends)"}</option>
                  <option value="apprenticeship">{language === 'en' ? "Apprenticeship (work & learn)" : "Apprentissage (travail et formation)"}</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="why" className="block text-sm font-medium text-barber-charcoal mb-1">
                  {language === 'en' ? "Why do you want to become a barber?" : "Pourquoi souhaitez-vous devenir barbier?"}*
                </label>
                <Textarea 
                  id="why" 
                  rows={4} 
                  placeholder={language === 'en' 
                    ? "Tell us about your passion for barbering..." 
                    : "Parlez-nous de votre passion pour la barberie..."}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-barber-charcoal mb-1">
                  {language === 'en' ? "Upload your Resume/CV (Optional)" : "Téléchargez votre CV (Optionnel)"}
                </label>
                <Input id="resume" type="file" />
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
                    ? "I agree to the terms and conditions and consent to my data being processed." 
                    : "J'accepte les conditions générales et consens au traitement de mes données."}*
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
