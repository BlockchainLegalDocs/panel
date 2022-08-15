import documents from '../contracts/documents'

export async function addDoc ({ docLink, hash, value, time, price, address }: {docLink: string, hash: string, value: number, time: number, price: number, address: string}) {
  const contract = await documents.get()
  return contract.methods.add(docLink, hash, value, time).send({
    from: address,
    value: price,
    maxPriorityFeePerGas: null,
    maxFeePerGas: null
  })
}
