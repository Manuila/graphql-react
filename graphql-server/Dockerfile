FROM node:latest
WORKDIR /app
RUN npm install -g nodemon
COPY package.json /app
RUN npm install
COPY . /app
EXPOSE 3000
CMD [ "nodemon", "server.js", "--exec", "babel-node" ]
