FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --if-present || true


FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY --from=builder /app/dist ./dist

COPY config/.env.development .env

EXPOSE 4000

CMD ["node", "dist/index.js"]
