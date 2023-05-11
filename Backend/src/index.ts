import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
// * DataBase.ts and Router.ts / imports
// import conexion from './DataBase';
import router from './Router';

dotenv.config();
const app = express();

// * DATA CONNECTION DATABASE
const port = process.env.PORT;
// const key = process.env.KEY;
// const user = process.env.USER;

// * CONNECT WITH MONGODB ATLAS
// conexion(
// `mongodb+srv://${user}:${key}@cluster0.hp7r31t.mongodb.net/?retryWrites=true&w=majority`
// );

// * Middlewares
app.use(morgan('dev'));

// * RULES OF CORS
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * ROUTING FOR COMPONENTS
router(app);

// * Static
app.use('/cv/pdf', express.static('src/public/cv'));
app.use('/cvImg', express.static('src/public/imgCv'));

// * STARTED SERVER
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`started in ${port}`);
});
