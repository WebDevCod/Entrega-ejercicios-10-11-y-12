import React, { useState } from 'react';

let red = Math.round(Math.random() * 255);
let green = Math.round(Math.random() * 255);
let blue = Math.round(Math.random() * 255);

const initStyle = {
    height: '255px',
    width: '255px',
    backgroundColor: 'black'
}

const changeColorStyle = {
    height: '255px',
    width: '255px',
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
}

const CuadradoNegro = ({ cambiarEstado, propStyle }) => {  
    return (
        <div onMouseOver={cambiarEstado} style={propStyle}></div>        
    )
}

const CuadradoColoresRandom = ({ cambiarEstado, propStyle }) => {
    return (
        <div style={propStyle} onMouseLeave={cambiarEstado} ></div>
    )
}

const CuadradoColores = () => {

    const [estadoCuadrado, setEstadoCuadrado] = useState(true);

    const cambiarEstado = () => {
        setEstadoCuadrado(!estadoCuadrado);
    }

    let cuadradoColores;
    if (estadoCuadrado) {
        cuadradoColores = <CuadradoNegro propStyle={initStyle} cambiarEstado={cambiarEstado} />
    } else {
        cuadradoColores = <CuadradoColoresRandom propStyle={changeColorStyle} cambiarEstado={cambiarEstado} />
    }

    return (
        <>
            {cuadradoColores}
        </>
    );
}

export default CuadradoColores;
