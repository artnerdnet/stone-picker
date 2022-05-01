import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext({
  dataContext: undefined,
  setDataContext: () => {},
});

export const DataContextProvider = ({
  children = null,
  initialValue,
}) => {
  const [dataContext, setDataContext] = useState(initialValue);
  return (
    <DataContext.Provider
      value={{
        dataContext,
        setDataContext,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataContextProvider.defaultProps = {
  children: null,
  initialValue: null,
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context || !context.dataContext) {
    throw new Error('No context found');
  }
  return context
};
