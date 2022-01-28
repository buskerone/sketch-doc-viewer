import { useState } from 'react';
import AppContext from './context/AppContext';
import Router from './router';
import './App.css';

function App() {
  const [currentDocumentData, setCurrentDocumentData] = useState('');
  const [currentArtboard, setCurrentArtboard] = useState('');

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
