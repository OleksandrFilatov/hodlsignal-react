import { DEFAULT_GAS_LIMIT } from 'config'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const airdrop = async (airdropContract, denid, twitter, hodlAddress) => {
  const gasPrice = getGasPrice()
  const tx = await airdropContract.submit(denid, twitter, hodlAddress, {...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}
