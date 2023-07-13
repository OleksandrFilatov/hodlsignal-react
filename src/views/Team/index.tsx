import React from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const Team = () => {
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
    margin-bottom: 10px;
    @media screen and (max-width: 712px) {
      font-size: 22px;
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

  const StyledForm = styled.div`
    margin-left: 20px;
    @media screen and (max-width: 712px) {
      margin-left: 10px;
    }
  `

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <Title>{t('TEAM HODL SIGNAL')}</Title>
        <SmallTitle style={{textAlign: 'center', marginBottom: '40px'}}>{t('Who are the Founders/Creators/Developers?')}</SmallTitle>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ background: '#ffffff', borderRadius: '10px', padding: '6px' }}>
            <Image src="/images/team.png" alt="team" width={1152} height={560} style={{ margin: 'auto' }} />
          </div>
        </div>
        <SmallTitle>{t('Who are they?')}</SmallTitle>
        <StyledForm>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('They are a Group of Individuals That Believe in 3 Guiding Principles:')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Do No Harm')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Agorism')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Individual Monetary Sovereignty ')}</SmallText>
            </Flex>
          </Flex>
          
          <Flex alignItems="start"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('To Learn More About the Founders/Creators Read the Complete Whitepaper')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Read Their Manifesto')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Read Their Letter to You')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('The Whitepaper Will Also Tell You Who They are Not')}</SmallText>
            </Flex>
          </Flex>

          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('HODL Signal is a Gift to the World')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('A Gift to You ')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('The Founders/Creators/Developers DO NOT WANT or Expect Reciprocity from It ')}</SmallText>
            </Flex>
          </Flex>

          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('Just Like Satoshi Nakamoto Gave Us Bitcoin and Remains Anonymous, So Do They')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Think of the Founders/Creators as Cousins of Satoshi Nakamoto')}</SmallText>
            </Flex>
          </Flex>
          
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('The Founders/Creators of HODL Signal Will Remain Anonymous and for Good Reason ')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('"It\'s Better to Conceal Yourself If You\'re Going to Undercut the Big Banks and Build Parallel Systems that are Better than the Legacy Systems."')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Also Having No Ownership & Having no Centralized Control Prevents HODL Signal from being Classified as a Security (like Bitcoin)')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Copying Satoshi’s Anonymity Worked for Bitcoin, it will work just as well for HODL Signal Token')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('100% of the Tokens Distributed and ZERO to the Founders Means it is NOT a Security')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Most important the Liquidity Pool is Ownerless')}</SmallText>
            </Flex>
          </Flex>
        </StyledForm>

        <SmallTitle>{t('Founders Believe The World Has a “Bankster” Problem:')}</SmallTitle>
        <StyledForm>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('The Root Problem with Commodity Inflation is Too Much Money Printing by the Central Banks')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Money Printing Leads to Inflation')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Money Printing Funds Wars')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Inflation is a Regressive Tax')}</SmallText>
            </Flex>
          </Flex>

          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('HODL Signal is a Minable Token Pegged to Commodity Inflation Rates and Makes HODL Signal a Competitor to the Banks')}</MainText>
          </Flex>
          
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('The Banking Industry has very, VERY powerful people')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('HODL Signal is a Direct Competitor to Banking\'s Most Popular and Profitable Products')}</SmallText>
            </Flex>
          </Flex>
          
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('From Sun Tzu\'s Art of War:')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('"O divine art of subtlety and secrecy! Through you we learn to be invisible, through you inaudible; and hence we can hold the enemy\'s fate in our hands."')}</SmallText>
            </Flex>
          </Flex>
          
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('They Believe that one of the Greatest Dangers to Individual Financial Sovereignty is the Implementation of CBDCs and Tethering Them to a Social Credit Score')}</MainText>
          </Flex>
        </StyledForm>

        <SmallTitle>{t('Worldwide Commodity Inflation:')}</SmallTitle>
        <StyledForm>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('The Founders Believe that the World\'s Excessive Money Printing by the Central Banks will Create Unbearable Inflation Soon')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('Many of us are Already Suffering from their Sham Called Inflation')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('Inflation is Nothing More than a Regressive Tax')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('The Founders Believe that HODL Signal\'s Aggressive Mining Rewards Rates will be an Example to the World How to Stay Ahead of Commodity Inflation')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('It Will Show a Big Difference Between HODL Signal & the Banks')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('The Banks are Ruled by Greed Because They Choose to Pay So Little in Interest')}</SmallText>
            </Flex>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('The Founders also Believe HODL Signal Will Be a Hedge & Safe-Haven to Preserve Wealth for Savers All Around the World, especially Those in Third World Countries Due to Low Gas Fees')}</MainText>
          </Flex>
        </StyledForm>

        <SmallTitle>{t('The Crypto Space has Issues:')}</SmallTitle>
        <StyledForm>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('HODL Signal Token Founders Remain Neutral and Impartial to All Other Crypto Projects')}</MainText>
          </Flex>
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('Another Founder Philosophy is that Cryptocurrencies have Lost Sight of their Original Intent and Purpose:')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('5 Pillar Principle of a Cryptocurrency Seems to Have Vanished')}</SmallText>
            </Flex>
            <Flex flexDirection="column" pl="50px">
              <Flex alignItems="start">
                <Symbol>{t('i.')}</Symbol>
                <SmallText>{t('New Cryptos no Longer Incorporate them in their Design')}</SmallText>
              </Flex>
              <Flex alignItems="start">
                <Symbol>{t('ii.')}</Symbol>
                <SmallText>{t('New Cryptos no Longer Incorporate them in their Design')}</SmallText>
              </Flex>
            </Flex>
            
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Too Many Cryptos Encourage 3rd Parties Between You and Your Cryptos – This was never part of the original design of Bitcoin')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('What the Founders Believe is Abhorrent are: Third Party Exchanges, Leverage Trading, DeFi Yield Farming, and Crypto Lending with a 3rd Party')}</SmallText>
            </Flex>
          </Flex>

          
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('HODL Signal is to be the Beacon on the Hill that Leads by Example Showing that Decentralization is Crypto!')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('HODL Signal is the opposite of Cryptos that offer, or are 3rd Party Risk Instruments')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('HODL Signal is the opposite of Cryptos that are Securities')}</SmallText>
            </Flex>
            <Flex flexDirection="column" pl="50px">              
              <Flex alignItems="start">
                <Symbol>{t('i.')}</Symbol>
                <SmallText>{t('Had an ICO, were Pre-Mined, Paid Founders Upfront from Venture Funding, etc.')}</SmallText>
              </Flex>
            </Flex>
          </Flex>
        </StyledForm>

        
        <SmallTitle>{t('The Crypto Space has Issues:')}</SmallTitle>
        <StyledForm>          
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('The Founders Remaining Anonymous Also Helps HODL Signal from Being Considered an Unregistered Security from the US SEC (Security & Exchange Commission)')}</MainText>
          </Flex>        
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('Taken as a whole, how can HODL Signal be considered a Security when 100% of the Tokens are given to the world?')}</MainText>
          </Flex>        
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('More Importantly HODL Signal is Just Code that Lives in the Cloud – Code is Law, and no Human Interaction is Required or Expected')}</MainText>
          </Flex>        
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('Users that interact with the Smart Contract (code) do so as willing Participants')}</MainText>
          </Flex>        
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('No Expectation of Others is Expected, the Only Expectation is the Smart Contract Code that Lives on Autopilot in the Cloud')}</MainText>
          </Flex>        
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('Furthermore, HODL Signal is a Smart Contract Mining Token where Time is Mined through HODLing')}</MainText>
          </Flex>        
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('Mining a Smart Contract is EXTREMELY Energy Efficient, HODL Mining Requires ZERO Energy')}</MainText>
          </Flex>
        </StyledForm>

        
        <SmallTitle>{t('Like a Spinning Top In Space:')}</SmallTitle>
        <StyledForm>          
          <Flex alignItems="first"  pt={['15px', null, null, '30px']}>
            <Symbol>{t('•')}</Symbol>
            <MainText>{t('Finally, HODL Signal is to Spin Like a Top in Space – Indefinitely & Without Human Interactions')}</MainText>
          </Flex>
          <Flex flexDirection="column" pl="50px">
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('They Prefer no DAO or Non-Profit or Organization/Association – HODL Signal is ONLY to be Code & Community Driven')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Organizations allow for the Human Frailties of Greed & Lust for Power to Destroy a Crypto from Within')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('They have Seen Far Too Many Promising Projects be Destroyed by Power Grabs and Tribalism')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Code is Law, Code is Neutral, Code Eliminates Human Weaknesses and allows for HODL Signal\'s Smart Contract to Function in Perpetuity')}</SmallText>
            </Flex>
            <Flex alignItems="start">
              <Symbol>{t('o')}</Symbol>
              <SmallText>{t('Furthermore, a DAO or Group or Association or Non-Profit can Create a Target for the SEC & Governments to Tag HODL Signal as an Unregistered Security')}</SmallText>
            </Flex>
          </Flex>
        </StyledForm>

      </div>
    </Page>
  )
}

export default Team
