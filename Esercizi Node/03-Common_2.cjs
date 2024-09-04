const Message = require("./03-Common_1.cjs");

Message("Domenico!");

/*l'estensione del file è .cjs perchè la cartella del progetto è configurato con un file package.json con "type": "module". Senza questa estensione
il metodo require darebbe un errore.*/