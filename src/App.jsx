import { useEffect, useState } from 'react'
import styled from '@emotion/styled' /* este codigo nos permite definir un styled component */
import ImagenCripto from './img/imagen-criptos.png' //Agregando la imagen para el fondo
import Formulario from './components/Formulario'

//Los styled components van por fuera del componente
const Heading = styled.h1` //h1 sera la etiqueta que queremos, entonces el const Heading sera un H1
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  //Colocando la linea azul debajo del titulo
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }
`

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

function App() {
  //Definiendo nuevo state para poner abajo de Formulario el resultado
  const [monedas, setMonedas] = useState({});
  //Definiendo nuevo state para el resultado de las criptomonedas que consultaremos a traves de la API que nos arroja todos los resultados
  const [resultado, setResultado] = useState({})

  useEffect(()=>{
    if(Object.keys(monedas).length > 0){
      const cotizarCripto = async () => {
        const {moneda, criptomoneda} = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado); //aqui nos mostrara el objeto de la criptomoneda con la moneda seleccionada
        console.log(resultado.DISPLAY[criptomoneda][moneda]); //accediendo dinamicamente 
        setResultado(resultado.DISPLAY[criptomoneda][moneda]);
      }

      cotizarCripto();
    }
  }, [monedas])


  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagenes Criptomonedas'/>
      
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario 
          setMonedas={setMonedas} //pasandole setMonedas para poder setear esas monedas que elegimos
        />
      </div>
    </Contenedor>
  )
}

export default App
