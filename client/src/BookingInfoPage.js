import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BookingInfoPage({ onAgree }) {
  const { t } = useTranslation();
  const [agreed, setAgreed] = useState(false);

  const handleNext = () => {
    if (agreed) {
      onAgree();
    }
  };

  return (
    <div className="page-overlay">
      <div className="page-card">
        <h1 className="page-title">{t('booking_info_title')}</h1>
        <p className="page-desc">{t('booking_info_desc')}</p>
        
        <ul className="terms-list">
          <li>{t('booking_info_checkin')}</li>
          <li>{t('booking_info_checkout')}</li>
        </ul>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            aria-required="true"
          />
          <span>{t('booking_info_agree')}</span>
        </label>

        <button
          className="cta"
          onClick={handleNext}
          disabled={!agreed}
          aria-disabled={!agreed}
        >
          {t('booking_info_next')}
        </button>
      </div>
    </div>
  );
}
