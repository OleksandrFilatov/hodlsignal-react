import { DEFAULT_GAS_LIMIT } from 'config'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const depositTokensWithoutAffiliate = async (transformContract, poolindex, amount) => {
  console.log("depositTokensWithoutAffiliate")
  const gasPrice = getGasPrice()
  const tx = await transformContract.depositTokensWithoutAffiliate(poolindex, amount, {...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}

export const depositTokensWithAffiliate = async (transformContract, poolindex, amount, affiliateAddress) => {
  const gasPrice = getGasPrice()
  const tx = await transformContract.depositTokensWithAffiliate(poolindex, amount, affiliateAddress, {...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}

export const depositMATICWithoutAffiliate = async (transformContract) => {
  const gasPrice = getGasPrice()
  const tx = await transformContract.depositMATICWithoutAffiliate({...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}

export const depositMATICWithAffiliate = async (transformContract, affiliateAddress) => {
  const gasPrice = getGasPrice()
  const tx = await transformContract.depositMATICWithAffiliate(affiliateAddress, {...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}