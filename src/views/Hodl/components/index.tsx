import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { HODLNetworkInfo, HODLUserInfo, HODLUserRewardInfo } from 'state/types'
import { Heading, Flex, Text, Toggle, Input, Button, Skeleton, ChartIcon, CommunityIcon, SwapIcon, Image } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import useTheme from 'hooks/useTheme'
import { useWeb3React } from '@web3-react/core'
import { useGetCakeBalance, useGetBnbBalance } from 'hooks/useTokenBalance'
import { getBalanceNumber, getFullDisplayBalance, formatBigNumberToFixed, formatLocalisedCompactNumber, formatBigNumber } from 'utils/formatBalance'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'
import useCheckAffiliate from 'views/Affiliate/useCheckAffiliate'

import useToast from 'hooks/useToast'
import useHODLNetworkInfo from 'hooks/useHODLNetworkInfo'
import useHODLUserInfo from 'hooks/useHODLUserInfo'
import useHODLUserRewardInfo from 'hooks/useHODLUserRewardInfo'
import useResetHODL from 'views/Hodl/hooks/useResetHODL'
import useStopHODL from 'views/Hodl/hooks/useStopHODL'
import useStartHODLWithAffiliate from 'views/Hodl/hooks/useStartHODLWithAffiliate'
import useStartHODLWithoutAffiliate from '../hooks/useStartHODLWithoutAffiliate'
import IconCard, { IconCardData } from '../../components/IconCard'
import StatCardContent from '../../components/StatCardContent'
import ConnectWalletButton from '../../../components/ConnectWalletButton'
import CopyAddress from '../../../components/Menu/UserMenu/CopyAddress'

const HODLButton = styled(Button)`
  background: transparent!important;
  border-color: transparent;
  box-shadow: none;
  width:270px;
  padding: 0; 
  margin: 20px;
  minWidth: 150px;
  height: 180px;
  disabledBackground: transparent:
`

const Separator = styled.hr`
  border: 2px solid #ffc000;
  margin: 30px 0;
`

const HodlInput = styled(Input)`
  border-radius: 5px;
  background: #ffc000;
  color: #002060;
  margin: 15px 0;
  max-width: 500px;
  padding: 24px 10px;
  ::placeholder {
    color: #002060;
  }
  width: 420px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const AffiliateInput = styled(Input)`
  width: 420px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const StyledColumn = styled(Flex) <{ noMobileBorder?: boolean }>`
  flex-direction: column;
  ${({ noMobileBorder, theme }) =>
    noMobileBorder
      ? `${theme.mediaQueries.md} {
           padding: 0 16px;
           border-left: 1px ${theme.colors.inputSecondary} solid;
         }
       `
      : `border-left: 1px ${theme.colors.inputSecondary} solid;
         padding: 0 8px;
         ${theme.mediaQueries.sm} {
           padding: 0 16px;
         }
       `}
`

const Grid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(2, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(2, auto);
  }
`

const OneGrid = styled.div`
  display: grid;
  grid-gap: 16px 8px;
  margin-top: 24px;
  grid-template-columns: repeat(1, auto);

  ${({ theme }) => theme.mediaQueries.sm} {
    grid-gap: 16px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    grid-gap: 32px;
    grid-template-columns: repeat(1, auto);
  }
`

const ResponseBalance = styled(Balance)`
  font-size: 18px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

const NetworkText = styled(Text)`
  font-size: 18px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

const NetworkFlex = styled(Flex)`
  padding: 18px;
  min-width: 460px;
  border: 3px solid #ffc000;
  border-radius: 30px;
  @media screen and (max-width: 600px) {
    min-width: 350px;
  }
`

const Stats = () => {

  const { account } = useWeb3React()

  const [isChecked, setIsChecked] = useState(false);
  const [affiliateAddress, setAffiliateAddress] = useState('')
  const [verifyAffiliateAddress, setVerifyAffiliateAddress] = useState('')
  const [flagChangeAffiliate, setFlagChangeAffiliate] = useState(true)
  const [pendingTx, setPendingTx] = useState(false)
  const [networkinfo, setnetworkinfo] = useState<HODLNetworkInfo>()
  const [userInfo, setUserInfo] = useState<HODLUserInfo>()
  const [isAffiliateAddress, setIsAffiliateAddress] = useState(false)
  const [verifyOk, setVerifyOk] = useState(false)
  const [userRewardInfo, setUserRewardInfo] = useState<HODLUserRewardInfo>()

  const { toastSuccess, toastError } = useToast()

  const { onStartHODLWithoutAffiliate } = useStartHODLWithoutAffiliate()
  const { onStartHODLWithAffiliate } = useStartHODLWithAffiliate()
  const { onStopHODL } = useStopHODL()
  const { onResetHODL } = useResetHODL()

  const { t } = useTranslation()
  const { theme } = useTheme()

  const hodlNetworkInfo: HODLNetworkInfo = useHODLNetworkInfo()
  const hodlUserInfo: HODLUserInfo = useHODLUserInfo()
  const hodlUserRewardInfo: HODLUserRewardInfo = useHODLUserRewardInfo()
  const { onCheckAffiliate } = useCheckAffiliate()
  const TMPBalance = useGetCakeBalance()
  const MATICBalance = useGetBnbBalance()

  useEffect(() => {
    if (hodlNetworkInfo) {
      setnetworkinfo(hodlNetworkInfo)
    }

    if (hodlUserInfo) {
      setUserInfo(hodlUserInfo)
    }

    if (hodlUserRewardInfo) {
      setUserRewardInfo(hodlUserRewardInfo)
    }
  }, [account, hodlNetworkInfo, hodlUserInfo, hodlUserRewardInfo])


  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="#002060" width="36px" />,
    background: '#ffc000'
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="#002060" width="36px" />,
    background: '#ffc000'
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="#002060" width="36px" />,
    background: '#ffc000'
  }

  const toggle = () => setIsChecked(!isChecked);

  const onChangeVerifyAffiliateAddress = (event) => {
    setFlagChangeAffiliate(true)
    setVerifyAffiliateAddress(event.target.value)
  }

  const onChangeAffiliateAddress = (event) => {
    setAffiliateAddress(event.target.value)
  }

  const onClickVerifyAffiliateAddress = async () => {
    try {
      const result = await onCheckAffiliate(verifyAffiliateAddress)
      setFlagChangeAffiliate(false)
      setVerifyOk(result)
    } catch {
      setFlagChangeAffiliate(false)
      setVerifyOk(false)
    }
  }

  const onClickStartBtn = async () => {
    if (!account) {
      toastError(
        t('Error'),
        t('Network Error!'),
      )
      return
    }
    if (TMPBalance.balance.isZero() || MATICBalance.balance.isZero()) {
      toastError(
        t('Error'),
        t('Insuficient Balance!'),
      )
      return
    }
    if (userInfo && userInfo.isStarted && !userInfo.isValid) {
      toastError(
        t('Error'),
        t('No Valid Address. Please reset and start again.'),
      )
      return
    }
    if (userInfo && userInfo.isStarted) {
      toastError(
        t('Error'),
        t('You already started the HODL!'),
      )
      return
    }
    setPendingTx(true)
    try {
      if (isChecked) {
        if (affiliateAddress.length !== 42 || !(await onCheckAffiliate(affiliateAddress))) {
          toastError(
            t('Error'),
            t('Invalid wallet address. Please confirm the affiliate address and try again!'),
          )
        } else {
          const aaaa = await onStartHODLWithAffiliate(affiliateAddress)
          toastSuccess(
            `${t('Success!')}!`,
            t('HODL Started. You will earn 0.2575% TMPv3 per day.'),
          )
        }
      } else {
        await onStartHODLWithoutAffiliate()
        toastSuccess(
          `${t('Success!')}!`,
          t('HODL Started. You will earn 0.2575% TMPv3 per day..'),
        )
      }
    } catch (e) {
      if (e.code === 4001) {
        toastError(
          t('Error'),
          t(e.message),
        )
      } else {
        toastError(
          t('Error'),
          t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
        )
      }
      console.error(e)
    } finally {
      setPendingTx(false)
    }
  }

  const onClickStopBtn = async () => {
    if (!account) {
      toastError(
        t('Error'),
        t('Network Error!'),
      )
      return
    }
    if (TMPBalance.balance.isZero() || MATICBalance.balance.isZero()) {
      toastError(
        t('Error'),
        t('Insuficient Balance!'),
      )
      return
    }
    if (userInfo && !userInfo.isStarted) {
      toastError(
        t('Error'),
        t('First you must start the HODL. Please start the HODL!'),
      )
      return
    }
    if (userInfo && userInfo.isStarted && !userInfo.isValid) {
      toastError(
        t('Error'),
        t('No Valid Address. Please reset and start again.'),
      )
      return
    }
    setPendingTx(true)
    try {
      await onStopHODL()
      toastSuccess(
        `${t('Stoped the HODL')}!`,
        t('Your %symbol% earnings have been sent to your wallet!', { symbol: 'TMPv3' }),
      )
    } catch (e) {
      if (e.code === 4001) {
        toastError(
          t('Error'),
          t(e.message),
        )
      } else {
        toastError(
          t('Error'),
          t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
        )
      }
      console.error(e)
    } finally {
      setPendingTx(false)
    }
  }

  const onClickResetBtn = async () => {
    if (!account) {
      toastError(
        t('Error'),
        t('Network Error!'),
      )
      return
    }
    if (TMPBalance.balance.isZero() || MATICBalance.balance.isZero()) {
      toastError(
        t('Error'),
        t('Insuficient Balance!'),
      )
      return
    }
    setPendingTx(true)
    try {
      await onResetHODL()
      toastSuccess(
        `${t('Resetted the HODL')}!`,
        t('You can start the HODL now!'),
      )
    } catch (e) {
      if (e.code === 4001) {
        toastError(
          t('Error'),
          t(e.message),
        )
      } else {
        toastError(
          t('Error'),
          t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
        )
      }
      console.error(e)
    } finally {
      setPendingTx(false)
    }
  }

  return (
    <div>
      <div id="hodl" style={{ height: '10em' }}>
        <Heading style={{ textAlign: 'center', color: '#ffc000' }} scale="xxl">{t('Start/Stop HODL')}</Heading>
      </div>
      <CopyAddress account={t('0x48Bd485ad1d4AA8ec1ebf0065ddAce5B8A8bF9Bf')} headstring={t('Contract ID:')} colorHeading="#ffc000" colorAddress="#ffffff" colorIcon="primary" my="24px" />
      <div style={{ width: '100%', textAlign: 'center', margin: '20px auto 50px' }}><ConnectWalletButton headstring="Address:" colorHeading="#ffc000" colorAddress="#ffffff" colorIcon="primary" /></div>
      <Flex mb="50px" justifyContent='space-around' alignItems={['center', null, null, 'start']} flexWrap="wrap">
        <Flex flexDirection="column" alignItems="center">
          <HODLButton
            disabled={pendingTx}
            onClick={onClickStartBtn}>
            <img src="/images/start_btn_2.png" alt="start" />
          </HODLButton>
          <Text>Click to START HODLing</Text>
          <Flex justifyContent={['center', null, null, 'left']} alignItems={['center', null, null, 'center']} my="20px">
            <Toggle checked={isChecked} scale="sm" onChange={toggle} />
            <Heading ml="20px">Use Affiliate Code</Heading>
          </Flex>
          {
            isChecked &&
            <AffiliateInput type="text" scale="sm" placeholder={t('Input the Affiliate address')} value={affiliateAddress} isSuccess onChange={onChangeAffiliateAddress} />
          }
        </Flex>
        <Flex flexDirection="column" alignItems="center">
          <HODLButton
            disabled={pendingTx}
            onClick={onClickStopBtn}>
            <img src="/images/stop_btn_2.png" alt="stop" />
          </HODLButton>
          <Text>STOP HODL to Collect Mining Reward</Text>
        </Flex>
      </Flex>
      <Separator />
      <Flex mb="50px" flexDirection={['column-reverse', null, null, 'row']} justifyContent={['space-around', null, null, 'right']} alignItems={['center', null, null, 'center']} flexWrap="wrap" pr={['0', null, null, "170px"]}>
        <Text textAlign="center" maxWidth="300px">RESET if you did a Send Transaction before you did a STOP HODL</Text>
        <HODLButton
          style={{ width: '200px' }}
          disabled={pendingTx}
          onClick={onClickResetBtn}>
          <img src="/images/reset_btn.png" alt="reset" />
        </HODLButton>
      </Flex>
      <Separator />
      <Flex mb="50px" flexDirection={['column', null, null, 'row']} justifyContent='center' alignItems='center'>
        <Text>Verify Affiliate Address</Text>
        <Flex alignItems="center" mx="30px" flexDirection={['column', null, null, 'row']}>
          <HodlInput type="text" scale="md" placeholder={t('Input Affiliate Address Here')} value={verifyAffiliateAddress} onChange={onChangeVerifyAffiliateAddress} />
          <Flex justifyContent="space-around">
            <Button color="#002060" mr="30px" style={{ borderRadius: "5px" }} onClick={onClickVerifyAffiliateAddress}>{t('>')}</Button>
            <Button color="#002060" style={{ borderRadius: '5px' }}>{flagChangeAffiliate ? t('') : verifyOk ? t('Yes') : t('NO')}</Button>
          </Flex>
        </Flex>
      </Flex>
      <Separator />
      {userInfo && userInfo.isStarted && userInfo.isValid &&
        <div>
          <Flex mb="50px" flexDirection="column" justifyContent="space-around" alignItems="center">
            <Heading textAlign="center" mb="20px" color="#ffc000" scale="xl">{t('My Current HODL Info')}</Heading>
            <Flex flexDirection="column" padding="18px" minWidth="460px" border="3px solid #ffc000" borderRadius="30px">
              {
                userInfo && userInfo.isStarted && !userInfo.isValid &&
                <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }}>
                  <Heading color="red">Your HODL is Invalid! Please reset and try again!</Heading>
                </div>
              }
              <div>
                <Flex mb="10px" justifyContent="space-between">
                  <Text color="#ffc000" fontSize='18px'>{t('Beginning Balance')}</Text>
                  {userInfo ? (
                    <Balance decimals={8} lineHeight="1.1" color="#ffc000" fontSize='18px' bold value={getBalanceNumber(new BigNumber(userInfo.startAmount.toString()), 8)} />
                  ) : (
                    <Skeleton height={24} width={126} my="4px" mx="auto" />
                  )}
                </Flex>
                <Flex mb="10px" justifyContent="space-between">
                  <Text color="#ffc000" fontSize='18px'>{t('Start Time')}</Text>
                  {userInfo ? (
                    <Text color="#ffc000" fontSize='18px' bold>{userInfo.startTime}</Text>
                  ) : (
                    <Skeleton height={24} width={126} my="4px" mx="auto" />
                  )}
                </Flex>
                <Flex mb="10px" justifyContent="space-between">
                  <Text color="#ffc000" fontSize='18px'>{t('Current HODLed Days')}</Text>
                  {userInfo ? (
                    <Text color="#ffc000" fontSize='18px' bold>{t('%spendDays% Days', { spendDays: userInfo.spendDays })}</Text>
                  ) : (
                    <Skeleton height={24} width={126} my="4px" mx="auto" />
                  )}
                </Flex>
                <Flex mb="10px" justifyContent="space-between">
                  <Text color="#ffc000" fontSize='18px'>{t('Mining Rewards')}</Text>
                  {userRewardInfo ? (
                    <Balance decimals={8} lineHeight="1.1" color="#ffc000" fontSize='18px' bold value={getBalanceNumber(new BigNumber(userRewardInfo.miningReward.toString()), 8)} />
                  ) : (
                    <Skeleton height={24} width={126} my="4px" mx="auto" />
                  )}
                </Flex>
                <Flex mb="10px" justifyContent="space-between">
                  <Text color="#ffc000" fontSize='18px'>{t('Affiliate Bonus')}</Text>
                  {userRewardInfo ? (
                    <Balance decimals={8} lineHeight="1.1" color="#ffc000" fontSize='18px' bold value={getBalanceNumber(new BigNumber(userRewardInfo.bonusReward.toString()), 8)} />
                  ) : (
                    <Skeleton height={24} width={126} my="4px" mx="auto" />
                  )}
                </Flex>
                <Flex mb="10px" justifyContent="space-between">
                  <Text color="#ffc000" fontSize='18px'>{t('New Balance*')}</Text>
                  {userRewardInfo ? (
                    <Balance decimals={8} lineHeight="1.1" color="#ffc000" fontSize='18px' bold value={getBalanceNumber(new BigNumber((userRewardInfo.miningReward.plus(new BigNumber(TMPBalance.balance.toString())).plus(userRewardInfo.bonusReward))), 8)} />
                  ) : (
                    <Skeleton height={24} width={126} my="4px" mx="auto" />
                  )}
                </Flex>
              </div>
              <Flex>
                <Text color="#ffffff" fontSize='14px'>{t('*HODL must be valid when completed (no send tx between signals)')}</Text>
              </Flex>
            </Flex>
          </Flex>
        </div>
      }
      <Flex flexDirection="column" justifyContent="space-around" alignItems="center">
        <Heading textAlign="center" mb="20px" color="#ffc000" scale="xl">{t('Current Network Info')}</Heading>
        <NetworkFlex flexDirection="column">
          <Flex mb="10px" justifyContent="space-between">
            <NetworkText color="#ffc000">{t('Total Hodls in Progress')}</NetworkText>
            {networkinfo ? (
              <ResponseBalance color="#ffc000" decimals={0} bold value={networkinfo.totalHODLs.toNumber()} />
            ) : (
              <Skeleton height={24} width={126} my="4px" mx="auto" />
            )}
          </Flex>
          <Flex mb="10px" justifyContent="space-between">
            <NetworkText color="#ffc000">{t('Total Tokens Current Being HODLed')}</NetworkText>
            {networkinfo ? (
              <ResponseBalance color="#ffc000" decimals={0} bold value={getBalanceNumber(new BigNumber(networkinfo.totalHODLsAmount.toString()), 8)} />
            ) : (
              <Skeleton height={24} width={126} my="4px" mx="auto" />
            )}
          </Flex>
          <Flex mb="10px" justifyContent="space-between">
            <NetworkText color="#ffc000">{t('Total of Completed HODLed')}</NetworkText>
            {networkinfo ? (
              <ResponseBalance color="#ffc000" decimals={0} bold value={getBalanceNumber(new BigNumber(networkinfo.totalGoodHODLs.toString()), 0)} />
            ) : (
              <Skeleton height={24} width={126} my="4px" mx="auto" />
            )}
          </Flex>
          <Flex mb="10px" justifyContent="space-between">
            <NetworkText color="#ffc000">{t('Total Amount of Completed HODLed')}</NetworkText>
            {networkinfo ? (
              <ResponseBalance color="#ffc000" decimals={0} bold value={getBalanceNumber(new BigNumber(networkinfo.totalGoodHODLsAmount.toString()), 8)} />
            ) : (
              <Skeleton height={24} width={126} my="4px" mx="auto" />
            )}
          </Flex>
          <Flex mb="10px" justifyContent="space-between">
            <NetworkText color="#ffc000">{t('Total Rewards Paid')}</NetworkText>
            {networkinfo ? (
              <ResponseBalance color="#ffc000" decimals={0} bold value={getBalanceNumber(new BigNumber(networkinfo.totalMiningReward.toString()), 8)} />
            ) : (
              <Skeleton height={24} width={126} my="4px" mx="auto" />
            )}
          </Flex>
          <Flex justifyContent="space-between">
            <NetworkText color="#ffc000">{t('Total Bonus Paid')}</NetworkText>
            {networkinfo ? (
              <ResponseBalance color="#ffc000" decimals={0} bold value={getBalanceNumber(new BigNumber(networkinfo.totalBonusReward.toString()), 8)} />
            ) : (
              <Skeleton height={24} width={126} my="4px" mx="auto" />
            )}
          </Flex>
        </NetworkFlex>
      </Flex>
      <Flex mt="40px" justifyContent="center" alignItems="center" flexDirection="column">
        <Heading textAlign="center" scale="xl" style={{ color: '#ffc000' }}>
          {t('Network Reward Info Now')}
        </Heading>
        <br /><br />
        <Flex flexDirection={['column', null, null, 'row']}>
          <IconCard style={{ background: '#ffc000' }} {...UsersCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>

            {networkinfo ? (
              <StatCardContent
                headingText={getFullDisplayBalance(new BigNumber(networkinfo.totalMiningReward.toString()), 8, 4)}
                bodyText={t('Rewards Paid')}
                middleText={t('HODLed')}
                highlightColor="#002060"
              />
            ) : (
              <StatCardContent
                headingText="Loading..."
                bodyText={t('Rewards Paid')}
                middleText={t('HODLed')}
                highlightColor="#002060"
              />
            )}
          </IconCard>
          <IconCard style={{ background: '#ffc000' }} {...TradesCardData} mr={[null, null, null, '16px']} mb={['16px', null, null, '0']}>

            {networkinfo ? (
              <StatCardContent
                headingText={getFullDisplayBalance(new BigNumber(networkinfo.totalBonusReward.toString()), 8, 4)}
                bodyText={t('Bonuses Paid')}
                middleText={t('HODLed')}
                highlightColor="#002060"
              />
            ) : (
              <StatCardContent
                headingText="Loading..."
                bodyText={t('Bonuses Paid')}
                middleText={t('HODLed')}
                highlightColor="#002060"
              />
            )}
          </IconCard>
          <IconCard style={{ background: '#ffc000' }} {...StakedCardData}>

            {networkinfo ? (
              <StatCardContent
                headingText={getFullDisplayBalance(new BigNumber((networkinfo.totalMiningReward.plus(networkinfo.totalBonusReward)).toString()), 8, 4)}
                bodyText={t('Total Paid')}
                middleText={t('HODLed')}
                highlightColor="#002060"
              />
            ) : (
              <StatCardContent
                headingText="Loading..."
                bodyText={t('Total Reward Amount')}
                middleText={t('HODLed')}
                highlightColor="#002060"
              />
            )}
          </IconCard>
        </Flex>
      </Flex>
    </div>
  )
}

export default Stats