import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FAQPage({ onBack }) {
  const { t } = useTranslation();
  const faqs = t('faq_items', { returnObjects: true });

  return (
    <div className="page-overlay">
      <div className="page-card">
        <h1 className="page-title">{t('faq_page_title')}</h1>
        
        <div style={{ marginBottom: 24 }}>
          {Array.isArray(faqs) && faqs.map((item, idx) => (
            <div key={idx} style={{ marginBottom: 24, paddingBottom: 20, borderBottom: '1px solid #e2e8f0' }}>
              <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: '#0f172a' }}>
                Q: {item.q}
              </p>
              <p style={{ fontSize: 16, color: '#64748b' }}>
                A: {item.a}
              </p>
            </div>
          ))}
        </div>

        <button className="action-btn" onClick={onBack}>
          {t('back')}
        </button>
      </div>
    </div>
  );
}
