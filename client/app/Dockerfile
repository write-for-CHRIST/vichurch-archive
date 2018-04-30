FROM node:9-alpine

ARG NODE_ENV=production

RUN mkdir -p /app/node_modules

WORKDIR /app

COPY package.json yarn.lock package-lock.json ./

RUN set -ex; \
  if [ "$NODE_ENV" = "production"]; then \
    echo "Build for production image"; \
    yarn install --no-cache --frozen-lockfile --production; \
  elif [ "$NODE_ENV" = "test" ]; then \
    echo "Build for test image"; \
    touch yarn-error.log; \
    yarn install --no-cache --frozen-lockfile; \
    chown -R root:root node_modules package.json yarn.lock yarn-error.log; \
  else \
    echo "Build for development image"; \
    touch yarn-error.log; \
    mkdir -p -m 777 build node_modules /home/node/.cache/yarn; \
    chown -R root:root node_modules package.json yarn.lock /home/node/.cache/yarn; \
  fi;

COPY . .

USER root

CMD ["node", "yarn.js"]