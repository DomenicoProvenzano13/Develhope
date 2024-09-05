// Import dipendenze
import "dotenv/config";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import planetRouter from "./routes/router.js";
// Creazione nuova applicazione Express & definizione porta, ereditata da .env o default 3000
const app = express();
const port = process.env.PORT || 3000;
// Dotare app di morgan per il logging richieste & express per fare il parse dei corpi richieste come JSON
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", planetRouter);
// Avvio server e ascolto sulla porta dichiarata
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
