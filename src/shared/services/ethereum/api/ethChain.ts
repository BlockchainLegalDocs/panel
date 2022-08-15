import { ETHEREUM_NETWORK_ID, CORRECT_NETWORK } from '@/config'
import ethereumClient from '../ethereumClient'

export async function getChain (): Promise<number> {
  const client = await ethereumClient.get()
  return await client.currentProvider.request({ method: 'eth_chainId' })
}

export async function isBSCMainNet (): Promise<boolean> {
  const client = await ethereumClient.get()
  return await client.currentProvider.request({ method: 'eth_chainId' }) === ETHEREUM_NETWORK_ID
}

export async function switchNetworktoCurrect (): Promise<boolean> {
  const client = await ethereumClient.get()
  return await client.currentProvider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: CORRECT_NETWORK }]
  })
}

export async function onChainChanged (callback: (chainId: number) => void) {
  const client = await ethereumClient.get()
  client.currentProvider.on('chainChanged', callback)
}

export async function removeOChainChanged (callback: (chainId: number) => void) {
  const client = await ethereumClient.get()
  client.currentProvider.removeListener('chainChanged', callback)
}
