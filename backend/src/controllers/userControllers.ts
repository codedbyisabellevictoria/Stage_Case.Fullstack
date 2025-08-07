import { Request, Response } from "express";
import  User  from "../models/User";

export async function criarUsuario(req: Request, res: Response) {
  try {
    const novoUsuario = new User(req.body);
    const salvo = await novoUsuario.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar usuário" });
  }
}
