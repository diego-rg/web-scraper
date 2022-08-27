import express from "express";
import * as cheerio from "cheerio"; //implementación basada en jQuery que analiza o marcado de unha web e proporciona una API para manipular os datos obtidos
import axios from "axios";

const PORT = 3000;

//iniciar express
const app = express();

const url =
  "https://www.tecnoempleo.com/busqueda-empleo.php?cp=&busc_paises=1&te=&pr=231";

const scrapedData = async () => {
  try {
    const response = await axios(url);
    const html = response.data;
    const $ = cheerio.load(html);

    const finalData = [];

    $("h4", html).each(function () {
      const title = $(this).find("a:first").attr("title");
      const url = $(this).find("a").attr("href");
      finalData.push({ title, url });
    });

    console.log(finalData);
  } catch (err) {
    console.log(err);
  }
};

scrapedData(url);

app.listen(PORT, () => {
  console.log(`Servidor esperando no porto ${PORT}`);
});
