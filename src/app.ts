import express from 'express';  
import cors from 'cors';

import dotenv from 'dotenv';
import router from './modules/user/user.routes';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';

const app = express();
app.use(cors());

app.all('/api/auth/{*any}', toNodeHandler(auth));

app.use(express.json());
dotenv.config();

app.use("/api/auth", router);


export default app;