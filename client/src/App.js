import './App.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import LanguageSwitcher from './LanguageSwitcher';
import BookingInfoPage from './BookingInfoPage';
import HouseRulesPage from './HouseRulesPage';

function App() {
  const { t } = useTranslation();
  const [step, setStep] = useState('language'); // language, booking, rules, main
  const amenities = t('amenities', { returnObjects: true });

  useEffect(() => {
    // Check onboarding completion on mount
    const onboardingComplete = localStorage.getItem('onboardingComplete');
    const saved = localStorage.getItem('lang');
    
    if (saved) {
      if (onboardingComplete) {
        setStep('main');
      } else {
        setStep('booking');
      }
    }
  }, []);

  const handleLanguageSelected = () => {
    setStep('booking');
  };

  const handleBookingAgreed = () => {
    setStep('rules');
  };

  const handleRulesAgreed = () => {
    localStorage.setItem('onboardingComplete', 'true');
    setStep('main');
  };

  if (step === 'language') {
    return (
      <div className="App">
        <LanguageSelector onComplete={handleLanguageSelected} />
      </div>
    );
  }

  if (step === 'booking') {
    return (
      <div className="App">
        <BookingInfoPage onAgree={handleBookingAgreed} />
      </div>
    );
  }

  if (step === 'rules') {
    return (
      <div className="App">
        <HouseRulesPage onAgree={handleRulesAgreed} />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="header">
        <div className="brand" aria-label={t('brand')}>{t('brand')}</div>
        <LanguageSwitcher />
      </header>

      <main>
        <section className="action-buttons">
          <button className="action-btn">{t('wifi_info')}</button>
          <button className="action-btn">{t('add_amenity')}</button>
          <button className="action-btn">{t('faq')}</button>
        </section>
      </main>

      <footer className="footer">
        <span>{t('footer_rights')}</span>
        <a href="#contact">{t('footer_contact')}</a>
      </footer>
    </div>
  );
}

export default App;
