import express from 'express';
import Usuario from '../models/User';

const router = express.Router();

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

router.post('/', async (req, res) => {
  const { nome, email } = req.body;
  const novoUsuario = new Usuario({ nome, email });
  await novoUsuario.save();
  res.status(201).json(novoUsuario);
});

export default router;
