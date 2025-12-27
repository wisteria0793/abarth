import React, { useEffect, useState } from 'react';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'ja', labelKey: 'language_ja' },
  { code: 'en', labelKey: 'language_en' },
  { code: 'zh', labelKey: 'language_zh' },
  { code: 'ko', labelKey: 'language_ko' },
  { code: 'th', labelKey: 'language_th' }
];

export default function LanguageSelector({ onComplete }) {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(i18n.language || 'ja');

  const confirm = () => {
    localStorage.setItem('lang', selected);
    i18n.changeLanguage(selected);
    document.documentElement.lang = selected;
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="App">
      <main style={{ padding: '40px 24px', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '32px', textAlign: 'center' }}>{t('language_select_title')}</h1>
        <div style={{ marginBottom: '32px' }}>
          {languages.map(l => (
            <label key={l.code} style={styles.option}>
              <input
                type="radio"
                name="language"
                value={l.code}
                checked={selected === l.code}
                onChange={() => setSelected(l.code)}
                style={styles.radio}
              />
              <span style={styles.label}>{t(l.labelKey)}</span>
            </label>
          ))}
        </div>
        <button onClick={confirm} className="action-btn">{t('confirm')}</button>
      </main>
    </div>
  );
}

const styles = {
  option: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px 12px',
    marginBottom: 12,
    borderRadius: 10,
    border: '2px solid #e2e8f0',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  radio: {
    width: 24,
    height: 24,
    cursor: 'pointer',
    accentColor: '#0ea5e9'
  },
  label: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 500,
    color: '#0f172a'
  }
};
