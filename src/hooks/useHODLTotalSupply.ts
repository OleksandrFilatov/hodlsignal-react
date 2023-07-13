import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { getCakeContract } from "utils/contractHelpers";
import useRefresh from "./useRefresh";

export default function useHODLTotalSupply() : BigNumber {
    const { slowRefresh } = useRefresh()
    const [hodlTotalSupply, setHODLTotalSupply] = useState<BigNumber>()
          
    useEffect(() => {
      async function fetchHODLTotalsupply() {
        try {
          const cakeContract = getCakeContract()
          const res = await cakeContract.totalSupply()
          setHODLTotalSupply(new BigNumber(res.toString()))
        } catch (error) {
          console.log(error)
        }
      }
  
      fetchHODLTotalsupply()
    }, [slowRefresh])
  
    return hodlTotalSupply
  }
