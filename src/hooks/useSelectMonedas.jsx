import React from 'react'

const useSelectMonedas = () => { //los custom Hooks no tienen un return
  const SelectMonedas = () => {
    console.log('Desde select monedas');
  }

  return [SelectMonedas] //Para que esto sea un Hook que podamos importar en otro lugar, SE NECESITA EL RETURN
}

export default useSelectMonedas