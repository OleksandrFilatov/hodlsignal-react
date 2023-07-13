import { DEFAULT_GAS_LIMIT } from 'config'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const startHODLWithoutAffiliate = async (cakeContract) => {
  const gasPrice = getGasPrice()
  const tx = await cakeContract.A_StartHODLWithoutAffiliate({...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}

export const startHODLWithAffiliate = async (cakeContract, affiliateAddress) => {
  const gasPrice = getGasPrice()
  const tx = await cakeContract.A_StartHODLWithAffiliate(affiliateAddress, {...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}

export const stopHODL = async (cakeContract) => {
  const gasPrice = getGasPrice()
  const tx = await cakeContract.A_StopHODLWithAffiliate({...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}

export const resetHODL = async (cakeContract) => {
  const gasPrice = getGasPrice()
  const tx = await cakeContract.A_Reset({...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}

export const registerAffiliate = async (cakeContract, agreeDoNotHarmPledge) => {  
  const gasPrice = getGasPrice()
  const tx = await cakeContract.addAffliate(agreeDoNotHarmPledge, {...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}

export const deleteAffiliate = async (cakeContract) => {  
  const gasPrice = getGasPrice()
  const tx = await cakeContract.deleteAffliate({...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}