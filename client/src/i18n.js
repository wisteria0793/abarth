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
      wifi_info: 'Wi-Fi情報',
      add_amenity: 'アメニティ追加依頼',
      faq: 'よくある質問',
      amenities_title: '設備・アメニティ',
      amenities: ['無料Wi‑Fi', '個室ベッド', 'シャワー・バス', 'ランドリー', '空調', 'キッチン', '駅から徒歩圏'],
      location_title: 'アクセス',
      location_desc: '主要駅から徒歩圏内。周辺に飲食店や観光スポットが多数あります。',
      footer_contact: 'お問い合わせ',
      footer_rights: '© Minpaku Stay',
      // Onboarding
      booking_info_title: '予約内容のご確認',
      booking_info_desc: 'お客様にご理解いただきたい予約条件をご説明します。',
      booking_info_checkin: 'チェックイン：15:00 以降',
      booking_info_checkout: 'チェックアウト：11:00 まで',
      booking_info_agree: '予約内容に同意する',
      booking_info_next: '次へ',
      house_rules_title: 'ハウスルールのご確認',
      house_rules_desc: '快適な滞在のため、以下のルールをお守りください。',
      house_rules_list: ['22:00以降は静粛にしてください', 'ペットの持ち込みは禁止です', '喫煙は禁止です（ベランダのみ可）', 'パーティーや大人数での利用は禁止です', 'チェックアウト後の返却物は必ず返してください'],
      house_rules_agree: 'ハウスルールに同意する',
      house_rules_complete: '確認完了'
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
      wifi_info: 'Wi-Fi Info',
      add_amenity: 'Request Amenity',
      faq: 'FAQ',
      amenities_title: 'Amenities',
      amenities: ['Free Wi‑Fi', 'Private Beds', 'Shower & Bath', 'Laundry', 'Air Conditioning', 'Kitchen', 'Walkable from Station'],
      location_title: 'Location',
      location_desc: 'Within walking distance of major stations. Restaurants and attractions nearby.',
      footer_contact: 'Contact',
      footer_rights: '© Minpaku Stay',
      // Onboarding
      booking_info_title: 'Booking Information',
      booking_info_desc: 'Please review the booking terms and conditions.',
      booking_info_checkin: 'Check-in: 3:00 PM onwards',
      booking_info_checkout: 'Check-out: Until 11:00 AM',
      booking_info_agree: 'I agree to the booking information',
      booking_info_next: 'Next',
      house_rules_title: 'House Rules',
      house_rules_desc: 'Please follow these rules for a comfortable stay.',
      house_rules_list: ['Keep quiet after 10:00 PM', 'No pets allowed', 'No smoking (balcony only)', 'No parties or large gatherings', 'Return all belongings by check-out time'],
      house_rules_agree: 'I agree to the house rules',
      house_rules_complete: 'Onboarding Complete'
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
      wifi_info: 'Wi-Fi信息',
      add_amenity: '请求增加设施',
      faq: '常见问题',
      amenities_title: '设施与服务',
      amenities: ['免费Wi‑Fi', '独立床位', '淋浴与浴缸', '洗衣设施', '空调', '厨房', '步行可达车站'],
      location_title: '位置',
      location_desc: '步行可达主要车站。附近有餐馆和景点。',
      footer_contact: '联系',
      footer_rights: '© Minpaku Stay',
      // Onboarding
      booking_info_title: '预订信息确认',
      booking_info_desc: '请确认预订条款和条件。',
      booking_info_checkin: '入住：下午3:00以后',
      booking_info_checkout: '退房：11:00之前',
      booking_info_agree: '我同意预订信息',
      booking_info_next: '下一步',
      house_rules_title: '房屋规则',
      house_rules_desc: '为了舒适的住宿，请遵守以下规则。',
      house_rules_list: ['晚上10:00后保持安静', '禁止携带宠物', '禁止吸烟（阳台除外）', '禁止聚会或大人数聚集', '退房时必须归还所有物品'],
      house_rules_agree: '我同意房屋规则',
      house_rules_complete: '入住准备完成'
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
      wifi_info: 'Wi-Fi 정보',
      add_amenity: '편의시설 추가 요청',
      faq: '자주 묻는 질문',
      amenities_title: '편의시설',
      amenities: ['무료 Wi‑Fi', '개별 침대', '샤워 및 욕조', '세탁', '에어컨', '주방', '역에서 도보'],
      location_title: '위치',
      location_desc: '주요 역에서 도보로 이동 가능. 주변에 식당과 관광지가 있습니다.',
      footer_contact: '문의',
      footer_rights: '© Minpaku Stay',
      // Onboarding
      booking_info_title: '예약 정보 확인',
      booking_info_desc: '예약 약관을 확인해주세요.',
      booking_info_checkin: '체크인: 오후 3:00 이후',
      booking_info_checkout: '체크아웃: 11:00까지',
      booking_info_agree: '예약 정보에 동의합니다',
      booking_info_next: '다음',
      house_rules_title: '숙소 규칙',
      house_rules_desc: '편안한 숙박을 위해 다음 규칙을 지켜주세요.',
      house_rules_list: ['오후 10:00 이후 조용히 해주세요', '반려동물은 반입 금지입니다', '흡연은 금지입니다(베란다만 가능)', '파티 또는 대규모 모임은 금지입니다', '체크아웃 시 모든 물품을 반환해주세요'],
      house_rules_agree: '숙소 규칙에 동의합니다',
      house_rules_complete: '준비 완료'
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
      wifi_info: 'ข้อมูล Wi-Fi',
      add_amenity: 'ขอสิ่งอำนวยความสะดวกเพิ่มเติม',
      faq: 'คำถามที่พบบ่อย',
      amenities_title: 'สิ่งอำนวยความสะดวก',
      amenities: ['Wi‑Fi ฟรี', 'เตียงส่วนตัว', 'ฝักบัวและอ่างอาบน้ำ', 'ซักผ้า', 'เครื่องปรับอากาศ', 'ครัว', 'เดินถึงสถานีได้'],
      location_title: 'ทำเลที่ตั้ง',
      location_desc: 'เดินถึงสถานีหลักได้ง่าย ล้อมรอบด้วยร้านอาหารและแหล่งท่องเที่ยว',
      footer_contact: 'ติดต่อ',
      footer_rights: '© Minpaku Stay',
      // Onboarding
      booking_info_title: 'ยืนยันข้อมูลการจอง',
      booking_info_desc: 'โปรดตรวจสอบเงื่อนไขการจอง',
      booking_info_checkin: 'เช็คอิน: บ่าย 3:00 เป็นต้นไป',
      booking_info_checkout: 'เช็คเอาต์: ก่อน 11:00',
      booking_info_agree: 'ฉันยอมรับข้อมูลการจอง',
      booking_info_next: 'ต่อไป',
      house_rules_title: 'กฎหมายบ้านพัก',
      house_rules_desc: 'โปรดปฏิบัติตามกฎต่อไปนี้เพื่อการพักที่สะดวก',
      house_rules_list: ['หลังจาก 22:00 โปรดเงียบสงบ', 'ห้ามนำสัตว์เลี้ยง', 'ห้ามสูบบุหรี่ (เฉพาะระเบียง)', 'ห้ามมีงานเลี้ยงหรือการชุมนุมจำนวนมาก', 'โปรดคืนสิ่งของทั้งหมดก่อนเช็คเอาต์'],
      house_rules_agree: 'ฉันยอมรับกฎหมายบ้านพัก',
      house_rules_complete: 'เตรียมพร้อมแล้ว'
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
