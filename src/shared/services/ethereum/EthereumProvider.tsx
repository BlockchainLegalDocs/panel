/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from 'react'
import { ethAccounts, ethCain } from '@/shared/services/ethereum/api'
import ethereumClient, { EthClientType } from './ethereumClient'
import EthereumContext from './shared/EthereumContext'
import { ETHEREUM_NETWORK_ID } from '@/config'

interface IProps {
  children: React.ReactNode
}

export default function EthereumProvider ({ children }: IProps) {
  const [isInitialized, setIsInitialized] = useState(false)
  const [client, setClient] = useState<EthClientType | null>(null)
  const [clientDetected, setClientDetected] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [currentNetwork, setCurrentNetwork] = useState<number | null>(null)
  const [currentAccount, setCurrentAccount] = useState<string | null>(null)
  const [isMainNetwork, setIsMainNetwork] = useState(false)

  async function connect () {
    if (!isInitialized) {
      throw new Error('Ethereum Client Not Initialized!')
    }
    const [account] = await ethAccounts.getAccounts()
    const chainId = await ethCain.getChain()
    setCurrentAccount(account)
    setCurrentNetwork(chainId)
    setIsMainNetwork(String(chainId) === ETHEREUM_NETWORK_ID)
    setIsConnected(true)
    return account
  }

  async function disconnect () {
    setIsConnected(false)
    setCurrentAccount(null)
    setCurrentNetwork(null)
  }

  useEffect(() => {
    if (!isInitialized || !clientDetected) return () => {}

    async function handleAccountsChanged (accounts: string[]) {
      if ((accounts.length === 0) || accounts.length <= 0) {
        // Account locked
        await disconnect()
        return
      }

      if ((accounts.length > 0) && accounts[0] !== currentAccount) {
        // Account changed
        setCurrentAccount(accounts[0])
      }
    }

    function handleChainChanged (chain: number) {
      setIsMainNetwork(String(chain) === ETHEREUM_NETWORK_ID)
      setCurrentNetwork(chain)
    }

    ethAccounts.onAccountsChanged(handleAccountsChanged)
    ethCain.onChainChanged(handleChainChanged)

    return () => {
      ethAccounts.removeOnAccountsChanged(handleAccountsChanged)
      ethCain.removeOChainChanged(handleChainChanged)
    }
  }, [currentAccount, isInitialized, clientDetected])

  const initilizeConnection = async () => {
    if (client != null) {
      const accounts = await client.eth.getAccounts()
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (accounts && accounts.length > 0) {
        return await connect()
      }
    }
  }

  useEffect(() => {
    if (isInitialized) {
      initilizeConnection()
    }
  }, [isInitialized])

  useEffect(() => {
    ethereumClient.init().then((initializedClient) => {
      setClient(initializedClient)
      setClientDetected(true)
    }).catch((e) => {
      console.log(e)
      setClient(null)
      setClientDetected(false)
    }).finally(() => {
      setIsConnected(false)
      setIsInitialized(true)
    })
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <EthereumContext.Provider value={{
      isInitialized,
      client,
      isConnected,
      connect,
      disconnect,
      currentAccount,
      currentNetwork,
      isMainNetwork,
      clientDetected
    }}
    >
      {children}
    </EthereumContext.Provider>
  )
}
