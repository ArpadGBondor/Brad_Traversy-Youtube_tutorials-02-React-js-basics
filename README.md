# Brad Traversy - Youtube tutorials 02 - React JS Crash Course 2021

## [Tutorial video on Youtube](https://youtu.be/w7ejDZ8SWv8)

## Run:

- `npm i` to download node_modules
- add `.env` file with `DB_CONNECT` environment variable
- `npm run netlify` to run the netlify server

## Deployed

- [On Netlify](https://gabriels-youtube-tutorial-brad-traversy-react-crash-course.netlify.app/)

## Mayor changes:

- I added back-end to the project
  - I'm using serverless functions on Netlify to keep my secret API key hidden.
  - I'm using mongoose in the serverless function to save the data in a mongoDB database.

## Environment variable:

- `DB_CONNECT=mongodb://localhost:27017/TasksDB`
