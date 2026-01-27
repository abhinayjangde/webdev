FROM node:24-alpine AS base

# Builder Stage
FROM base AS builder

WORKDIR /build

COPY package*.json .
COPY tsconfig.json .

RUN npm install

COPY src/ src/

RUN npm run build

# Runner Stage
FROM base AS runner

WORKDIR /app

COPY --from=builder /build/dist dist/
COPY --from=builder /build/package*.json .

RUN npm install --omit=dev

RUN adduser --system nodejs

USER nodejs

CMD [ "npm", "run", "start" ]


