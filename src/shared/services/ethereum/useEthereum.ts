import { useContext } from 'react'

import EthereumContext, { EthereumContextType } from './shared/EthereumContext'

export default function useEthereum () {
  return useContext(EthereumContext) as EthereumContextType
}
