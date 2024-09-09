import './App.css'

import SobreMim from './components/SobreMim/SobreMim';
import Habilidades from './components/Habilidades/Habilidades';
import Projetos from './components/Projetos/Projetos';
import Contato from './components/Contato/Contato';
import Doacao from './components/Doacao/Doacao';

export default function App() {
  return (
    <div className='container_components'>
      <SobreMim />
      <Habilidades />
      <Projetos title="Website Meet Delights" description="Site de e-commerce, responsivo e funcional, desenvolvido em JavaScript, HTML e CSS"/>
      <Projetos title="Meeting Dev" description="Site organizacional para times e empresas que querem trabalhar utilizando a metodologia Ágil Scrum, site responsivo e funcional, desenvolvido em React"/>
      <Doacao />
      <Contato />
    </div>
  )
}
