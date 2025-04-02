
import React from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, Award, Users, Laptop, MapPin, Code, Server, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/components/ui/use-toast";

const CareerPage = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  
  // IT Support benefits data
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
        ? "Join our diverse and talented community of tech professionals" 
        : "Rejoignez notre communauté diversifiée et talentueuse de professionnels de la technologie"
    },
    {
      icon: <Laptop className="text-barber-gold w-10 h-10" />,
      title: language === 'en' ? "Modern Equipment" : "Équipement Moderne",
      description: language === 'en' 
        ? "Work with the latest technology and tools" 
        : "Travaillez avec les dernières technologies et outils"
    }
  ];

  // Current IT job openings
  const openings = [
    {
      position: language === 'en' ? "Senior IT Support Specialist" : "Spécialiste Senior en Support Informatique",
      type: language === 'en' ? "Full-time" : "Temps plein",
      experience: language === 'en' ? "Minimum 3 years" : "Minimum 3 ans"
    },
    {
      position: language === 'en' ? "IT Helpdesk Technician" : "Technicien Helpdesk IT",
      type: language === 'en' ? "Full-time / Part-time" : "Temps plein / Temps partiel",
      experience: language === 'en' ? "Entry level welcome" : "Débutant bienvenu"
    },
    {
      position: language === 'en' ? "IT Systems Administrator" : "Administrateur Systèmes IT",
      type: language === 'en' ? "Full-time" : "Temps plein",
      experience: language === 'en' ? "Minimum 5 years in IT" : "Minimum 5 ans en informatique"
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
            {language === 'en' ? "IT Support Careers" : "Carrières en Support Informatique"}
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? "Join the KMD Pro Barber tech team and build your IT career with us" 
              : "Rejoignez l'équipe technique de KMD Pro Barber et construisez votre carrière informatique avec nous"}
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
                ? "At KMD Pro Barber, we value technical expertise, problem-solving, and dedication. Established in 1992, we've built a reputation for excellence and innovation, and our IT team is critical to our success." 
                : "Chez KMD Pro Barber, nous valorisons l'expertise technique, la résolution de problèmes et le dévouement. Établis en 1992, nous avons bâti une réputation d'excellence et d'innovation, et notre équipe informatique est essentielle à notre succès."}
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

      {/* Technical Skills We Value */}
      <section className="py-16 bg-barber-cream">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
            {language === 'en' ? "Technical Skills We Value" : "Compétences Techniques Que Nous Valorisons"}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 text-center shadow-md rounded-sm">
              <Code className="mx-auto mb-4 text-barber-gold w-12 h-12" />
              <h3 className="text-xl font-playfair font-semibold mb-2">
                {language === 'en' ? "Technical Troubleshooting" : "Dépannage Technique"}
              </h3>
              <p className="text-barber-charcoal/80">
                {language === 'en' 
                  ? "Strong problem-solving skills and ability to resolve technical issues efficiently" 
                  : "Solides compétences en résolution de problèmes et capacité à résoudre efficacement les problèmes techniques"}
              </p>
            </div>
            
            <div className="bg-white p-6 text-center shadow-md rounded-sm">
              <Server className="mx-auto mb-4 text-barber-gold w-12 h-12" />
              <h3 className="text-xl font-playfair font-semibold mb-2">
                {language === 'en' ? "Network & Systems" : "Réseaux & Systèmes"}
              </h3>
              <p className="text-barber-charcoal/80">
                {language === 'en' 
                  ? "Knowledge of networking, operating systems, and hardware maintenance" 
                  : "Connaissance des réseaux, des systèmes d'exploitation et de la maintenance matérielle"}
              </p>
            </div>
            
            <div className="bg-white p-6 text-center shadow-md rounded-sm">
              <ShieldCheck className="mx-auto mb-4 text-barber-gold w-12 h-12" />
              <h3 className="text-xl font-playfair font-semibold mb-2">
                {language === 'en' ? "Security & Best Practices" : "Sécurité & Bonnes Pratiques"}
              </h3>
              <p className="text-barber-charcoal/80">
                {language === 'en' 
                  ? "Understanding of cybersecurity principles and IT best practices" 
                  : "Compréhension des principes de cybersécurité et des meilleures pratiques informatiques"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
            {language === 'en' ? "Current Openings" : "Postes Disponibles"}
          </h2>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {openings.map((job, index) => (
              <div key={index} className="bg-barber-cream p-6 md:p-8 shadow-md border-l-4 border-barber-gold">
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
      <section id="apply" className="py-16 bg-barber-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-10 text-center">
              {language === 'en' ? "Apply Now" : "Postuler Maintenant"}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-md rounded-sm">
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
                    <option value="senior-specialist">{language === 'en' ? "Senior IT Support Specialist" : "Spécialiste Senior en Support Informatique"}</option>
                    <option value="helpdesk">{language === 'en' ? "IT Helpdesk Technician" : "Technicien Helpdesk IT"}</option>
                    <option value="sysadmin">{language === 'en' ? "IT Systems Administrator" : "Administrateur Systèmes IT"}</option>
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
                <label htmlFor="skills" className="block text-sm font-medium text-barber-charcoal mb-1">
                  {language === 'en' ? "Technical Skills" : "Compétences Techniques"}*
                </label>
                <Textarea 
                  id="skills" 
                  rows={3} 
                  placeholder={language === 'en' 
                    ? "List your relevant technical skills and certifications..." 
                    : "Listez vos compétences techniques et certifications pertinentes..."}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-barber-charcoal mb-1">
                  {language === 'en' ? "Tell us about yourself" : "Parlez-nous de vous"}*
                </label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  placeholder={language === 'en' 
                    ? "Your experience, problem-solving approach, and why you want to join our team..." 
                    : "Votre expérience, votre approche de résolution de problèmes et pourquoi vous souhaitez rejoindre notre équipe..."}
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
