import { useCallback } from 'react'
import { resetHODL } from 'utils/calls'
import { useCake } from 'hooks/useContract'

const useResetHODL = () => {
  const cakeContract = useCake()

  const handleReset = useCallback(async () => {
    await resetHODL(cakeContract)
  }, [cakeContract])

  return { onResetHODL: handleReset }
}

export default useResetHODL
