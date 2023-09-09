import { useState } from 'react'
import styled from '@emotion/styled' /* este codigo nos permite definir un styled component */

//Los styled components van por fuera del componente
const Heading = styled.h1` //h1 sera la etiqueta que queremos, entonces el const Heading sera un H1
  font-family: 'Lato', sans-serif;
  color: #FFF;

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heading>Desde App</Heading>
    </>
  )
}

export default App
