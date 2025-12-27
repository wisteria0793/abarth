import React, { useState, useRef, useEffect } from 'react';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';

const options = [
  { code: 'ja', labelKey: 'language_ja' },
  { code: 'en', labelKey: 'language_en' },
  { code: 'zh', labelKey: 'language_zh' },
  { code: 'ko', labelKey: 'language_ko' },
  { code: 'th', labelKey: 'language_th' }
];

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const current = i18n.language || 'ja';
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (lng) => {
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    setIsOpen(false);
  };

  const currentLabel = options.find(opt => opt.code === current);

  return (
    <div style={styles.container} ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        style={styles.button}
        aria-label={t('language_select_title')}
      >
        <span style={{ fontSize: 20, marginRight: 8 }}>🌐</span>
        <span>{t(currentLabel?.labelKey || 'language_ja')}</span>
      </button>
      {isOpen && (
        <div style={styles.dropdown}>
          {options.map(opt => (
            <button
              key={opt.code}
              onClick={() => handleSelect(opt.code)}
              style={{
                ...styles.option,
                ...(opt.code === current ? styles.optionActive : {})
              }}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: 'relative'
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 14px',
    borderRadius: 8,
    border: '2px solid #e2e8f0',
    background: '#fff',
    fontSize: 16,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: 8,
    background: '#fff',
    border: '2px solid #e2e8f0',
    borderRadius: 10,
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    zIndex: 1000,
    minWidth: 200
  },
  option: {
    display: 'block',
    width: '100%',
    padding: '16px 20px',
    border: 'none',
    background: 'none',
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'background 0.15s ease',
    color: '#0f172a'
  },
  optionActive: {
    background: '#eff6ff',
    color: '#0ea5e9',
    fontWeight: 600
  }
};
