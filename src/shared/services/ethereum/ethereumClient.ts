import Web3Type from 'web3'
import detectEthereumProvider from '@metamask/detect-provider'
import { AbstractProvider, provider } from 'web3-core'

interface MetaMaskProvider extends Required<AbstractProvider> {
  on: <T>(event: string, callback: (arg: T) => void) => void
  removeListener: <T>(event: string, callback: (arg: T) => void) => void
  isConnected: () => boolean
}

export interface EthClientType extends Web3Type {
  currentProvider: MetaMaskProvider
}

let ethClient: null | EthClientType = null
let isInitialing = false
let onInitializedFns: Function[] = []

function onInitialized (fn: () => void) {
  onInitializedFns.push(fn)
}

function initialized () {
  onInitializedFns.forEach((fn) => fn())

  onInitializedFns = []
}

async function init () {
  isInitialing = true
  const foundProvider = await detectEthereumProvider()
  if (foundProvider !== null) {
    const Web3 = (await import('web3')).default
    ethClient = (new Web3(foundProvider as provider)) as EthClientType
    isInitialing = false
    console.log('HERE', onInitializedFns.length)
    initialized()
    return ethClient
  }

  isInitialing = false

  throw new Error('No provider found!')
}

async function get (): Promise<EthClientType> {
  if (ethClient !== null) return ethClient

  if (isInitialing) {
    return await new Promise((resolve) => {
      onInitialized(() => resolve(ethClient as EthClientType))
    })
  }

  throw new Error('Ethereum Client not Initialized!')
}

const ethereumClient = {
  get,
  init
}

export default ethereumClient
