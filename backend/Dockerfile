# Etapa de build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Etapa de producción
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app ./
COPY .env .env
RUN npm ci --only=production
EXPOSE 3000
CMD ["node", "index.js"]
