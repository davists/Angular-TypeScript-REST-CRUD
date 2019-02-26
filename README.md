#Typscript Angular2 Rest Products Register Example
The main purpose is to give you an example of a working CRUD, 
with rest service written in typescript and a generic widget in Angular 2 for 
list data as table with actions.

src/app/services/rest.service.ts
src/app/widgets/table-data/table-data.component.ts

<u>for dev mode</u> <br>
start the app: <br>
npm install <br>
ng serve

<u>for production mode</u><br>
Angular 2 <br>
ng build --target=prod --prod <br>


PM2 - https://github.com/Unitech/pm2 <br>
npm install pm2 -g <br>
pm2 start server.js --name my-app

<u>Run the Docker Image</u><br>
docker build -t products_register_ng2 . <br>
docker run -d -v ${PWD}:/usr/src/app -v /usr/src/app/node_modules -p 4300:4200 --name products_register products_register_ng2



# ng2-admin-lte

[![Join the chat at https://gitter.im/TwanoO67/ng2-admin-lte](https://badges.gitter.im/TwanoO67/ng2-admin-lte.svg)](https://gitter.im/TwanoO67/ng2-admin-lte?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/TwanoO67/ng2-admin-lte.svg?branch=master)](https://travis-ci.org/TwanoO67/ng2-admin-lte)

Bootstraping of Angular2 with AdminLTE dashboard template

![Preview](https://almsaeedstudio.com/img/AdminLTE2.1.png)
