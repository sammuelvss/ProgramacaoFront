'use client'; 

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);

  const jogarDados = () => {
    const novoValor1 = Math.floor(Math.random() * 6);
    const novoValor2 = Math.floor(Math.random() * 6);
    
    setDado1(novoValor1);
    setDado2(novoValor2);
  };

  return (
    <div className="jogo-container">
      <h2>Jogo de Dados</h2>
      
      <div className="dados-wrapper">
        <Dado valor={dado1} />
        <Dado valor={dado2} />
      </div>

      <button className="botao-jogar" onClick={jogarDados}>
        Jogar Dados
      </button>
    </div>
  );
}