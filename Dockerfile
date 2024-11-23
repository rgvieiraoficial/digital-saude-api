FROM node:22-slim

WORKDIR /usr/app

COPY package.json ./

COPY yarn.lock ./

RUN yarn

COPY . .

RUN apt-get update -y && apt-get install -y openssl

RUN npx prisma generate

EXPOSE 3334

CMD ["yarn","dev"]