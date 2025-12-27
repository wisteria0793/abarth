FROM node:18-alpine

WORKDIR /app

# パッケージファイルをコピー
COPY package.json package-lock.json* ./

# 依存関係をインストール（ロックファイルに従い再現性重視）
RUN npm ci

# ソースコードをコピー
COPY . .

# ポート3001を公開
EXPOSE 3001

# デフォルトコマンド
CMD ["npm", "start"]
