FROM node:20-bullseye
WORKDIR /app
# 先にpackage.jsonとpackage-lock.jsonをマウントさせる
COPY ./teamc-app/package*.json /app
RUN yarn install