import { useCallback } from 'react'
import { stopHODL } from 'utils/calls'
import { useCake } from 'hooks/useContract'

const useStopHODL = () => {
  const cakeContract = useCake()

  const handleStopHODL = useCallback(async () => {
    await stopHODL(cakeContract)
  }, [cakeContract])

  return { onStopHODL: handleStopHODL }
}

export default useStopHODL
