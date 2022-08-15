import ethereumClient from '../ethereumClient'

// eslint-disable-next-line import/prefer-default-export
export async function sign ({
  account,
  message
}: { account: string, message: string }) {
  const client = await ethereumClient.get()
  return await client.eth.personal.sign(message, account, '')
}
