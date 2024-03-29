FROM node:9

RUN \
  apt-get update && \
  apt-get install -y python python-dev python-pip python-virtualenv && \
  rm -rf /var/lib/apt/lists/*

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

RUN mkdir -p /usr/src/app/node_modules

WORKDIR /usr/src/app

COPY package.json yarn.lock ./
RUN set -ex; \
  if [ "$NODE_ENV" = "production" ]; then \
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
    chown -R root:root node_modules package.json yarn.lock yarn-error.log /home/node/.cache/yarn; \
  fi;

COPY . .

USER root

EXPOSE 4000
EXPOSE 4001

CMD ["node", "yarn.js"]
