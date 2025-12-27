import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function HouseRulesPage({ onAgree, onBack }) {
  const { t } = useTranslation();
  const [agreed, setAgreed] = useState(false);
  const isViewMode = !!onBack;
  const rules = t('house_rules_list', { returnObjects: true });

  const handleComplete = () => {
    if (agreed) {
      onAgree();
    }
  };

  return (
    <div className="App">
      <main style={{ padding: '40px 24px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '12px' }}>{t('house_rules_title')}</h1>
        <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '16px' }}>{t('house_rules_desc')}</p>
        
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
        )}
      </main>
    </div>
  );
}

export default HouseRulesPage;
