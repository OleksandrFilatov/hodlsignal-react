import { useEffect, useState } from "react";
import { useWeb3React } from '@web3-react/core'
import { getTransformContract } from "utils/contractHelpers";
import useRefresh from "hooks/useRefresh";

export default function useValidTime(poolindex): boolean {
    const { fastRefresh } = useRefresh()
    const [validtime, setValidTime] = useState(false)
    const index = poolindex

    useEffect(() => {
        async function fetchValidTime() {
            const transformContract = getTransformContract()
            const result: boolean = await transformContract.IsValidTime(index)
            setValidTime(result)
        }
        fetchValidTime()
    }, [fastRefresh, index])

    return validtime
}