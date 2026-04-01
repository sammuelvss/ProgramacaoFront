import Image from "next/image";

export default function Dado({ valor }) {
  const numeroSeguro = (valor >= 0 && valor <= 6) ? valor : 1;
  const caminhoImagem = `/dado${numeroSeguro}.png`;

  return (
    <div className="dado-container">
      <Image 
        src={caminhoImagem} 
        alt={`Dado com valor ${numeroSeguro}`} 
        width={100} 
        height={100} 
        priority 
      />
    </div>
  );
}