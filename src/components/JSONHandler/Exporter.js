import React, { useEffect } from 'react'
import { Button } from '../Common/Button';
import { useDataContext } from '../../context/context';
import { exportData } from './utils';

export const Exporter = () => {
  const { dataContext } = useDataContext();

  useEffect(() => {
    Object.keys(dataContext).forEach(item => {
      delete dataContext[item].image
    })
  }, [dataContext])

  return (
      <Button clickHandler={()=>exportData(dataContext)}>Export</Button>
  );
}
