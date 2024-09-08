// Import dipendenze
import "dotenv/config";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import planetRouter from "./routes/router.js";
import { logIn, signUp, logOut } from "./controllers/users.js";
import authorize from "./authorize.js";
import multer from "multer";
/* import router from "./routes/router.js";*/
import { createImage } from "./controllers/planets.js";
import "./passport.js"

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

// Indicare indirizzo per l'upload di immagine
app.post("/api/planets/:id/image", upload.single("image"), createImage);

// Implementazione Login
app.post("/api/users/login", logIn);

// Implementazione Sign Up
app.post("/api/users/signup", signUp);

// Implementazione Logout
app.get("/api/users/logout", authorize, logOut);

// Avvio server e ascolto sulla porta dichiarata
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
