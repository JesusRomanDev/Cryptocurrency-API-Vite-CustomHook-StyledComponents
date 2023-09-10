//Importando este formulario en App.jsx
import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react' //Importando useEffect para nuestra API y traernos las criptomonedas, tambien importando useState para nuestra API y usarla para almacenar el array de objetos
import useSelectMonedas from '../hooks/useSelectMonedas' //Importando nuestro Custom Hook
import { monedas } from '../data/monedas'

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
    margin-top: 20px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = () => {
  const [criptos, setCriptos] = useState([]);

  const [ moneda , SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas); //le damos el nombre que queramos a lo que este en el arreglo y luego ponemos nuestro Hook, como valor inicial tendra un label/texto y se pasa a la funcion useSelectMonedas que esta en el archivo customHook de useSelectMonedas.jsx
    //Se agrego moneda, moneda es el state, este arreglo se llena de acuerdo al indice, ejemplo state es 0, SelectMonedas es 1, aqui pusimos al state como moneda (le podemos dar el nombre que queramos, no porque se llame state alla se tiene que llamar aqui igual)
    //SelectMonedas(); //Lo mandamos llamar y nos imprime el cuerpo de lo que sea la funcion
    // const [ SelectCriptomonedas] = useSelectMonedas('Elige tu Criptomoneda')
  
    //Agregando un nuevo select con nuestro customHook
  const [ criptomoneda , SelectCriptomoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptos);


    useEffect(()=>{
      const consultarAPI = async () =>{
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"

        const respuesta = await fetch(url);
        console.log(respuesta); //en la consola si el status es 200 entonces todo esta bien, si pudo
        const resultado = await respuesta.json();
        console.log(resultado); //fue exitosa y tenemos los 10 resultados de la API
        
        const arrayCriptos = resultado.Data.map(cripto => { //map para iterar y crear un nuevoarreglo
          const objeto = {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName
          }
          return objeto; //retornando el objeto con cada iteracion a arrayCriptos
        })
        console.log(arrayCriptos);
        setCriptos(arrayCriptos);
      }
      consultarAPI();
    }, []) //cuando cargue nuestro componente de Formulario consultar la API

  return (
    <form>
        <SelectMonedas />
        {/* <SelectCriptomonedas /> */}
        <SelectCriptomoneda />

        <InputSubmit type="submit" value="Cotizar" name="" id="" />
    </form>
  )
}

export default Formulario