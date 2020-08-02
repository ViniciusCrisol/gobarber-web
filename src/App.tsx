import React from 'react';

import GlobalStyles from './styles/global';

import SignUp from './pages/SignUp';
// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <SignUp />
    </>
  );
};

export default App;
