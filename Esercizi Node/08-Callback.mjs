import * as fs from "node:fs";

fs.writeFile("08-text.txt", "Salve a tutti!!!", { encoding: "utf8" }, (err) => {
  if (err) {
    console.error("Errore nella scrittura del file:", err);
    return;
  }
  console.log("File scritto con successo!");
});
