import { useState } from 'react'
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
  const [count, setCount] = useState(0)

  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt='Imagenes Criptomonedas'/>
      
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>

        <Formulario />
      </div>
    </Contenedor>
  )
}

export default App
