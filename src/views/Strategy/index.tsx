import React from 'react'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const Strategy = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const Title = styled(Text)`
    font-size: 28px;
    margin: 80px 0 40px;
    text-align: left;
    color: #002060;
    @media screen and (max-width: 760px) {
      font-size: 20px;
    }
  `

  const Symbol = styled(Text)`
    margin-right: 18px;
    margin-top: 4px;
    font-size: 20px;
    color: #002060;
    @media screen and (max-width: 760px) {
      font-size: 16px;
      margin-top: 3px;
    }
  `

  const ResponseText = styled(Text)`
    text-align: left;
    line-height: 36px;
    font-size: 20px;
    color: #002060;
    @media screen and (max-width: 760px) {
      font-size: 16px;
      line-height: 30px;
    }
  `

  const BigText = styled(Text)`
    font-size: 36px;
    padding: 50px 0;
    text-align: center;
    line-height: 40px;
    color: #002060;
    @media screen and (max-width: 760px) {
      font-size: 30px;
      padding: 24px 0;
    }
    @media screen and (max-width: 550px) {
      font-size: 20px;
      padding: 16px 0;
    }
  `

  const BigFlex = styled(Flex)`
    padding: 60px;
    background: #ffc000;
    border-radius: 30px;
    border: 5px solid #002060;
    margin: 20px;
    flex-direction: column;
    @media screen and (max-width: 760px) {
      padding: 30px;
      border-radius: 18px;
      margin: 12px;
    }
  `

  return (
    <div style={{ background: '#a5a5a5', width: '100%', padding: '16px' }}>
      <div style={{ paddingTop: '30px', maxWidth: '900px', margin: 'auto' }}>
        {/* <BackButton /> */}
        <Image src="/images/logo-2.png" alt="logo" width={120} height={80} onClick={toHome} style={{ cursor: 'pointer' }} />
        <Image src="/images/strategy-2.png" alt="logo" margin="60px 0 40px" width={900} height={378} />
        <Title margin='80px 0 60px'><strong>{t('"HODL SIGNAL\'S Strategy is to Provide Time Tested Solutions to Problems in the Legacy Financial Systems & Help Resolve Current Issues within the Crypto Space."')}</strong></Title>
        <Title><strong>{t('OUR STRATEGY IS THE IMPLEMENTATION OF THESE SOLUTIONS:')}</strong></Title>
        <Flex flexDirection="column" pb="30px" pl={['10px', null, null, '50px']}>
          <Flex alignItems="start">
            <Symbol><strong>{t('1.')}</strong></Symbol>
            <ResponseText>{t('Make HODL SIGNAL TOKEN by design a Store-of-Value Token')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('2.')}</strong></Symbol>
            <ResponseText>{t('Create a System that Makes HODL SIGNAL TOKEN an Asset Backed Cryptocurrency')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('3.')}</strong></Symbol>
            <ResponseText>{t('It MUST Adhere to the 5 Pillars of a Cryptocurrency')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('4.')}</strong></Symbol>
            <ResponseText>{t('HODL SIGNAL TOKEN Utility will be a Mineable Token that Pay a Mining Reward for HODLing')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('5.')}</strong></Symbol>
            <ResponseText>{t('It MUST Pay a High Fixed Mining Reward')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('6.')}</strong></Symbol>
            <ResponseText>{t('6.	Store-of-Value combined with Mining Tokens Must Outpace the Rate of Commodity Inflation')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('7.')}</strong></Symbol>
            <ResponseText>{t('Utilize the Polygon (MATIC) Network for Scalability and Low Gas Fees')}</ResponseText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('a.')}</Symbol>
              <ResponseText>{t('Low Gas Fees Makes HODL SIGNAL Affordable to Third World Markets & Above')}</ResponseText>
            </Flex>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('8.')}</strong></Symbol>
            <ResponseText>{t('Institute an Affiliate Program to Promote HODL SIGNAL TOKEN and Encourage People to Become HODLers')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('9.')}</strong></Symbol>
            <ResponseText>{t('Ensure that the Launch is 100% Fair & Equitable')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('10.')}</strong></Symbol>
            <ResponseText>{t('Be Transparent & Show 100% of Transforms Makes HODL SIGNAL Asset Backed')}</ResponseText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('a.')}</Symbol>
              <ResponseText>{t('DEX Liquidity becomes Locked (Eliminating a Rug Pull)')}</ResponseText>
            </Flex>
          </Flex>
        </Flex>
        <Title><strong>{t('Post Distribution, Market Forces Naturally Establish the Following:')}</strong></Title>
        <Flex flexDirection="column" pb="30px" pl={['10px', null, null, '50px']}>
          <Flex alignItems="start">
            <Symbol><strong>{t('1.')}</strong></Symbol>
            <ResponseText>{t('HODL SIGNAL\'S Utility Will Create Price Stability & Price Appreciation')}</ResponseText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('a.')}</Symbol>
              <ResponseText>{t('Utility (HODLing) Shows the Market that HODL SIGNAL TOKEN is a Store-of-Value')}</ResponseText>
            </Flex>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('2.')}</strong></Symbol>
            <ResponseText>{t('Price Stability & Price Appreciation = Reduction in Risk')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('3.')}</strong></Symbol>
            <ResponseText>{t('Risk Reduction = Use of Bank\'s own Money (loans) to Fund Crypto and HODL SIGNAL TOKEN\'S Growth & Adoption')}</ResponseText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('a.')}</Symbol>
              <ResponseText>{t('Banker\'s Money Used Only After Price Stability has been Obtained')}</ResponseText>
            </Flex>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('4.')}</strong></Symbol>
            <ResponseText>{t('More HODLing Creates Buy Demand for HODL SIGNAL TOKENS')}</ResponseText>
          </Flex>
          <Flex alignItems="start">
            <Symbol><strong>{t('5.')}</strong></Symbol>
            <ResponseText>{t('Fewer HODL SIGNAL TOKENS on the Open Market = Price Appreciation')}</ResponseText>
          </Flex>
        </Flex>
        <BigFlex>
          <BigText><strong>{t('Solution Implementation = Price Stability')}</strong></BigText>
          <BigText><strong>{t('Price Stability = More Adoption')}</strong></BigText>
          <BigText><strong>{t('MORE ADOPTION = EXPLOSIVE GROWTH')}</strong></BigText>
        </BigFlex>
      </div>
    </div>
  )
}

export default Strategy
