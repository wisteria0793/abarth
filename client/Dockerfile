FROM node:18-alpine

WORKDIR /app

# パッケージファイルをコピー
COPY package.json package-lock.json* ./

# npm の peer 依存解決をレガシーに設定（CRA + React19 の衝突回避）
ENV NPM_CONFIG_LEGACY_PEER_DEPS=true

# 依存関係をインストール（ロックファイルに従い再現性重視）
RUN npm ci

# ソースコードをコピー
COPY . .

# ポート3000を公開
EXPOSE 3000

# デフォルトコマンド
CMD ["npm", "start"]
