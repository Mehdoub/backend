FROM node:19.4.0-alpine

WORKDIR /app/backend

COPY package.json .

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ] ; \
        then npm i ; \
        else npm i --only=production; \
        fi

COPY . .

CMD ["npm","run","dev"]