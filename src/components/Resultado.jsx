import styled from '@emotion/styled'
import React from 'react'


const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  return (
    <>
        <p>El precio es de: <span>{PRICE}</span></p>
        <p>Precio mas alto del dia: <span>{HIGHDAY}</span></p>
        <p>Precio mas bajo del dia: <span>{LOWDAY}</span></p>
        <p>Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
        <p>Ultima actualizacion: <span>{LASTUPDATE}</span></p>
    </>
  )
}

export default Resultado