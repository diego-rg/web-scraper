import fs from "fs";

import { finalData } from "./fetchData.js";

export const writeData = () => {
  try {
    fs.writeFileSync(
      "C:/Users/diego/Desktop/scraper.txt",
      finalData.join("\n")
    );
  } catch (err) {
    console.log(err);
  }
};
