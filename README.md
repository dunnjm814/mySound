# mySound
Soundcloud clone for collaborative artists.

Currently under construction

### To run this application:
  * clone and install the repo
    1. `git clone https://github.com/dunnjm814/mySound.git`
    2. `cd frontend` in one terminal
    3. `cd backend` in second terminal
    4. `npm i` in each terminal to install respective dependencies
  * create a .env based on the .env.example provided.
  * create a local user with `name`, `password`, and `CREATEDB`
  * create the database, run migrations, and seed
    1. `npx dotenv sequelize db:create`
    2. `npx dotenv sequelize db:migrate`
    3. `npx dotenv sequelize db:seed:all`
  * `npm start` both frontend and backend

### AWS
This app makes use of amazon web services,
head over to `https://github.com/jamesurobertson/aws-s3-pern-demo`
and check out an example on setting up your own AWS bucket, and generate an
aws key/secret key.

### Giphy
This app makes use of the Giphy api,
head over to `https://github.com/Giphy/giphy-js`
and check out the docs on using animated gifs in your app
and how to generate an api key.
