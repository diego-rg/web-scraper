import * as cheerio from "cheerio"; //implementación basada en jQuery que analiza o marcado de unha web e proporciona una API para manipular os datos obtidos
import axios from "axios";

const fetchData = async () => {
  const url =
    "https://www.tecnoempleo.com/busqueda-empleo.php?pr=,231,&ex=,1,#buscador-ofertas-ini";

  const { data: html } = await axios(url);
  const $ = cheerio.load(html);

  const finalData = [];

  $("h3", html).each(function () {
    const title = $(this).find("a:first").attr("title");
    const url = $(this).find("a").attr("href");
    finalData.push(title, url, "\n");
  });
  return finalData;
};

export const finalData = await fetchData();
