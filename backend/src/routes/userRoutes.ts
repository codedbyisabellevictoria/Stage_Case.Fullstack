import express from "express";
import { User } from "../models/User";

const router = express.Router();

router.get("/", async (_req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const novoUsuario = new User(req.body);
  const salvo = await novoUsuario.save();
  res.status(201).json(salvo);
});

export default router;
