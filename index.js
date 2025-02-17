import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
const app = express();
configDotenv();
const port = process.env.port;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
