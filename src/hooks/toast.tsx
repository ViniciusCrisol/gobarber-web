import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/TostContainer';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('addToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}

export { ToastProvider, useToast };
