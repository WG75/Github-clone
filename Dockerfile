FROM node:8

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin


RUN yarn 

COPY . ./

RUN yarn build

EXPOSE 3030

CMD [ "yarn", "start" ]







