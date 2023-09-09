//Importando este formulario en App.jsx
import styled from '@emotion/styled'
import React from 'react'
import useSelectMonedas from '../hooks/useSelectMonedas' //Importando nuestro Custom Hook

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {
    const [ SelectMonedas ] = useSelectMonedas(); //le damos el nombre que queramos a lo que este en el arreglo y luego ponemos nuestro Hook
    SelectMonedas(); //Lo mandamos llamar y nos imprime el cuerpo de lo que sea la funcion
  return (
    <form>

        <InputSubmit type="submit" value="Cotizar" name="" id="" />
    </form>
  )
}

export default Formulario