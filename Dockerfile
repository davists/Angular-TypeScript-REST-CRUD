FROM teracy/angular-cli:1.0.0-beta.32

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install typings --global

RUN npm install

RUN npm install ng2-charts --save && \
    npm install chart.js --save && \
    npm install chartjs-color chartjs-color-string && \
    npm install resolve-url-loader --save --dev && \
    npm install bootstrap-loader tether jquery

RUN rm -rf node_modules/ap-angular2-fullcalendar/node_modules/

COPY . /usr/src/app
EXPOSE 4200 43159
CMD ["npm", "start"]
