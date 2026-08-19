import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'

const Component1 = () => {
  const value=useContext(counterContext)
  return <div>{value.countx}</div>;
}

export default Component1
