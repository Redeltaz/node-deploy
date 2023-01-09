FROM node

WORKDIR /app

COPY . .

ENV DB_HOST="localhost"
ENV DB_USER="user"
ENV DB_PASSWORD="password"
ENV DB_NAME="simpleapi"

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
