# 5. データモデル

## 5.1 施設推薦データ (`data/recommendations.json`)

AIコンシェルジュがゲストに場所を推薦する際に参照する、施設が厳選したスポットのリストです。バックエンドでロードされ、プロンプトの一部としてGemini APIに渡されます。

```json
[
  {
    "id": "cafe-abarth",
    "name": "アバーテ喫茶",
    "category": "カフェ",
    "description": "レトロな雰囲気でコーヒーが美味しい人気のカフェです。Wi-Fiも完備しています。作業にもおすすめです。",
    "address": "東京都千代田区丸の内1-2-3",
    "latitude": 35.681236,
    "longitude": 139.767125,
    "rating": 4.5,
    "reviewCount": 128,
    "websiteUrl": "http://abarth-cafe.example.com",
    "imageUrl": "https://example.com/images/abarth-cafe.jpg",
    "keywords": ["コーヒー", "レトロ", "作業", "Wi-Fi", "軽食"]
  },
  {
    "id": "restaurant-sushi-ken",
    "name": "寿司匠 健",
    "category": "寿司",
    "description": "地元の新鮮な魚を使った本格江戸前寿司。ランチも人気です。",
    "address": "東京都千代田区大手町4-5-6",
    "latitude": 35.685000,
    "longitude": 139.769000,
    "rating": 4.8,
    "reviewCount": 250,
    "websiteUrl": "http://sushimassterken.example.com",
    "imageUrl": "https://example.com/images/sushi-ken.jpg",
    "keywords": ["寿司", "和食", "海鮮", "ランチ", "ディナー"]
  },
  {
    "id": "park-imperial",
    "name": "皇居東御苑",
    "category": "観光スポット",
    "description": "皇居の東側に位置する、旧江戸城の本丸・二の丸・三の丸の一部を皇居附属庭園として公開している場所です。歴史的な建造物や美しい庭園が楽しめます。",
    "address": "東京都千代田区千代田1-1",
    "latitude": 35.686000,
    "longitude": 139.757000,
    "rating": 4.7,
    "reviewCount": 800,
    "websiteUrl": "http://www.kunaicho.go.jp/event/higashigyoen.html",
    "imageUrl": "https://example.com/images/imperial-garden.jpg",
    "keywords": ["公園", "歴史", "散歩", "庭園", "無料"]
  }
]
```

## 5.2 会話履歴 (`conversationHistory`)

API仕様にも記載されていますが、会話の文脈を維持するためにフロントエンドとバックエンド間で受け渡されるデータ構造です。

```json
[
  { "role": "user", "content": "こんにちは" },
  { "role": "assistant", "content": "こんにちは！何かお探しですか？" },
  { "role": "user", "content": "近くでおすすめのカフェはありますか？" }
]
```

## 5.3 フロントエンドの状態管理データ（ChatScreenコンポーネント内想定）

`ChatScreen`コンポーネント内で管理される、チャット表示に必要な主要な状態データです。

```javascript
{
  messages: [ // 画面に表示されるメッセージのリスト
    {
      id: "msg-1",
      role: "user",
      content: "こんにちは",
      timestamp: "2023-10-27T10:00:00Z"
    },
    {
      id: "msg-2",
      role: "assistant",
      content: "こんにちは！何かお探しですか？",
      timestamp: "2023-10-27T10:00:05Z",
      suggestions: [] // AIからの構造化された提案
    },
    {
      id: "msg-3",
      role: "user",
      content: "近くでおすすめのカフェはありますか？",
      timestamp: "2023-10-27T10:00:10Z"
    },
    {
      id: "msg-4",
      role: "assistant",
      content: "はい、承知いたしました。いくつか候補がありますので、ご紹介しますね。",
      timestamp: "2023-10-27T10:00:15Z",
      suggestions: [
        {
          type: "place_card",
          data: {
            name: "アバーテ喫茶",
            imageUrl: "https://example.com/images/abarth-cafe.jpg",
            description: "レトロな雰囲気でコーヒーが美味しい人気のカフェです。Wi-Fiも完備。",
            address: "東京都千代田区丸の内1-2-3",
            rating: 4.5,
            reviewCount: 128,
            map: { latitude: 35.681236, longitude: 139.767125 },
            websiteUrl: "http://abarth-cafe.example.com"
          }
        },
        {
          type: "quick_reply",
          data: { label: "ありがとう！" }
        }
      ]
    }
  ],
  currentMessage: "", // ユーザーが現在入力中のメッセージ
  isLoading: false,   // API呼び出し中かどうかのフラグ
  error: null         // エラーメッセージ
}
```