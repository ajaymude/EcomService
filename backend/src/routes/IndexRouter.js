import express from 'express';
import { authRouter } from './authRouter.js';

export const indexRouter = express.Router();

indexRouter.use("/api/v1/auth", authRouter)

