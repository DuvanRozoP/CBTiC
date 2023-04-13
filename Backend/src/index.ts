import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import morgan from 'morgan';

// * DataBase.ts and Router.ts / imports
import conexion from './DataBase';
import router from './Router';

dotenv.config();
const app = express();

// * DATA CONNECTION DATABASE
const port = process.env.PORT;
const key = process.env.KEY;
const user = process.env.USER;

// * CONNECT WITH MONGODB ATLAS
conexion(
  `mongodb+srv://${user}:${key}@cluster0.hp7r31t.mongodb.net/?retryWrites=true&w=majority`
);

// * Middlewares
app.use(morgan('dev'));

// * RULES OF CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// * ROUTING FOR COMPONENTS
router(app);

// * STARTED SERVER
app.listen(port, () => {
  console.log(`started in ${port}`);
});
