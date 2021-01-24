import React, { useState } from 'react';
import "./App.css"
import Foto from "./components/Foto"
import Biografia from "./components/Biografia/"
import Titulo from "./components/Titulo"
import PerfilProfissional from "./components/Perfil-Profissional"
import Formação from "./components/Formação"
import Experiencia from "./components/Experiencia"
import Botão from "./components/Contatos/botao"


function App() {

  const fakeAPI =
  {
    nome: 'Lisa Simpson',
    ocupacao: 'Developer',
    resumo: '8 anos e já sei React',
    perfilProfissional: 'Faço miojo bom',
    contatos: [
      {
        id: 1,
        tipo: 'telefone',
        contato: '19 0000-0000'
      },
      {
        id: 2,
        tipo: 'email',
        contato: 'nome@dev.com'
      }
    ],
    educacao: [
      {
        id: 1,
        instituicao: 'EMEF',
        curso: 'Ensino basico'
      },
      {
        id: 2,
        instituicao: 'ETEC',
        curso: 'Como ser dev'
      }
    ],
    experiencia: [
      {
        id: 1,
        cargo: 'Front',
        periodo: 'Agosto 2019 - Atualmente',
        empresa: 'NASA',
        local: 'Nova York',
        conteudo: 'Fazia nada e ganhava bem'
      },
      {
        id: 2,
        cargo: 'Back',
        periodo: 'Agosto 2018 - Agosto 2019',
        empresa: 'CIA',
        local: 'Boston',
        conteudo: 'Fazia nada e ganhava mal'
      }
    ]
  }
  const [nome] = useState(fakeAPI)
  const [ocupacao] = useState(fakeAPI)
  const [resumo] = useState(fakeAPI)
  const [perfilProfissional] = useState(fakeAPI)
  const [contato] = useState(fakeAPI)
  const [educacao] = useState(fakeAPI)
  const [experiencia] = useState(fakeAPI)
  return (
    <>
      <main>
        <Foto />
        <Biografia bio={nome} bio={ocupacao} bio={resumo} />
        <Titulo />
        <PerfilProfissional bio={perfilProfissional} />
        <aside>
        <div className="sidebar">
        <Botão cont={contato} />
        </div>
          <Formação edu={educacao} />
        </aside>
        <Experiencia exp={experiencia}/>
      </main>
    </>
  );
}

export default App;