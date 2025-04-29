import express from "express";
import 'express-async-errors';
import "dotenv/config";

import { connectDB } from "./src/configs/db.js";
import { indexRouter } from "./src/routes/IndexRouter.js";
import {
  errorHandlerMiddleware,
  notFound,
} from "./src/middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
