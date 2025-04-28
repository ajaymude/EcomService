import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import express from "express";
import "dotenv/config";
import { indexRouter } from "./src/routes/IndexRouter.js";

const app = express();
const PORT = process.env.PORT;



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRouter);



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
