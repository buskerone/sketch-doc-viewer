import { useState } from 'react';
import AppContext from './context/AppContext';
import Router from './router';
import './App.css';

function App() {
  const [currentDocumentData, setCurrentDocumentData] = useState('');
  const [currentArtboardName, setCurrentArtboardName] = useState('');

  const appCtx = {
    currentDocumentData,
    setCurrentDocumentData,
    currentArtboardName,
    setCurrentArtboardName
  };

  return (
    <AppContext.Provider value={appCtx}>
      <Router />
    </AppContext.Provider>
  );
}

export default App;
