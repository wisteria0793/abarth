import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ja: {
    translation: {
      // Base
      title: '民泊へようこそ',
      edit_prompt: 'ようこそ。以下の情報をご覧ください。',
      learn_react: '詳しく見る',
      language_select_title: '言語を選択してください',
      language_ja: '日本語',
      language_en: '英語',
      language_zh: '中国語',
      language_ko: '韓国語',
      language_th: 'タイ語',
      confirm: '決定',
      // Homestay UI
      brand: 'Minpaku Stay',
      hero_title: '旅の拠点に、心地よい民泊を',
      hero_subtitle: '多言語に対応し、世界中のゲストを温かくお迎えします。',
      cta_book: '予約する',
      amenities_title: '設備・アメニティ',
      amenities: ['無料Wi‑Fi', '個室ベッド', 'シャワー・バス', 'ランドリー', '空調', 'キッチン', '駅から徒歩圏'],
      location_title: 'アクセス',
      location_desc: '主要駅から徒歩圏内。周辺に飲食店や観光スポットが多数あります。',
      footer_contact: 'お問い合わせ',
      footer_rights: '© Minpaku Stay'
    }
  },
  en: {
    translation: {
      // Base
      title: 'Welcome to our Homestay',
      edit_prompt: 'Welcome. Explore the information below.',
      learn_react: 'Learn more',
      language_select_title: 'Select your language',
      language_ja: 'Japanese',
      language_en: 'English',
      language_zh: 'Chinese',
      language_ko: 'Korean',
      language_th: 'Thai',
      confirm: 'Confirm',
      // Homestay UI
      brand: 'Minpaku Stay',
      hero_title: 'A cozy homestay for your journey',
      hero_subtitle: 'Welcoming guests from around the world with multilingual support.',
      cta_book: 'Book Your Stay',
      amenities_title: 'Amenities',
      amenities: ['Free Wi‑Fi', 'Private Beds', 'Shower & Bath', 'Laundry', 'Air Conditioning', 'Kitchen', 'Walkable from Station'],
      location_title: 'Location',
      location_desc: 'Within walking distance of major stations. Restaurants and attractions nearby.',
      footer_contact: 'Contact',
      footer_rights: '© Minpaku Stay'
    }
  },
  zh: {
    translation: {
      // Base
      title: '欢迎来到民宿',
      edit_prompt: '欢迎。请浏览以下信息。',
      learn_react: '了解更多',
      language_select_title: '请选择语言',
      language_ja: '日语',
      language_en: '英语',
      language_zh: '中文',
      language_ko: '韩语',
      language_th: '泰语',
      confirm: '确定',
      // Homestay UI
      brand: 'Minpaku Stay',
      hero_title: '为旅途提供舒适的民宿',
      hero_subtitle: '支持多语言，热情欢迎来自世界各地的客人。',
      cta_book: '预订住宿',
      amenities_title: '设施与服务',
      amenities: ['免费Wi‑Fi', '独立床位', '淋浴与浴缸', '洗衣设施', '空调', '厨房', '步行可达车站'],
      location_title: '位置',
      location_desc: '步行可达主要车站。附近有餐馆和景点。',
      footer_contact: '联系',
      footer_rights: '© Minpaku Stay'
    }
  },
  ko: {
    translation: {
      // Base
      title: '민박에 오신 것을 환영합니다',
      edit_prompt: '환영합니다. 아래 정보를 확인하세요.',
      learn_react: '자세히 보기',
      language_select_title: '언어를 선택하세요',
      language_ja: '일본어',
      language_en: '영어',
      language_zh: '중국어',
      language_ko: '한국어',
      language_th: '태국어',
      confirm: '확인',
      // Homestay UI
      brand: 'Minpaku Stay',
      hero_title: '여행을 위한 아늑한 민박',
      hero_subtitle: '다국어 지원으로 전 세계 게스트를 환영합니다.',
      cta_book: '예약하기',
      amenities_title: '편의시설',
      amenities: ['무료 Wi‑Fi', '개별 침대', '샤워 및 욕조', '세탁', '에어컨', '주방', '역에서 도보'],
      location_title: '위치',
      location_desc: '주요 역에서 도보로 이동 가능. 주변에 식당과 관광지가 있습니다.',
      footer_contact: '문의',
      footer_rights: '© Minpaku Stay'
    }
  },
  th: {
    translation: {
      // Base
      title: 'ยินดีต้อนรับสู่โฮมสเตย์',
      edit_prompt: 'ยินดีต้อนรับ โปรดดูข้อมูลด้านล่าง',
      learn_react: 'ดูรายละเอียด',
      language_select_title: 'เลือกภาษา',
      language_ja: 'ภาษาญี่ปุ่น',
      language_en: 'ภาษาอังกฤษ',
      language_zh: 'ภาษาจีน',
      language_ko: 'ภาษาเกาหลี',
      language_th: 'ภาษาไทย',
      confirm: 'ยืนยัน',
      // Homestay UI
      brand: 'Minpaku Stay',
      hero_title: 'โฮมสเตย์แสนสบายสำหรับการเดินทางของคุณ',
      hero_subtitle: 'รองรับหลายภาษา พร้อมต้อนรับผู้เข้าพักจากทั่วโลก',
      cta_book: 'จองที่พัก',
      amenities_title: 'สิ่งอำนวยความสะดวก',
      amenities: ['Wi‑Fi ฟรี', 'เตียงส่วนตัว', 'ฝักบัวและอ่างอาบน้ำ', 'ซักผ้า', 'เครื่องปรับอากาศ', 'ครัว', 'เดินถึงสถานีได้'],
      location_title: 'ทำเลที่ตั้ง',
      location_desc: 'เดินถึงสถานีหลักได้ง่าย ล้อมรอบด้วยร้านอาหารและแหล่งท่องเที่ยว',
      footer_contact: 'ติดต่อ',
      footer_rights: '© Minpaku Stay'
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
