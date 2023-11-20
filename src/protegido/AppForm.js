import React, { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from '../conexion/firebase';


const AppForm = (props) => {
  ////////MANEJAR INGRESO DE DATOS////////
const handleStatusChange = (e) => {
  const {name, value} = e.target;
  setObjeto({...objeto,[name]:value});
  //console.log(name, value);
  console.log(objeto);
}

////////GUARDAR Y ACTUALIZAR////////
const camposRegistro = {nombre:"",edad:"",genero:""};
const [objeto,setObjeto] =useState(camposRegistro);

const handleSubmit =async (e) => { //Manejador submit
  e.preventDefault();
  try {
    if(props.idActual == ""){
    if(validarForm()){
      addDoc(collection(db, 'persona'),objeto);
            alert("Se registro con éxito...");
    }else{
      console.log("NO se guardo...");
    }
    setObjeto(camposRegistro);
    }else{
      await updateDoc(doc(collection(db,"persona"),props.idActual),objeto);
      props.setIdActual("");
      alert("Se ACTUALIZO el REGISTRO...");
    }
  } catch (error) {
    console.log("Error en crear o actualizar",error);
  }
}

const validarForm = () => {
  if(objeto.nombre === "" || /^\s+$/.test(objeto.nombre)){
  }
  return true;
};

////////OBTENER registro por ID////////
useEffect(()=>{
  if(props.idActual===""){
    setObjeto({...camposRegistro});
  }else{
    obtenerDatosPorId(props.idActual);
  }
},[props.idActual]);

const obtenerDatosPorId=async(xId)=>{
  const objPorId=doc(db,"persona",xId);
  const docPorId=await getDoc(objPorId);
  if(docPorId.exists()){
    setObjeto(docPorId.data());
  }else{
    console.log("No hay doc");
  }
}
  return (
    <div style={{background:"orange", padding:"10px"}}>
      <form onSubmit={handleSubmit}>
        <button>Cerrar Aplicación</button>
        <h2>Registrar(AppForm.js)</h2>

        <input onChange={handleStatusChange} value={objeto.nombre}
        name='nombre' type='text' placeholder='Nombre...'></input>

        <input onChange={handleStatusChange} value={objeto.edad}
        name='edad' type='text' placeholder='Edad...'></input>

        <select onChange={handleStatusChange} value={objeto.genero} name='genero'>
          <option value="">Seleccione género...</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select> <br/>
        <button>
           {props.idActual=="" ? "Guardar":"Actualizar"}
        </button>
      </form>
    </div>
  )
  }

export default AppForm
