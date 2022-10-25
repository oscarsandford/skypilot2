import express, { Express } from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import router from './routes';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../spfe/build')));
app.use('*', router);

app.listen(port, () => {
    console.log(`[SPBE] ~ Listening on port ${port}`);
});