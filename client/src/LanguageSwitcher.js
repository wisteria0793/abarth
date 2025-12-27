import React from 'react';
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
  const current = i18n.language || 'ja';
  const onChange = (e) => {
    const lng = e.target.value;
    localStorage.setItem('lang', lng);
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <label style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <span aria-hidden="true" style={{ fontSize: 20 }}>🌐</span>
      <span className="visually-hidden">Language</span>
      <select aria-label={t('language_select_title')} value={current} onChange={onChange} style={styles.select}>
        {options.map(opt => (
          <option key={opt.code} value={opt.code}>{t(opt.labelKey)}</option>
        ))}
      </select>
    </label>
  );
}

const styles = {
  select: {
    padding: '16px 20px',
    borderRadius: 10,
    border: '2px solid #0ea5e9',
    background: '#fff',
    fontSize: 20,
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    height: 'auto',
    minHeight: '56px',
    color: '#0f172a'
  }
};
