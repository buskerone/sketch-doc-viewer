import { useState } from 'react';
import AppContext from './context/AppContext';
import Router from './router';

function App() {
  const [currentDocumentData, setCurrentDocumentData] = useState(null);
  const [currentArtboard, setCurrentArtboard] = useState(null);

  const appCtx = {
    currentDocumentData,
    setCurrentDocumentData,
    currentArtboard,
    setCurrentArtboard
  };

  return (
    <AppContext.Provider value={appCtx}>
      <Router />
    </AppContext.Provider>
  );
}

export default App;
