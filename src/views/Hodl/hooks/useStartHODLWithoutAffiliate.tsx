import { useCallback } from 'react'
import { startHODLWithoutAffiliate } from 'utils/calls'
import { useCake } from 'hooks/useContract'

const useStartHODLWithoutAffiliate = () => {
  const cakeContract = useCake()

  const handleStartHODL = useCallback(async () => {
    await startHODLWithoutAffiliate(cakeContract)
  }, [cakeContract])

  return { onStartHODLWithoutAffiliate: handleStartHODL }
}

export default useStartHODLWithoutAffiliate
