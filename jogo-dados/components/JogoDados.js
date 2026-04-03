'use client';

import { useState } from 'react';
import Dado from './Dado';
import './style.css'; // Vamos criar esse arquivo agora

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [turno, setTurno] = useState('A');

  const [dadoA1, setDadoA1] = useState(1);
  const [dadoA2, setDadoA2] = useState(1);
  const [dadoB1, setDadoB1] = useState(1);
  const [dadoB2, setDadoB2] = useState(1);

  const [resultadoA, setResultadoA] = useState('');
  const [resultadoB, setResultadoB] = useState('');
  const [vitoriasA, setVitoriasA] = useState(0);
  const [vitoriasB, setVitoriasB] = useState(0);

  const jogarA = () => {
    if (resultadoA !== '') {
      setResultadoA('');
      setResultadoB('');
      setRodada(rodada + 1);
    }
    setDadoA1(Math.floor(Math.random() * 6) + 1);
    setDadoA2(Math.floor(Math.random() * 6) + 1);
    setTurno('B');
  };

  const jogarB = () => {
    const v1 = Math.floor(Math.random() * 6) + 1;
    const v2 = Math.floor(Math.random() * 6) + 1;
    setDadoB1(v1);
    setDadoB2(v2);

    const somaA = dadoA1 + dadoA2;
    const somaB = v1 + v2;

    if (somaA > somaB) {
      setResultadoA('Jogador A Venceu');
      setResultadoB('Jogador B Perdeu');
      setVitoriasA(vitoriasA + 1);
    } else if (somaB > somaA) {
      setResultadoA('Jogador A Perdeu');
      setResultadoB('Jogador B Venceu');
      setVitoriasB(vitoriasB + 1);
    } else {
      setResultadoA('Empatou');
      setResultadoB('Empatou');
    }

    if (rodada === 5) setTurno('FIM');
    else setTurno('A');
  };

  const reiniciar = () => {
    setRodada(1);
    setTurno('A');
    setVitoriasA(0);
    setVitoriasB(0);
    setResultadoA('');
    setResultadoB('');
  };

  return (
    <div className="container-jogo">
      <div className="caixa-principal">
        
        <h2 className="titulo-rodada">
          {turno === 'FIM' ? 'Fim de Jogo' : `Rodada ${rodada}`}
        </h2>

        <div className="area-jogadores">
          {/* Jogador A */}
          <div className="bloco-jogador">
            <div className="dados-linha">
              <Dado valor={dadoA1} />
              <Dado valor={dadoA2} />
            </div>
            {turno !== 'FIM' && <p className="texto-resultado">{resultadoA}</p>}
            <button 
              onClick={jogarA} 
              disabled={turno !== 'A'}
              className="botao-jogar"
            >
              Jogar Dado
            </button>
          </div>

          {/* Jogador B */}
          <div className="bloco-jogador">
            <div className="dados-linha">
              <Dado valor={dadoB1} />
              <Dado valor={dadoB2} />
            </div>
            {turno !== 'FIM' && <p className="texto-resultado">{resultadoB}</p>}
            <button 
              onClick={jogarB} 
              disabled={turno !== 'B'}
              className="botao-jogar"
            >
              Jogar Dado
            </button>
          </div>
        </div>

        {turno === 'FIM' && (
          <div className="placar-final">
    
           <h3 className="frase-vencedor">
            {vitoriasA > vitoriasB && "O Jogador A venceu a partida!"}
            {vitoriasB > vitoriasA && "O Jogador B venceu a partida!"}
            {vitoriasA === vitoriasB && "A partida terminou em empate!"}
           </h3>
    
          <p className="texto-placar">Placar Final: {vitoriasA} x {vitoriasB}</p>
    
           <button onClick={reiniciar} className="botao-reiniciar">
            Jogar Novamente
           </button>
    
        </div>
        )}
      </div>
    </div>
  );
}