import { useState } from 'react';
import AppContext from './context/AppContext';
import Router from './router';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const baseUrl = process.env.REACT_APP_API_URL;

const client = new ApolloClient({
  uri: baseUrl,
  cache: new InMemoryCache()
});

/**
 * App
 *
 * @description renders the entire app
 * @author Carlos Knopel
 *
 * @returns React.Component
 */
const App = () => {
  const [currentDocumentData, setCurrentDocumentData] = useState(null);
  const [currentArtboard, setCurrentArtboard] = useState(null);

  const appCtx = {
    currentDocumentData,
    setCurrentDocumentData,
    currentArtboard,
    setCurrentArtboard
  };

  return (
    <ApolloProvider client={client}>
      <AppContext.Provider value={appCtx}>
        <Router />
      </AppContext.Provider>
    </ApolloProvider>
  );
};

export default App;
