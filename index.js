import express from "express";
import { scrapData } from "./scrapData.js";

const PORT = 3000;

const app = express();

scrapData();

app.listen(PORT, () => {
  console.log(`Servidor esperando no porto ${PORT}`);
});
