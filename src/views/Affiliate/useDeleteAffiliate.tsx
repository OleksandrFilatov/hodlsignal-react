import { useCallback } from 'react'
import { deleteAffiliate } from 'utils/calls'
import { useCake } from 'hooks/useContract'

const useDeleteAffiliate = () => {
  const cakeContract = useCake()

  const handleDeleteAffiliate = useCallback(async () => {
    await deleteAffiliate(cakeContract)
  }, [cakeContract])

  return { onDeleteAffiliate: handleDeleteAffiliate }
}

export default useDeleteAffiliate
