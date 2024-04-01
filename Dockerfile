FROM node:18
RUN git clone https://github.com/mrafieefard/mypage app

WORKDIR /app
RUN mkdir public
COPY mypage.config.json ./
COPY profile.jpg ./public/profile.jpg
RUN npm install
RUN npm run build
EXPOSE 3000
CMD npm run start