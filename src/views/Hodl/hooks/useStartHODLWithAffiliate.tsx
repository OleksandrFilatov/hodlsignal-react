import { useCallback } from 'react'
import { startHODLWithAffiliate } from 'utils/calls'
import { useCake } from 'hooks/useContract'

const useStartHODLWithAffiliate = () => {
  const cakeContract = useCake()

  const handleStartHODL = useCallback(async (affiliateAddress) => {
    await startHODLWithAffiliate(cakeContract, affiliateAddress)
  }, [cakeContract])

  return { onStartHODLWithAffiliate: handleStartHODL }
}

export default useStartHODLWithAffiliate
