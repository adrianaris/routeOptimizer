FROM node:18

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
ENV REACT_APP_BACKED_URL=http://localhost:8080/api
