import { useCallback, useEffect, useState } from 'react'
import useRefresh from 'hooks/useRefresh'
import { getCakeContract } from 'utils/contractHelpers'
import { useWeb3React } from '@web3-react/core'

export default function useGetAffiliate() {
  const { slowRefresh } = useRefresh()
  const [checkAffiliate, setCheckAffiliate] = useState(false)
  const { account } = useWeb3React()

  useEffect(() => {
    async function fetchGetAffiliate() {
      const cakeContract = getCakeContract()
      const result = await cakeContract.IsAffliate(account)
      setCheckAffiliate(result)
    }

    if(account)
      fetchGetAffiliate()
  }, [account, slowRefresh])

  return checkAffiliate
}
