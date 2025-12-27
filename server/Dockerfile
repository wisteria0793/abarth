FROM node:18-alpine

WORKDIR /app

# パッケージファイルをコピー
COPY package.json package-lock.json* ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# ポート3001を公開
EXPOSE 3001

# デフォルトコマンド
CMD ["npm", "start"]
