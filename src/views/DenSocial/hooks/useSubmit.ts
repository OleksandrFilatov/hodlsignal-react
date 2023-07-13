import { useCallback } from 'react'
import { BigNumber, FixedNumber } from 'ethers'
import { 
  airdrop,
} from 'utils/calls'
import { useAirdrop } from 'hooks/useContract'

const useSubmit = () => {
  const airdropContract = useAirdrop()

  const submit = useCallback(async (denid, twitter, hodlAddress) => {
    await airdrop(airdropContract, denid, twitter, hodlAddress)
  }, [airdropContract])

  return { onSubmit: submit }
}

export default useSubmit
