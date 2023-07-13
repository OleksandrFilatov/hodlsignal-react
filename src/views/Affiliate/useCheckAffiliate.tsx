import { useCallback, useEffect, useState } from 'react'
import { getCakeContract } from 'utils/contractHelpers'

const useCheckAffiliate = () => {
  const cakeContract = getCakeContract()
  const handleCheckAffiliate = useCallback(async (account) => {
    const result: boolean = await cakeContract.IsAffliate(account)
    return result;
  }, [cakeContract])

  return { onCheckAffiliate: handleCheckAffiliate }
}

export default useCheckAffiliate
