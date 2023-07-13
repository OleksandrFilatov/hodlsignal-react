import { useCallback } from 'react'
import { BigNumber, FixedNumber } from 'ethers'
import { approvetokens } from 'utils/calls'
import { useERC20, usePoolContract } from 'hooks/useContract'
import {TRANSFORM_ADDRESS} from '../../../config/constants'

const useApprove = (network, poolindex) => {
  const poolContract = usePoolContract(network, poolindex)

  const approve = useCallback(async (amount) => {
      await approvetokens(poolContract, TRANSFORM_ADDRESS, BigNumber.from("1000000000000000000000000000000000"))
  }, [poolContract])

  return { onApprove: approve }
}

export default useApprove
