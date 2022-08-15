import { createContext } from 'react';
import { EthClientType } from '../ethereumClient';

export type EthereumContextType = {
  isInitialized: boolean;
  client: null | EthClientType;
  isConnected: boolean;
  connect:() => Promise<string>;
  disconnect: () => Promise<void>;
  currentNetwork: number | null;
  currentAccount: string | null;
  isMainNetwork: boolean;
  clientDetected: boolean;
};

const EthereumContext = createContext<EthereumContextType | null>(null);

export default EthereumContext;
