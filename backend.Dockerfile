FROM node:20-alpine AS base

ARG DATABASE_HOST
ARG DATABASE_PORT
ARG DATABASE_USER
ARG DATABASE_PASSWORD
ARG DATABASE_DATABASE
ARG JWT_SECRET
ARG JWT_REFRESH_SECRET


FROM base AS builder
WORKDIR /app

COPY package.json .
COPY yarn.lock .
COPY .yarnrc.docker.yml .yarnrc.yml
COPY .yarn/cache ./.yarn/cache
COPY .yarn/plugins ./.yarn/plugins
COPY .yarn/releases ./.yarn/releases
COPY .yarn/sdks ./.yarn/sdks
COPY .pnp.cjs .

COPY backend ./backend
COPY backend/.env.production ./backend/.env

RUN yarn install

ENV NODE_ENV production

RUN yarn workspace backend build


FROM base as runner
WORKDIR /app

ENV DATABASE_HOST=$DATABASE_HOST
ENV DATABASE_PORT=$DATABASE_PORT
ENV DATABASE_USER=$DATABASE_USER
ENV DATABASE_PASSWORD=$DATABASE_PASSWORD
ENV DATABASE_DATABASE=$DATABASE_DATABASE
ENV JWT_SECRET=$JWT_SECRET
ENV JWT_REFRESH_SECRET=$JWT_REFRESH_SECRET

COPY --from=builder /app/.yarn ./.yarn
COPY --from=builder /app/.pnp.cjs .

COPY --from=builder /app/backend/dist ./backend/dist

EXPOSE 80
CMD ["node", "-r", "./.pnp.cjs", "backend/dist/main"]
