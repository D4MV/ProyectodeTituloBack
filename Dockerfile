FROM node:20 AS builder

WORKDIR /app
COPY package.json package-lock.json ./
COPY prisma ./prisma
RUN npm ci --legacy-peer-deps
COPY . .
RUN npm run build
RUN npx prisma generate || true

FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production


RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/scripts/entrypoint.sh ./scripts/entrypoint.sh


RUN npx prisma generate


RUN sed -i 's/\r$//' ./scripts/entrypoint.sh && chmod +x ./scripts/entrypoint.sh

USER node
EXPOSE 3000

ENTRYPOINT ["./scripts/entrypoint.sh"]