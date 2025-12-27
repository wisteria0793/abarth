import './App.css';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import LanguageSwitcher from './LanguageSwitcher';
import BookingInfoPage from './BookingInfoPage';
import HouseRulesPage from './HouseRulesPage';
import WiFiInfoPage from './WiFiInfoPage';
import AddAmenityPage from './AddAmenityPage';
import FAQPage from './FAQPage';

function App() {
  const { t } = useTranslation();
  const [step, setStep] = useState('language'); // language, booking, rules, main
  const [currentPage, setCurrentPage] = useState(null); // wifi, amenity, faq, null
  const amenities = t('amenities', { returnObjects: true });

  const handleLanguageSelected = () => {
    setStep('booking');
  };

  const handleBookingAgreed = () => {
    setStep('rules');
  };

  const handleRulesAgreed = () => {
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
          <button className="action-btn" onClick={() => setCurrentPage('booking')}>{t('booking_info_title')}</button>
          <button className="action-btn" onClick={() => setCurrentPage('rules')}>{t('house_rules_title')}</button>
          <button className="action-btn" onClick={() => setCurrentPage('wifi')}>{t('wifi_info')}</button>
          <button className="action-btn" onClick={() => setCurrentPage('amenity')}>{t('add_amenity')}</button>
          <button className="action-btn" onClick={() => setCurrentPage('faq')}>{t('faq')}</button>
        </section>
      </main>

      {currentPage === 'booking' && <BookingInfoPage onBack={() => setCurrentPage(null)} />}
      {currentPage === 'rules' && <HouseRulesPage onBack={() => setCurrentPage(null)} />}
      {currentPage === 'wifi' && <WiFiInfoPage onBack={() => setCurrentPage(null)} />}
      {currentPage === 'amenity' && <AddAmenityPage onBack={() => setCurrentPage(null)} />}
      {currentPage === 'faq' && <FAQPage onBack={() => setCurrentPage(null)} />}

      <footer className="footer">
        <span>{t('footer_rights')}</span>
        <a href="#contact">{t('footer_contact')}</a>
      </footer>
    </div>
  );
}

export default App;
