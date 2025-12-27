import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ja: {
    translation: {
      title: 'React を学ぶ',
      edit_prompt: 'src/App.js を編集して保存すると再読み込みします。',
      learn_react: 'React を学ぶ',
      language_select_title: '言語を選択してください',
      language_ja: '日本語',
      language_en: '英語',
      language_zh: '中国語',
      language_ko: '韓国語',
      language_th: 'タイ語',
      confirm: '決定'
    }
  },
  en: {
    translation: {
      title: 'Learn React',
      edit_prompt: 'Edit src/App.js and save to reload.',
      learn_react: 'Learn React',
      language_select_title: 'Select your language',
      language_ja: 'Japanese',
      language_en: 'English',
      language_zh: 'Chinese',
      language_ko: 'Korean',
      language_th: 'Thai',
      confirm: 'Confirm'
    }
  },
  zh: {
    translation: {
      title: '学习 React',
      edit_prompt: '编辑 src/App.js 并保存以重新加载。',
      learn_react: '学习 React',
      language_select_title: '请选择语言',
      language_ja: '日语',
      language_en: '英语',
      language_zh: '中文',
      language_ko: '韩语',
      language_th: '泰语',
      confirm: '确定'
    }
  },
  ko: {
    translation: {
      title: 'React 배우기',
      edit_prompt: 'src/App.js 를 수정하고 저장하면 다시 로드됩니다.',
      learn_react: 'React 배우기',
      language_select_title: '언어를 선택하세요',
      language_ja: '일본어',
      language_en: '영어',
      language_zh: '중국어',
      language_ko: '한국어',
      language_th: '태국어',
      confirm: '확인'
    }
  },
  th: {
    translation: {
      title: 'เรียนรู้ React',
      edit_prompt: 'แก้ไข src/App.js แล้วบันทึกเพื่อโหลดใหม่',
      learn_react: 'เรียนรู้ React',
      language_select_title: 'เลือกภาษา',
      language_ja: 'ภาษาญี่ปุ่น',
      language_en: 'ภาษาอังกฤษ',
      language_zh: 'ภาษาจีน',
      language_ko: 'ภาษาเกาหลี',
      language_th: 'ภาษาไทย',
      confirm: 'ยืนยัน'
    }
  }
};

const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang || 'ja',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
