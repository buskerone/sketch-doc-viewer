import { createContext } from 'react';
import { IAppContextProps } from 'global/types';

// Default context
const defaultCtx: IAppContextProps = {
  currentArtboard: null,
  currentDocumentData: null,
  setCurrentDocumentData: () => null,
  setCurrentArtboard: () => null
};

const AppContext = createContext<IAppContextProps>(defaultCtx);

export default AppContext;
