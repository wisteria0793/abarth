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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(i18n.language || 'ja');

  useEffect(() => {
    const saved = localStorage.getItem('lang');
    if (!saved) {
      setOpen(true);
    } else {
      setSelected(saved);
      i18n.changeLanguage(saved);
      document.documentElement.lang = saved;
      if (onComplete) {
        onComplete();
      }
    }
  }, [onComplete]);

  const confirm = () => {
    localStorage.setItem('lang', selected);
    i18n.changeLanguage(selected);
    document.documentElement.lang = selected;
    setOpen(false);
    if (onComplete) {
      onComplete();
    }
  };

  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal} role="dialog" aria-modal="true" aria-labelledby="lang-title">
        <h2 id="lang-title" style={styles.title}>{t('language_select_title')}</h2>
        <div style={styles.optionsContainer}>
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
        <button onClick={confirm} style={styles.button}>{t('confirm')}</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  },
  modal: {
    background: '#fff',
    padding: 40,
    borderRadius: 16,
    maxWidth: 500,
    width: '90%',
    boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
  },
  title: {
    margin: 0,
    fontSize: 28,
    marginBottom: 24,
    textAlign: 'center'
  },
  optionsContainer: {
    marginBottom: 24
  },
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
  },
  button: {
    width: '100%',
    padding: '14px 24px',
    borderRadius: 10,
    border: 'none',
    background: '#0ea5e9',
    color: '#fff',
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 600,
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(14, 165, 233, 0.15)'
  }
};
