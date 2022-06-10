import React from 'react';
import StoreApp from 'app/workspace/patika_store/components/StoreApp';
import {InputProvider} from 'app/workspace/patika_store/context/inputContext';

const App = () => {
  return (
    <InputProvider>
      <StoreApp />
    </InputProvider>
  );
};

export default App;
