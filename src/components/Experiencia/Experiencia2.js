import React from "react";
import Experiencia from "../Experiencia";

function Experiencia2(props) {
  
  const {experiencia} = props.exp
  return (
    <>
      <div className="experience">
        <h2>Experiência Profissional</h2>
        {experiencia.map(item =>(
          <Experiencia key={item.id} xp={item}/>
        ))}  
      </div>
    </>
  )
}

export default Experiencia2;