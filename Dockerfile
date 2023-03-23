FROM node:16-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build
RUN npm ci --omit dev

EXPOSE 3000
CMD ["node", "build"]
