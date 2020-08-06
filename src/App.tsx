import React from 'react';

import SignIn from './pages/SignIn';

import AppProvider from './hooks';
import GlobalStyles from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyles />

    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
);

export default App;
