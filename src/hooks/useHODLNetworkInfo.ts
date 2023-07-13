import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { HODLNetworkInfo } from "state/types";
import { getCakeContract } from "utils/contractHelpers";
import useRefresh from "./useRefresh";

export default function useHODLNetworkInfo() : HODLNetworkInfo {
    const { slowRefresh } = useRefresh()
    const [hodlNetwrokInfo, setHODLNetworkInfo] = useState<HODLNetworkInfo>()
          
    useEffect(() => {
      async function fetchHODLNetworkInfo() {
        const cakeContract = getCakeContract()
        const res = await cakeContract.A_Network_Infos()
        const result = {
            totalHODLs: new BigNumber( res._totalHODLs.toString() ),
            totalHODLsAmount: new BigNumber( res._totalHODLsAmount.toString() ),
            totalGoodHODLs: new BigNumber( res._totalGoodHODLs.toString() ),
            totalGoodHODLsAmount: new BigNumber( res._totalGoodHODLsAmount.toString() ),
            totalCurrentHODLing: new BigNumber( res._totalCurrentHolding.toString() ),
            totalCurrentHODLingAmount: new BigNumber( res._totalCurrentHoldingAmount.toString() ),
            totalMiningReward: new BigNumber( res._totalMiningReward.toString() ),
            totalBonusReward: new BigNumber( res._totalBonusReward.toString() )
          }
        setHODLNetworkInfo(result)
      }
  
      fetchHODLNetworkInfo()
    }, [slowRefresh])
  
    return hodlNetwrokInfo
  }
