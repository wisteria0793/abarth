# 6. 開発手順 (MVP)

AIコンシェルジュ機能のMVP (Minimum Viable Product) を以下の手順で開発します。各ステップは、前のステップが完了していることを前提としています。

## ステップ0: 環境セットアップ (完了済み)
*   **内容:**
    *   プロジェクトの初期化 (`npm init -y`)。
    *   `client` (React) および `server` (Node.js) ディレクトリの作成。
    *   `client` ディレクトリ内に `create-react-app .` でReactアプリケーションをセットアップ。
    *   `server` ディレクトリ内に `npm init -y` を実行し、`express`, `cors`, `nodemon` をインストール。
    *   `server/index.js` の初期設定と、`server/package.json` に `start` スクリプトの追加。
*   **成果物:** プロジェクトの基本構造、`client` および `server` ディレクトリ、初期設定ファイル。

## ステップ1: 【バックエンド】モックAPIの構築
*   **内容:**
    *   `server/index.js` に `POST /api/concierge/chat` エンドポイントを実装。
    *   このエンドポイントは、リクエストボディから `sessionId`, `message`, `conversationHistory` を受け取る。
    *   AIの呼び出しは行わず、設計書 (`docs/04_api_specification.md`) に記載された構造（`place_card`と`quick_reply`を含む）を持つ固定のJSONデータをモックレスポンスとして返す。
    *   `nodemon` を使用してサーバーを起動し、APIが正しく動作することを確認する（例: `curl` コマンドやPostmanでテスト）。
*   **成果物:** モックデータを返す `/api/concierge/chat` エンドポイントが実装された `server/index.js`。
*   **確認方法:** サーバー起動後、`curl -X POST -H "Content-Type: application/json" -d '{"sessionId": "test", "message": "hello", "conversationHistory": []}' http://localhost:3001/api/concierge/chat` コマンドでモックデータが返されること。

## ステップ2: 【フロントエンド】チャットUIの作成
*   **内容:**
    *   `client/src/App.js` または新規コンポーネント (`ChatScreen.js`) に、基本的なチャットUIを実装する。
    *   メッセージ表示エリア (`MessageList`コンポーネントを想定) と、メッセージ入力フォーム (`MessageInput`コンポーネントを想定) を配置。
    *   `MessageInput` にはテキストエリアと送信ボタンを設置。
    *   スタイリングは後回しにし、まずは機能的なUIを構築する。
*   **成果物:** メッセージの表示と入力が可能なチャット画面のReactコンポーネント。
*   **確認方法:** `npm start` でフロントエンドを起動し、チャットUIが表示され、テキスト入力・送信ボタンが機能すること。

## ステップ3: 【フロントエンド】APIの連携
*   **内容:**
    *   `client`側で、ユーザーがメッセージを送信した際に、バックエンドの `POST /api/concierge/chat` エンドポイントへAPIリクエストを送信するロジックを実装。
    *   リクエストには現在の `sessionId`, `message`, `conversationHistory` を含める。
    *   バックエンドから返されたレスポンスを解析し、`reply` と `suggestions` (特に `place_card` と `quick_reply`) をチャット画面に適切に表示する。
    *   `place_card` の地図ボタン/リンクボタン、`quick_reply` ボタンのクリックイベントハンドリングも実装する。
*   **成果物:** バックエンドのモックAPIと通信し、返されたデータをUIに表示するフロントエンド。
*   **確認方法:** フロントエンドとバックエンドの両方を起動し、チャットにメッセージを送信すると、AIのモック応答が画面に表示され、`place_card`や`quick_reply`がUI要素として機能すること。

## ステップ4: 【バックエンド】Gemini APIとの連携
*   **内容:**
    *   `server` ディレクトリで `@google/generative-ai` をインストール。
    *   環境変数 (`.env`) を使用してGemini APIキーを安全に管理する設定 (`dotenv`) を追加。
    *   `server/services/geminiService.js` (または`index.js`内) に、Gemini APIを呼び出すロジックを実装。
    *   プロンプトエンジニアリング戦略 (`docs/03_technical_specification.md`参照) に基づき、`conversationHistory`、施設情報、推薦データなどを組み込んだプロンプトを動的に生成。
    *   Gemini APIのFunction Calling機能を活用し、AIが `place_card` や `quick_reply` などの構造化データを生成できるように設定。
    *   Gemini APIからの応答を解析し、設計書 (`docs/04_api_specification.md`) のレスポンスボディ構造に合わせて整形してフロントエンドに返す。
*   **成果物:** 実際のGemini AIから応答を受け取り、構造化されたレスポンスを生成するバックエンド。
*   **確認方法:** バックエンドを再起動し、フロントエンドからチャットを送信すると、Gemini AIからの実際の応答が画面に表示されること。

## ステップ5: 【バックエンド】コンテキスト情報（推薦リスト）の実装
*   **内容:**
    *   `server/data/recommendations.json` ファイルを作成し、施設推薦データ (`docs/05_data_models.md`参照) を格納。
    *   `server/services/recommendationService.js` (または `index.js`内) に、このJSONファイルを読み込み、検索・フィルタリングするロジックを実装。
    *   AIへのプロンプトに、この推薦リストの内容を適切に含めるように `PromptBuilder` (または`geminiService`) を修正。AIがこのデータを使って回答を生成するように誘導する。
*   **成果物:** AIが施設の推薦リストに基づいて応答する機能。
*   **確認方法:** 特定のカテゴリ（例: カフェ、観光スポット）に関する質問をすると、`recommendations.json`に記載された情報に基づいてAIが推薦を行うこと。

## ステップ6: 総合テストと調整
*   **内容:**
    *   フロントエンドとバックエンドの連携を再度確認し、バグを修正。
    *   UI/UXの微調整。
    *   AIのプロンプトを調整し、応答の品質、関連性、トーンを改善。
    *   エラーケース（API呼び出し失敗、不正な入力など）への対応を実装。
*   **成果物:** 安定して動作し、AIコンシェルジュとしての基本的な機能とユーザー体験が提供されるMVP。
*   **確認方法:** シナリオベースで一連の動作を確認し、期待通りの挙動と応答が得られること。