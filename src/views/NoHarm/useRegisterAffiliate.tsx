import { useCallback } from 'react'
import { registerAffiliate } from 'utils/calls'
import { useCake } from 'hooks/useContract'

const useRegisterAffiliate = () => {
  const cakeContract = useCake()

  const handleRegisterAffiliate = useCallback(async (agreeDoNotHarmPledge) => {
    await registerAffiliate(cakeContract, agreeDoNotHarmPledge)
  }, [cakeContract])

  return { onRegisterAffiliate: handleRegisterAffiliate }
}

export default useRegisterAffiliate
