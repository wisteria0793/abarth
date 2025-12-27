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

export default function LanguageSelector() {
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
    }
  }, []);

  const confirm = () => {
    localStorage.setItem('lang', selected);
    i18n.changeLanguage(selected);
    document.documentElement.lang = selected;
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal} role="dialog" aria-modal="true" aria-labelledby="lang-title">
        <h2 id="lang-title" style={{ marginTop: 0 }}>{t('language_select_title')}</h2>
        <div>
          {languages.map(l => (
            <label key={l.code} style={styles.option}>
              <input
                type="radio"
                name="language"
                value={l.code}
                checked={selected === l.code}
                onChange={() => setSelected(l.code)}
              />
              <span style={{ marginLeft: 8 }}>{t(l.labelKey)}</span>
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
    padding: 24,
    borderRadius: 8,
    maxWidth: 420,
    width: '90%',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
  },
  option: {
    display: 'block',
    padding: '8px 0'
  },
  button: {
    marginTop: 16,
    padding: '8px 12px',
    borderRadius: 6,
    border: '1px solid #ccc',
    background: '#1976d2',
    color: '#fff',
    cursor: 'pointer'
  }
};
