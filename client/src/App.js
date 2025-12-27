import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import LanguageSwitcher from './LanguageSwitcher';

function App() {
  const { t } = useTranslation();
  const amenities = t('amenities', { returnObjects: true });

  return (
    <div className="App">
      <LanguageSelector />
      <header className="header">
        <div className="brand" aria-label={t('brand')}>{t('brand')}</div>
        <nav className="nav" aria-label="Primary">
          <a href="#amenities">{t('amenities_title')}</a>
          <a href="#location">{t('location_title')}</a>
        </nav>
        <LanguageSwitcher />
      </header>

      <main>
        <section className="hero">
          <h1 className="hero-title">{t('hero_title')}</h1>
          <p className="hero-sub">{t('hero_subtitle')}</p>
          <button className="cta" aria-label={t('cta_book')}>{t('cta_book')}</button>
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
