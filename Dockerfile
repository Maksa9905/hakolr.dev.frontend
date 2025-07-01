# Используем официальный образ Node.js
FROM node:18-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package*.json ./

# Устанавливаем зависимости
FROM base AS deps
RUN npm ci --only=production

# Этап сборки
FROM base AS builder
COPY package*.json ./
RUN npm ci
COPY . .

# Собираем приложение
RUN npm run build

# Производственный образ
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Создаем пользователя nextjs
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копируем необходимые файлы
COPY --from=builder /app/public ./public

# Устанавливаем права на папку .next
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Копируем построенное приложение
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 