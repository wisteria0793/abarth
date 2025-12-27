import logo from './logo.svg';
import './App.css';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <LanguageSelector />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {t('edit_prompt')}
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn_react')}
        </a>
      </header>
    </div>
  );
}

export default App;
