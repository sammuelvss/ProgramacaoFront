import '../app/style.css';

export default function Profile() {
  return (
    <div className="perfil">
    <img 
      src="/foto.png"
      alt="Foto de perfil"
    />
    <br/>

    <div className='texto'>
    <h2 >Sammuel Victor Santana de Souza</h2><br/><br/>
    <p>Me chamo Sammuel Victor, sou estudante do 3º período em Sistemas para Internet.
       Amo experimentar novas tecnologias e estou sempre buscando aprender cada vez mais 
      sobre HTML, CSS, Java, JavaScript e frameworks modernos.</p>
    </div>
    <div className='logo'>
      <img
      src="/unicap-logo.png"
      alt="Logo da Unicap"
      />
    </div>
    </div>
     
     


  )
}

