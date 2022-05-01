import React from 'react'
import { Button } from '../Common/Button';
import { useDataContext } from '../../context/context';

export const Reset = () => {
  const { setDataContext } = useDataContext();

  return <Button clickHandler={()=>setDataContext({})}>Reset</Button>
}
