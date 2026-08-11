import express from 'express';  
import cors from 'cors';

import dotenv from 'dotenv';
import router from './modules/user/user.routes';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/", router);


export default app;