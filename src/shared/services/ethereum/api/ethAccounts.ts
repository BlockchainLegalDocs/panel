import ethereumClient from '../ethereumClient'

export async function getAccounts (): Promise<string[]> {
  const client = await ethereumClient.get()
  return await client.currentProvider.request({ method: 'eth_requestAccounts' })
}

export async function onAccountsChanged (callback: (accounts: string[]) => any) {
  const client = await ethereumClient.get()
  client.currentProvider.on('accountsChanged', callback)
}

export async function removeOnAccountsChanged (callback: (accounts: string[]) => any) {
  const client = await ethereumClient.get()
  client.currentProvider.removeListener('accountsChanged', callback)
}
