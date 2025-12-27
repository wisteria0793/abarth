import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AddAmenityPage({ onBack }) {
  const { t } = useTranslation();
  const amenities = t('amenity_list', { returnObjects: true });

  return (
    <div className="page-overlay">
      <div className="page-card">
        <h1 className="page-title">{t('amenity_page_title')}</h1>
        <p className="page-desc">{t('amenity_desc')}</p>
        
        <ul className="terms-list">
          {Array.isArray(amenities) && amenities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <p style={{ fontSize: 18, marginBottom: 20, color: '#64748b' }}>
          {t('amenity_contact')}
        </p>

        <button className="action-btn" onClick={onBack}>
          {t('back')}
        </button>
      </div>
    </div>
  );
}
