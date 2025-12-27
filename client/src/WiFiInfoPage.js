import React from 'react';
import { useTranslation } from 'react-i18next';

export default function WiFiInfoPage({ onBack }) {
  const { t } = useTranslation();

  return (
    <div className="page-overlay">
      <div className="page-card">
        <h1 className="page-title">{t('wifi_page_title')}</h1>
        
        <div style={{ marginBottom: 24, fontSize: 20 }}>
          <p style={{ marginBottom: 16, fontWeight: 600 }}>{t('wifi_ssid')}</p>
          <p style={{ marginBottom: 16, fontWeight: 600 }}>{t('wifi_password')}</p>
          <p style={{ color: '#64748b' }}>{t('wifi_note')}</p>
        </div>

        <button className="action-btn" onClick={onBack}>
          {t('back')}
        </button>
      </div>
    </div>
  );
}
