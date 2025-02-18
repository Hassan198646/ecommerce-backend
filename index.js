import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import databaseConnection from "./helpers/databaseConnection.js";
const app = express();
databaseConnection();
configDotenv();
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
