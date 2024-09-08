import { Router } from "express";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "../controllers/planets.js";

const router = Router();

// GET per ottenere tutti gli oggetti
router.get("/planets", getAll);

// GET per ottenere singolo oggetto tramite parametro dinamico (id)
router.get("/planets/:id", getOneById);

// POST per creazione nuovo oggetto
router.post("/planets/", create);

// PUT per aggiornare oggetto tramite parametro dinamico
router.put("/planets/:id", updateById);

// DELETE per cancellare oggetto tramite parametro dinamico
router.delete("/planets/:id", deleteById);

export default router;
