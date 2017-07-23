import React from 'react';
const form = (props)=>{
  return(
    <form onSubmit={props.onSubmit}>
      <label>
        Nombre:
        <input type="text" value={props.nombre} onChange={props.onChange}/>
      </label>
      <input type="submit" value="Añadir"/>
    </form>

  );

}
 export default form;
