FROM node:14-alpine

COPY /src /app
COPY /public /app
COPY package-lock.json /

EXPOSE 3000

RUN npm i
RUN npm run build

CMD npm start
