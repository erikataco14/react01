import React, { Fragment, useState } from 'react'

const C06matriz = () => {
  const [lista, setLista] = useState ([1,2,3,4,5]);
    return (
    <div>
        <Fragment>
        <h1 style={{background:"orange"}}>Listas con index y con key</h1>
        {
            lista.map((item, index) =>
            <p key={index}>
                {item} - {index}
            </p>
            )
        }
        
        </Fragment>
    </div>
  )
}

export default C06matriz
