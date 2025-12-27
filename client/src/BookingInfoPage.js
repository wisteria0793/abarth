import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function BookingInfoPage({ onAgree, onBack }) {
  const { t } = useTranslation();
  const [agreed, setAgreed] = useState(false);
  const isViewMode = !!onBack;

  const handleNext = () => {
    if (agreed) {
      onAgree();
    }
  };

  return (
    <div className="App">
      <main style={{ padding: '40px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '12px' }}>{t('booking_info_title')}</h1>
        <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '16px' }}>{t('booking_info_desc')}</p>
        
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
        )}
      </main>
    </div>
  );
}

export default BookingInfoPage;
