import express from "express";
import { writeData } from "./writeData.js";

const PORT = 3000;

const app = express();

writeData();

app.listen(PORT, () => {
  console.log(`Servidor esperando no porto ${PORT}`);
});
