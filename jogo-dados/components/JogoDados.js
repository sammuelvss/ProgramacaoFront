'use client'; 

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [dado1, setDado1] = useState(1);
  const [dado2, setDado2] = useState(1);

  const jogarDados = () => {
    const novoValor1 = Math.floor(Math.random() * 6) + 1;
    const novoValor2 = Math.floor(Math.random() * 6) + 1;
    
    setDado1(novoValor1);
    setDado2(novoValor2);
  };

  return (
    <div>
      <h2 className="text-black">Jogo de Dados</h2>
      
      <div className="flex gap-4 my-4">
        <Dado valor={dado1} />
        <Dado valor={dado2} />
      </div>

      <button className="bg-black text-white rounded-md relative z-50 " onClick={jogarDados}>
        Jogar Dados
      </button>
    </div>
  );
}