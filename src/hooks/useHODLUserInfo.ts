import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { HODLUserInfo } from "state/types";
import { useWeb3React } from '@web3-react/core'
import { getCakeContract } from "utils/contractHelpers";
import useRefresh from "./useRefresh";

export default function useHODLUserInfo() : HODLUserInfo {
    const { fastRefresh } = useRefresh()
    const [hodlUserinfo, setHODLUserInfo] = useState<HODLUserInfo>()
    const { account } = useWeb3React()

    useEffect(() => {
    async function fetchHODLNetworkInfo() {
        const cakeContract = getCakeContract()
        const res = await cakeContract.A_GetHODLInfos(account)
        const st = new Date(res._startTime*1000)
        const date = new Intl.DateTimeFormat('en-US', 
          { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
          }).format(st)
        const now1 = Date.now()/1000;
        let spendDays = Math.floor((now1 - res._startTime)/120);
        if(spendDays >= 365)
          spendDays = 365;
        const result = {
            isStarted: res._isStart,
            startAmount:  new BigNumber(res._startAmount.toString()),
            startTime:  date,
            spendDays: spendDays.toString(),
            isValid:  res._isValid,
            useAffliate:  res._useAffliateCode,
            affliateAddress:  res._affliateAddress,
        }
        setHODLUserInfo(result)
    }

    if(account)
      fetchHODLNetworkInfo()
    }, [fastRefresh, account])

    return hodlUserinfo
}