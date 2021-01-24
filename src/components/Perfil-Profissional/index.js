import React from 'react'

function perfilProfissional(props){
  const {perfilProfissional} = props.bio
    return(
        <div className="perfil-profissional">
        <p>
        {perfilProfissional}
        </p>
      </div>
    )
}

export default perfilProfissional