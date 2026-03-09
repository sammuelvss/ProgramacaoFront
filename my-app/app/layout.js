import "./style.css";


export const metadata = {
  title: 'Meu Projeto de Programação Front-End',
  description: 'Atividade de Profile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}