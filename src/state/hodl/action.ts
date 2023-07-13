import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { SerializedFarmConfig } from 'config/constants/types'
import { useCake } from 'hooks/useContract'

export const fetchHODLUserInfos = async (account: string) => {
  const tokenContract = useCake()
}

export const fetchNetworkInfos = async () => {

}

