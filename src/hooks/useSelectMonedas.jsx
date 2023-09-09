import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
color: #FFF
`

const useSelectMonedas = (label) => { //los custom Hooks no tienen un return, los parametros al parecer no tienen las {}
  const SelectMonedas = () => ( //Reemplazandolo por un return, esto significa que imprimira algo en pantalla
    <>
        <Label>{label}</Label>
        
    </>
  )

  return [SelectMonedas] //Para que esto sea un Hook que podamos importar en otro lugar, SE NECESITA EL RETURN
}

export default useSelectMonedas