import { DEFAULT_GAS_LIMIT } from 'config'
import getGasPrice from 'utils/getGasPrice'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const approvetokens = async (poolContract: any, spender: string, amount: any) => {
  const gasPrice = getGasPrice()
  const tx = await poolContract.approve(spender, amount, {...options, gasPrice})
  const receipt = await tx.wait()
  return receipt.status
}
