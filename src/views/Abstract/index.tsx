import React from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const Abstract = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const Title = styled(Text)`
    font-size: 40px;
    margin: 80px 0 30px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  `

  const CommonText = styled(Text)`
    font-size: 26px;
    margin: 20px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  `

  const ListText = styled(Text)`
    font-size: 24px;
    lineHeight: 36px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `

  const Symbol = styled(Text)`
    font-size: 24px;
    margin-right: 18px;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        {/* <Image src="/images/logo-1.png" margin="50px auto 0" alt="logo" width={360} height={240} /> */}
        <Title>{t('ABSTRACT:')}</Title>
        <CommonText>{t('HODL SIGNAL Token or Ticker “HODLS” is an Asset Backed, Mineable Token, That Pays a Fixed Reward, Three Times the Annual Core Commodity Inflation Rate.')}</CommonText>
        <CommonText>{t('It requires NO THIRD PARTY and Does Not Require Time Lockups, Lending, KYC, and no Leverage Trading. No Lending means no Yield Farming either.')}</CommonText>
        <CommonText>{t('HODL Signal Token is a Blockchain token on the POLYGON (MATIC) Blockchain that pays the user a mining reward for not using or spending their tokens while they remain in the User\'s possession at all times. Essentially the User is paid a reward to do nothing other than to signal their intent.')}</CommonText>
        <Flex flexDirection="column" padding="30px 0" pl={['20px', null, null, '50px']}>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('The User never gives up control or their private keys to earn a reward.')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('The User never lends out their HODL Signal Tokens to earn a reward.')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('The User does not borrow against their HODL Signal Tokens to earn a reward.')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('The User never locks-up their tokens to earn a reward.')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('The User is NOT subject to fees or penalties.')}</ListText>
          </Flex>
        </Flex>
        <CommonText>{t('The User only ')}<span><strong>{t('signals their intention ')}</strong></span>{t('to a smart contract that they plan to not spend their HODL Signal Tokens that are in their wallet and under their control.')}</CommonText>
        <CommonText>{t('When the Users wants to collect a reward payment or “reward” they simply signal the smart contract they wish to end their “HODL” or “Parked Tokens” in their wallet. At that point the smart contract verifies they didn\'t spend their tokens between signals, and pays them a fixed reward for the days they didn\'t use their tokens. It isn\'t staking because there is no locking up of HODLS and it piggybacks or takes advantage of the POLYGON Network for its consensus mechanism. Furthermore, their HODL Signal Tokens are not locked up in a smart contract, and the User never gives up control of their HODLS to a 3rd party. The User\'s HODLS remain in an address that the User always maintains control of and possession of during the HODLing process. The Wallet that is Supported and allows for this Process to happen is the METAMASK WALLET.')}</CommonText>
        <CommonText>{t('When mining rewards payments are earned, new tokens are minted to pay mining rewards. There is no other method of generating new tokens on the network, other than to earn them from not using them.')}</CommonText>
        <CommonText>{t('The concept of HODL Signal Token is to: 1. Encourage people to become savers again 2. Have extremely low gas fees so that nearly all the world\'s population can afford to use it. 3. Pay mining rewards rates that exceed the rate of core commodity inflation inflicted on humanity by Central Banking and Governments\' endless currency printing.')}</CommonText>
        <CommonText>{t('HODL Signal Token by design is a Store-of-Value token. As a Store-of-Value token, it will obtain price stability post distribution, then token value appreciation will be accomplished as most Users will use its utility (HODL and earn mining rewards). This will choke supply of the token on the open market thus driving up its price. So long as growth of New Users AND Majority of Users HODL, the open market price should appreciate.')}</CommonText>
        <CommonText>{t('HODL Signal Token will have a 100% fair distribution where holders of other cryptocurrencies can claim or transform their Crypto for HODL Signal Tokens. 90% of the tokens will be distributed and the remaining 10% will be put in Liquidity Pools on 2 Major DEX that support the POLYGON Network. The Founders/Creators/Developers will also have to Claim or Transform their Crypto to obtain HODLS. More importantly 100% the Cryptocurrencies that are converted/transformed into HODL Signal Tokens will be strategically put into liquidity pools on a DEX so that the value of a single HODL Signal Token cannot go to zero. There are no back door bonuses or origin addresses that are paid to the Founders/Creators/Developers either pre or post distribution. 100% of the distribution will be open and reviewable on the smart contract/blockchain for everyone to see – showing transparency of its initial distribution.')}</CommonText>
        <CommonText>{t('The ultimately strategy of HODL Signal Token upon reaching price stability is to allow for legacy banking & credit systems (debt) to fund HODL Signal Token\'s growth and the growth of Crypto. This price stability and general price appreciation trend will provide a solid Cryptocurrency that earns enough in monthly mining rewards to pay 1. The off-ramp process of Crypto to Fiat 2. Rewards earned will exceed the fiat debit obligations (monthly loan payments) and 3. Use the actual legacy banking debt systems & government fiats to subvert themselves.')}</CommonText>
        <Title>{t('THIS DOCUMENT IS NOT A PROSPECTUS:')}</Title>
        <CommonText>{t('This document does not constitute nor imply a prospectus of any sort. No individual, group, governmental agency, body, or organization should construe this as a solicitation for investment. Accordingly, this document or HODL Signal\'s Whitepaper does not pertain in any way to an offering of securities in any jurisdiction worldwide whatsoever. Rather, this Whitepaper constitutes a technical description of the functionality of HODL Signal Token, also referred to as HODLS. No words or concept descriptions contained in this document herein should be understood, presumed, or thought to be implied as financial advice or should be construed to being suggested that any individual or entity should invest in HODL Signal Token, "HODLS".')}</CommonText>
        <Title>{t('LEGAL INVESTMENT WARNING:')}</Title>
        <CommonText>{t('Crypto assets are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. This advertisement does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat it as such. You are advised to obtain independent financial advice and conduct any necessary research or due diligence before making any investment decisions or accessing or using HODL SIGNAL, (HODLS) on the Polygon (MATIC) network.')}</CommonText>
        <Title>{t('THIS DOCUMENT IS NOT A FINAL TECHNICAL PAPER:')}</Title>
        <CommonText>{t('This document does not constitute nor imply a final technical or final interpretation of the token\'s specifications. The information provided here is a simple outline and provides general ideas of its purpose and use-cases.')}</CommonText>
        <Title>{t('Privacy Policy & Cookie Policy')}</Title>
        <CommonText>{t('HODL Signal Token recognizes and believes in Individual Financial Sovereignty, meaning that personal financial transactions should always remain private, unless the individual/user wishes to make them public.')}</CommonText>
        <CommonText>{t('Therefore, HODL Signal Token does not store, mine, save, or collect user data, login, passwords, private keys, pass phrases, etc. We store nothing as they relate to the user, user\'s connection, I.P. address, KYC information, nor personal data, nor information regarding the user(s). Logins, Passphrases, Passwords, Private keys, are stored on the Blockchain much like other privacy focused Cryptocurrencies. Connections for METAMASK use is the only requirement, but not necessary. Users can also interact with the Smart Contract through the Explorer, Polygonscan.com')}</CommonText>
        <CommonText>{t('HODL Signal Token website(s) do not store session cookies, persistent cookies or third-party cookies.  If cookies are stored in error, you may remove the cookies by following the instructions of your device preferences. HODL Signal Token strives to ensure that the website functions without the need to store cookies and that all features will work and operate properly without the storage of cookies. Use of cookies are not intentional.')}</CommonText>
      </div>
    </Page>
  )
}

export default Abstract
