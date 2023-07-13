import React, { useEffect, useState } from 'react'
import { Heading, Flex, Text, Image, ChartIcon, CommunityIcon, SwapIcon, CheckmarkIcon, PancakeRoundIcon, CurrencyIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import useTheme from 'hooks/useTheme'
import styled, { keyframes } from 'styled-components'
import { formatLocalisedCompactNumber, getFullDisplayBalance } from 'utils/formatBalance'
import StatCardContent from 'views/components/StatCardContent'
import { HODLNetworkInfo } from 'state/types'
import useHODLNetworkInfo from 'hooks/useHODLNetworkInfo'
import BigNumber from 'bignumber.js'
import useHODLTotalSupply from 'hooks/useHODLTotalSupply'
import IconCard, { IconCardData } from '../../../components/IconCard'
import { getSrcSet } from '../CompositeImage'


// Values fetched from bitQuery effective 6/9/21
const txCount = 30841921
const addressCount = 2751624

const flyingAnim = () => keyframes`
  from {
    transform: translate(0,  0px);
  }
  50% {
    transform: translate(-5px, -5px);
  }
  to {
    transform: translate(0, 0px);
  }  
`

const BunnyWrapper = styled.div`
  width: 360px;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  margin: auto;
`

const ImageDiv = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 20px;
  background: #ffc000;
  position: relative;
  margin: 0 16px 16px 0;
  padding: 24px;
`

const Title = styled(Heading)`
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`

const CheckText = styled(Heading)`
  @media screen and (max-width: 520px) {
    font-size: 20px;
  }
`

const imagePath = '/images/'
const imageSrc = 'laptop-vault'

const Stats = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const { theme } = useTheme()

  const [totalSupply, setTotalSupply] = useState(new BigNumber(0))
  const [hodledTokens, setHODLedTokens] = useState(new BigNumber(0))
  const [circulation, setCirculation] = useState(new BigNumber(0))

  const tvlString = data ? formatLocalisedCompactNumber(data.tvl) : '-'
  const trades = formatLocalisedCompactNumber(txCount)
  const users = formatLocalisedCompactNumber(addressCount)

  const tvlText = t('And those users are now entrusting the platform with over $%tvl% in funds.', { tvl: tvlString })
  const [entrusting, inFunds] = tvlText.split(tvlString)

  const UsersCardData: IconCardData = {
    icon: <CommunityIcon color="secondary" width="36px" />,
  }

  const TokenPriceCardData: IconCardData = {
    icon: <CurrencyIcon color="primary" width="36px" />,
  }

  const PolygonCardData: IconCardData = {
    icon: <PancakeRoundIcon color="secondary" width="36px" />,
  }

  const TradesCardData: IconCardData = {
    icon: <SwapIcon color="primary" width="36px" />,
  }

  const StakedCardData: IconCardData = {
    icon: <ChartIcon color="failure" width="36px" />,
  }

  const hodlNetworkInfo: HODLNetworkInfo = useHODLNetworkInfo()
  const hodltotalsupply = useHODLTotalSupply()

  useEffect(() => {
    if (hodlNetworkInfo) {
      try {
        setTotalSupply(new BigNumber(hodltotalsupply))
        setHODLedTokens(new BigNumber(hodlNetworkInfo.totalCurrentHODLingAmount))
        setCirculation(new BigNumber(hodltotalsupply.minus(hodlNetworkInfo.totalCurrentHODLingAmount)))
      } catch (error) {
        console.log(error)
      }
    }

  }, [hodlNetworkInfo, hodltotalsupply])

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Title scale="lg" mb="32px">
        <span style={{ color: '#ffc000' }}>{t('Definition of HODL: ')}</span> {t('"HODL" is an industry term in the Crypto Space that means "HOLD or Hold On for Dear Life." It started out as a typo in December 2013 in a post on the Bitcoin Forum. Someone had a little too much to drink when they made that famous typo. It also means: "Hold It, Don\'t Sell It, Don\'t Move It"')}
      </Title>
      <Flex padding={["0", null, null, "50px"]} alignItems="center" flexWrap="wrap" width="90%" justifyContent="space-around">
        <Flex flexDirection="column">
          <Flex>
            <CheckmarkIcon color="success" width="36px" />
            <CheckText scale="xl" mb="10px" style={{ color: '#ffc000', marginLeft: '18px' }}>
              {t('100% Fair launch')}
            </CheckText>
          </Flex>
          <Flex>
            <CheckmarkIcon color="success" width="36px" />
            <CheckText scale="xl" mb="10px" style={{ color: '#ffc000', marginLeft: '18px' }}>
              {t('Asset Backed')}
            </CheckText>
          </Flex>
          <Flex>
            <CheckmarkIcon color="success" width="36px" />
            <CheckText scale="xl" mb="10px" style={{ color: '#ffc000', marginLeft: '18px' }}>
              {t('Polygon Network')}
            </CheckText>
          </Flex>
        </Flex>
        <Image src="/images/airdrop.png" my="20px" width={115} height={247} alt="airdrop" />
      </Flex>
      <Text textAlign="center" id="sdsdsd" color="#ffc000" fontSize="30px" marginBottom='20px'>
        {t('Current Network Totals')}
      </Text>\
      <Flex flexDirection={['column', null, null, 'row']}>
        <ImageDiv>
          <Flex justifyContent="space-between" alignItems="center">
            <Image src="/images/comingsoon.png" alt="laptop" width={130} height={40} />
            <PancakeRoundIcon color="secondary" width="36px" />
          </Flex>
          <Heading style={{ color: '#002060', fontSize: '40px', marginTop: '56px' }}>$0.00</Heading>
          <Heading style={{ color: '#002060', fontSize: '40px' }}>Polygon</Heading>
          <Heading style={{ color: '#363268', fontSize: '16px', fontWeight: 400, marginTop: '30px' }}>Total Liquidity</Heading>
        </ImageDiv>
        <ImageDiv>
          <Flex justifyContent="space-between" alignItems="center">
            <Image src="/images/comingsoon.png" alt="laptop" width={130} height={40} />
            <CurrencyIcon color="primary" width="36px" />
          </Flex>
          <Heading style={{ color: '#002060', fontSize: '40px', marginTop: '56px' }}>$0.00</Heading>
          <Heading style={{ color: '#002060', fontSize: '40px' }}>HODLS</Heading>
          <Heading style={{ color: '#363268', fontSize: '16px', fontWeight: 400, marginTop: '30px' }}>Token Price Floor</Heading>
        </ImageDiv>
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']}>
        <IconCard background={theme.colors.forth}  {...TradesCardData} mr={[null, null, null, '16px']} mb="16px">
          {hodledTokens && hodledTokens.isZero() ? (
            <StatCardContent
              headingText={t('Loading...')}
              bodyText={t('Percent HODLing')}
              middleText={t('')}
              highlightColor={theme.colors.background}
            />
          ) : (
            <StatCardContent
              headingText={getFullDisplayBalance(new BigNumber(hodledTokens.toString()), 8, 0)}
              bodyText={t('Percent HODLing')}
              middleText={t('%percent%%', { percent: hodledTokens.multipliedBy(100).div(totalSupply).toFixed(2) })}
              highlightColor={theme.colors.background}
            />
          )}
        </IconCard>
        <IconCard background={theme.colors.forth}  {...UsersCardData} mr={[null, null, null, '16px']} mb="16px">
          {circulation && circulation.isZero() ? (
            <StatCardContent
              headingText={t('Loading...')}
              bodyText={t('Circulation')}
              middleText={t('')}
              highlightColor={theme.colors.background}
            />
          ) : (
            <StatCardContent
              headingText={getFullDisplayBalance(new BigNumber(circulation.toString()), 8, 0)}
              bodyText={t('Circulation')}
              middleText={t('%percent%%', { percent: circulation.multipliedBy(100).div(totalSupply).toFixed(2) })}
              highlightColor={theme.colors.background}
            />
          )}
        </IconCard>
      </Flex>
      <Flex flexDirection={['column', null, null, 'row']}>
        <ImageDiv>
          <Image src="/images/laptop-vault.png" alt="laptop" width={232} height={232} style={{ position: 'absolute', top: '24px', left: '24px' }} />
        </ImageDiv>
        <IconCard background={theme.colors.forth} {...StakedCardData} mr={[null, null, null, '16px']} mb="16px">
          {totalSupply && totalSupply.isZero() ? (
            <StatCardContent
              headingText={t('Loading...')}
              bodyText={t('Total Supply')}
              middleText={t('')}
              highlightColor={theme.colors.background}
            />
          ) : (
            <StatCardContent
              headingText={getFullDisplayBalance(new BigNumber(totalSupply.toString()), 8, 0)}
              bodyText={t('Total Supply')}
              middleText={t('100%')}
              highlightColor={theme.colors.background}
            />
          )}
        </IconCard>
      </Flex>
    </Flex>
  )
}

export default Stats
