# 4. API仕様

## 4.1 AIコンシェルジュチャットAPI

### エンドポイント
`POST /api/concierge/chat`

### 役割
ゲストからのチャットメッセージを受け取り、AIによる応答と構造化された提案を返却します。

### リクエストボディ

| フィールド名          | 型       | 必須 | 説明                                                                    |
| :------------------ | :------- | :--- | :---------------------------------------------------------------------- |
| `sessionId`         | `string` | はい | 各ゲストのセッションを識別するユニークなID。フロントエンドで生成されます。 |
| `message`           | `string` | はい | ゲストが入力した現在のメッセージ。                                        |
| `conversationHistory` | `Array<Object>` | はい | 過去の会話履歴。各オブジェクトは `{ role: "user" | "assistant", content: "メッセージ" }` の形式。 |

**リクエストボディの例:**
```json
{
  "sessionId": "guest_abc_123",
  "message": "おすすめのランチを教えてください。",
  "conversationHistory": [
    { "role": "user", "content": "こんにちは" },
    { "role": "assistant", "content": "こんにちは！何かお探しですか？" },
    { "role": "user", "content": "今日は天気が良いですね" }
  ]
}
```

### レスポンスボディ

| フィールド名     | 型       | 必須 | 説明                                                                                                         |
| :--------------- | :------- | :--- | :----------------------------------------------------------------------------------------------------------- |
| `reply`          | `string` | はい | AIからの主要なテキスト応答。                                                                                |
| `suggestions`    | `Array<Object>` | いいえ | AIが提案する構造化されたUIコンポーネントのリスト。各オブジェクトは `type` と `data` フィールドを持ちます。 |

**`suggestions` オブジェクトの構造:**

#### `type: "place_card"` (場所カード)

| フィールド名      | 型       | 必須 | 説明                                    |
| :---------------- | :------- | :--- | :-------------------------------------- |
| `type`            | `string` | はい | `place_card`                            |
| `data.name`       | `string` | はい | 場所の名称                              |
| `data.imageUrl`   | `string` | いいえ | 場所の代表画像のURL                       |
| `data.description`| `string` | いいえ | 場所の簡単な説明                          |
| `data.address`    | `string` | いいえ | 場所の住所                                |
| `data.rating`     | `number` | いいえ | 星評価 (0.0〜5.0)                       |
| `data.reviewCount`| `number` | いいえ | 口コミ数                                |
| `data.map.latitude` | `number` | はい | 地図表示用の緯度                          |
| `data.map.longitude`| `number` | はい | 地図表示用の経度                          |
| `data.websiteUrl` | `string` | いいえ | 公式サイトや予約ページへのURL             |

#### `type: "quick_reply"` (クイックリプライ)

| フィールド名 | 型       | 必須 | 説明                                         |
| :----------- | :------- | :--- | :------------------------------------------- |
| `type`       | `string` | はい | `quick_reply`                                |
| `data.label` | `string` | はい | ボタンに表示されるテキスト（ユーザーが送信するメッセージ） |

**レスポンスボディの例:**
```json
{
  "reply": "はい、承知いたしました。いくつか候補がありますので、ご紹介しますね。",
  "suggestions": [
    {
      "type": "place_card",
      "data": {
        "name": "アバーテ喫茶",
        "imageUrl": "https://example.com/images/abarth-cafe.jpg",
        "description": "レトロな雰囲気でコーヒーが美味しい人気のカフェです。Wi-Fiも完備。",
        "address": "東京都千代田区丸の内1-2-3",
        "rating": 4.5,
        "reviewCount": 128,
        "map": {
          "latitude": 35.681236,
          "longitude": 139.767125
        },
        "websiteUrl": "http://abarth-cafe.example.com"
      }
    },
    {
      "type": "quick_reply",
      "data": {
        "label": "ありがとう！"
      }
    },
    {
      "type": "quick_reply",
      "data": {
        "label": "他の候補はありますか？"
      }
    }
  ]
}
```

### エラーハンドリング

#### 成功レスポンス (200 OK)
*   HTTPステータスコード: `200 OK`
*   ボディ: 上記のレスポンスボディフォーマットに従います。

#### エラーレスポンス (4xx, 5xx)
*   HTTPステータスコード: `400 Bad Request`, `401 Unauthorized`, `500 Internal Server Error` など
*   ボディ:
    ```json
    {
      "error": {
        "code": "エラーコード",
        "message": "エラーの詳細な説明"
      }
    }
    ```