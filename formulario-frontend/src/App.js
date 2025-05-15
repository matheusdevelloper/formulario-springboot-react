import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoUsuario = { nome, email };
    await axios.post("http://localhost:8080/api/usuarios", novoUsuario);
    setNome("");
    setEmail("");
    buscarUsuarios();
  };

  const buscarUsuarios = async () => {
    const response = await axios.get("http://localhost:8080/api/usuarios");
    setUsuarios(response.data);
  };

  useEffect(() => {
    buscarUsuarios();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit}>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <button type="submit">Cadastrar</button>
      </form>
      <h3>Usuários Cadastrados</h3>
      <ul>
        {usuarios.map((u, index) => (
          <li key={index}>{u.nome} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
