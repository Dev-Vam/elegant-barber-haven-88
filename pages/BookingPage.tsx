
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { useLanguage } from '@/context/LanguageContext';

const BookingPage = () => {
  const { t, language } = useLanguage();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const availableTimes = [
    '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const services = [
    { id: 'haircut', name: language === 'en' ? 'Haircut' : 'Coupe de Cheveux', price: 'R150' },
    { id: 'beard', name: language === 'en' ? 'Beard Trim' : 'Taille de Barbe', price: 'R100' },
    { id: 'combo', name: language === 'en' ? 'Haircut & Beard Combo' : 'Coupe & Barbe Combo', price: 'R220' },
    { id: 'shave', name: language === 'en' ? 'Clean Shave' : 'Rasage Complet', price: 'R120' },
    { id: 'fade', name: language === 'en' ? 'Fade' : 'Dégradé', price: 'R180' },
    { id: 'design', name: language === 'en' ? 'Hair Design' : 'Design Capillaire', price: 'R200+' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      date,
      selectedTime,
      selectedService,
      contactInfo
    });
    // Here you would typically send the data to your backend
    alert(language === 'en' 
      ? 'Booking request submitted! We will confirm your appointment shortly.'
      : 'Demande de réservation soumise ! Nous confirmerons votre rendez-vous sous peu.');
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-r from-barber-charcoal to-black">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">{t('booking.title')}</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            {t('booking.description')}
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-8 shadow-md rounded-sm">
              <h2 className="text-2xl font-playfair font-semibold mb-6">{t('booking.subtitle')}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-playfair mb-4">{t('booking.selectService')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map(service => (
                      <div 
                        key={service.id}
                        className={`p-4 border cursor-pointer hover:bg-barber-gold/10 transition-colors ${selectedService === service.id ? 'border-barber-gold bg-barber-gold/10' : 'border-gray-200'}`}
                        onClick={() => setSelectedService(service.id)}
                      >
                        <div className="flex justify-between">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-barber-gold">{service.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-playfair mb-4">{t('booking.selectDate')}</h3>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                      disabled={(date) => {
                        const day = date.getDay();
                        // Disable Mondays (day 1)
                        return day === 1;
                      }}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-playfair mb-4">{t('booking.selectTime')}</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map((time) => (
                        <div 
                          key={time}
                          className={`py-2 px-3 text-center border cursor-pointer hover:bg-barber-gold/10 transition-colors ${selectedTime === time ? 'border-barber-gold bg-barber-gold/10' : 'border-gray-200'}`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-playfair mb-4">{t('booking.yourInfo')}</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.name')}</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={contactInfo.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                          placeholder={language === 'en' ? "Your full name" : "Votre nom complet"}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.phone')}</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={contactInfo.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                          placeholder={language === 'en' ? "Your phone number" : "Votre numéro de téléphone"}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.email')}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={contactInfo.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                        placeholder={language === 'en' ? "Your email address" : "Votre adresse email"}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                        {language === 'en' ? "Special Requests (Optional)" : "Demandes Spéciales (Optionnel)"}
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={contactInfo.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-barber-gold"
                        placeholder={language === 'en' ? "Any special requests or notes" : "Toute demande ou note spéciale"}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full bg-barber-gold hover:bg-barber-brown text-white py-6 rounded-sm">
                    {t('booking.confirm')}
                  </Button>
                </div>
              </form>
            </div>
            
            <div className="bg-barber-charcoal text-white p-8 rounded-sm">
              <h3 className="text-xl font-playfair font-semibold mb-6">
                {language === 'en' ? 'Booking Information' : 'Informations de Réservation'}
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">{language === 'en' ? 'Business Hours' : 'Heures d\'Ouverture'}</h4>
                  <p className="text-gray-300">
                    {language === 'en' ? 'Monday' : 'Lundi'}: {t('home.closed')}<br />
                    {language === 'en' ? 'Tuesday - Friday' : 'Mardi - Vendredi'}: 07:00 - 18:00<br />
                    {language === 'en' ? 'Saturday - Sunday' : 'Samedi - Dimanche'}: 07:00 - 15:00
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">
                    {language === 'en' ? 'Cancellation Policy' : 'Politique d\'Annulation'}
                  </h4>
                  <p className="text-gray-300">
                    {language === 'en' 
                      ? 'Please provide at least 24 hours notice for cancellations to avoid a cancellation fee.' 
                      : 'Veuillez nous prévenir au moins 24 heures à l\'avance pour les annulations afin d\'éviter des frais d\'annulation.'}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">
                    {language === 'en' ? 'Late Arrivals' : 'Retards'}
                  </h4>
                  <p className="text-gray-300">
                    {language === 'en'
                      ? 'If you arrive late, your service may be shortened or rescheduled to accommodate other appointments.'
                      : 'Si vous arrivez en retard, votre service pourrait être raccourci ou reprogrammé pour accommoder d\'autres rendez-vous.'}
                  </p>
                </div>
                
                <div className="pt-6">
                  <div className="p-4 bg-barber-gold/20 border border-barber-gold/30 rounded-sm">
                    <p className="text-barber-gold font-semibold">
                      {language === 'en' ? 'Need assistance with booking?' : 'Besoin d\'aide pour la réservation?'}
                    </p>
                    <p className="text-gray-300 mt-2">
                      {language === 'en'
                        ? 'Call us directly at +27 78 824 6963 or email at kdmprobarber@outlook.com'
                        : 'Appelez-nous directement au +27 78 824 6963 ou envoyez un email à kdmprobarber@outlook.com'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-playfair font-semibold mb-8 text-center">
            {language === 'en' ? 'Frequently Asked Questions' : 'Questions Fréquemment Posées'}
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                {language === 'en' 
                  ? 'How early should I arrive for my appointment?' 
                  : 'À quelle heure dois-je arriver pour mon rendez-vous?'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'We recommend arriving 5-10 minutes before your scheduled appointment time to ensure a smooth check-in process.'
                  : 'Nous vous recommandons d\'arriver 5-10 minutes avant l\'heure prévue de votre rendez-vous pour assurer un processus d\'enregistrement fluide.'}
              </p>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                {language === 'en'
                  ? 'Can I book multiple services in one appointment?'
                  : 'Puis-je réserver plusieurs services en un seul rendez-vous?'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'Yes, you can select multiple services. Simply let us know in the special requests field or choose one of our combination packages.'
                  : 'Oui, vous pouvez sélectionner plusieurs services. Indiquez-le simplement dans le champ des demandes spéciales ou choisissez l\'un de nos forfaits combinés.'}
              </p>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                {language === 'en'
                  ? 'What forms of payment do you accept?'
                  : 'Quels modes de paiement acceptez-vous?'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'We accept cash, credit/debit cards, and mobile payment options like SnapScan and Zapper.'
                  : 'Nous acceptons les espèces, les cartes de crédit/débit et les options de paiement mobile comme SnapScan et Zapper.'}
              </p>
            </div>
            
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-2">
                {language === 'en'
                  ? 'Do you offer gift cards?'
                  : 'Proposez-vous des cartes cadeaux?'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'Yes, we offer gift cards for all our services. They make perfect gifts for any occasion. You can purchase them in-store or contact us for more information.'
                  : 'Oui, nous proposons des cartes cadeaux pour tous nos services. Elles constituent des cadeaux parfaits pour toute occasion. Vous pouvez les acheter en magasin ou nous contacter pour plus d\'informations.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookingPage;
