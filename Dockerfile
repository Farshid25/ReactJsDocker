FROM node:9.6.1
RUN mkdir -p /usr/src/huis/app
WORKDIR /usr/src/huis/app
COPY . /usr/src/huis/app
#WORKDIR /usr/src/fa/app
EXPOSE 3000
RUN npm install --silent
RUN npm install react-scripts@1.1.1 -g --silent
CMD ["npm", "start"]