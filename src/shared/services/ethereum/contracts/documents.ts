import type { AbiItem } from 'web3-utils'
import type { Contract } from 'web3-eth-contract'
import contractJSON from '../build/Documents.json'
import ethereumClient from '../ethereumClient'
import { DOCUMENT_CONTRACT_ADDRESS } from '@/config'

const { abi } = contractJSON

let contract: null | Contract = null
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
  const client = await ethereumClient.get()
  const myContract = new client.eth.Contract(abi as unknown as AbiItem, DOCUMENT_CONTRACT_ADDRESS)
  contract = myContract
  isInitialing = false

  initialized()
  return contract
}

async function get (): Promise<Contract> {
  if (contract != null) return contract

  if (!isInitialing) {
    return await init()
  }
  return await new Promise((resolve) => {
    onInitialized(() => resolve(contract as Contract))
  })
}

const document = {
  get
}

export default document
