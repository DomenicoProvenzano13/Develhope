// Import dipendenze
import "dotenv/config";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import planetRouter from "./routes/router.js";
import multer from "multer";
/* import router from "./routes/router.js";*/
import { createImage } from "./controllers/planets.js";

// Applicazione per caricare file nel database
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Creazione nuova applicazione Express & definizione porta, ereditata da .env o default 3000
const app = express();
const port = process.env.PORT || 3000;

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));

// Dotare app di morgan per il logging richieste & express per fare il parse dei corpi richieste come JSON
app.use(morgan("dev"));
app.use(express.json());

// Importare routes
app.use("/api", planetRouter);

app.post("/api/planets/:id/image", upload.single("image"), createImage);

// Avvio server e ascolto sulla porta dichiarata
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
