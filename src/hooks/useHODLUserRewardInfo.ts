import BigNumber from "bignumber.js";
import { useEffect, useState } from "react";
import { HODLUserInfo, HODLUserRewardInfo } from "state/types";
import { useWeb3React } from '@web3-react/core'
import { getCakeContract } from "utils/contractHelpers";
import useRefresh from "./useRefresh";

export default function useHODLUserRewardInfo() : HODLUserRewardInfo {
    const { fastRefresh } = useRefresh()
    const [hodlUserRewardinfo, setHODLUserRewardInfo] = useState<HODLUserRewardInfo>()
    const { account } = useWeb3React()

    useEffect(() => {
    async function fetchHODLUserRewardInfo() {
        const cakeContract = getCakeContract()
        const res = await cakeContract.A_Reward_Infos(account)
        
        const result = {
            miningReward: new BigNumber(res._miningReward.toString()),
            bonusReward: new BigNumber(res._bonusReward.toString()),
            totalReward: new BigNumber(res._totalReward.toString()),
        }
        setHODLUserRewardInfo(result)
    }
    if(account)
        fetchHODLUserRewardInfo()
    }, [account, fastRefresh])

    return hodlUserRewardinfo
}