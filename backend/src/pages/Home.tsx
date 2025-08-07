import { useEffect, useState } from "react";
import axios from "axios";

type User = {
  _id: string;
  nome: string;
  email: string;
};

export default function Home() {
  const [usuarios, setUsuarios] = useState<User[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/usuarios")
      .then(res => setUsuarios(res.data));
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {usuarios.map(user => (
          <li key={user._id}>{user.nome} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
} 
