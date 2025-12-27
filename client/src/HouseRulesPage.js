import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function HouseRulesPage({ onAgree }) {
  const { t } = useTranslation();
  const [agreed, setAgreed] = useState(false);
  const rules = t('house_rules_list', { returnObjects: true });

  const handleComplete = () => {
    if (agreed) {
      onAgree();
    }
  };

  return (
    <div className="page-overlay">
      <div className="page-card">
        <h1 className="page-title">{t('house_rules_title')}</h1>
        <p className="page-desc">{t('house_rules_desc')}</p>
        
        <ul className="terms-list">
          {Array.isArray(rules) && rules.map((rule, idx) => (
            <li key={idx}>{rule}</li>
          ))}
        </ul>

        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            aria-required="true"
          />
          <span>{t('house_rules_agree')}</span>
        </label>

        <button
          className="cta"
          onClick={handleComplete}
          disabled={!agreed}
          aria-disabled={!agreed}
        >
          {t('house_rules_complete')}
        </button>
      </div>
    </div>
  );
}
