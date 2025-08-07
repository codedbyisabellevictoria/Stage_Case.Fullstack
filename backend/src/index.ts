import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/userRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/usuarios', usuarioRoutes);

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('🟢 Conectado ao MongoDB');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('🔴 Erro ao conectar ao MongoDB:', err);
  });
