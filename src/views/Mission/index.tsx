import React from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const Mission = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const Title = styled(Heading)`
    font-size: 34px;
    margin: 40px 0 60px;
    text-align: center;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 28px;
      margin: 26px 0 50px;
    }
  `

  const SmallTitle = styled(Title)`
    font-size: 22px;
    text-align: left;
    @media screen and (max-width: 712px) {
      font-size: 22px;
      margin: 26px 0 50px;
    }
  `

  const MainText = styled(Text)`
    font-size: 20px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 16px;
    }
  `
  const SmallText = styled(Text)`
    font-size: 16px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 16px;
    }
  `
  const WhiteText = styled(MainText)`
    color: #ffffff;
    padding: 12px 0;
  `

  const MainSymbol = styled(Text)`
    font-size: 20px;
    margin-right: 18px;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 16px;
    }
  `
  const Symbol = styled(Text)`
    font-size: 16px;
    margin-right: 18px;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 16px;
    }
  `

  return (
    <Page style={{ maxWidth: '926px' }}>
      <div>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <Image src="/images/mission.png" alt="mission" margin="40px 0" width={926} height={262} />
        <Title>{t('HODL SIGNAL\'S MISSION')}</Title>
        <SmallTitle>{t('Create a Token with These Characteristics:')}</SmallTitle>
        <Flex flexDirection="column" padding="0 0 30px 50px">
          <Flex alignItems="first">
            <MainSymbol>{t('1.')}</MainSymbol>
            <MainText>{t('Key Component:')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <SmallText>{t('Be Asset Backed')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <SmallText>{t('Be a Store-of-Value Cryptocurrency')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('c.')}</Symbol>
              <SmallText>{t('Have a Utility of Paying a Fixed Mining Rewards Rate')}</SmallText>
            </Flex>
          </Flex>
          <Flex alignItems="first" pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('2.')}</MainSymbol>
            <MainText>{t('Adhere to the 5 Pillar Principle of a Cryptocurrency')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <SmallText>{t('Open')}</SmallText>
            </Flex>
            <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <SmallText>{t('Accessible to Everyone')}</SmallText>
              </Flex>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <SmallText>{t('Borderless')}</SmallText>
            </Flex>
            <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <SmallText>{t('Purely International - Global')}</SmallText>
              </Flex>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('c.')}</Symbol>
              <SmallText>{t('Neutral')}</SmallText>
            </Flex>
            <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <SmallText>{t('Yours to Spend or Receive')}</SmallText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('ii.')}</Symbol>
                <SmallText>{t('Agnostic to People or Reason')}</SmallText>
              </Flex>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('d.')}</Symbol>
              <SmallText>{t('Censorship Resistant')}</SmallText>
            </Flex>
            <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <SmallText>{t('No Authority Cannot Stop a Transfer of Funds')}</SmallText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('ii.')}</Symbol>
                <SmallText>{t('Peer-to-Peer')}</SmallText>
              </Flex>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('e.')}</Symbol>
              <SmallText>{t('Public')}</SmallText>
            </Flex>
            <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <SmallText>{t('All Transactions are on Chain')}</SmallText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('ii.')}</Symbol>
                <SmallText>{t('Visible')}</SmallText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('iii.')}</Symbol>
                <SmallText>{t('Verifiable')}</SmallText>
              </Flex>
            </Flex>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('3.')}</MainSymbol>
            <MainText>{t('Supply Shrinks on the Open Market')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('4.')}</MainSymbol>
            <MainText>{t('Incentivize Users to HODL')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('5.')}</MainSymbol>
            <MainText>{t('Pay Large Fixed Mining Rewards Rates')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('6.')}</MainSymbol>
            <MainText>{t('Third World Participation')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('7.')}</MainSymbol>
            <MainText>{t('Have Low Gas Fees for:')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <SmallText>{t('Transactions')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <SmallText>{t('Smart Contract Interactions')}</SmallText>
            </Flex>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('8.')}</MainSymbol>
            <MainText>{t('Outperform Banks with a Blockchain based Savings Account')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('9.')}</MainSymbol>
            <MainText>{t('After Distribution, Obtain Price Stability & Price Appreciation')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('10.')}</MainSymbol>
            <MainText>{t('Affiliates Program to Inspire:')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <SmallText>{t('Growth')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <SmallText>{t('Adoption')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('c.')}</Symbol>
              <SmallText>{t('HODLing')}</SmallText>
            </Flex>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('11.')}</MainSymbol>
            <MainText>{t('Execute a 100% Fair Launch')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <SmallText>{t('No Founder Rewards, No Dev Rewards')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <SmallText>{t('No Pre-Sale, No ICO, No IEO and No IDO')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('c.')}</Symbol>
              <SmallText>{t('Even Distribution of Tokens to Numerous Addresses')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('d.')}</Symbol>
              <SmallText>{t('MASSIVE Airdrop to 250 Blockchains')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('e.')}</Symbol>
              <SmallText>{t('100% of Transformations Go into a Locked Liquidity Pool')}</SmallText>
            </Flex>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('12.')}</MainSymbol>
            <MainText>{t('The More People HODL, the Fewer Tokens are on the Open Market')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('13.')}</MainSymbol>
            <MainText>{t('Fewer Tokens = Price Appreciation')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <MainSymbol>{t('14.')}</MainSymbol>
            <MainText>{t('HODL SIGNAL Network Reports to Encourage Investing & Speculation')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl={['20px', null, null, '40px']}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <SmallText>{t('Percent of the Tokens being HODLed')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <SmallText>{t('History of HODLing Percentages')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('c.')}</Symbol>
              <SmallText>{t('Average Daily Users')}</SmallText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('d.')}</Symbol>
              <SmallText>{t('User Address Growth Reports')}</SmallText>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </Page>
  )
}

export default Mission
