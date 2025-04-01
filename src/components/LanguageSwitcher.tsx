
import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      className="w-10 h-10 rounded-full"
      title={language === 'en' ? 'Switch to French' : 'Passer à l\'anglais'}
    >
      <Globe size={20} />
      <span className="ml-1 text-xs font-medium">{language.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageSwitcher;
