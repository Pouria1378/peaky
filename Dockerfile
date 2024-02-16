FROM node:20.11.1-alpine

RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app 
COPY package*.json ./
COPY . .

EXPOSE 3000

CMD ["npm", "start"]