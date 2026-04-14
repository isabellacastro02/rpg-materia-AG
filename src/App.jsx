import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

export default function App() { 

  const MATERIAS = [
    { nome: "Matemática", emoji: "📐"},
    { nome: "Português", emoji: "📚"},
    { nome: "História", emoji: "🏛️"},
    { nome: "Ciências", emoji: "🧪"},
  ];

  const [nome, setNome] = useState(""); //texto
  const [notas, setNotas] = useState({
    "Matemática": 9.5,
    "Português": 6,
    "História": 8,
    "Ciências": 4 }); //objeto
  const [materia, setMateria] = useState(MATERIAS[0]);
  const notaAtual = notas[materia.nome];
  const aprovado = notaAtual >= 6;

 
  return (
    <>
      <main>
        <section>

          <img src={logo} alt="Logo" className="logo" />

          <div className="thumb">
            {aprovado ? materia.emoji : "❌"}
          </div>

          <input
            type="text"
            className='nome'
            placeholder='Nome do Aluno'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <div className="status"></div>
            <p>{materia.nome}</p>
            <p>Nota: {notaAtual}/10</p>
            <span>{aprovado ? "APROVADO" : "RECUPERAÇÃO"}</span>
            <span>{aprovado ? "ACIMA DA MÉDIA" : "ABAIXO DA MÉDIA"}</span>
          </div>
           <div className="classes">
            <button onClick={() => setMateria(MATERIAS[0])}>📐 Matemática</button>
            <button onClick={() => setMateria(MATERIAS[1])}>📚 Português</button>
            <button onClick={() => setMateria(MATERIAS[2])}>🏛️ História</button>
            <button onClick={() => setMateria(MATERIAS[3])}>🧪 Ciências</button>
          </div>

      </main>
    </>
  );