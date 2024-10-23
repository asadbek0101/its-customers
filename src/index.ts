import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";

import router from "./routes";
import swaggerDocs from "../swagger";

dotenv.config();

const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
  swaggerDocs(app);
});
