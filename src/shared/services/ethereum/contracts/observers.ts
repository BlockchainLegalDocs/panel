import type { AbiItem } from 'web3-utils'
import type { Contract } from 'web3-eth-contract'
import contractJSON from '../build/Observers.json'
import ethereumClient from '../ethereumClient'
import { OBSERVERS_CONTRACT_ADDRESS } from '@/config'

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
  const { eth } = await ethereumClient.get()
  const myContract = new eth.Contract(abi as unknown as AbiItem, OBSERVERS_CONTRACT_ADDRESS)
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

const observers = {
  get
}

export default observers
