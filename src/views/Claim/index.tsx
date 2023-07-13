import React from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const Claim = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const Title = styled(Heading)`
    font-size: 40px;
    margin: 54px 0;
    text-align: center;
    color: #ffc000;
    @media screen and (max-width: 1116px) {
      font-size: 32px;
    }
    @media screen and (max-width: 900px) {
      font-size: 28px;
    }
    @media screen and (max-width: 560px) {
      font-size: 24px;
    }
  `

  const Title1 = styled(Title)`
    margin: 20px 0;
  `

  const YellowSymbol = styled(Text)`
    margin-right: 12px;
    font-size: 27px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 1116px) {
      font-size: 20px;
    }
    @media screen and (max-width: 900px) {
      font-size: 17px;
    }
    @media screen and (max-width: 560px) {
      font-size: 14px;
    }
  `

  const WhiteSymbol = styled(YellowSymbol)`
    color: #ffffff;
  `

  const WhiteText = styled(Text)`
    font-size: 27px;
    text-align: left;
    color: #ffffff;
    @media screen and (max-width: 1116px) {
      font-size: 20px;
    }
    @media screen and (max-width: 900px) {
      font-size: 17px;
    }
    @media screen and (max-width: 560px) {
      font-size: 14px;
    }
  `

  const MarginText = styled(WhiteText)`
    margin: 20px auto;
  `

  const YellowText = styled(WhiteText)`
    margin: 50px auto;
    color: #ffc000;
  `

  const SmallText = styled(MarginText)`
    text-align: left;
    font-size: 22px;
    margin-left: 0;
    @media screen and (max-width: 1116px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
    @media screen and (max-width: 560px) {
      font-size: 11px;
    }
  `

  const IndentText1 = styled(SmallText)`
    margin-left: 60px;
    @media screen and (max-width: 1116px) {
       margin-left: 48px;
    }
    @media screen and (max-width: 900px) {
       margin-left: 32px;
    }
    @media screen and (max-width: 560px) {
       margin-left: 16px;
    }
  `

  const IndentText2 = styled(SmallText)`
    margin-left: 120px;
    @media screen and (max-width: 1116px) {
      margin-left: 96px;
    }
    @media screen and (max-width: 900px) {
      margin-left: 64px;
    }
    @media screen and (max-width: 560px) {
      margin-left: 32px;
    }
  `

  const IndentText3 = styled(SmallText)`
    margin-left: 180px;
    @media screen and (max-width: 1116px) {
      margin-left: 144px;
    }
    @media screen and (max-width: 900px) {
      margin-left: 96px;
    }
    @media screen and (max-width: 560px) {
      margin-left: 48px;
    }
  `

  const ListText = styled(Text)`
    text-indent: -20px;
    font-size: 25px;
    margin: 20px 0;
    text-align: left;
    color: #ffffff;
    @media screen and (max-width: 1116px) {
      font-size: 18px;
      text-indent: -16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
      text-indent: -13px;
    }
    @media screen and (max-width: 560px) {
      font-size: 12px;
      text-indent: -10px;
    }
  `

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <Flex flexDirection="column">
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <Title1>{t('HOW TO CLAIM FREE HODL SIGNAL TOKENS')}</Title1>
        <Title1>{t('Ticker (HODLS)')}</Title1>
        <Heading style={{ fontSize: '24px', margin: '20px auto 80px', textAlign: 'center' }} color="#ffffff">{t('You Only Need to Pay for the Polygon Gas Fee, about $0.015 USD in MATIC')}</Heading>
        <Title>{t('What To Know About Free Claiming HODL SIGNAL TOKENS')}</Title>
        <Flex flexDirection="column" pb="20px" pl={['16px', null, null, '50px']}>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('100+ Different Blockchains to be Selected for Claiming')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('2.0 Billion HODL SIGNAL TOKENS will be Free Claimed')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('You Do Not Give-Up, Trade, or Sell Your Coins/Tokens')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('You Only Need to Prove You Control the Coin/Token Address')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('No KYC/AML is Required!')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('There Will be a 10 Day Advance Notice of which Blockchain\'s have been selected and their Claiming Start Date')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('Polygon Will Be Available all 30 Days for Claiming')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('When the Claiming Phase for a Blockchain Starts All Users that Owned/Controlled an Address at the Time of the Blockchain\'s Snapshot is Eligible to Claim')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('Everyone will have 10 Days to Claim free HODL SIGNAL Tokens (HODLS)')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('Privacy Coins Cannot Be Claimed, so They will Have 20 Days to Transform into HODL SIGNAL TOKENS')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('Each Blockchain will have 16 Million HODL SIGNAL TOKENS for Users to Claim')}</WhiteText>
          </Flex>
          <Flex pl="40px">
            <WhiteSymbol>{t('o')}</WhiteSymbol>
            <WhiteText>{t('Group 1 = 8 Million HODLS')}</WhiteText>
          </Flex>
          <Flex pl="80px">
            <WhiteSymbol>{t('')}</WhiteSymbol>
            <WhiteText>{t('For Users that Claim with and without a Registered Affiliate Address')}</WhiteText>
          </Flex>
          <Flex pl="40px">
            <WhiteSymbol>{t('o')}</WhiteSymbol>
            <WhiteText>{t('Group 2 = 8 Million HODLS')}</WhiteText>
          </Flex>
          <Flex pl="80px">
            <WhiteSymbol>{t('')}</WhiteSymbol>
            <WhiteText>{t('ONLY for Users that Claim their Coins/Tokens with a Registered Affiliate Address')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('The Primary Purpose of the Claiming Event is to give numerous Crypto Holders of various Blockchains a chance to Receive Nearly Free HODL SIGNAL TOKENS')}</WhiteText>
          </Flex>
          <Flex pl="40px">
            <WhiteSymbol>{t('o')}</WhiteSymbol>
            <WhiteText>{t('Nearly Free Means, the Smart Contract Requires you to Spend Less than $0.02 USD in Polygon (MATIC) gas fees When Claiming')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('The Secondary Purpose is to tell the World about HODL SIGNAL TOKEN and how Everyone can Earn Interest without a 3rd Party, No Lockups, No Staking, and No Lending, and Does Not Charge Any Penalties')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('Lastly, It\'s Important to have a Fair and Even Distribution. It is also Important to Allow People to Become an Affiliate and Earn HODL SIGNAL TOKENS if they do not have Crypto to Claim or Transform')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('HODL SIGNAL TOKEN\'S Advantage is it is an Asset Backed Cryptocurrency, because 100% of the Transformations go into Liquidity Pools on two main DEXs')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('Claiming Means One Can Receive HODL SIGNAL TOKENS that have Real Value (Asset Backed)')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('Furthermore, HODL SIGNAL TOKENS are a Store-of-Value Cryptocurrency with a Utility to Pay a Fixed Mining Rewards Rate')}</WhiteText>
          </Flex>
          <Flex my="15px">
            <YellowSymbol>{t('♦')}</YellowSymbol>
            <WhiteText>{t('IMPORTANT: You Cannot “Self-Affiliate” (meaning your HODL SIGNAL TOKEN cannot be the Same as Your Affiliate Address when Claiming)')}</WhiteText>
          </Flex>
          <Title>{t('How Many Tokens Will I Receive from Claiming?')}</Title>
          <MarginText>{t('It is not an exact number that can be calculated because it depends upon how many other people claim their Tokens. You receive a share of the Unclaimed Tokens, and until day 10 of the Claiming Phase is over no one will know what percentage of a Blockchain has been Claimed.')}</MarginText>
          <MarginText>{t('It also depends on if you Claim using a Registered Affiliate or not. If you use a Registered Affiliate, you will receive HODL SIGNAL TOKENS from both Groups One and Two.')}</MarginText>
          <MarginText>{t('Finally, it depends upon how many Coins/Tokens you have for the Blockchain (percentage owned/controlled) and what percentage of the total Coins/Tokens that others own/control will also Claim.')}</MarginText>
          <MarginText>{t('Below are some Examples of a Fictitious Blockchain and Different Address Types showing who and who cannot claim HODL SIGNAL TOKENS.')}</MarginText>
          <MarginText>{t('Remember, Whales and Exchanges Cannot Claim!')}</MarginText>
          <MarginText>{t('Group 1 Example:')}</MarginText>
          <SmallText><i>{t('Fictional Blockchain Example:')}</i></SmallText>
          <Image src="/images/howtoclaim1.png" alt="how to claim" width={1136} height={694} />
          <YellowText>{t('ANOTHER EXAMPLE:')}</YellowText>
          <SmallText>{t('User "A" Claimed 10,000 of their XYZ Coins (in one address) which was 18% of the total Coins Claimed')}</SmallText>
          <SmallText><i style={{ marginLeft: '80px' }}>{t('User "A" Claimed 10,000 of their XYZ Coins (in one address) which was 18% of the total Coins Claimed')}</i></SmallText>
          <SmallText>{t('User "B" Claimed 2,000 of their XYZ Coins (in one address) which was 4% of the total Coins Claimed')}</SmallText>
          <SmallText><i style={{ marginLeft: '80px' }}>{t('User B will be Awarded 4% of the 8 Million HODL SIGNAL TOKENS in Group 1 on Distribution Day')}</i></SmallText>
          <SmallText>{t('User "Z" Claimed 122 of their XYZ Coins (in one address) which was 0.02% of the total Coins Claimed')}</SmallText>
          <SmallText><i style={{ marginLeft: '80px' }}>{t('User Z will be Awarded 0.02% of the 8 Million HODL SIGNAL TOKENS in Group 1 on Distribution Day')}</i></SmallText>
          <SmallText><i>{t('NOTE: The Total of Users in Group 1 = 100% of the Users that Claimed with and without a Registered Affiliate')}</i></SmallText>
          <YellowText>{t('IMPORTANT: All Users with a Valid Blockchain Claim Will Receive HODL SIGNAL TOKENS On Distribution Day')}</YellowText>
          <SmallText>{t('Group 2 "Bonus Tokens" Example:')}</SmallText>
          <SmallText>{t('(IMPORTANT: Only Users with Valid Affiliate Addresses Receive Bonus Tokens)')}</SmallText>
          <Image src="/images/howtoclaim2.png" alt="how to claim" width={1152} height={500} />
          <YellowText>{t('ANOTHER EXAMPLE:')}</YellowText>
          <SmallText>{t('User "A"')}</SmallText>
          <Flex flexDirection="column" mb="60px" ml={['16px', null, null, '60px']}>
            <SmallText>{t('Claimed 10,000 of their XYZ Coins (in one address) was 27% of the total Coins Claimed in Group 2')}</SmallText>
            <SmallText>{t('27% of 8 Million HODL SIGNAL TOKENS are Divided 70% to User and 30% to Their Affiliate')}</SmallText>
            <SmallText>{t('User A and Their Affiliate Will Receive HODL SIGNAL TOKENS from Group 2 on Distribution Day')}</SmallText>
          </Flex>
          <SmallText>{t('User "J"')}</SmallText>
          <Flex flexDirection="column" mb="60px" ml={['16px', null, null, '60px']}>
            <SmallText>{t('Claimed 5,500 of their XYZ Coins (in one address) which was 4% of the total Coins Claimed in Group 2')}</SmallText>
            <SmallText>{t('4% of 8 Million HODL SIGNAL TOKENS are Divided 70% to User and 30% to Their Affiliate')}</SmallText>
            <SmallText>{t('User J and Their Affiliate Will Receive HODL SIGNAL TOKENS from Group 2 on Distribution Day')}</SmallText>
          </Flex>
          <SmallText>{t('User "M"')}</SmallText>
          <Flex flexDirection="column" mb="60px" ml={['16px', null, null, '60px']}>
            <SmallText>{t('Claimed 713 of their XYZ Coins (in one address) was 0.58% of the total Coins Claimed in Group 2')}</SmallText>
            <SmallText>{t('0.58% of 8 Million HODL SIGNAL TOKENS are Divided 70% to User and 30% to Their Affiliate')}</SmallText>
            <SmallText>{t('User M and Their Affiliate Will Receive HODL SIGNAL TOKENS from Group 2 on Distribution Day')}</SmallText>
          </Flex>
        </Flex>
        <Title>{t('How Much Does It Cost to Claim HODL SIGNAL TOKENS?')}</Title>
        <SmallText>{t('It is nearly Free! HODL SIGNAL TOKEN is on the POLYGON (MATIC) Network. Its gas fees are EXTREMELY cheap. At the time of writing this POLYGON priced at $2.16 and the cost of Claiming was less than $0.02 USD. However, you must do a “Digital Signature” on the claiming Blockchain for each Address(s) you control. Gas/Transaction Fees on other Blockchains vary. Please do your own research as to the cost of a Digital Signature on your Claiming Blockchain.')}</SmallText>
        <Title>{t('How Do I Free Claim my HODL SIGNAL TOKENS?')}</Title>
        <SmallText>{t('1. A Metamask Wallet')}</SmallText>
        <IndentText1>{t('a. Complete Digital Signature in Blockchain the Supports METAMASK Wallet')}</IndentText1>
        <IndentText1>{t('b. Interaction with SC on Polygon (Fields)')}</IndentText1>
        <IndentText2>{t('i. Blockchain Name (example DOGE)')}</IndentText2>
        <IndentText2>{t('ii.	Owner\'s Address on that Blockchain')}</IndentText2>
        <IndentText2>{t('iii. Quantity of (DOGE) Coins User/Owner is Claiming to Control')}</IndentText2>
        <IndentText2>{t('iv.	HODL SIGNAL TOKEN\'S Receiving Address')}</IndentText2>
        <IndentText2>{t('v. Registered Affiliate Address')}</IndentText2>
        <IndentText3>{t('1. (In order to Participate in Group 2 and receive Bonus Tokens)')}</IndentText3>
        <IndentText3>{t('2. How Digital Signature will be Done on a POW Coin and Tie to a SC on Polygon')}</IndentText3>
        <IndentText1>{t('a. Interaction with SC on Polygon (Fields)')}</IndentText1>
        <IndentText2>{t('i. Blockchain Name (example DOGE)')}</IndentText2>
        <IndentText2>{t('ii.	Owner\'s Address on that Blockchain')}</IndentText2>
        <IndentText2>{t('iii. Quantity of (DOGE) Coins User/Owner is Claiming to Control')}</IndentText2>
        <IndentText2>{t('iv.	HODL SIGNAL TOKEN\'S Receiving Address')}</IndentText2>
        <IndentText2>{t('v. Registered Affiliate Address')}</IndentText2>
        <IndentText3>{t('1. (In order to Participate in Group 2 and receive Bonus Tokens)')}</IndentText3>
        <Title>{t('What Is a Valid Claim "Blockchain Claim" ?')}</Title>
        <Heading style={{ fontSize: '27px', margin: '20px auto', textAlign: 'left' }} color="#ffffff">{t('A Valid Blockchain Claim is:')}</Heading>
        <Flex flexDirection="column" pl={['16px', null, null, '50px']} alignItems="start">
          <ListText>{t('1. You Can Only Claim and Receive HODL SIGNAL TOKENS from the Blockchains that have been Selected')}</ListText>
          <ListText>{t('2. You must control/own the Address that you are Claiming in the Blockchain that has been selected')}</ListText>
          <ListText>{t('3.	You must be able to prove ownership/control by completing a Digital Signature')}</ListText>
          <ListText>{t('4.	The Address Coin/Token Quantity that you are Claiming for the Blockchain must match the Address Total at the time of the Snapshot (snapshot is the Blockchain\'s Holders at a specific date and time)')}</ListText>
          <ListText>{t('5.	You Must Complete your Claim within the 10 Days that are announced for your Blockchain.')}</ListText>
          <ListText>{t('6.	You Must Claim Each Address Separately')}</ListText>
          <ListText>{t('7.	You Must Inter the proper information into the HODL SIGNAL TOKEN Claiming Smart Contract')}</ListText>
          <Flex flexDirection="column" pl={['16px', null, null, '50px']} alignItems="start">
            <ListText>{t('a.	Blockchain Name (example DOGE)')}</ListText>
            <ListText>{t('b.	Owner\'s Address on that Blockchain')}</ListText>
            <ListText>{t('c.	Quantity of (DOGE) Coins User/Owner is Claiming to Control')}</ListText>
            <ListText>{t('d.	HODL SIGNAL TOKEN\'S Receiving Address')}</ListText>
            <ListText>{t('e.	Registered Affiliate Address')}</ListText>
            <Flex flexDirection="column" pl={['16px', null, null, '50px']} alignItems="start">
              <ListText>{t('i.	(In order to Participate in Group 2 and receive Bonus Tokens)')}</ListText>
            </Flex>
          </Flex>
          <ListText>{t('8.	All Valid Blockchain Claims will be Included in Group 1')}</ListText>
          <ListText>{t('9.	Only Valid Blockchain Claims that have a Registered Affiliate will be Included in Group 2')}</ListText>
          <ListText>{t('10. Users that have Submitted a Registered Affiliate Address & Have Claimed Correctly will Receive HODL SIGNAL TOKEN from both Groups 1 & 2')}</ListText>
          <ListText>{t('11. All Valid Blockchain Claims will be Awarded for Everyone to See on this Website and By Running a Query in the Explorer Under the Proper Smart Contract ID')}</ListText>
          <ListText>{t('12. All Valid Blockchain Claims Will Receive Their Share of HODL SIGNAL TOKENS on Distribution Day')}</ListText>
          <ListText>{t('13. Distribution Day is Approximately 5 Days after the Claiming & Transformation Epoch is Over')}</ListText>
          <Title>{t('How Much Do User and Affiliates Get in Total?')}</Title>
          <div style={{ padding: '30px' }}>
            <div style={{ padding: '3px', borderRadius: '10px', background: '#ffc000' }}>
              <Image src="/images/howtoclaim3.png" width={1000} height={1250} />
            </div>
          </div>
        </Flex>
      </Flex>
    </Page>
  )
}

export default Claim
