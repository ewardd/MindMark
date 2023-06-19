FROM node:20-alpine AS base

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

COPY webapp ./webapp
COPY webapp/.env.production ./webapp/.env

RUN yarn install

ENV NODE_ENV production
RUN yarn workspace webapp build

FROM nginx:alpine AS runner
WORKDIR /usr/share/nginx/html

COPY --from=builder /app/webapp/build .
COPY --from=builder /app/webapp/build/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
