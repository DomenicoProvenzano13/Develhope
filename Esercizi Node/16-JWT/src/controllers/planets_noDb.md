// Import dipendenze
import "dotenv/config";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import Joi from "joi";

// Creazione nuova applicazione Express & definizione porta, ereditata da .env o default 3000
const app = express();
const port = process.env.PORT || 3000;

// Dotare app di morgan per il logging richieste & express per fare il parse dei corpi richieste come JSON
app.use(morgan("dev"));
app.use(express.json());

// Definizione schema di validazione utilizzando Joi
const planetSchema = Joi.object({
id: Joi.number().integer().required(),
name: Joi.string().min(3).max(30).required(),
});

// Tipo di dati per singolo pianeta
type Planet = {
id: number;
name: string;
};

// Tipo di dati per array di pianeti
type Planets = Planet[];

// Database fittizio
let planets: Planets = [
{ id: 1, name: "Earth" },
{ id: 2, name: "Mars" },
];

// GET per ottenere tutti gli oggetti
app.get("/api/planets", (req, res) => {
res.status(200).json({ planets });
});

// GET per ottenere singolo oggetto tramite parametro dinamico (id)
app.get("/api/planets/:id", (req, res) => {
const { id } = req.params;
const planet = planets.find((p) => p.id === Number(id));
res.status(200).json({ planet });
});

// POST per creazione nuovo oggetto
app.post("/api/planets/", (req, res) => {
const { error } = planetSchema.validate(req.body);

if (error) {
return res.status(400).json({ error: error.details[0].message });
}

const { id, name } = req.body;
const newPlanet = { id, name };
planets = [...planets, newPlanet];

console.log(planets);

res.status(201).json({ msg: "The planet was created." });
});

// PUT per aggiornare oggetto tramite parametro dinamico
app.put("/api/planets/:id", (req, res) => {
const { error } = planetSchema.validate({
...req.body,
id: Number(req.params.id),
});

if (error) {
return res.status(400).json({ error: error.details[0].message });
}

const { id } = req.params;
const { name } = req.body;
planets = planets.map((p) => (p.id === Number(id) ? { ...p, name } : p));

console.log(planets);

res.status(200).json({ msg: "The planets was updated." });
});

// DELETE per cancellare oggetto tramite parametro dinamico
app.delete("/api/planets/:id", (req, res) => {
const { id } = req.params;
planets = planets.filter((p) => p.id !== Number(id));

res.status(200).json({ msg: "The planet was deleted." });
});

// Avvio server e ascolto sulla porta dichiarata
app.listen(port, () => {
console.log(`Example app listening on port http://localhost:${port}`);
});
