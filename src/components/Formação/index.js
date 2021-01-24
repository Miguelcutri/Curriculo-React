import React from 'react'

function Formação(prop) {
    const { educacao } = prop.edu
    return (
        <div className="sidebar">
            <h3>Educação</h3>
            <div className="lista-de-formacao">
                {educacao.map(item => (
                   <li key={item.id}>
                   <h4>{item.instituicao}</h4>
                   <p>{item.curso}</p>
               </li> 
                ))}

            </div>
        </div>
    )
}

export default Formação