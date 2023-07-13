import { useEffect, useState } from "react";
import { useWeb3React } from '@web3-react/core'
import { getTransformContract } from "utils/contractHelpers";
import useRefresh from "hooks/useRefresh";
import { useERC20, usePoolContract } from 'hooks/useContract'
import {TRANSFORM_ADDRESS} from '../../../config/constants'

export default function useIsApproved(network: string, poolindex: number, amount: number) : boolean {
    const { fastRefresh } = useRefresh()
    const [isApproved, setIsApproved] = useState(true)
    const { account } = useWeb3React()
    const poolContract = usePoolContract(network, poolindex)
    const amt = amount

    useEffect(() => {
      async function fetchIsApproved() {
          const allowance = await poolContract.allowance(account, TRANSFORM_ADDRESS)
          console.log("poolContract:", poolContract)
          console.log("account: ", account)
          console.log("TRANSFORM_ADDRESS: ", TRANSFORM_ADDRESS)
          console.log("allowance: ", allowance.toString())
          if(allowance.gte(amt))
            setIsApproved(true)
          else 
            setIsApproved(false)
      }
      if(account && poolContract && amt)
          fetchIsApproved()
    }, [account, fastRefresh, network, poolindex, poolContract, amt])

    return isApproved
}