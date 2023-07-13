import { ethers } from 'ethers'
import { simpleRpcProvider } from 'utils/providers'
import tokens from 'config/constants/tokens'
import {TRANSFORM_ADDRESS, AIRDROP_ADDRESS} from 'config/constants'

// Addresses
import {
  getMasterChefAddress,
  getMulticallAddress,
} from 'utils/addressHelpers'

// ABI
import bep20Abi from 'config/abi/erc20.json'
import lpTokenAbi from 'config/abi/lpToken.json'
import cakeAbi from 'config/abi/cake.json'
import transformAbi from 'config/abi/transform.json'
import airdropAbi from 'config/abi/airdrop.json'
import masterChef from 'config/abi/masterchef.json'
import MultiCallAbi from 'config/abi/Multicall.json'

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getBep20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(bep20Abi, address, signer)
}
export const getLpContract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(lpTokenAbi, address, signer)
}
export const getCakeContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(cakeAbi, tokens.cake.address, signer)
}
export const getTransformContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(transformAbi, TRANSFORM_ADDRESS, signer)
}
export const getAirdropContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(airdropAbi, AIRDROP_ADDRESS, signer)
}
export const getMasterchefContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(masterChef, getMasterChefAddress(), signer)
}
export const getMulticallContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer)
}
