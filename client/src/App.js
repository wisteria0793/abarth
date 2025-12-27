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

        <section className="hero">
          <h1 className="hero-title">{t('hero_title')}</h1>
          <p className="hero-sub">{t('hero_subtitle')}</p>
        </section>

        <section id="amenities" className="section">
          <h2 className="section-title">{t('amenities_title')}</h2>
          <div className="cards">
            <div className="card" role="list">
              {Array.isArray(amenities) && amenities.map((item, idx) => (
                <li key={idx} role="listitem">{item}</li>
              ))}
            </div>
          </div>
        </section>

        <section id="location" className="section">
          <h2 className="section-title">{t('location_title')}</h2>
          <p>{t('location_desc')}</p>
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
