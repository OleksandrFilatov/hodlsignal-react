import { useCallback } from 'react'
import { BigNumber, FixedNumber } from 'ethers'
import { 
  depositTokensWithoutAffiliate,
  depositTokensWithAffiliate,
  depositMATICWithoutAffiliate,
  depositMATICWithAffiliate 
} from 'utils/calls'
import { useTransform } from 'hooks/useContract'

const useDeposit = () => {
  const transformContract = useTransform()

  const deposit = useCallback(async (poolindex, quantity, affiliate) => {
    console.log("poolindex", poolindex)
    if(poolindex !== 0) {
      if(affiliate === "") {
        await depositTokensWithoutAffiliate(transformContract, BigNumber.from(poolindex), BigNumber.from(quantity))
      } else {
        await depositTokensWithAffiliate(transformContract, BigNumber.from(poolindex), BigNumber.from(quantity), affiliate)
      }
      return
    }

    if(affiliate.isEmpty()) {
      await depositMATICWithoutAffiliate(transformContract)
    } else {
      await depositMATICWithAffiliate(transformContract, affiliate)
    }
  }, [transformContract])

  return { onDeposit: deposit }
}

export default useDeposit
