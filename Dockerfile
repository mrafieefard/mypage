FROM node:18
RUN git clone https://github.com/mrafieefard/mypage app

WORKDIR /app
COPY mypage.config.json ./
RUN npm install
RUN npm run build
EXPOSE 3000
CMD npm run start