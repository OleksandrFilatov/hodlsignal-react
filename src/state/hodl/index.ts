import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import BigNumber from 'bignumber.js'

import { HODLUserInfo, HODLNetworkInfo, HODLInfos } from '../types'


// const initialUserState: HODLUserInfo = {
//   isStarted: false,
//   startAmount: new BigNumber(0),
//   startTime: new Date(),
//   isValid: false,
//   useAffliate: false,
//   affliateAddress: "",
// }

// const initialNetworkState: HODLNetworkInfo = {
//   totalHODLs: new BigNumber(0),
//   totalHODLsAmount: new BigNumber(0),
//   totalGoodHODLs: new BigNumber(0),
//   totalGoodHODLsAmount: new BigNumber(0),
//   totalCurrentHODLing: new BigNumber(0),
//   totalCurrentHODLingAmount: new BigNumber(0),
//   totalMiningReward: new BigNumber(0),
//   totalBonusReward: new BigNumber(0),
// }

// const initialState: HODLInfos = {
//   userinfo: initialUserState,
//   networkinfo: initialNetworkState,
// }


// // export const nonArchivedFarms = farmsConfig.filter(({ pid }) => !isArchivedPid(pid))

// // // Async thunks
// // export const fetchFarmsPublicDataAsync = createAsyncThunk<SerializedFarm[], number[]>(
// //   'farms/fetchFarmsPublicDataAsync',
// //   async (pids) => {
// //     const farmsToFetch = farmsConfig.filter((farmConfig) => pids.includes(farmConfig.pid))

// //     // Add price helper farms
// //     const farmsWithPriceHelpers = farmsToFetch.concat(priceHelperLpsConfig)

// //     const farms = await fetchFarms(farmsWithPriceHelpers)
// //     const farmsWithPrices = await fetchFarmsPrices(farms)

// //     // Filter out price helper LP config farms
// //     const farmsWithoutHelperLps = farmsWithPrices.filter((farm: SerializedFarm) => {
// //       return farm.pid || farm.pid === 0
// //     })

// //     return farmsWithoutHelperLps
// //   },
// // )

// // interface FarmUserDataResponse {
// //   pid: number
// //   allowance: string
// //   tokenBalance: string
// //   stakedBalance: string
// //   earnings: string
// // }

// // export const fetchFarmUserDataAsync = createAsyncThunk<FarmUserDataResponse[], { account: string; pids: number[] }>(
// //   'farms/fetchFarmUserDataAsync',
// //   async ({ account, pids }) => {
// //     const farmsToFetch = farmsConfig.filter((farmConfig) => pids.includes(farmConfig.pid))
// //     const userFarmAllowances = await fetchFarmUserAllowances(account, farmsToFetch)
// //     const userFarmTokenBalances = await fetchFarmUserTokenBalances(account, farmsToFetch)
// //     const userStakedBalances = await fetchFarmUserStakedBalances(account, farmsToFetch)
// //     const userFarmEarnings = await fetchFarmUserEarnings(account, farmsToFetch)
// //     return userFarmAllowances.map((farmAllowance, index) => {
// //       return {
// //         pid: farmsToFetch[index].pid,
// //         allowance: userFarmAllowances[index],
// //         tokenBalance: userFarmTokenBalances[index],
// //         stakedBalance: userStakedBalances[index],
// //         earnings: userFarmEarnings[index],
// //       }
// //     })
// //   },
// // )

// export const hodlSlice = createSlice({
//   name: 'Hodl',
//   initialState,
//   reducers: {
//     // setHODLUserInfos: (state, action) => {
//     //   const loadArchivedFarmsData = action.payload
//     //   state.loadArchivedFarmsData = loadArchivedFarmsData
//     // },
//   },
//   extraReducers: (builder) => {
//     // Update farms with live data
//     // builder.addCase(fetchFarmsPublicDataAsync.fulfilled, (state, action) => {
//     //   state.data = state.data.map((farm) => {
//     //     const liveFarmData = action.payload.find((farmData) => farmData.pid === farm.pid)
//     //     return { ...farm, ...liveFarmData }
//     //   })
//     // })

//     // // Update farms with user data
//     // builder.addCase(fetchFarmUserDataAsync.fulfilled, (state, action) => {
//     //   action.payload.forEach((userDataEl) => {
//     //     const { pid } = userDataEl
//     //     const index = state.data.findIndex((farm) => farm.pid === pid)
//     //     state.data[index] = { ...state.data[index], userData: userDataEl }
//     //   })
//     //   state.userDataLoaded = true
//     // })
//   },
// })

// // Actions
// // export const { setLoadArchivedFarmsData } = hodlSlice.actions

// export default hodlSlice.reducer
