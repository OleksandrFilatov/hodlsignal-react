import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Flex, Text, Image, Heading } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const FAQ = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const [isShow1, setIsShow1] = useState(false);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);
  const [isShow4, setIsShow4] = useState(false);
  const [isShow5, setIsShow5] = useState(false);
  const [isShow6, setIsShow6] = useState(false);
  const [isShow7, setIsShow7] = useState(false);
  const [isShow8, setIsShow8] = useState(false);
  const [isShow9, setIsShow9] = useState(false);
  const [isShow10, setIsShow10] = useState(false);
  const [isShow11, setIsShow11] = useState(false);
  const [isShow12, setIsShow12] = useState(false);
  const [isShow13, setIsShow13] = useState(false);
  const [isShow14, setIsShow14] = useState(false);
  const [isShow15, setIsShow15] = useState(false);
  const [isShow16, setIsShow16] = useState(false);
  const [isShow17, setIsShow17] = useState(false);
  const [isShow18, setIsShow18] = useState(false);
  const [isShow19, setIsShow19] = useState(false);
  const [isShow20, setIsShow20] = useState(false);
  const [isShow21, setIsShow21] = useState(false);
  const [isShow22, setIsShow22] = useState(false);
  const [isShow23, setIsShow23] = useState(false);
  const [isShow24, setIsShow24] = useState(false);
  const [isShow25, setIsShow25] = useState(false);
  const [isShow26, setIsShow26] = useState(false);
  const [isShow27, setIsShow27] = useState(false);
  const [isShow28, setIsShow28] = useState(false);
  const [isShow29, setIsShow29] = useState(false);
  const [isShow30, setIsShow30] = useState(false);
  const [isShow31, setIsShow31] = useState(false);
  const [isShow32, setIsShow32] = useState(false);
  const [isShow33, setIsShow33] = useState(false);
  const [isShow34, setIsShow34] = useState(false);
  const [isShow35, setIsShow35] = useState(false);
  const [isShow36, setIsShow36] = useState(false);
  const [isShow37, setIsShow37] = useState(false);
  const [isShow38, setIsShow38] = useState(false);
  const [isShow39, setIsShow39] = useState(false);
  const [isShow40, setIsShow40] = useState(false);
  const [isShow41, setIsShow41] = useState(false);
  const [isShow42, setIsShow42] = useState(false);
  const [isShow43, setIsShow43] = useState(false);
  const [isShow44, setIsShow44] = useState(false);
  const [isShow45, setIsShow45] = useState(false);
  const [isShow46, setIsShow46] = useState(false);
  const [isShow47, setIsShow47] = useState(false);
  const [isShow48, setIsShow48] = useState(false);
  const [isShow49, setIsShow49] = useState(false);
  const [isShow50, setIsShow50] = useState(false);
  const [isShow51, setIsShow51] = useState(false);
  const [isShow52, setIsShow52] = useState(false);
  const [isShow53, setIsShow53] = useState(false);
  const [isShow54, setIsShow54] = useState(false);
  const [isShow55, setIsShow55] = useState(false);
  const [isShow56, setIsShow56] = useState(false);
  const [isShow57, setIsShow57] = useState(false);
  const [isShow58, setIsShow58] = useState(false);
  const [isShow59, setIsShow59] = useState(false);
  const [isShow60, setIsShow60] = useState(false);
  const [isShow61, setIsShow61] = useState(false);
  const [isShow62, setIsShow62] = useState(false);
  const [isShow63, setIsShow63] = useState(false);
  const [isShow64, setIsShow64] = useState(false);
  const [isShow65, setIsShow65] = useState(false);
  const [isShow66, setIsShow66] = useState(false);
  const [isShow67, setIsShow67] = useState(false);
  const [isShow68, setIsShow68] = useState(false);
  const [isShow69, setIsShow69] = useState(false);
  const [isShow70, setIsShow70] = useState(false);
  const [isShow71, setIsShow71] = useState(false);
  const [isShow72, setIsShow72] = useState(false);
  const [isShow73, setIsShow73] = useState(false);
  const [isShow74, setIsShow74] = useState(false);
  const [isShow75, setIsShow75] = useState(false);
  const [isShow76, setIsShow76] = useState(false);
  const [isShow77, setIsShow77] = useState(false);
  const [isShow78, setIsShow78] = useState(false);
  const [isShow79, setIsShow79] = useState(false);
  const [isShow80, setIsShow80] = useState(false);
  const [isShow81, setIsShow81] = useState(false);
  const [isShow82, setIsShow82] = useState(false);
  const [isShow83, setIsShow83] = useState(false);
  const [isShow84, setIsShow84] = useState(false);
  const [isShow85, setIsShow85] = useState(false);
  const [isShow86, setIsShow86] = useState(false);
  const [isShow87, setIsShow87] = useState(false);
  const [isShow88, setIsShow88] = useState(false);
  const [isShow89, setIsShow89] = useState(false);
  const [isShow90, setIsShow90] = useState(false);
  const [isShow91, setIsShow91] = useState(false);
  const [isShow92, setIsShow92] = useState(false);
  const [isShow93, setIsShow93] = useState(false);
  const [isShow94, setIsShow94] = useState(false);
  const [isShow95, setIsShow95] = useState(false);
  const [isShow96, setIsShow96] = useState(false);
  const [isShow97, setIsShow97] = useState(false);
  const [isShow98, setIsShow98] = useState(false);
  const [isShow99, setIsShow99] = useState(false);
  const [isShow100, setIsShow100] = useState(false);
  const [isShow101, setIsShow101] = useState(false);
  const [isShow102, setIsShow102] = useState(false);
  const [isShow103, setIsShow103] = useState(false);

  const toggle1 = () => setIsShow1(!isShow1);
  const toggle2 = () => setIsShow2(!isShow2);
  const toggle3 = () => setIsShow3(!isShow3);
  const toggle4 = () => setIsShow4(!isShow4);
  const toggle5 = () => setIsShow5(!isShow5);
  const toggle6 = () => setIsShow6(!isShow6);
  const toggle7 = () => setIsShow7(!isShow7);
  const toggle8 = () => setIsShow8(!isShow8);
  const toggle9 = () => setIsShow9(!isShow9);
  const toggle10 = () => setIsShow10(!isShow10);
  const toggle11 = () => setIsShow11(!isShow11);
  const toggle12 = () => setIsShow12(!isShow12);
  const toggle13 = () => setIsShow13(!isShow13);
  const toggle14 = () => setIsShow14(!isShow14);
  const toggle15 = () => setIsShow15(!isShow15);
  const toggle16 = () => setIsShow16(!isShow16);
  const toggle17 = () => setIsShow17(!isShow17);
  const toggle18 = () => setIsShow18(!isShow18);
  const toggle19 = () => setIsShow19(!isShow19);
  const toggle20 = () => setIsShow20(!isShow20);
  const toggle21 = () => setIsShow21(!isShow21);
  const toggle22 = () => setIsShow22(!isShow22);
  const toggle23 = () => setIsShow23(!isShow23);
  const toggle24 = () => setIsShow24(!isShow24);
  const toggle25 = () => setIsShow25(!isShow25);
  const toggle26 = () => setIsShow26(!isShow26);
  const toggle27 = () => setIsShow27(!isShow27);
  const toggle28 = () => setIsShow28(!isShow28);
  const toggle29 = () => setIsShow29(!isShow29);
  const toggle30 = () => setIsShow30(!isShow30);
  const toggle31 = () => setIsShow31(!isShow31);
  const toggle32 = () => setIsShow32(!isShow32);
  const toggle33 = () => setIsShow33(!isShow33);
  const toggle34 = () => setIsShow34(!isShow34);
  const toggle35 = () => setIsShow35(!isShow35);
  const toggle36 = () => setIsShow36(!isShow36);
  const toggle37 = () => setIsShow37(!isShow37);
  const toggle38 = () => setIsShow38(!isShow38);
  const toggle39 = () => setIsShow39(!isShow39);
  const toggle40 = () => setIsShow40(!isShow40);
  const toggle41 = () => setIsShow41(!isShow41);
  const toggle42 = () => setIsShow42(!isShow42);
  const toggle43 = () => setIsShow43(!isShow43);
  const toggle44 = () => setIsShow44(!isShow44);
  const toggle45 = () => setIsShow45(!isShow45);
  const toggle46 = () => setIsShow46(!isShow46);
  const toggle47 = () => setIsShow47(!isShow47);
  const toggle48 = () => setIsShow48(!isShow48);
  const toggle49 = () => setIsShow49(!isShow49);
  const toggle50 = () => setIsShow50(!isShow50);
  const toggle51 = () => setIsShow51(!isShow51);
  const toggle52 = () => setIsShow52(!isShow52);
  const toggle53 = () => setIsShow53(!isShow53);
  const toggle54 = () => setIsShow54(!isShow54);
  const toggle55 = () => setIsShow55(!isShow55);
  const toggle56 = () => setIsShow56(!isShow56);
  const toggle57 = () => setIsShow57(!isShow57);
  const toggle58 = () => setIsShow58(!isShow58);
  const toggle59 = () => setIsShow59(!isShow59);
  const toggle60 = () => setIsShow60(!isShow60);
  const toggle61 = () => setIsShow61(!isShow61);
  const toggle62 = () => setIsShow62(!isShow62);
  const toggle63 = () => setIsShow63(!isShow63);
  const toggle64 = () => setIsShow64(!isShow64);
  const toggle65 = () => setIsShow65(!isShow65);
  const toggle66 = () => setIsShow66(!isShow66);
  const toggle67 = () => setIsShow67(!isShow67);
  const toggle68 = () => setIsShow68(!isShow68);
  const toggle69 = () => setIsShow69(!isShow69);
  const toggle70 = () => setIsShow70(!isShow70);
  const toggle71 = () => setIsShow71(!isShow71);
  const toggle72 = () => setIsShow72(!isShow72);
  const toggle73 = () => setIsShow73(!isShow73);
  const toggle74 = () => setIsShow74(!isShow74);
  const toggle75 = () => setIsShow75(!isShow75);
  const toggle76 = () => setIsShow76(!isShow76);
  const toggle77 = () => setIsShow77(!isShow77);
  const toggle78 = () => setIsShow78(!isShow78);
  const toggle79 = () => setIsShow79(!isShow79);
  const toggle80 = () => setIsShow80(!isShow80);
  const toggle81 = () => setIsShow81(!isShow81);
  const toggle82 = () => setIsShow82(!isShow82);
  const toggle83 = () => setIsShow83(!isShow83);
  const toggle84 = () => setIsShow84(!isShow84);
  const toggle85 = () => setIsShow85(!isShow85);
  const toggle86 = () => setIsShow86(!isShow86);
  const toggle87 = () => setIsShow87(!isShow87);
  const toggle88 = () => setIsShow88(!isShow88);
  const toggle89 = () => setIsShow89(!isShow89);
  const toggle90 = () => setIsShow90(!isShow90);
  const toggle91 = () => setIsShow91(!isShow91);
  const toggle92 = () => setIsShow92(!isShow92);
  const toggle93 = () => setIsShow93(!isShow93);
  const toggle94 = () => setIsShow94(!isShow94);
  const toggle95 = () => setIsShow95(!isShow95);
  const toggle96 = () => setIsShow96(!isShow96);
  const toggle97 = () => setIsShow97(!isShow97);
  const toggle98 = () => setIsShow98(!isShow98);
  const toggle99 = () => setIsShow99(!isShow99);
  const toggle100 = () => setIsShow100(!isShow100);
  const toggle101 = () => setIsShow101(!isShow101);
  const toggle102 = () => setIsShow102(!isShow102);
  const toggle103 = () => setIsShow103(!isShow103);

  const FAQTitle = styled(Text)`
    margin: 10px 0;
    cursor: pointer;
  `

  const FAQContent = styled(Text)`
    margin: 10px 0;
    color: #ffc000;
  `

  const Separator = styled.hr`
    border: 1px solid #000000;
    margin: 24px 0;
  `

  const FAQPrefix = styled(FAQContent)`
    margin-right: 12px;
  `

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <Flex alignItems='center' justifyContent='center' marginTop='20vh'>
          <Heading scale='xxl'>Coming Soon!</Heading>
        </Flex>
        {/* <Text style={{ fontSize: '64px', margin: '50px 0', textAlign: 'center' }} color="#ffc000">{t('FAQ')}</Text>
        <FAQTitle onClick={toggle1}>{t('What does the term HODL mean:')}</FAQTitle>
        {
          isShow1 && <FAQContent>{t('"HODL" is an industry term in the Crypto Space that means "HOLD" or "Hold On for Dear Life” It started out as a typo in December 2013 in a post on the Bitcoin Forum. Someone had a little too much to drink when they made that famous typo. You can also think of it as: "Hold it, Not Sell It or Move It"')}</FAQContent>
        }
        <FAQTitle onClick={toggle2}>{t('What is HODL Signal (HODLS):')}</FAQTitle>
        {
          isShow2 && <div>
            <FAQContent>{t('HODL Signal Token is the first Asset Backed Savings Account on a Blockchain that Pays a Fixed mining rewards Rate. HODL Signal Token does this without lockups, lending, or 3rd Parties.')}</FAQContent>
            <FAQContent>{t('Using your Metamask Wallet you simply signal to the Smart Contract your intention to HODL (hold your tokens and not spend them). You signal again when you want to collect an mining rewards reward. You can HODL for 1 to 365 days.')}</FAQContent>
            <FAQContent>{t('The mining rewards rate is a fixed mining rewards rate. One day pays 0.28767123% mining rewards. Day 365 pays 105.0% mining rewards. With the Affiliate Program you can earn more. Using an Affiliate Address Day 365 pays 115.5%. ')}</FAQContent>
            <FAQContent>{t('When you complete a valid HODL; you earn an mining rewards reward. A valid HODL is simply no Send Transactions between your Start & Stop Signals.')}</FAQContent>
            <FAQContent>{t('The best part is your HODL Signal Tokens never leave your wallet!')}</FAQContent>
            <FAQContent>{t('They are never locked up or handed over to a 3rd party to earn mining rewards. No 3rd Party is involved, and no 3rd Party takes control of your tokens. You hold your tokens, in your wallet, with your private keys, at all times. You just simply signal to “Start” HODLing and you signal again when you want to “Stop” HODLing.')}</FAQContent>
            <FAQContent>{t('HODL Signal Token =')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('No 3rd Parties')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('No Lockups or Penalties')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('No Lending')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('No DeFi Yield Farmings')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('No Leverage Trading')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Only Signal from Your Metamask Wallet')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('APY = 105.0% or with Affiliate Address 115.5% APY')}</FAQContent>
              </Flex>
            </div>
            <FAQContent>{t('You can earn mining rewards after just one day. The maximum days you can HODL is 365 days.')}</FAQContent>
            <FAQContent>{t('The Smart Contract Mining Rewards Rate Formula:')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <FAQContent>{t('(Token Quantity x 105.0% x (Days/365))')}</FAQContent>
            </div>
            <FAQContent>{t('The Affiliate Smart Contract Mining Rewards Rate Formula:')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <FAQContent>{t('(Token Quantity x 105.0% x (Days/365))')}</FAQContent>
            </div>
            <FAQContent>{t('HODL Signal\'s Smart Contract resides on the Polygon (MATIC) Blockchain. This makes mining rewards payments nearly instant and gas fees are extremely cheap. At the time of writing this FAQ, Polygon was trading at $1.69 USD. The gas fees to signal both a Start or a Stop HODL cost only $0.0055 USD per signal. Polygon is fast and has extremely low gas fees.')}</FAQContent>
            <FAQContent>{t('With extremely low gas fees means that even 3rd World Countries can participate!')}</FAQContent>
            <FAQContent>{t('Finally, HODL Signal Token meets the “5 Crypto Pillar Standard” defined by Andreas Antonopoulos. ')}</FAQContent>
            <FAQContent>{t('HODL Signal Token is Open, Borderless, Neutral, Censorship Resistant, and Public.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle3}>{t('What is HODL Signal\'s Ticker:')}</FAQTitle>
        {
          isShow3 && <FAQContent>{t('Ticker = HODLS')}</FAQContent>
        }
        <FAQTitle onClick={toggle4}>{t('What Problems does HODL Signal Solve:')}</FAQTitle>
        {
          isShow4 && <div>
            <FAQContent><strong>{t('Problem Summary: ')}</strong>{t(' Banks, Governments, Central Banks do not encourage people to become Savers. Money printing leads to inflation and it has taken root impacting all of us. Bank savings accounts do not come close to covering the loss of fiat valuations due to inflation. The Crypto Space has gone off track and lead too many investors into 3rd party investment vehicles (Yield Farming, Crypto Asset Lending & 3rd Party Exchanges). This goes against one of the founding principles of Crypto – "Limit 3rd Party Risk." Finally, many Crypto Projects have high transaction gas/fees that cut-out a huge market. Nearly one-third of the world\'s population are unbanked and could never transact in Crypto due to high transaction costs.')}</FAQContent>
            <div>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('There is No Internet Based Savings Account on a Blockchain that has Low Transaction Fees and Pays Mining Rewards Rates that are Higher Than the Rate of Inflation')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('There is No Internet Based Savings Account on a Blockchain that is Asset Backed')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('There is No Blockchain in this World that is a Savings Account Without: Becoming a 3rd Party Between You & Your Crypto, or Locks-up Your Crypto, or Charges Penalties, or is an actual Bank')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('A Blockchain Based Savings Account Does Not Exist with Low Transaction Gas/Fees that Can Service not just the Rich, but also the Poor')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('No Internet Based Savings Account on a Blockchain Exists that Encourages Savers and Meets the Definition of a Cryptocurrency (5 Pillars):')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('1.')}</FAQPrefix>
                  <FAQContent>{t('OPEN – To Anyone without Permission (No KYC)')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('2.')}</FAQPrefix>
                  <FAQContent>{t('BORDERLESS – Purely International/Global')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('3.')}</FAQPrefix>
                  <FAQContent>{t('NEUTRAL – Can Be Transferred to Anyone Without a 3rd Party & Without Prejudice')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('4.')}</FAQPrefix>
                  <FAQContent>{t('CENSORSHIP RESISTANT – No Authority Can Stop the Transfer of Funds from One Account to Another (peer-to-peer)')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('5.')}</FAQPrefix>
                  <FAQContent>{t('PUBLIC – Everything One Does on the Blockchain Can be Verified and is Visible so that it Becomes Difficult to Cheat and Anyone Can Become a Social Watchdog of the Network')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('See Whitepaper for More Details')}</FAQContent>
              </Flex>
            </div>
          </div>
        }
        <FAQTitle onClick={toggle5}>{t('What are HODL Signal\'s Solutions:')}</FAQTitle>
        {
          isShow5 && <div>
            <Flex alignItems="start">
              <FAQPrefix>{t('1.')}</FAQPrefix>
              <FAQContent>{t('HODL Signal is the First Asset Backed Savings Account on a Blockchain that Pays a Fixed Mining Rewards Rate')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('2.')}</FAQPrefix>
              <FAQContent>{t('It is a Cryptocurrency that also Functions Like an Internet Savings Account')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('3.')}</FAQPrefix>
              <FAQContent>{t('HODL Signal pays a significantly higher mining rewards rate than banks')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('4.')}</FAQPrefix>
              <FAQContent>{t('HODL Signal also pays more in mining rewards than most 3rd party Crypto lending platforms, i.e., Celsius')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('5.')}</FAQPrefix>
              <FAQContent>{t('You Control your Private Keys at all times')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('6.')}</FAQPrefix>
              <FAQContent>{t('No 3rd party risk when HODLing – because you HODL from your Metamask Wallet')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('7.')}</FAQPrefix>
              <FAQContent>{t('No 3rd party risk like Yield Farming – So it is safer and often can yield more in Mining Rewards')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('8.')}</FAQPrefix>
              <FAQContent>{t('No Lockups into a Smart Contract & No Penalties (example no early withdrawal penalties)')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('9.')}</FAQPrefix>
              <FAQContent>{t('No Lending out your Tokens either')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('10.')}</FAQPrefix>
              <FAQContent>{t('Better than Staking, Mining, or Masternode Ownership – You just HODL and earn mining rewards')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('11.')}</FAQPrefix>
              <FAQContent>{t('You always hold your Tokens during the HODL process from your Metamask Wallet')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('12.')}</FAQPrefix>
              <FAQContent>{t('No Lockups into a Smart Contract and No Lending Out Your Tokens')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('13.')}</FAQPrefix>
              <FAQContent>{t('Built on the Polygon (MATIC) Blockchain so gas fees are low, and transactions are fast')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('14.')}</FAQPrefix>
              <FAQContent>{t('Transaction/Gas Fees are EXTREMELY Low so even Citizens of 3rd world countries can participate')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('15.')}</FAQPrefix>
              <FAQContent>{t('HODL Signal meets the definition of a Cryptocurrency because it adheres to the 5 Pillars of a Cryptocurrency as described by Andreas Antonopoulos (Open, Borderless, Neutral, Censorship Resistant, and Public)')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('16.')}</FAQPrefix>
              <FAQContent>{t('You only Signal Your Intentions to HODL and Collect Mining Rewards When You Want')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('17.')}</FAQPrefix>
              <FAQContent>{t('Simple: You Signal the Smart Contract to START your HODL and Signal Again to STOP your HODL')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('18.')}</FAQPrefix>
              <FAQContent>{t('After a Valid HODL (no send transactions between signals) Mining Rewards Reward is Minted and Paid to You almost Immediately')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('19.')}</FAQPrefix>
              <FAQContent>{t('See Whitepaper for More Details')}</FAQContent>
            </Flex>
          </div>
        }
        <Separator />
        <FAQTitle onClick={toggle6}>{t('How does HODL Signal work?')}</FAQTitle>
        {
          isShow6 && <div>
            <FAQContent>{t('It is as easy as 1, 2, 3')}</FAQContent>
            <FAQContent>{t('1st You Signal your intention to the Smart Contract when you want to HODL with your Metamask Wallet')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <FAQContent>{t('(HODL means you will not spend or sell your HODL Signal Tokens)')}</FAQContent>
            </div>
            <FAQContent>{t('2nd Easy part, you just hold them in your Metamask wallet')}</FAQContent>
            <FAQContent>{t('3rd You Signal you want to collect mining rewards for HODLing')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <FAQContent>{t('Mining rewards is paid after completing 1 full day. You can HODL for 365 days.')}</FAQContent>
            </div>
            <FAQContent>{t('Once you signal to earn an mining rewards payment, the Smart Contract verifies you had a valid HODL. A valid HODL is when your address has no “Send Transactions” between your “Start HODL” and your “Stop HODL” signals.')}</FAQContent>
            <FAQContent>{t('Your Mining Rewards Payment & any Affiliate Bonuses are paid promptly to your Metamask Wallet Address that you signaled from.')}</FAQContent>
            <FAQContent>{t('When a valid HODL is ready to be paid, the Smart Contract calculates the payment, mints new tokens, and pays directly to the HODLer.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle7}>{t('How to Signal a HODL?')}</FAQTitle>
        {
          isShow7 && <FAQContent>{t('This can be done by using this website by going to the START/STOP HODL page or using the Polyscan Explorer. See next to questions for further details.')}</FAQContent>
        }
        <FAQTitle onClick={toggle8}>{t('How to Signal a HODL from this Website?')}</FAQTitle>
        {
          isShow8 && <div>
            <FAQContent>{t('How to Signal a HODL is easy to do, and it requires only 3 simple steps.')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('Step 1:')}</FAQPrefix>
                <div>
                  <FAQContent>{t('Go to the START/STOP HODL page')}</FAQContent>
                  <FAQContent>{t('Connect your Metamask Wallet to the Smart Contract by clicking "Connect Wallet"')}</FAQContent>
                  <FAQContent>{t('After you approve the Connection to the Smart Contract click on the green “START HODL” button.')}</FAQContent>
                </div>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('Step 2:')}</FAQPrefix>
                <div>
                  <FAQContent>{t('Easy Step… Just HODL. Do not Spend/Send any tokens before you click on STOP HODL.')}</FAQContent>
                  <FAQContent>{t('Always perform the “STOP HODL” before doing a Send Transaction to have a valid HODL')}</FAQContent>
                </div>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix minWidth="47px">{t('Step 3:')}</FAQPrefix>
                <div>
                  <FAQContent>{t('Follow Step # 1, but this time you are going to click on the red "STOP HODL" button')}</FAQContent>
                  <FAQContent>{t('Your earnings HODLing earnings are almost immediate. You can click on the view transaction link to monitor the Smart Contract earnings transaction.')}</FAQContent>
                </div>
              </Flex>
            </div>
          </div>
        }
        <FAQTitle onClick={toggle9}>{t('How to Signal a HODL from this Polyscan Explorer?')}</FAQTitle>
        {
          isShow9 && <div>
            <FAQContent>{t('How to Signal a HODL using the Polyscan Explorer and not the website is easy to do. It requires only 3 simple steps. Before doing those steps, you must connect to the contract with your Metamask Wallet that contains your HODL Signal Tokens.')}</FAQContent>
            <FAQContent style={{ textDecoration: 'underline' }}>{t('Go to: ')}<a href='https://polygonscan.com/' target="_blank" rel="noreferrer">{t(' https://polygonscan.com/')}</a></FAQContent>
            <FAQContent>{t('Then search this contract address: ')}<span style={{ background: '#00ffff' }}>{t(' MAINNET CONTRACT TO BE POSTED HERE')}</span></FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <FAQContent>{t('Important: Do not go to any other contract address because that could be a scam.')}</FAQContent>
            </div>
            <FAQContent>{t('Next go to the “Contract” tab and click on it. Then click on the “Write Contract" tab. After you click on the “Write Contract” tab just below that a "Connect to Web3” link should appear. Click on that to connect your Metamask Wallet to the contract. Your Metamask Wallet Address for Polygon will then appear.')}</FAQContent>
            <FAQContent>{t('Now that you have connected you Metamask Wallet with your HODL Signal Tokens directly with the Polyscan contract you are ready to START a HODL.')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('Step 1:')}</FAQPrefix>
                <div>
                  <FAQContent>{t('Go the command line that says "StartHODL"')}</FAQContent>
                  <FAQContent>{t('Then click on the “Write” button just below that line.')}</FAQContent>
                  <FAQContent>{t('Approve that contract interaction on your Metamask Wallet')}</FAQContent>
                  <FAQContent>{t('You then will have successfully Started a HODL after the transaction goes through.')}</FAQContent>
                </div>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('Step 2:')}</FAQPrefix>
                <div>
                  <FAQContent>{t('Easy Step… Just HODL. Do not Spend/Send any tokens before you click on STOP HODL.')}</FAQContent>
                  <FAQContent>{t('Always perform the “STOP HODL” before doing a Send Transaction to have a valid HODL')}</FAQContent>
                </div>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('Step 3:')}</FAQPrefix>
                <div>
                  <FAQContent>{t('Follow Step # 1, but this time click on the “StopHODL” button in the contract')}</FAQContent>
                  <FAQContent>{t('Your earnings HODLing earnings are almost immediate. You can click on the view transaction link to monitor the Smart Contract earnings transaction.')}</FAQContent>
                </div>
              </Flex>
            </div>
          </div>
        }
        <FAQTitle onClick={toggle10}>{t('What happens if I forget to STOP HODLing before I do a send transaction?')}</FAQTitle>
        {
          isShow10 && <div>
            <FAQContent>{t('You earn no mining rewards because you now have an invalid HODL. No Send Transactions can happen between your two HODL Signals. It is okay to receive tokens during your HODL. You cannot however send out tokens from your HODLing address, or it becomes an invalid HODL, and no mining rewards will be paid.')}</FAQContent>
            <FAQContent>{t('Code is Law.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle11}>{t('What is the "Reset Button" for?')}</FAQTitle>
        {
          isShow11 && <FAQContent>{t('When a User completes a send transaction before a STOP HODL their address can be flagged to “false,” and it doesn\'t clear until the user does a “Reset” and flips their address back to ready to START HODL.')}</FAQContent>
        }
        <FAQTitle onClick={toggle12}>{t('What happens if my Wallet Address receives more tokens while I am HODLing?')}</FAQTitle>
        {
          isShow12 && <FAQContent>{t('It does not change anything. It does not interfere with your HODL. The mining rewards rate that will be paid is based upon how many HODL Signal Tokens you had when you signaled to start HODLing.')}</FAQContent>
        }
        <FAQTitle onClick={toggle13}>{t('After I start a HODL can I add more tokens to earn more tokens?')}</FAQTitle>
        {
          isShow13 && <div>
            <FAQContent>{t('After you start your HODL you can receive more tokens into the same address, but they will not be included in the mining rewards calculation. The proper step would be to STOP your HODL and then START a new HODL with the additional tokens you received.')}</FAQContent>
            <FAQContent>{t('You can also receive them into a different address and START another HODL from another wallet/address. Remember, if you do a send transaction prior to ending your HODL your HODL will become invalid, and no mining rewards or bonuses will be paid to you.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle14}>{t('Can I have two addresses and HODL from only one of them?')}</FAQTitle>
        {
          isShow14 && <FAQContent>{t('No')}</FAQContent>
        }
        <FAQTitle onClick={toggle15}>{t('Can I have two different HODLS for the same length of time/days? ')}</FAQTitle>
        {
          isShow15 && <FAQContent>{t('Yes, you can make multiple-separate HODLS each from a different address.')}</FAQContent>
        }
        <FAQTitle onClick={toggle16}>{t('Can I extend the length of my HODL before it matures? ')}</FAQTitle>
        {
          isShow16 && <FAQContent>{t('There is no set time to HODL. There is no maturity date. There is no deposit/withdrawal. There is no deposit. You just signal your intention to HODL from your Metamask Wallet.')}</FAQContent>
        }
        <FAQTitle onClick={toggle17}>{t('Can I HODL again from the same address after I collect my mining rewards? ')}</FAQTitle>
        {
          isShow17 && <FAQContent>{t('Yes, you can. This is how compounding mining rewards works. Einstein loved compound mining rewards. He called compound mining rewards the 8th wonder of the world. Unfortunately, HODLs are not automatic. You need to start a new HODL after you collect mining rewards.')}</FAQContent>
        }
        <FAQTitle onClick={toggle102}>{t('Can I HODL a portion of my balance?')}</FAQTitle>
        {
          isShow102 && <FAQContent>{t('No. If you want to HODL only a portion of the Tokens in an Address then make two wallets and move Tokens that you don\'t want to HODL into a different address.')}</FAQContent>
        }
        <FAQTitle onClick={toggle18}>{t('Can I extend my HODL beyond 365 days to earn more mining rewards or get a higher return?')}</FAQTitle>
        {
          isShow18 && <FAQContent>{t('No. The maximum earning potential is the completion of day 365.')}</FAQContent>
        }
        <FAQTitle onClick={toggle19}>{t('Is there a MINIMUM number of days, or length of time to HODL?')}</FAQTitle>
        {
          isShow19 && <div>
            <FAQContent>{t('The minimum number of days is 1 complete day. No amount of mining rewards is paid for a HODL that is not at least 24 hours (one day) long.')}</FAQContent>
            <FAQContent>{t('All mining rewards paid is based on a valid HODL. A valid HODL is no send transactions between the START and STOP HODL signals.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle20}>{t('Is there a MAXIMUM number of days, or length of time to HODL?')}</FAQTitle>
        {
          isShow20 && <div>
            <FAQContent>{t('The maximum number of days is 365 days (one year). No additional mining rewards is paid or earned after day 365. The maximum mining rewards that can be earned is after completing day 365.')}</FAQContent>
            <FAQContent>{t('All mining rewards paid is based on a valid HODL. A valid HODL is no send transactions between the START and STOP HODL signals.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle103}>{t('Am I making a Deposit when I HODL?')}</FAQTitle>
        {
          isShow103 && <FAQContent>{t('No, absolutely not. There is no Deposit Address. You hold your HODL SIGNAL Tokens in your wallet at all times. You only “SIGNAL” your intention to HODL and not spend your Tokens. No 3rd Parties.')}</FAQContent>
        }
        <FAQTitle onClick={toggle21}>{t('Can I HODL other coins/tokens from other Blockchains on your network? ')}</FAQTitle>
        {
          isShow21 && <FAQContent>{t('No. Not even your Mother-In-Law, if she too is an asset.')}</FAQContent>
        }
        <FAQTitle onClick={toggle22}>{t('Are there penalties for early withdrawals?')}</FAQTitle>
        {
          isShow22 && <FAQContent>{t('NONE – ZERO – NO Penalties! Also, there is no such thing as an early withdrawal because you hold your HODL Signal Tokens. You do not deposit them or give them to a 3rd Party to hold. There is no one to withdrawal from.')}</FAQContent>
        }
        <Separator />
        <FAQTitle onClick={toggle23}>{t('Are the mining rewards Rates fixed – Will they always be at the same rate?')}</FAQTitle>
        {
          isShow23 && <div>
            <FAQContent>{t('At this time, YES.')}</FAQContent>
            <FAQContent>{t('At the time of writing this FAQ there has been discussion about after the 1 year, setting the maximum mining rewards rate to be 4x the annualized world inflation on key commodities. What do you think should happen? Maybe you thoughts should be posted on Telegram.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle24}>{t('What are the Mining Rewards Rates?')}</FAQTitle>
        {
          isShow24 && <div>
            <FAQContent>{t('You earn 0.28789% per day')}</FAQContent>
            <FAQContent>{t('See Mining Rewards Table for each completed day you HODL. ')}</FAQContent>
            <FAQContent>{t('Day 1 = 0. 28789% of your balance per day')}</FAQContent>
            <FAQContent>{t('Day 365 = 105.0%')}</FAQContent>
            <FAQContent mb="30px">{t('Mining Rewards Formula: (HODL Tokens x 105.0% x (DAYS/365))')}</FAQContent>
            <FAQContent>{t('Example if you HODLed 100 HODL Tokens for 10 Days:')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <FAQContent>{t('((100 x 105.0% x (10/365)) = 2.87671233 HODLS')}</FAQContent>
              <FAQContent>{t('New Balance after HODL Mining Rewards Payment = 102.87671233 after 10 Days')}</FAQContent>
            </div>
            <FAQContent>{t('Below are common mining rewards rates for various days:')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="center" justifyContent="space-around">
                <FAQContent>{t('2.877% = 10 Days ')}</FAQContent>
                <FAQContent>{t('with Affiliate Address  =  3.164%')}</FAQContent>
              </Flex>
              <Flex alignItems="center" justifyContent="space-around">
                <FAQContent>{t('4.315% = 15 Days ')}</FAQContent>
                <FAQContent>{t('with Affiliate Address  =  4.747%')}</FAQContent>
              </Flex>
              <Flex alignItems="center" justifyContent="space-around">
                <FAQContent>{t('8.630% = 30 Days')}</FAQContent>
                <FAQContent>{t('with Affiliate Address  =  9.493%')}</FAQContent>
              </Flex>
              <Flex alignItems="center" justifyContent="space-around">
                <FAQContent>{t('17.26% = 60 Days')}</FAQContent>
                <FAQContent>{t('with Affiliate Address  =  18.986%')}</FAQContent>
              </Flex>
              <Flex alignItems="center" justifyContent="space-around">
                <FAQContent>{t('25.890% = 90 Days')}</FAQContent>
                <FAQContent>{t('with Affiliate Address  =  28.480%')}</FAQContent>
              </Flex>
              <Flex alignItems="center" justifyContent="space-around">
                <FAQContent>{t('51.781% = 180 Days')}</FAQContent>
                <FAQContent>{t('with Affiliate Address  =  56.642%')}</FAQContent>
              </Flex>
              <Flex alignItems="center" justifyContent="space-around">
                <FAQContent>{t('105.000% = 365 Days')}</FAQContent>
                <FAQContent>{t('with Affiliate Address  =  115.500%')}</FAQContent>
              </Flex>
            </div>
            <FAQContent>{t('Note: Maximum Earnings is completion of Day 365. No additional mining rewards is earned beyond day 365.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle25}>{t('What are current Savings Account Mining Rewards Rates according to Forbes Advisor?')}</FAQTitle>
        {
          isShow25 && <div>
            <FAQContent>{t('Recent 1 Year Mining Rewards Rates/Yields (APY) Paid by Banks:')}</FAQContent>
            <FAQContent>{t('https://www.forbes.com/advisor/banking/best-online-savings-accounts/')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Sallie Mae SmartyPig Account:  0.70%')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Axos Bank High Yield Savings Account:  0.61%  ')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Marcus Online Savings Account:  0.50%')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Ally Bank Online Savings Account:  0.50%')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Capital One 360 Performance Savings Account:  0.40%')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('American Express High Yield:  0.40%')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Discover Bank Online Savings Account:  0.40%')}</FAQContent>
              </Flex>
            </div>
          </div>
        }
        <FAQTitle onClick={toggle26}>{t('What are current Crypto Lending Rates and Cold Staking Cryptocurrencies paying?')}</FAQTitle>
        {
          isShow26 && <div>
            <FAQContent>{t('Recent (APY) Annual Mining Rewards Rates/Yields:')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Conceal: 4.00% to 6.00%')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Callisto: 7%')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('AXION: 8%+ APY')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('HEX: 40% Average')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('XTRA: 14.7% to 45.22% APY')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('CELERY: 100% APY (takes end of 2nd year to collect)')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('WISE: Unknown, not in documentation')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Celsius Network (Loan & CD Functions up to 17% APY)')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('DOT:  11.39%')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Polygon:  11.5%')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Gemini Dollar:  10.73% ')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('TrueUSD:  10.73% ')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Bitcoin: 7.81% ')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Ethereum:  6.72% ')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('BCH:  5.66% ')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('ADA:   5.10%')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Litecoin:  4.08% ')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Ripple:  3.13% ')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('ZCash: 2.53%  ')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Stellar:  1.26% ')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('MANA:  0.63%')}</FAQContent>
                </Flex>
              </div>
            </div>
          </div>
        }
        <FAQTitle onClick={toggle27}>{t('How can HODL SIGNAL pay large mining rewards rates?')}</FAQTitle>
        {
          isShow27 && <div>
            <FAQContent>{t('"A Smart Contract doesn\'t require a salary!"  Unlike banks, HODL SIGNAL TOKEN does not have to pay high office rent in prime locations, or employees, or big executive bonuses. It does not have to pay dividends to shareholders or answer to them either. The Smart Contract also does not require costly annual shareholder meetings. It does not have to pay lobbyist to get preferential treatment from regulators. The Smart Contract does not have to pay-off elected and unelected officials in governments to escape hefty fines. It does not have to pay staff countless hours to complete paperwork forced down by bureaucrats or have staff available to answer regulator\'s inquisitions or fill out papers for KYC and AML documents. HODL SIGNAL does not have or need employees, an office, or have a tax liability.')}</FAQContent>
            <FAQContent>{t('Because HODL SIGNAL does not have offices like a bank or bankers to play and make risky investments with your money, you do not have to worry about a 3rd Party Institution going bankrupt and taking your money with them. With HODL SIGNAL depositors do not have to worry about a Bank Bail-In, where a government confiscates depositor funds.')}</FAQContent>
            <FAQContent>{t('It can be argued that HODL SIGNAL is not only cheaper to operate but also safer because it is decentralized with servers running all over the world in various countries. The goal is much like Bitcoin in that you would have to kill the internet to stop HODL SIGNAL.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle28}>{t('How much extra do you earn if you use a Registered Affiliate Address?')}</FAQTitle>
        {
          isShow28 && <div>
            <FAQContent>{t('You earn an additional 10% of mining rewards ')}<span style={{ textDecoration: 'underline' }}>paid</span>{t(' if you use a registered Affiliate Address when you Start your HODL')}</FAQContent>
            <FAQContent>{t('Affiliate Reward Payment Formula: (HODL Tokens x 105.0% x (DAYS/365) x 10.0%)')}</FAQContent>
            <FAQContent>{t('Affiliate Bonus Example if you HODLed 100 HODL Tokens for 10 Days & used a Registered Affiliate Address:')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <FAQContent>{t('(100 x 105.0% x (10/365) x 10.0%) = 0.28767123 HODLS')}</FAQContent>
              <FAQContent>{t('Total Earnings & Bonus = 2.87671233 + 0.28767123 = 3.14643856')}</FAQContent>
              <FAQContent>{t('New Balance after HODL Mining Rewards Payment with Affiliate Bonus = 103.14643856')}</FAQContent>
            </div>
          </div>
        }
        <FAQTitle onClick={toggle29}>{t('When do I get paid my mining rewards?')}</FAQTitle>
        {
          isShow29 && <FAQContent>{t('Nearly immediately. It is dependent upon the amount of gas you have chosen to pay and the Network speed. Polygon PoS Chain\'s average block time is between 2 and 2.5 seconds. Sometimes it can take a few minutes. You can view the HASH Transaction ID on Polygonscan.com. ')}</FAQContent>
        }
        <FAQTitle onClick={toggle30}>{t('Where do the Mining Rewards Payments come from?')}</FAQTitle>
        {
          isShow30 && <div>
            <FAQContent>{t('The smart contract mints new tokens each time an mining rewards payment is required to be paid. The Tokens are minted then sent from the contract to an mining rewards Payment Address withing the Smart Contract. This way anyone can see the transparency of payments to Users. If Affiliate Bonus payments are earned, then those too are minted immediately and paid to an Affiliate Bonus Address within the Smart Contract.')}</FAQContent>
            <FAQContent>{t('In summary new tokens are created to pay mining rewards and bonus payments. This is the only way new tokens can be minted. If no mining rewards is required to be paid, no new tokens are minted.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle31}>{t('Who pays me the mining rewards?')}</FAQTitle>
        {
          isShow31 && <FAQContent>{t('The Smart Contract does. This is done automatically when a valid HODL has been completed.')}</FAQContent>
        }
        <FAQTitle onClick={toggle32}>{t('How are these mining rewards rates sustainable?')}</FAQTitle>
        {
          isShow32 && <div>
            <FAQContent>{t('Yes. A simple answer is not everyone is earning large mining rewards payments daily. So, despite an mining rewards rate of over 100% APY not everyone that is HODLing is earning this rate. It is true that the total mining rewards paid is the Token\'s inflation rate. This will vary on a day-to-day basis and on a year-to-year basis. This is how it helps to be sustainable.')}</FAQContent>
            <FAQContent>{t('Finally, setting the maximum mining rewards rate after completing day 365 is designed to pay far more than inflation levels in most countries. This rate in conjunction to the token price\'s appreciation helps keep it sustainable.')}</FAQContent>
            <FAQContent>{t('See HODL Signal\'s Mission Statement to help explain this concept.')}</FAQContent>
          </div>
        }
        <Separator />
        <FAQTitle onClick={toggle33}>{t('How is HODL Signal asset backed?')}</FAQTitle>
        {
          isShow33 && <FAQContent>{t('During the Claiming & Adoption Phase coins and tokens from numerous Users were transformed from their Blockchain Cryptocurrencies and then converted into Polygon (MATIC) for liquidity pools. Polygon is the asset via DEX Liquidity pools that makes HODL Signal an asset backed Cryptocurrency.')}</FAQContent>
        }
        <FAQTitle onClick={toggle34}>{t('How was HODL Signal a fair launch? ')}</FAQTitle>
        {
          isShow34 && <div>
            <FAQContent>{t('HODL Signal had a fair launch in 2 ways.')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('1.')}</FAQPrefix>
                <FAQContent>{t('All 100% of the Tokens that were marked for Claiming were available for individuals to Free Claim from over 100 different Blockchains.')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('a.')}</FAQPrefix>
                  <FAQContent>{t('ZERO-none-nada were given to the Creators/Founders or the Developers')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('2.')}</FAQPrefix>
                <FAQContent>{t('All 100% of the Tokens that were marked for Transformations for over 100 Blockchains were transformed into Polygon (MATIC) and put into liquidity pools on DEXs')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('a.')}</FAQPrefix>
                  <FAQContent>{t('ZERO-none-nada were given to the Creators/Founders or the Developer')}</FAQContent>
                </Flex>
              </div>
            </div>
            <FAQContent>{t('The remaining Tokens were put into the Liquidity Pools.')}</FAQContent>
            <FAQContent>{t('Again, zero tokens were issues, given away to the Creators/Founders or Developers. Furthermore, there was no ICO, EIO, or IDO. The creation of this Token was prepaid by the Founders, and they received no compensation from the distribution. They too, had to claim or transform Coins/Tokens from their own portfolios to obtain HODL Signal Tokens.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle35}>{t('Why invest in HODL Signal Token and not invest in a Masternode or a PoS Coin?')}</FAQTitle>
        {
          isShow35 && <div>
            <FAQContent>{t('Owning a Cryptocurrency that allows for Staking can be a useful source of passive income. So can Masternode ownership sometimes. However, Staking and Masternode ownership can be also risky. Unfortunately, you never know if Masternodes and Stakers will dump their coins on the market and crash the price. Often times, Masternode owners get inside information and will know before you do and dump their stack before you do.')}</FAQContent>
            <FAQContent>{t('With HODL Signal Token you can watch HODLing Management Reports and monitor adoption growth rates, percent of HODLers that are HODLing vs. non-HODLers. Theoretically, the higher percentage of HODLers means fewer Tokens on the open market for sale. This should drive up price. The opposite is true if there is a downward trend of HODLers.')}</FAQContent>
            <FAQContent>{t('Most PoS Coins and Masternode Coins do not offer these types of quick analysis that can help forecast price performance.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle36}>{t('What is HODL Signals Strategy?')}</FAQTitle>
        {
          isShow36 && <div>
            <FAQContent>{t('"HODL SIGNAL\'S Strategy is to Provide Time Tested Solutions to Problems in the Legacy Financial Systems & Help Resolve Current Issues within the Crypto Space."')}</FAQContent>
            <FAQContent>{t('OUR STRATEGY IS THE IMPLEMENTATION OF THESE SOLUTIONS:')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('1.')}</FAQPrefix>
                <FAQPrefix>{t('Make HODL SIGNAL TOKEN by design a Store-of-Value Token')}</FAQPrefix>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('2.')}</FAQPrefix>
                <FAQContent>{t('Create a System that Makes HODL SIGNAL TOKEN an Asset Backed Cryptocurrency')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('3.')}</FAQPrefix>
                <FAQContent>{t('It MUST Adhere to the 5 Pillars of a Cryptocurrency')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('4.')}</FAQPrefix>
                <FAQContent>{t('HODL SIGNAL TOKEN Utility will be a Mineable Token that Pay a Mining Reward for HODLing')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('5.')}</FAQPrefix>
                <FAQContent>{t('It MUST Pay a High Fixed Mining Reward')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('6.')}</FAQPrefix>
                <FAQContent>{t('6.	Store-of-Value combined with Mining Tokens Must Outpace the Rate of Commodity Inflation')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('7.')}</FAQPrefix>
                <FAQContent>{t('Utilize the Polygon (MATIC) Network for Scalability and Low Gas Fees')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('a.')}</FAQPrefix>
                  <FAQContent>{t('Low Gas Fees Makes HODL SIGNAL Affordable to Third World Markets & Above')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('8.')}</FAQPrefix>
                <FAQContent>{t('Institute an Affiliate Program to Promote HODL SIGNAL TOKEN and Encourage People to Become HODLers')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('9.')}</FAQPrefix>
                <FAQContent>{t('Ensure that the Launch is 100% Fair & Equitable')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('10.')}</FAQPrefix>
                <FAQContent>{t('Be Transparent & Show 100% of Transforms Makes HODL SIGNAL Asset Backed')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('a.')}</FAQPrefix>
                  <FAQContent>{t('aDEX Liquidity becomes Locked (Eliminating a Rug Pull)')}</FAQContent>
                </Flex>
              </div>
            </div>
            <FAQContent>{t('Post Distribution, Market Forces Naturally Establish the Following:')}</FAQContent><div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('1.')}</FAQPrefix>
                <FAQContent>{t('HODL SIGNAL\'S Utility Will Create Price Stability & Price Appreciation')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('a.')}</FAQPrefix>
                  <FAQContent>{t('Utility (HODLing) Shows the Market that HODL SIGNAL TOKEN is a Store-of-Value')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('2.')}</FAQPrefix>
                <FAQContent>{t('Price Stability & Price Appreciation = Reduction in Risk')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('3.')}</FAQPrefix>
                <FAQContent>{t('Risk Reduction = Use of Bank\'s own Money (loans) to Fund Crypto and HODL SIGNAL TOKEN\'S Growth & Adoption')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('a.')}</FAQPrefix>
                  <FAQContent>{t('Banker\'s Money Used Only After Price Stability has been Obtained')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('4.')}</FAQPrefix>
                <FAQContent>{t('More HODLing Creates Buy Demand for HODL SIGNAL TOKENS')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('5.')}</FAQPrefix>
                <FAQContent>{t('Fewer HODL SIGNAL TOKENS on the Open Market = Price Appreciation')}</FAQContent>
              </Flex>
            </div>
            <FAQContent>{t('Solution Implementation = Price Stability')}</FAQContent>
            <FAQContent>{t('Price Stability = More Adoption')}</FAQContent>
            <FAQContent>{t('More Adoption = Explosive Growth')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle37}>{t('What are the Market Reports?')}</FAQTitle>
        {
          isShow37 && <div>
            <FAQContent>{t('Few Cryptocurrencies can provide accurate information about their project\'s adoption rate. Nearly everyone can see price performance and trading volume. However, price and trading volume can easily be manipulated on small Cryptocurrencies.')}</FAQContent>
            <FAQContent>{t('HODL Signal is different. You can view detailed reports that are available to monitor it growth and adoption curve. These reports are excellent for Investors/Speculators as well as for General Users.')}</FAQContent>
            <FAQContent>{t('For example, if the percentage of tokens being HODLed are increasing then price too should increase. These reports are great for speculators and investors.')}</FAQContent>
            <FAQContent>{t('Another great network report is the average length of HODLs.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle38}>{t('Why are Market Reports important?')}</FAQTitle>
        {
          isShow38 && <FAQContent>{t('They provide everyone from Speculators to General Users a snapshot of current adoption and circulation percentages. Circulation percentages can even be historical. This way you can see the trends associated with HODL Signal\'s adoption.')}</FAQContent>
        }
        <FAQTitle onClick={toggle39}>{t('Where Does HODL Signal Get its Value (intrinsic value)?')}</FAQTitle>
        {
          isShow39 && <div>
            <FAQContent>{t('This is a good question. One might say that if you paid mining rewards in beach sand, to someone who lives on a beach, it would not matter how much the mining rewards rate payout was. For them, the value would still be next to nothing. So, for them Sand has no intrinsic value.')}</FAQContent>
            <FAQContent>{t('If one uses this sand on a beach example, they might say that sand has no intrinsic value, and they might also say the US Dollar does have intrinsic value. You must understand that a commodity/asset/currency gets its value when a person is willing to trade another asset for another. Increasing demand on a commodity that has scarcity AND utility drives up the value of that commodity or asset. Having said this intrinsic value is only one attribute of an asset.')}</FAQContent>
            <FAQContent>{t('To understand where Bitcoin or HODL SIGNAL TOKEN gets its value one must also understand the meaning of intrinsic value. It is often said that Cryptocurrencies have no intrinsic value compared to gold because it has no melt down value and cannot be physically held. This could not be more wrong. Digital money has existed long before Bitcoin was created and has value even though it cannot be held or melted. It has existed on computers in code for a longtime – just like Bitcoin and HODL SIGNAL TOKEN does today.')}</FAQContent>
            <FAQContent>{t('Bitcoin, HODL SIGNAL TOKEN, and other Cryptocurrencies do have intrinsic value and more. Not only is scarcity an attribute of HODL SIGNAL TOKEN, but so is its utility and unique ability to be used as an instrument that allows for a software code (Smart Contract) to produce and payout mining rewards in HODL SIGNAL TOKENS. The demand for HODL SIGNAL TOKEN allows for a marketplace to be created, and for it to be freely traded so that a price can be set by the marketplace. It really is that simple.')}</FAQContent>
            <FAQContent>{t('The Founders/Creators recommend you watch a 3 Minute YouTube video by Andreas Antonopoulos titled, “Currency Scarcity and Intrinsic Value. He describes intrinsic value beautifully, and how it applies to Bitcoin and Cryptocurrencies. He states… “… we haven\'t had intrinsic value in money since our money was bananas because you could eat them.” He goes on to explain that intrinsic value is a very slippery slope concept. He talks about how fresh water does not have intrinsic value in many Countries because we use it to flush our toilets. An attribute of money is not just intrinsic value, but also scarcity. He explains how a currency with intrinsic value; is not always a good thing. As in Bananas you might eat them. He also explains how a wheel barrel full of Zimbabwe dollars had a lower intrinsic valley than goat shit. Intrinsic Utility is a better measurement to determine a value of a currency or commodity or an asset.')}</FAQContent>
            <FAQContent>{t('In summary, the free market on decentralized and open exchanges, and between individuals sets a demand for HODL SIGNAL TOKEN whereby users either wish to sell or buy it because it is scarce, has utility, can be used as a medium of exchange (easily traded), and is designed to be a Store-of-Value. Scarcity is created when users HODL their Tokens. They are incentivized to HODL because it pays a high mining rewards rate that drives scarcity.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle40}>{t('What are the Token Specifics?')}</FAQTitle>
        {
          isShow40 && <div>
            <FAQContent>{t('Here are the HODL Signal Tokens Specs')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('HODL Signal Token is an ERC-20 Token on the Polygon (MATIC) Blockchain')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Contract Address: ')}<span style={{ background: '#00ffff' }}>{t('TBD')}</span></FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('HODL Signal Token uses the Polygon (MATIC) network for consensus')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Polygon (MATIC) was chosen for these reasons:')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Low Gas Fees')}</FAQContent>
                </Flex>
                <div style={{ paddingLeft: '40px' }}>
                  <Flex alignItems="start">
                    <FAQPrefix>{t('')}</FAQPrefix>
                    <FAQContent>{t('Can cater to third World Populations with a Smart Phones')}</FAQContent>
                  </Flex>
                </div>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Fast Transactions')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Strong Community')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Efficient bridges to other Blockchains')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Polygon (MATIC) was chosen for these reasons:')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('4.5 Billion to the Community via Claiming and Transforming to 100+ Blockchains')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('500 Million go to Liquidity Pools')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('There is no set supply because new Token Mining pays the Mining Rewards & Affiliate Bonus payments')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('HODL Signal Token is an Asset Backed Cryptocurrency backed by Polygon as the Asset')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('HODL Signal cannot go to zero in value unless Polygon also goes to zero')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Asset Backing comes from 100% of the Transformations')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('100% of Transformations will be Swapped into Polygon')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('This Polygon will go to 2 DEX\'s for Liquidity')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('DODO (DEX – Polygon Decentralized Exchange)')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Polygon Wallet)')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Creates a Massive Liquidity Pool')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Big Investors can participate without mass slippage')}</FAQContent>
                </Flex>
              </div>
            </div>
          </div>
        }
        <FAQTitle onClick={toggle41}>{t('What is HODL SIGNAL TOKEN\'S Distribution?')}</FAQTitle>
        {
          isShow41 && <div>
            <FAQContent>{t('Initial Genesis 5.0 Billion HODL Signal Tokens Were Minted')}</FAQContent>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('4.5 Billion to be distributed via Claiming and Transformations to over 100+ Blockchains')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('2 Billion for Claiming & Claim Bonuses')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('2.5 Billion for Transforming & Transform Bonuses')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('500 Million will go to Liquidity Pools to Match 100% of the Transformations')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Founders/Creators/Developers receive ZERO Tokens')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('100% of the Tokens go to the Community')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('No Founders Fees (No Tokens for the Founders)')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('No Special Reserve of Tokens for the Team')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('No Exclusives Early Investment for Insiders')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('No ICO, EIO, IFO or IDO')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Complete Development and Distribution was Pre-paid by the Founders')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Founders Gift to the World')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('No Reciprocity Required or Expected by the Founders')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('o')}</FAQPrefix>
                  <FAQContent>{t('Founders already live comfortable lives; they want a legacy that improves banking')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('•')}</FAQPrefix>
                <FAQContent>{t('Distribution is a 100% Fair Launch')}</FAQContent>
              </Flex>
            </div>
          </div>
        }
        <FAQTitle onClick={toggle42}>{t('How is HODL Signal different from HEX Token?')}</FAQTitle>
        {
          isShow42 && <div>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('1.')}</FAQPrefix>
                <FAQContent>{t('HEX was built as a Smart Contract on the Ethereum (ETH) Blockchain. While more robust than the Polygon Blockchain, it also means that fees are significantly higher. This has proven true due to all the DeFi projects on the ETH Platform. HODLS fees are a fraction of a USD Cent. Many cases this means that transactions are more than 100x cheaper.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('2.')}</FAQPrefix>
                <FAQContent>{t('HEX was built and deployed as the 1st Bank CD on the Blockchain. We commend them for this significant milestone. However, they also made it exceedingly difficult for the average User to understand. Their Wallet and their Staking Process (Depositing) is difficult for even Grandma to use. We believe that HODL Signal is easier to understand and use.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('3.')}</FAQPrefix>
                <FAQContent>{t('HEX has a “Good Accounting” function and an “Unstake” function and can charge penalties for quitting early or not ending timely.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('4.')}</FAQPrefix>
                <FAQContent>{t('HEX pays well but it is difficult to determine your real rate of return due to this “shares” variable. It does not pay a straight or fixed mining rewards rate. Even a Bank pays a fixed mining rewards rate. HODLS does just this. It pays a specific rate, every time for the same length of time. You always know how many Tokens you will earn and not have to worry or estimate what others will or will not do. With HEX you have to estimate or guess how many shares you will have and then estimate how many HEX tokens you will receive.  HODL Signal it is simple, and you need not worry what others do, or how long they make a deposit for. ')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('5.')}</FAQPrefix>
                <FAQContent>{t('HEX pays a far lower rate per day, per week, per month, or per year than HODLS. HODL Signal pays a higher rate of return to its Depositors/HODLers. Yes, both pay higher mining rewards rates than fiat banks. HODL Signal pays more, lots more in mining rewards than HEX. Last we checked HEX pays a little over 37% APY. HODLS pays 51%+ in 180 days (6 months). ')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('6.')}</FAQPrefix>
                <FAQContent>{t('HEX has an origin address. This origin address received a copy of all the bonuses that were paid. It is like a giant whale in the small fishbowl that can dump on you and kill the price or choose to stake prior to big payday and everyone\'s shares are lower on the big payday. Well, this is exactly what happened. ')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('7.')}</FAQPrefix>
                <FAQContent>{t('To everyone\'s surprise the Origin Address decided to stake just prior to the big payday. Everyone\'s share of the big payday pot or stack were lowered significantly. With these reductions in the giant payday, many felt cheated by the Origin Address. HODL Signal does not have an “Origin Address” and the creators do not earn a copy of bonuses like HEX did/does. No backdoor to mint new HODL Signal Tokens and enrich the creators exist.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('8.')}</FAQPrefix>
                <FAQContent>{t('HEX due to this Origin Address has made or given the impression that HEX is a scam.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('9.')}</FAQPrefix>
                <FAQContent>{t('HODL Signal Token had a 100% fair launch.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('10.')}</FAQPrefix>
                <FAQContent>{t('HEX has an Origin address that is more than likely controlled by Richard Heart. He cannot claim control of this address due to SEC laws. We get that. It still does not block the controller of this origin address from dumping these tokens on the open market and killing the price of HEX. HODL Signal does not have this origin address to dump on the market, nor will it. HEX created its own whale for everyone to fight against and worry about. HODLS\'s Distribution is fair for all and will be distributed to numerous blockchains.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('11.')}</FAQPrefix>
                <FAQContent>{t('HEX requires you to select an end date for your “Stake” or “Deposit.” If you end early, you must pay a penalty. These penalties add up and are shared with others. As a Staker/Depositor you hope others end their stakes prematurely so you can earn more from their misfortune or ignorance. HODL Signal is vastly different. No one earns from another\'s early deposit withdrawal. In fact, HODL Signal does not have any penalties at all. Sometimes financial emergencies happen, and one must cash-out early. Just because another HODLer has a budgetary crisis does not mean others should profit from their financial distress. HEX charges a penalty as an incentive to keep your word and allow others to profit when you do not do what you said you would do. However, no penalties are also an incentive for one to choose HODL Signal over HEX in order to receive a larger mining rewards rate.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('12.')}</FAQPrefix>
                <FAQContent>{t('HEX has been described by some as a scam coin, simply because of the origin address. Others believe it is due to the way Richard Heart acts. We only quote others who say, "HODL Signal is the honest competitor to HEX."')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('13.')}</FAQPrefix>
                <FAQContent>{t('HEX had a referral program, but it ended after the big payday, the last day to claim HEX with the Bitcoin you owned from the HEX snapshot of the Bitcoin Blockchain. Now HEX does not have a referral program. No one can earn mining rewards from someone else using their referral code. HODL Signal allows and encourages others to bring more people to HODL Signal even after the distribution bonuses have ended. It makes more sense to bring new people into Crypto by sharing the mining rewards with ongoing mining rewards bonuses. Just like HEX, HODL Signal is not a MLM or multitier bonus system. It is single layer, just like Amazon\'s or Walmart\'s Affiliate Programs. ')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('14.')}</FAQPrefix>
                <FAQContent>{t('The Founder of HEX is Richard Heart who is a flamboyant and a Whale in the Crypto Space. He is also described as the opposite of humble. Instead, his persona is that of a very conceited person. The Founders/Creators of HODL Signal Token are just the opposite. They hide behind the scenes in the Crypto Space and want no attention. They stay silent and let their actions speak for themselves. ')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('15.')}</FAQPrefix>
                <FAQContent>{t('A comment on Penalties that HEX charges its Users. The HEX contract is out of compliance with estate laws of various jurisdictions that make it illegal to penalize the assets of a deceased person. It also reduces taxation flexibility when it comes to timing income.')}</FAQContent>
              </Flex>
            </div>
            <FAQContent><strong>{t('In Summary: ')}</strong>{t(' HODL Signal is much easier to understand than HEX. With HEX you do not know what the Origin Address will do. Just prior to the large payday, the Origin Address staked and lowered everyone\'s payday profits. With Hex you are not sure how much you will earn given the large variables of how many people do or do not stake. Earnings with Hex also includes a “Shares-Owned” making mining rewards rate calculations difficult. So, to calculate your mining rewards rewards one must try to guess what others will do or will not do. With HODLS you know exactly how many Tokens you will earn by how many days you HODL/Park your Tokens. With HODL Signal there is no guess work and no reliance on what others do or do not do. More importantly there is not an Origin Address that adds a wildcard to your rate of return. Finally, good, or bad HODL Signal doesn\'t have a controversial Founder/Creator than some feel Richard Heart is or can be.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle43}>{t('How is HODL Signal different from WISE Token?')}</FAQTitle>
        {
          isShow43 && <div>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('1.')}</FAQPrefix>
                <FAQContent>{t('WISE Token had a fair and equitable launch. They had a 50 Day Liquidity Transformer Epoch However, 10% or 2,000 ETH (whichever was less) was distributed to the WISE Team for “reimbursement” for creating and launching the project. HODL Signal Token will put 100% of its transformations into Liquidity Pools. No Founders or Developers will pocket ANY of the Transformed Coins/Tokens.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('2.')}</FAQPrefix>
                <FAQContent>{t('They are similar in many ways to HEX. They have Lockups/Staking and use Shares to pay mining rewards & dividends. HODL Signal makes things extremely easy to understand and mining rewards earnings easy to calculate. HODL Signal\'s fixed mining rewards rates are superior and fundamentally different. Both WISE and HEX Tokens work more similar to a Bond or Bank CD. HODL Signal is more basic and works like a Savings Account with a high rate of return.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('3.')}</FAQPrefix>
                <FAQContent>{t('It is Asset Backed with ETH in liquidity pools on Uniswap. This is a good thing. HODL Signal will do the same thing and will be an asset backed POLYGON Token.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('4.')}</FAQPrefix>
                <FAQContent>{t('The Team for WISE are professional and appear to be very grounded. We are pleased to see that they did a fair launch. Unfortunately, we feel that WISE will not pass the HOWIE test by the US SEC Department. The principal Founder is a US Citizen and thus becomes a target that will eventually catchup to him. This will be disastrous to its price performance. Also, because the team took up to 10% of the initial transformations of ETH; this too is a cause of concern that the SEC will certainly have issues with. Unfortunately, this makes it look similar to an ICO. They would have been much better off not to take that reimbursement in respect to creating a token that could easily be deemed an unregistered security by many governments around the world.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('5.')}</FAQPrefix>
                <FAQContent>{t('Like HEX, WISE Token uses a fixed annual inflation rate for its growth. The “leftovers” are divided up by the “Shares” Users hold. This is a clever approach and caps token inflation growth. HODL Signal is vastly different. The Users that decide to earn mining rewards are the engine for inflation growth.')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('6.')}</FAQPrefix>
                <FAQContent>{t('WISE and HEX have an Achilles heel. This is that they operate on the ETH Blockchain, and gas fees are horrifically expensive. HODL Signal has a distinct advantage in that it chose to be built on Polygon. Currently Polygon is trading at $1.69 USD and HODL Signals have a gas fee of $0.006 USD. HEX gas fees and WISE gas fees for their contract interaction is quite expensive. They can be more than $50.00 USD per transaction to Stake or Unstake.')}</FAQContent>
              </Flex>
            </div>
          </div>
        }
        <Separator />
        <FAQTitle onClick={toggle44}>{t('How to buy HODL Signal Token?')}</FAQTitle>
        {
          isShow44 && <div>
            <FAQContent>{t('Presently, there is no direct Fiat – HODL Signal Token. This on ramp does not exist. You will need to purchase Polygon (MATIC) and then swap Polygon for HODL Signal on one of the Decentralized Exchanges that lists HODL Signal. Look for the ticker symbol (HODLS).')}</FAQContent>
            <FAQContent>{t('Also, there will be more trading pairs. Many trading pairs with HODLS will be connected to Gaming Cryptos. It is better to teach the young how to become savers.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle45}>{t('Which exchanges will HODL SIGNAL Token be listed on? ')}</FAQTitle>
        {
          isShow45 && <div>
            <FAQContent>{t('Announcements of listing on multiple DEXs is forthcoming. Remember, 100% of the Transformations will be added to liquidity pools on at least two DEXs.')}</FAQContent>
            <FAQContent>{t('Note: Using leverage trading of Cryptocurrencies has NOT helped price or adoption (it artificially inflates the Total Coin/Tokens quantities).')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle46}>{t('What is the minimum investment for the Private Sale?')}</FAQTitle>
        {
          isShow46 && <FAQContent>{t('There was no private sale. Never was. The Founders prepaid everything.')}</FAQContent>
        }
        <FAQTitle onClick={toggle47}>{t('Can I buy HODL Signal Token without KYC?')}</FAQTitle>
        {
          isShow47 && <FAQContent>{t('No KYC is required. If it is required on an exchange, then that is between the exchange and you.')}</FAQContent>
        }
        <FAQTitle onClick={toggle48}>{t('If the bear market comes, will HODL Signal Token be dumped (what plans are in place for price stability)?')}</FAQTitle>
        {
          isShow48 && <FAQContent>{t('The Utility by design promotes price stability. It is suspected that during bear markets, solid DeFi projects like HODL SIGNAL TOKEN will grow in value.')}</FAQContent>
        }
        <FAQTitle onClick={toggle49}>{t('Big problem for DeFi projects seems to be that when farming starts, the price goes down. What is the solution for this problem?')}</FAQTitle>
        {
          isShow49 && <div>
            <FAQContent>{t('There is no farming and no need to farm. HODL SIGNAL already pays a high, fixed mining rewards rate and without a 3rd party. Your only risk is how secure do you keep your private keys to your Metamask Wallet.')}</FAQContent>
            <FAQContent>{t('Yield Farming goes against the founding principles of Crypto. Crypto was supposed to be about decentralizations and eliminating 3rd party risk. "Not Your Private Keys, Not Your Crypto."')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle50}>{t('Do you have a token burning plan to increase token value and attract investors to invest?')}</FAQTitle>
        {
          isShow50 && <FAQContent>{t('No. Not at this time. The Founders are discussing mining rewards earned from Liquidity Pools to be used to buy back HODL SIGNAL TOKENS and burn them. If this can be done in an automatic function with a Smart Contract and without Human interaction after deployment, then this is what will be done. However, no promises of future work or expectations of others should be assumed.')}</FAQContent>
        }
        <FAQTitle onClick={toggle51}>{t('How will HODL Signal bridge the gap between the Crypto and Non-Crypto worlds?')}</FAQTitle>
        {
          isShow51 && <FAQContent>{t('The Future Is Bright. We think Affiliates could do this and see this as an opportunity build for them. "No promises of future work or expectations of others should be assumed."')}</FAQContent>
        }
        <FAQTitle onClick={toggle52}>{t('What is the most ambitious goal of HODL Signal Token?')}</FAQTitle>
        {
          isShow52 && <div>
            <FAQContent>{t('1st Stop the Digital Federal Coins by the Central Banks – They will enslave us with it. HODL SIGNAL TOKEN can move everyone toward Individual Monetary Sovereignty.')}</FAQContent>
            <FAQContent>{t('2nd Worldwide Education of the importance of becoming a Saver.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle53}>{t('Do you have any plans to implant an NFT into the ecosystem?')}</FAQTitle>
        {
          isShow53 && <FAQContent>{t('Not currently. Affiliates might. "No promises of future work or expectations of others should be assumed."')}</FAQContent>
        }
        <FAQTitle onClick={toggle54}>{t('Too many projects make promises and never keep them (items on the roadmap never happen). What gives investors\' confidence that promises on your Roadmap will be completed?')}</FAQTitle>
        {
          isShow54 && <FAQContent>{t('This is simple to answer. If they are not completed, then the coin is never launched. The last item of completion is the Distribution of the Tokens.')}</FAQContent>
        }
        <FAQTitle onClick={toggle55}>{t('Does HODL Signal Token need early investors?')}</FAQTitle>
        {
          isShow55 && <FAQContent>{t('No, it never did, and will not. The Founders prepaid for everything. It is their Anonymous Gift to the world. Have you ever given anonymously? It is an amazing feeling.')}</FAQContent>
        }
        <FAQTitle onClick={toggle56}>{t('How do I know my HODL Signal Tokens are secure?')}</FAQTitle>
        {
          isShow56 && <div>
            <FAQContent>{t('1st They are asset backed. They cannot go to zero in value. Polygon would also have to go to zero.')}</FAQContent>
            <FAQContent>{t('2nd The wallet chosen to secure and interact with the Smart Contract is Metamask. It is time tested, solid, robust, and most importantly the best secure wallet in Crypto in our opinion. Do not rely on us. Do your own research on the Metamask Wallet.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle57}>{t('What plans does HODL Signal Token have to help with interoperability?')}</FAQTitle>
        {
          isShow57 && <FAQContent>{t('This is not really an issue. We chose Polygon (MATIC) because they have a strong focus on interoperability and have several bridges that are working perfectly.')}</FAQContent>
        }
        <FAQTitle onClick={toggle58}>{t('Will HODL Signal Token scale and will gas fees skyrocket if adoption gets crazy for HODL Signal Token?')}</FAQTitle>
        {
          isShow58 && <div>
            <FAQContent>{t('Anything is possible in Bizzarro World. However, we conducted a lot of research and having low gas fees was near the top or our list. This is the very reason we chose Polygon (MATIC) due to its scalability.')}</FAQContent>
            <FAQContent>{t('Many Cryptos did not think this through. We did. We want to be affordable for most of the world\'s population. High gas fees like on the Ethereum Blockchain eliminate 1/3 of the world market. With Polygon, we can teach these people the importance of having a Savings and Growing a Savings, Hedging Inflation. All thanks to Polygon\'s scalability.')}</FAQContent>
          </div>
        }
        <Separator />
        <FAQTitle onClick={toggle59}>{t('What is the Affiliate Program?')}</FAQTitle>
        {
          isShow59 && <div>
            <FAQContent>{t('HODL Signal Token focuses on Creating a World of Savers with Affiliates that have taken a “Do No Harm Pledge” and promote that Individual Monetary Sovereignty as a Human Right. We do not push a “greed” factor, but an ideology that believes that doing the right thing pays larger dividends in numerous forms of rewards, including financial ones.')}</FAQContent>
            <FAQContent>{t('Amazon and Walmart and others have Affiliate Programs to promote sales. They do not have MLMs and neither doe HODL Signal Token. An Affiliate Program is a way to raise brand awareness and increase adoption growth. Most Cryptocurrencies do not have one, or one that goes on for perpetuity. HODL Signal does. Not only does it pay bonuses to Affiliates and User that participate in the Claiming and Transforming process, but it also pays when Users & their Affiliates bonuses when they complete a HODL.')}</FAQContent>
            <FAQContent>{t('The Affiliates and the Users get an additional 10% of their mining rewards reward as a bonus. Affiliate Program will increase growth and adoption, which in turn should also enhance price performance.')}</FAQContent>
            <FAQContent>{t('One simple example is after completing day 365 a User without an Affiliate Address will earn 105.0%. A User that includes an Affiliate Address when HODLing will earn 115.5% after day 365.')}</FAQContent>
            <FAQContent>{t('In Summary:  Affiliate Program = Growth + Adoption + Price Performance')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle60}>{t('Why have an Affiliate Program?')}</FAQTitle>
        {
          isShow60 && <div>
            <FAQContent>{t('It increases brand awareness, but most importantly it encourages others to become savers. We wanted a win-win solution and did not want to pay marketing firms to grow adoption. If it is good enough for Amazon to have an Affiliate Program, then it is good enough for HODL SIGNAL TOKEN to have one too.')}</FAQContent>
            <FAQContent>{t('HODLers and their Affiliates earns a bonus. That is like if you told your friend to go to this bank and get a high rate on a savings account and they paid you and your friend mining rewards on your friend\'s deposit.')}</FAQContent>
            <FAQContent>{t('Affiliate Program = Growth + Adoption + Price Performance')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle61}>{t('Is the Affiliate Program a pyramid scheme or an MLM Scam?')}</FAQTitle>
        {
          isShow61 && <div>
            <FAQContent>{t('No. Absolutely not! ')}</FAQContent>
            <FAQContent>{t('There are no tiers or levels. Payments of mining rewards do not come from new investors. A pyramid scheme is a form of investment in which each paying participant recruits two further participants, with returns being given to early participants using money contributed by later ones. HODL Signal Token\'s Affiliate Program does not work like this because it is a single layer.')}</FAQContent>
            <FAQContent>{t('Again, there are no tiers or multi-levels, and payments of mining rewards do not come from new investors. No new recruits are required to pay older recruits.')}</FAQContent>
            <FAQContent>{t('Also, just because HODL Signal Token has a referral program, just like Amazon, Walmart, etc. does not make them an MLM scheme. The Affiliate program is a referral program. Companies pay people referral money or store credits to bring new customers to their store or online marketplace. This is a normal and perfectly legal form of advertising. Who knows how far Bitcoin\'s adoption rate would be if it had a referral program like Amazon?')}</FAQContent>
            <FAQContent>{t('Therefore, HODL SIGNAL Token has the referral program to help grow adoption beyond just the Crypto space.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle62}>{t('How do you become an Affiliate?')}</FAQTitle>
        {
          isShow62 && <div>
            <FAQContent>{t('It is simple. Setup a Metamask Wallet and connect to the Polygon Mainnet. Then go to the Affiliates page on this website. Take the Do No Harm Pledge and enter your Polygon/HODLS address so it can be registered as a Valid Affiliate.')}</FAQContent>
            <FAQContent>{t('You can verify it has been registered there too.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle63}>{t('How does the Affiliate Program Work?')}</FAQTitle>
        {
          isShow63 && <div>
            <FAQContent>{t('You earn HODLS when people Claim Tokens during the Claiming and Transforming Event that takes 30 Days. You can also earn Tokens when User Transform their Crypto into HODL SIGNAL TOKENS during this same 30-day period.')}</FAQContent>
            <FAQContent>{t('Finally, you also earn the matching bonus paid to a HODLer when they enter your Affiliate Address at the start of a HODL.')}</FAQContent>
            <FAQContent>{t('This means you could earn perpetual tokens from HODLers that use your address.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle64}>{t('How big is the reward when using an Affiliate address?')}</FAQTitle>
        {
          isShow64 && <div>
            <FAQContent>{t('From HODLs you get the matching bonus awarded to the HODLer. This is 10% of the mining rewards paid to the HODLer.')}</FAQContent>
            <FAQContent>{t('You also earn a Bonus when someone Claims or Transforms their Crypto into HODLS based upon how many they Claim and/or transform.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle65}>{t('How much do I earn as an Affiliate?')}</FAQTitle>
        {
          isShow65 && <FAQContent>{t('This depends upon how many people use your Affiliate Address when they HODL. How many people will you tell to HODL using HODL SIGNAL TOKEN? How many people you tell will use your Affiliate Address? ')}</FAQContent>
        }
        <FAQTitle onClick={toggle66}>{t('Can I "Self-Affiliate" (put my own address down and pay myself both bonuses)?')}</FAQTitle>
        {
          isShow66 && <div>
            <FAQContent>{t('Yes, you can. However, you should ask yourself how does Self-Affiliating your address encouraging others to learn about HODL SIGNAL Token? How does this help grow its adoption? Also, is it not greed to self-affiliate your address to earn double the bonus? Are you being greedy? If more people learn about ')}</FAQContent>
            <FAQContent>{t('HODL SIGNAL Token and want to buy more on the open market, that will increase its value. The Affiliate Program is to help bring new Users to HODL SIGNAL Token. What will you do to grow adoption and increase its price? ')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle67}>{t('Is HODL Signal Token a Ponzi scheme?')}</FAQTitle>
        {
          isShow67 && <div>
            <FAQContent>{t('No, absolutely not!')}</FAQContent>
            <FAQContent>{t('HODL Signal Token simply is not a Ponzi Scheme because it does not promise benefits that it does not already have, it does not need new people to pay the old buyers.')}</FAQContent>
            <FAQContent>{t('In a Ponzi Scheme new investors (fools) are required to pay into a pool. The “New Money” from the “New Fools” pays the older participants. HODL Signal Token does not use your tokens to pay new HODLers. Mining rewards payments are minted from the Smart Contract and not from new participants.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle68}>{t('Is this a Greater Fools scheme, or Last Man Standing scheme? ')}</FAQTitle>
        {
          isShow68 && <div>
            <FAQContent>{t('No!')}</FAQContent>
            <FAQContent>{t('First one must look at the greater fool theory and understand it, to then make a comparison/judgement. ')}</FAQContent>
            <FAQContent>{t('"In finance and economics, the greater fool theory states that the price of an object is determined not by its intrinsic value, but rather by irrational beliefs and expectations of market participants. A price can be justified by a rational buyer under the belief that another party is willing to pay an even higher price. In other words, one may pay a price that seems "foolishly" high because one may rationally have the expectation that the item can be resold to a "greater fool" later. Wikipedia"')}</FAQContent>
            <FAQContent>{t('Now that we understand the theory, we can compare HODL Signal Token to this concept. One could almost say that any fiat currency applies to the greater fool theory. This is certainly true for the Venezuelan Currency, the Bolivar. HODL Signal Token: just like fiat money, Bitcoin, and other Cryptocurrencies are often described to have no intrinsic value. If this were true, then the Crypto Market would not be worth a TRILLION Dollars (USD). Yes, it is true that there have been years of price discovery for many of these assets to obtain this worth. Only time will tell how HODL Signal Token proves its market driven value.')}</FAQContent>
            <FAQContent>{t('What we do know is HODL Signal Token was created and established from initial design to be a true Store-of-Value. It is designed to have a limited supply on the open market, and the coins minted by the Smart Contract only to pay mining rewards to the HODLers. This chokes supply on the open market, thus driving its scarcity and value up. The network runs on autopilot based on its Smart Contracts (code). ')}</FAQContent>
            <FAQContent>{t('By design, more and more Tokens will be HODLed and limit fewer and fewer tokens available for purchase. This continuous choking of supply to the open market (exchanges) drives up price and thus eliminates the speculative greater fool theory. Furthermore, the natural market forces will drive up the price and new Buyers are not required to pay higher prices. New Buyers only pay the market price to obtain more HODL Signal Tokens.')}</FAQContent>
          </div>
        }
        <Separator />
        <FAQTitle onClick={toggle69}>{t('Who created HODL Signal Token (Founders/Creators/Developers)?')}</FAQTitle>
        {
          isShow69 && <div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('They are a Group of Individuals That Believe in 3 Guiding Principles:')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Do No Harm')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Agorism')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Individual Monetary Sovereignty ')}</FAQContent>
              </Flex>
            </div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('The Banking Industry has VERY powerful people')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('HODL Signal is a Direct Competitor to Banking\'s Most Popular and Profitable Products')}</FAQContent>
              </Flex>
            </div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('From Sun Tzu\'s Art of War:')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('"O divine art of subtlety and secrecy! Through you we learn to be invisible, through you inaudible; and hence we can hold the enemy\'s fate in our hands."')}</FAQContent>
              </Flex>
            </div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('The Founders/Creators of HODL Signal Will Remain Anonymous and for Good Reason')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('"It\'s Better to Conceal Yourself If You\'re Going to Undercut the Big Banks, and Build a Better Product"')}</FAQContent>
              </Flex>
            </div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('HODL Signal is a Gift to the World')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('A Gift to You ')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('The Founders/Creators/Developers DO NOT WANT or Expect Reciprocity from It ')}</FAQContent>
              </Flex>
            </div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('Just Like Satoshi Nakamoto Gave Us Bitcoin and Remains Anonymous, So Do They ')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Think of the Founders/Creators as Cousins of Satoshi Nakamoto, May Our Cousin Rest in Peace ')}</FAQContent>
              </Flex>
            </div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('HODL Signal Token Founders Remain Neutral and Impartial to All Other Crypto Projects')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('The Founders Remaining Anonymous Also Prevents HODL Signal from Being Considered an Unregistered Security from the US SEC (Security & Exchange Commission)')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('More Importantly HODL Signal is Just Code that Lives in the Cloud – Code is Law, and no Human Interaction is Required or Expected. Furthermore, it is decentralized and can function without a website.')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('They Believe that HODL Signal\'s Aggressive Mining Rewards Rates will be an Example to the World')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('It Will Show a Big Difference Between Cryptos & the Banks')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('The Founders Believe that the World\'s Excessive Money Printing by the Central Banks will Create Unbearable Inflation Soon')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Many of us are Already Suffering from their Sham Called Inflation')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Inflation is Nothing More than a Regressive Tax')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('The Banks are Ruled by Greed Because They Choose to Pay So Little in Mining Rewards')}</FAQContent>
              </Flex>
            </div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('The Founders also Believe HODL Signal Will Be a Hedge & Safe-Haven to Preserve Wealth for Savers All Around the World, especially Those in Third World Countries Due to Low Gas Fees')}</FAQContent>
            </Flex>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('Another Founder Philosophy is that Cryptocurrencies have Lost Site of the Original Intent and Purpose:')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('5 Pillar Principle of a Cryptocurrency Seems to Have Vanished')}</FAQContent>
              </Flex>
              <div style={{ paddingLeft: '40px' }}>
                <Flex alignItems="start">
                  <FAQPrefix>{t('')}</FAQPrefix>
                  <FAQContent>{t('New Cryptos no Longer Incorporate them in their Design')}</FAQContent>
                </Flex>
                <Flex alignItems="start">
                  <FAQPrefix>{t('')}</FAQPrefix>
                  <FAQContent>{t('A True and Authentic Cryptocurrency has all 5 Pillars – No Shortcuts')}</FAQContent>
                </Flex>
              </div>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Too Many Cryptos Encourage 3rd Parties Between You and Your Cryptos – This was never part of the original design of Bitcoin')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Third Party Exchanges, Leverage Trading, DeFi Yield Farming, and Crypto Lending with a 3rd Party is Abhorrent')}</FAQContent>
              </Flex>
            </div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('Finally, Their Other Goal is for HODL Signal to Spin Like a Top in Space – Indefinitely & Without Human Interactions')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('They Prefer no DAO or Non-Profit or Organization/Association – HODL Signal is ONLY to be Code & Community Driven')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Organizations allow for the Human Frailties of Greed & Lust for Power to Destroy a Crypto from Within')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('They have Seen Far Too Many Promising Projects be Destroyed by Power Grabs and Tribalism')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Code is Law, Code is Neutral, Code Eliminates Human Weaknesses and allows for HODL Signal\'s Smart Contract to Function in Perpetuity')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Furthermore, a DAO or Group or Association or Non-Profit can Create a Target for the SEC to Tag HODL Signal an Unregistered Security')}</FAQContent>
              </Flex>
            </div>
            <Flex alignItems="start">
              <FAQPrefix>{t('•')}</FAQPrefix>
              <FAQContent>{t('To Learn More About the Founders/Creators Read the Complete Whitepaper')}</FAQContent>
            </Flex>
            <div style={{ paddingLeft: '40px' }}>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Read Their Manifesto')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('Read Their Letter to You')}</FAQContent>
              </Flex>
              <Flex alignItems="start">
                <FAQPrefix>{t('o')}</FAQPrefix>
                <FAQContent>{t('The Whitepaper Will Also Tell You Who They are Not')}</FAQContent>
              </Flex>
            </div>
            <FAQContent>{t('The Founders who will remain anonymous (like Satoshi Nakamoto the creator of Bitcoin). They believe in Individual Monetary Sovereignty. The advancement of Blockchain and Smart Contracts has allowed for an Mining Rewards Earning Instrument to be created that requires no go-between or agent or exchange or 3rd party. To make HODL SIGNAL Token available to the world required no investors to answer to. This means that it could be created for all to use, and its use would not to be restricted by any government, or agency, or regulator, or bureaucrat. Therefore, no investors were necessary or welcomed because their agenda and this free product given to the world might have required conditions from those that invested in it. ')}</FAQContent>
            <FAQContent>{t('The Banking Industry has very, very powerful people. HODL SIGNAL TOKEN is a direct competitor to their most popular and profitable products (Savings Accounts, Time Deposits, CDs, and other Mining-Rewards-Bearing Accounts) Remember Banks hypothecate your deposits in their institutions and they do not want to give up this control of your account, despite your deposit is their liability. The creators believe that the Bankers will eventually feel threatened and may wish to pursue, harass, or even harm the creators and/or their families. They will even use governmental agency to pursue the Founders/Creators and try to stop it. They will stop at nothing to prevent everyone\'s right to control you and your money. This is why they are fearful about a breach in their privacy and wish to remain anonymous.  They also believe that Satoshi Nakamoto did the right thing to be an unknown contributor to making the world a better place by giving humanity an unregulatable, borderless, and nongovernmental cryptographic currency. Think of HODL SIGNAL TOKEN Founders as family members of Satoshi Nakamoto. May he rest in peace. ')}</FAQContent>
            <FAQContent>{t('Bottom line, if it works, who cares who created it!')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle70}>{t('Where does HODL SIGNAL TOKEN get its value? ')}</FAQTitle>
        {
          isShow70 && <div>
            <FAQContent>{t('Where do the shoes you wear get their value? Their value first derives from their function. Your shoes protect your feet and/or look good. HODL SIGNAL TOKEN also gets its value from its function. It provides large mining rewards rates to HODLers, and the token is designed to grow in value, even while being HODLed from your wallet. Most shoes do not grow in value. ')}</FAQContent>
            <FAQContent>{t('Initial price is determined by the market. Who will pay what for what, and when for what? This is true for any commodity, service, or item. At the end of the day, the free market will decide the value of one HODL SIGNAL TOKEN. Value is not only determined by function, but it is also determined by scarcity. HODL SIGNAL TOKEN will have limited quantity on the open market, thus driving up its price. All this is by designed, because holders are incentivized to HODL for longer terms, and not spend them. ')}</FAQContent>
            <FAQContent>{t('HODL SIGNAL TOKEN can restrict supply by mining only what needs to be paid in mining rewards. Furthermore, Users are incentivized to HODL and reduce the supply of tokens in the open market. This is a tenet of “Store-of-Value."')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle71}>{t('Does HODL SIGNAL TOKEN have any partnerships?')}</FAQTitle>
        {
          isShow71 && <div>
            <FAQContent>{t('No. HODL SIGNAL TOKEN has not entered any business deals/contracts. It is not a DAO (Decentralized Autonomous Organization) or have a central planning core or group, etc. There is not a CEO or an office or a central planning group. It is a decentralized auto ran using smart contracts. Therefore, there are not any one individual or organization that can make partnerships/agreements with HODL SIGNAL Token. This lack of an office, DAO, or spokesperson is part of the security and protection to eliminate governmental and big bank aggressions. HODL SIGNAL Token is for the people, by the people, and for all who choose to execute the code to earn mining rewards from their wallet.')}</FAQContent>
            <FAQContent>{t('Remember, HODL SIGNAL Token has no central authority, office, organization, etc. It is decentralized and autonomous. It is self-governed by computer code that is distributed all over the world.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle72}>{t('Is HODL SIGNAL TOKEN an Organization or a Non-Profit, or a For Profit Corporation? ')}</FAQTitle>
        {
          isShow72 && <div>
            <FAQContent>{t('HODL SIGNAL TOKEN is NOT an organization, a company, a corporation, and it is not a DAO (Decentralized Autonomous Organization). Yes, it has a website. However, a website is not necessary for it to exist, work, or function. Everyone can interact with the smart contract through the Polygon explorer.')}</FAQContent>
            <FAQContent>{t('There is no central authority, no group, or office, or organization or individuals for payments or profits to be distributed to. There are no profits, so in one sense it is a non-profit, but that implies some sort of group, association or organization and there is not one. It is decentralized and the Polygon Network is decentralized, and transactions are processed/confirmed by machines that operate all over the world. It fails the classification of a DAO because there is no organization to speak of.')}</FAQContent>
          </div>
        }
        <Separator />
        <FAQTitle onClick={toggle73}>{t('Why not just dump my free claimed HODL Signal Tokens on an exchange?')}</FAQTitle>
        {
          isShow73 && <div>
            <FAQContent>{t('Here is why you do not want to just dump your claimed coins. If your goal is to obtain as many Bitcoins as possible, then you are better off earning monthly mining rewards and convert those mining rewards earnings into Bitcoins. This should continue indefinitely and allow you to earn far more Bitcoins than just one single dump of free claimed HODL Signal Tokens.')}</FAQContent>
            <FAQContent>{t('Many Bitcoin Maximalist believe that Free Airdropped Coins = Free Bitcoins. And this is true. The strategy for the Bitcoin Maximalist is to always obtain the most Bitcoins as possible. If your strategy is to accumulate as much Bitcoin as possible, then the BEST strategy is to have a steady flow of mining rewards that you keep converting into Bitcoin. This indefinite passive income of HODL Signal Token from making deposits and using the mining rewards to get more and more free Bitcoin is a better game theory. Even the Bitcoin Maximalist should HODL some of their claimed HODL Signal Tokens to later convert into more Bitcoins.')}</FAQContent>
            <FAQContent>{t('Most airdropping projects have their all-time price high on day one. With them selling early increases your Bitcoins. However, one should consider that HODL Signal Token is quite different in that it is designed as a Store-of-Value and is also designed to increase in value over time. Thus, making it illogical to sell early. During the claiming phases downward pressure is going to be prevalent, but it is designed to appreciate in value after the claiming of 100 different Blockchains has ended. This is because of its specific utility to incentivize HODLing.')}</FAQContent>
            <FAQContent>{t('If a Bitcoin Maximalist wishes to maximize their Bitcoin holdings, then making a few HODLS, and selling the mining rewards would give them a constant Bitcoin income stream. Selling all of their initial claimed coins right away for more Bitcoin seems like a poor strategy if it\'s probable you could make more Bitcoin over time. Passive HODL Signal Token income for more Bitcoin accumulation is sound game theory.')}</FAQContent>
            <FAQContent>{t('Again, remember HODL Signal Token is designed to inflate in value over time.')}</FAQContent>
            <FAQContent>{t('If the coin continues to grow in value, then you have lost nothing and only gained an mining rewards reward that can be transformed into more Bitcoin.')}</FAQContent>
            <FAQContent>{t('People will learn that HODL Signal Token has a triple payoff: ')}</FAQContent>
            <FAQContent>{t('1st Earning Mining Rewards     2nd Growth in Value      3rd Passive Income  ')}</FAQContent>
          </div>
        }
        <Separator />
        <FAQTitle onClick={toggle74}>{t('How to Claim HODL SIGNAL TOKENS?')}</FAQTitle>
        {
          isShow74 && <div>
            <FAQContent>{t('100+ Blockchains will be selected for Claiming. Claiming is Free. You need only pay for the Polygon (MATIC) gas fee to claim and the cost to do a digital signature on your Crypto Blockchain that you are claiming.')}</FAQContent>
            <FAQContent>{t('You do not give up the Crypto you are claiming. You are only proving you own/control the address in which they sit.')}</FAQContent>
            <FAQContent>{t('To Claim you need to have a Metamask Wallet setup pointing to the Polygon Mainnet. You then go to the specific contract for the Blockchain that you want to claim.')}</FAQContent>
            <FAQContent>{t('Also, it is important that you claim within the 10-day window following the snapshot of your blockchain(s).')}</FAQContent>
            <FAQContent>{t('For further details, go to Claiming page on this website. Also, your favorite Affiliate can help you through this process. ')}</FAQContent>
            <FAQContent>{t('Be careful not to fall for scammers. Stick to this website. You can do everything from this website except for the digital signature.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle75}>{t('How to Transform/Convert my coins and tokens into HODL SIGNAL TOKENS?')}</FAQTitle>
        {
          isShow75 && <div>
            <FAQContent>{t('Transforming is sending your Coins/Tokens into the smart contract address in order to receive HODL SIGNAL TOKENS on Distribution Day.')}</FAQContent>
            <FAQContent>{t('The Transformation, like the Claiming function requires you to have a Metamask Wallet setup and pointing (network) to the Polygon Network. You then enter the proper information into the correct contract for that blockchain (Name of Blockchain, Your Address, Quantity of Coins/Tokens you will Transform and optional Affiliate Address. You then send your Blockchain Coins/Tokens to the proper address that is on this website.')}</FAQContent>
            <FAQContent>{t('Be careful not to fall for scammers. Stick to this website. You can do everything from this website except for the send transaction from your Blockchain to the proper transforming address for you blockchain on this website. DO NOT send your Coins/Tokens to any other address other than the addresses that are posted on this website.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle76}>{t('Can I do a Claim and a Transform for the same Blockchain?')}</FAQTitle>
        {
          isShow76 && <FAQContent>{t('Yes, you can. However, you must do a separate claim for each address in the blockchain that you are claiming. In other words, you cannot do 1 smart contract entry for multiple addresses.')}</FAQContent>
        }
        <FAQTitle onClick={toggle77}>{t('Will Privacy Coins be Selected for the Claiming Cycle?')}</FAQTitle>
        {
          isShow77 && <FAQContent>{t('No, due to their privacy ledger technology they cannot be selected for the Claiming Cycles. However, some will be selected for Transformations.')}</FAQContent>
        }
        <FAQTitle onClick={toggle78}>{t('Where Can I Receive Additional Claiming Instructions? ')}</FAQTitle>
        {
          isShow78 && <div>
            <FAQContent>{t('Detailed instructions on how to claim your Coins/Tokens during a Blockchain\'s Claiming Cycle are found on this website and on social media sites. Follow your favorite Affiliates that you trust and learn from their postings.')}</FAQContent>
            <FAQContent>{t('The Community Members or Affiliates may post “How To” video links on YouTube, Steemit.com, Bitchute.com, BitTubers.com, LBRY.TV, or other social media platforms. Community members may also post videos on this subject. Show your Affiliate some love and use their Affiliate Address to earn bonuses for both of you.')}</FAQContent>
            <FAQContent>{t('Community members will also help with the policing so that the scammers can be pointed out and shamed out of existence. The Free Market always rights itself. ')}</FAQContent>
            <FAQContent>{t('Remember, installing a Metamask wallet doesn\'t require (KYC/AML).  So Claiming also doesn\'t require KYC/AML.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle79}>{t('Do I have to claim each wallet address separately? ')}</FAQTitle>
        {
          isShow79 && <FAQContent>{t('Yes.')}</FAQContent>
        }
        <FAQTitle onClick={toggle80}>{t('Which Blockchains/Token/Cryptocurrencies will get snapshots? ')}</FAQTitle>
        {
          isShow80 && <div>
            <FAQContent>{t('The list of which Blockchains (Coins/Tokens) that will get a snapshot has not been announced yet. Follow HODL SIGNAL on its social media channels. Announcements will be made on both social media channels and on the Blockchain\'s social media channels that are selected.')}</FAQContent>
            <FAQContent>{t('Affiliates will also help individuals stay informed. Follow your favorite and most trusted Affiliate to stay up to date on which Blockchain will get selected for a snapshot and when it will happen.')}</FAQContent>
            <FAQContent>{t('A 10 Day notice in advance of the snapshot for each Blockchain will be announced on official social media accounts. At the time of the snapshot, you will need to control wallet(s) of said Blockchain.  During the claiming phase for that Blockchain you will need to verify ownership/control of your wallet address(s) to receive your free HODL SIGNAL TOKENS.')}</FAQContent>
            <FAQContent>{t('It is possible that when each Blockchain is announced to be snapshotted for HODL SIGNAL TOKENS claiming it will create a buzz and price pump for each Coin/Token.  This is what is meant by the coming Crypto Gold Rush & Crypto Gold Rush to Shit Coins. ')}</FAQContent>
            <FAQContent>{t('"Who knows, your favorite Cryptocurrency could see a 10 Day price pump."')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle81}>{t('Do I have to fill out any AML/KYC? ')}</FAQTitle>
        {
          isShow81 && <FAQContent>{t('No.')}</FAQContent>
        }
        <FAQTitle onClick={toggle82}>{t('Can I claim anonymously? ')}</FAQTitle>
        {
          isShow82 && <div>
            <FAQContent>{t('Yes.')}</FAQContent>
            <FAQContent>{t('There are numerous ways everyone can claim anonymously.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle83}>{t('How do I buy HODL SIGNAL TOKENS (HODLS) on the open market?')}</FAQTitle>
        {
          isShow83 && <FAQContent>{t('After “Distribution Day” or Launch Day, the Decentralized Exchanges (DEX) will be listed on the website.')}</FAQContent>
        }
        <FAQTitle onClick={toggle84}>{t('CAUTION:  Don\'t Invest More Than You Are Willing To Lose When Using Debt to Buy Coins:')}</FAQTitle>
        {
          isShow84 && <div>
            <FAQContent>{t('Again, the Founders/Creators are not suggesting everyone go out and get a loan to buy HODL SIGNAL TOKEN. At least not yet. Everyone should watch HODL SIGNAL TOKEN\'S price action, its value growth over time and its adoption growth rate. As price and adoption history proves out that it is a Store-of-Value, then everyone should consider their own risk tolerance.')}</FAQContent>
            <FAQContent>{t('After the Claiming Cycle has ended and the Transformation Drive has also ended, it will be natural for downward price pressures to end. Far too many people will Claim Coins and immediately dump them on the open markets. ')}</FAQContent>
            <FAQContent>{t('The use of Debt instruments to purchase new assets has always been a risky one. Therefore everyone, should do their own due diligence, market and price research, and historical numbers as well as look at HODL SIGNAL TOKEN\'S fundamentals before deciding to use debt to purchase HODLS.  You will not receive financial advice on this website.  Everyone must evaluate their own risk and not invest more than they are willing to lose.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle85}>{t('Can I trade my CD or Time Deposit Assets at my Bank for HODL SIGNAL TOKENS? ')}</FAQTitle>
        {
          isShow85 && <div>
            <FAQContent>{t('No. Absolutely not. HODL SIGNAL TOKENS are a competitor to the banks. They want you to keep your money in their bank and pay you tiny mining rewards rates, even below your country\'s inflation rate so you are net, net losing money. They would not do it if you asked them a million times.')}</FAQContent>
            <FAQContent>{t('HODL SIGNAL TOKEN is not offered at any Bank in the world.  It has not partnered with any Banks. HODL SIGNAL TOKEN has not entered into any business deals/contracts.  Remember HODL SIGNAL TOKEN has no central authority, office, organization, etc. It is decentralized and autonomous. It is self-governed by computer code that is distributed all over the world.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle86}>{t('Will HODL SIGNAL TOKEN work as a Cryptocurrency? ')}</FAQTitle>
        {
          isShow86 && <div>
            <FAQContent>{t('Sure. Why not? Isn\'t it already? ')}</FAQContent>
            <FAQContent>{t('Note:  To transfer fiat cash from one hand to another it is free. The Founders believe that transaction fees should be free or as close as possible to free. For this reason, HODL SIGNAL TOKEN transaction fees (gas fees) are extremely cheap. This is a key reason Polygon (MATIC) network was chosen.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle87}>{t('Is HODL SIGNAL TOKEN quantum computing resistant? ')}</FAQTitle>
        {
          isShow87 && <div>
            <FAQContent>{t('Technically no. However, many argue that no cryptocurrency is quantum computing resistant. Even more notably is that although quantum computers may be faster than classical computers for some problem types, those described in a quantum computing Wikipedia posting states that a quantum computer cannot solve any problem that a classical computer cannot already solve. The issues are in the speed of computing. The real question is the encryption of cryptocurrency is at significantly higher levels making it nearly impossible for any classic or quantum computer to crack. ')}</FAQContent>
            <FAQContent>{t('However, could not quantum computing also be deployed to increase cryptography against other quantum computers? This is what is happening everyday as our computing power gets faster and faster. Adjustments are made and security patches are created, and we evolve.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle88}>{t('Does HODL SIGNAL TOKEN have Brand Information for Affiliates to use? ')}</FAQTitle>
        {
          isShow88 && <div>
            <FAQContent>{t('Yes, you can download the various logos and icons for accurate and uniformed look of the brand. Albeit the “Brand” is a community driven concept for a Cryptocurrency that is not centralized. It is just the opposite. Hopefully, Affiliates and Users will use the same logos that can be freely downloaded from this website. This way the logo/brand will not get bastardized.')}</FAQContent>
            <FAQContent>{t('As for Brand Info…')}</FAQContent>
            <FAQContent>{t('HODL SIGNAL TOKEN encourages its affiliates to use the logo and the icon logo so that we can get Brand Awareness out not just within the Crypto Community but in front of all those that want to save and find it difficult to do (because banks steal with inflation their disposable incomes & pay so little in mining rewards).')}</FAQContent>
            <FAQContent>{t('BRAND STYLE:')}</FAQContent>
            <FAQContent>{t('This brand style guide contains everything you need to create a thoroughly recognizable HODL SIGNAL TOKEN touchpoint. It also offers our valued community members the necessary information to display HODL SIGNAL clearly and successfully in a unified manner.')}</FAQContent>
            <FAQContent>{t('HONEST:')}</FAQContent>
            <FAQContent>{t('The HODL SIGNAL community uses words that convey trust and transparency to maintain and garner trust with our users.')}</FAQContent>
            <FAQContent>{t('To maintain an honest voice with our apps and community members are to refrain from destructive or negative words against other products, currencies, or competitors. The Founders & Creators have adopted a neutral approach to other Cryptocurrency projects and inspire to be the Swiss of Crypto. We inspire our community members to act and portray HODL SIGNAL TOKEN in this factual and peaceful manner as well. Crypto Tribalism is not welcomed in the HODL SIGNAL community.')}</FAQContent>
            <FAQContent>{t('Our focus is our own offering and the intentions that we have in creating a better Cryptocurrency than Corporate pseudo-cryptocurrencies (Centralized), and Government Fiat currencies (controlled by Central Banks). ')}</FAQContent>
            <FAQContent>{t('TRUST:')}</FAQContent>
            <FAQContent>{t('Conveying trust throughout the HODL SIGNAL\'S ecosystem requires stable development, intentional design, and clear messaging.')}</FAQContent>
            <FAQContent>{t('CONSISTENCY:')}</FAQContent>
            <FAQContent>{t('Consistency is important in that it promotes a continuation of stability in any experience or application a user or potential user sees when they view HODL SIGNAL TOKEN on any media.  Stability across an ecosystem increases adoption through trusting the experience.')}</FAQContent>
          </div>
        }
        <Separator />
        <Text fontSize='18px' margin="20px 0">{t('DEFINITIONS:')}</Text>
        <FAQTitle onClick={toggle89}>{t('What is the definition of Fiat Money? ')}</FAQTitle>
        {
          isShow89 && <div>
            <FAQContent>{t('The simple definition of “Fiat Money” is inconvertible paper money made legal tender by a government decree. In other words, it is not money unless the government says it is money. Fiat money is a currency without intrinsic value that has been established as money through and by government regulations and laws. ')}</FAQContent>
            <FAQContent>{t('Another definition or element of “Fiat Money” is that it is not backed by an asset, i.e., gold. Therefore, it is a currency without intrinsic value. Fiat Money does not have use value and gets its value only because a government maintains and deems it has value. The second element of this statement requires the holders & users of the fiat money to have faith in its value. ')}</FAQContent>
            <FAQContent>{t('Representative money is like fiat money, but it represents a claim on a commodity. The representative money requires convertibility to a commodity at a greater or lesser value. ')}</FAQContent>
            <FAQContent>{t('Bitcoin & other Cryptocurrencies may or may not be legal tender by a government. It is true that more and more governments, both small and large are making laws that recognize Cryptocurrencies as currencies and/or assets. The decree of value comes from individuals and groups who agree on its value as a medium of exchange. The creation of this new asset class is where many people believe its intrinsic value comes from, and because it is utility in addition to becoming a borderless medium of exchange.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle90}>{t('What is Fractional Reserve Banking? ')}</FAQTitle>
        {
          isShow90 && <div>
            <FAQContent>{t('Fractional reserve banking is a banking system in which only a fraction of a bank\'s deposits is backed by actual cash on hand and are available for withdrawal. This is done to expand the economy by freeing up capital that can be loaned out to other parties. However, deposits are not 100% backed or collateralized. ')}</FAQContent>
            <FAQContent>{t('Banks are required to keep a certain amount of the cash depositors give them on hand and available for withdrawal. That is, if someone deposits $100, the bank cannot lend out the entire amount. That said, it is not required to keep the entire amount either. Most banks are required to keep 10% of the deposit, referred to as reserves. This reserve requirement is set by the Federal Reserve. ')}</FAQContent>
            <FAQContent>{t('Here is the danger of Fractional Reserve Banking. If the bank only maintains 10% of the deposits, and everyone wanted their money out at the same time (run of the bank), the banking system would collapse. However, the Federal Reserve CAN stop a bank run. This means, they control your money, and you do not. It also means at a time of crisis you may not have access to all your deposits. ')}</FAQContent>
            <FAQContent>{t('A HODL SIGNAL TOKEN “Run on The Bank” cannot be stopped. This is a good thing. No central authority can step in and tell you, you can or cannot spend/send or HODL.')}</FAQContent>
            <FAQContent>{t('HODL SIGNAL allows for everyone to maintain their control of their tokens. A 3rd party (bank) does not hold their tokens. Furthermore, HODL SIGNAL allows for a run on the bank. No institution i.e., Federal Reserve can stop the people from withdrawing their coins from a decentralized exchange. ')}</FAQContent>
            <FAQContent>{t('Best part, HODL SIGNAL TOKEN is asset backed. A “Run on The Bank” means everyone can walk away with value. HODL SIGNAL TOKEN cannot go to zero unless Polygon also goes to zero.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle91}>{t('What is a Central Bank and a Central Banking System? ')}</FAQTitle>
        {
          isShow91 && <div>
            <FAQContent>{t('James Garfield said, "Whomsoever controls the volume of money in any country is absolute master of all industry and commerce and when you realize that the entire system is very easily controlled, one way or another, by a few powerful men at the top, you will not have to be told how periods of inflation and depression originate."')}</FAQContent>
            <FAQContent>{t('Central Banks (Reserve Banks or Monetary Authority) is the institution that manages the currency, money supply, and mining rewards rates of a state or nation, or group of nations (monetary union). A Central Bank is a cartel of big banks that oversees all the commercial banking system and possesses a monopoly on increasing the monetary supply of the “state.”  It controls the money printing presses.')}</FAQContent>
            <FAQContent>{t('In other words, they control how many Dollars are circulated. So, the Central Bank controls the scarcity of the money. This is how they tax us with inflation. The more Dollars in the system, the less value they have. The more Dollars they print (or tell the Dept of Treasury) to print the less the Dollar is worth and the higher the cost of milk (or anything else we wish to purchase). ')}</FAQContent>
            <FAQContent>{t('Therefore, Milton Friedman was correct when he said, "Inflation is taxation without representation."')}</FAQContent>
            <FAQContent>{t('One must understand that a Central Bank controls the Big Banks, and by controlling the money supply they also control the mining rewards rates. When we understand that they control the mining rewards rates, then we know they control the cost of our auto loans, home mortgage, personal loans & even our student debt. A Central Bank has a deep reach into our lives and directly into our wallets and pockets. ')}</FAQContent>
            <FAQContent>{t('They then also control a business loan and the mining rewards that must be paid on that loan. That mining rewards rate cost is then passed onto us, the consumer. When we purchase products and services from a business, we might also take out a loan for that purchase, i.e., a car. The mining rewards on that loan also goes back to the banks, who then pay that to the Central Bank. In other words, Central Banks get a cut off every loan in the world.')}</FAQContent>
            <FAQContent>{t('Ask yourself (now that you know how much of your life they control), did you vote for the Board Members of your Countries Central Bank? Do you even know who they are? Do they represent your mining rewards (excuse the pun)? Who are these Central Bankers? Where did they come from? Are they monovalent or benevolent? Can you be sure they are thinking of you, and your family, and your views, or do they represent themselves and their member banks? Are their actions in the best mining rewards of the Country or their Bank Cartel? Who are these people, these Central Bankers that everyday reach into your pocket and take money from you in the form of mining rewards? ')}</FAQContent>
            <FAQContent>{t('They will tell you they are there to be the lender of last resort. They will cover your loss if your bank goes under. They tell you that they prevent bank runs (but they just slow and prevent your access to YOUR money when you want it). They will tell you that they discourage reckless or fraudulent behavior by member banks. Key or operative word is "discouraged."')}</FAQContent>
            <FAQContent>{t('Central Banks recommend to their governmental legislation bodies only laws & regulations to strengthen their powers to help their member banks. Do they really take your welfare and well-being into account? Shouldn\'t they be thinking of YOU first since they have so much power? Well, they Do not. ')}</FAQContent>
            <FAQContent>{t('Central Banks plan inflation levels. CORRECTION, Central Banks create inflation. This is their evil doing. If you still do not think it hurts you then maybe Sam Ewing words will help, "Inflation is when you pay fifteen dollars for the ten-dollar haircut you used to get for five dollars when you had hair."')}</FAQContent>
            <FAQContent>{t('Finally, a notable example of the intentions of Central Banking is seeing the drop-in value of the US Dollar. The US Dollar has lost 98% of its value through inflation since 1913 when the Federal Reserve (US Central Bank) was created. ')}</FAQContent>
            <FAQContent>{t('Jay Leno said it best, "I was reading in the paper today that Congress wants to replace the dollar bill with a coin. They have already done it. It\'s called a nickel."')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle92}>{t('What is a Crypto Currency or Cryptocurrency? ')}</FAQTitle>
        {
          isShow92 && <div>
            <FAQContent>{t('Magic Internet Money or Email Money is a great description of what and how Cryptocurrency works. Cryptocurrency is a digital asset designed to work as a medium of exchange that uses strong cryptography to secure financial transactions, control the creation of additional units, and verify the transfer of assets from one peer to another peer (peer defined as P2P Network, where the “peer” is a computer/smart phone/device). This ability to transfer from one device to another, allows for instantaneous transactions that are borderless, work 24/7 and can cost sometimes nothing to transact. The other beauty is there are no 3rd parties, or organizations or governments between two people that wish to transact between each other. If there is a 3rd party between two people transacting digitally then in its purest form it is not a Cryptocurrency.  This disqualifies Facebook\'s Libra Coin from being a Cryptocurrency.')}</FAQContent>
            <FAQContent>{t('A key distinction of Cryptocurrency is that it is decentralized and works through a distributed ledger technology, typically called a blockchain. This blockchain or network serves as a public financial transaction database. Many blockchains or Cryptocurrency Networks are not owned by anyone individual, group, organization, or government. In other words, they are decentralized networks. ')}</FAQContent>
            <FAQContent>{t('For example, Bitcoin has no office, CEO, manger, partner, etc. The network in which it operates on is owned by no one yet shared by all. The most important feature of a Cryptocurrency is that it is not controlled by any central authority. The decentralized nature of blockchain technology makes Cryptocurrency theoretically immune to the old ways of governmental controls and interferences. ')}</FAQContent>
            <FAQContent>{t('A Cryptocurrency is a digital currency built with cryptographic protocols that make transactions secure and difficult to fake. ')}</FAQContent>
            <FAQContent>{t('Cryptocurrency makes it easier to conduct any transactions, for transfers are simplified through use of public and private keys for security and privacy purposes. These transfers can be done with minimal processing fees, allowing users to avoid the steep fees charged by traditional financial institutions. Some currencies are Free to transact, and some are extremely private, while others can be easily tracked. An example is Bitcoin. Law enforcement can track Bitcoin far better than cash. ')}</FAQContent>
            <FAQContent>{t('Today Cryptocurrencies have become a global phenomenon known to most people. While still somehow geeky and not understood by most people, banks, governments, and many companies are not aware of their importance. {excerpts from Wikipedia & blockgeeks.com what-is-cryptocurrency} ')}</FAQContent>
            <FAQContent>{t(' Jeff Berwick, The Dollar Vigilante said this about Cryptocurrency, "It is a paradigm shift in money and banking.  It is the first time ever that humans have the ability to not only hold their own money inside their own head, by just memorizing your keys [password] but are also their own bank for the first time in history."')}</FAQContent>
            <FAQContent>{t('In seconds you can send money to someone on the other side of the globe, and without a 3rd party needing to approve or be between you and the receiver.  You also need not involve a government or bank to send money around the world.')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle93}>{t('Where do Cryptocurrencies get their value?  ')}</FAQTitle>
        {
          isShow93 && <div>
            <FAQContent>{t('For cryptocurrencies to derive value a few assumptions must be made. This can be difficult for some to comprehend in our new digital economy. In other words, just because it does not exist in physical form, does not mean it doesn\'t exist and doesn\'t have value and purpose (utility). ')}</FAQContent>
            <FAQContent>{t('Our first assumption is that a Cryptocurrency will derive its value both from its use as a medium of exchange and as a store of value. We base this on the assumption that for something to be used as a store of value it needs to have some intrinsic value, and if a Cryptocurrency does not achieve success as a medium of exchange, it will have no practical utility and thus no intrinsic value and will not be appealing as a store of value. However, Bananas have intrinsic value until you eat them. Water might have intrinsic value in the desert, but not in your toilet.')}</FAQContent>
            <FAQContent>{t('To put it simply, value comes from a medium of exchange. Two parties need to be able to transact with it. Cryptocurrencies do this very well in a peer-to-peer environment (smart phone to smart phone) or (PC to PC). ')}</FAQContent>
            <FAQContent>{t('The second assumption is that the Cryptocurrency supply is limited and that has been specified in its current protocol (scarcity). Just like there is a finite amount of gold or silver in the world, a cryptocurrency must have a limited supply. Limiting supply increases scarcity which leads to increased values, so long as it is also used as a medium of exchange. ')}</FAQContent>
            <FAQContent>{t('The third assumption is that the Cryptocurrency gains legitimacy, larger scale investors, and more adoption. This will result in more price volatility.  Volatility will decrease in time to the point that it is not a concern. ')}</FAQContent>
            <FAQContent>{t('The fourth assumption is that the current value of a Cryptocurrency is driven by speculative mining rewards.  Price volatility can lead to many speculators entering into the space to make quick profits. They also use it as a medium of exchange and a store of value while investing in the Cryptocurrency. ')}</FAQContent>
            <FAQContent>{t('The fifth assumption has to do with fractional reserve banking. A true Cryptocurrency will never de-evolve into a fractional reserve banking system. This means that the protocol will not change its total supply that was originally programmed, or the inflation rate of its growth will not significantly change, nor will some form of counterfeiting that is deemed legal will be allowed. Fractional reserve banking is debasing of one\'s currency. It includes leveraging, hypothecation and increasing its supply to the point it loses its ability to be a store of value. A Government that creates a “Cryptocurrency” is not a “Cryptocurrency” because it is one that is centralized, does not have a supply cap, and has too many controls/restrictions of who can use it and for what purposes. Facebook\'s Libra coin also fails this fifth assumption due to its Centralization, its KYC requirements, etc.')}</FAQContent>
            <FAQContent>{t('Therefore the classification & definition requirements of a Cryptocurrency in its purest and true form is it must be one that is cryptographic, operates as a peer-to-peer medium of exchange, has scarcity properties, is borderless, has no restrictions on who or where it can be used, its transactions are permanent (irreversible), and no 3rd party is between the parties that are transacting with it.  In other words, it supports the Human Right of Individual Monetary Sovereignty.')}</FAQContent>
            <FAQContent>{t('All these assumptions to work means that the Cryptocurrency has the following characteristics:  Fungibility, Scarcity, Durability, Transferability and Divisibility. These characteristics make Cryptocurrencies have true value and are a new asset class and many can be used as a medium of exchange and therefore have a classification of "currency" or "money."')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle94}>{t('What is a Blockchain? ')}</FAQTitle>
        {
          isShow94 && <div>
            <FAQContent>{t('A Blockchain is a system in which a record of transactions made in Bitcoin, or another cryptocurrency are maintained across several computers that are linked in a peer-to-peer network. "we can actually have a look at the blockchain and see evidence of what\'s going on" [google]')}</FAQContent>
            <FAQContent>{t('By design, a blockchain is resistant to modification of the data. It is "an open, distributed ledger that can record transactions between two parties efficiently and in a verifiable and permanent way". For use as a distributed ledger, a blockchain is typically managed by a peer-to-peer network collectively adhering to a protocol for inter-node communication and validating new blocks. Once recorded, the data in any given block cannot be altered retroactively without alteration of all subsequent blocks, which requires consensus of the network majority. Although blockchain records are alterable, blockchains may be considered secure by design and exemplify a distributed computing system with high Byzantine fault tolerance. Decentralized consensus has therefore been claimed with a blockchain.')}</FAQContent>
            <FAQContent>{t('[ https://en.wikipedia.org/wiki/Blockchain ] ')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle95}>{t('What is Proof of Work (PoW)? ')}</FAQTitle>
        {
          isShow95 && <div>
            <FAQContent>{t('Proof of work (PoW) is a protocol that has the main goal of deterring cyber-attacks such as a distributed denial-of-service attack (DDoS) which has the purpose of exhausting the resources of a computer system by sending multiple fake requests. ')}</FAQContent>
            <FAQContent>{t('Proof of Work is a requirement to define an expensive computer calculation, also called mining.  A reward is given to the first miner who solves each blocks problem. Network miners compete to be the first to find a solution for the mathematical problem. ')}</FAQContent>
            <FAQContent>{t('The first miner to solve a block received the coin, i.e., Bitcoin. This is how a coin is created and registered on the blockchain. ')}</FAQContent>
            <FAQContent>{t('The Proof of work concept existed even before Bitcoin, but Satoshi Nakamoto applied this technique to his/her – we still do not know who Nakamoto really is – digital currency revolutionizing the way traditional transactions are set. In fact, PoW idea was originally published by Cynthia Dwork and Moni Naor back in 1993, but the term “proof of work” was coined by Markus Jakobsson and Ari Juels in a document published in 1999.  [ https://blockgeeks.com/guides/proof-of-work-vs-proof-of-stake/ ] ')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle96}>{t('What is cryptocurrency mining and what is its purpose? ')}</FAQTitle>
        {
          isShow96 && <FAQContent>{t('The primary purpose of mining is to allow Bitcoin nodes to reach a secure, tamper-resistant consensus. Mining is also the mechanism used to introduce Bitcoins into the system: Miners are paid transaction fees as well as a "subsidy" of newly created coins. [ https://www.bitcoinmining.com/ ] ')}</FAQContent>
        }
        <FAQTitle onClick={toggle97}>{t('What is a Cryptocurrency Wallet? ')}</FAQTitle>
        {
          isShow97 && <div>
            <FAQContent>{t('A cryptocurrency wallet is a device, physical medium, program, or a service which stores the public and/or private keys and can be used to track ownership, receive, or spend cryptocurrencies. The cryptocurrency itself is not in the wallet. In case of Bitcoin and cryptocurrencies derived from it, the cryptocurrency is decentrally stored and maintained in a publicly available ledger called the blockchain. ')}</FAQContent>
            <FAQContent>{t('A cryptocurrency wallet, comparable to a bank account, contains a pair of public and private cryptographic keys. A public key allows for other wallets to make payments to the wallet\'s address, whereas a private key enables the spending of cryptocurrency from that address. ')}</FAQContent>
            <FAQContent>{t('[ https://en.wikipedia.org/wiki/Cryptocurrency_wallet ] ')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle98}>{t('What is a Cryptocurrency Paper Wallet? ')}</FAQTitle>
        {
          isShow98 && <div>
            <FAQContent>{t('A Cryptocurrency Paper Wallet is a piece of paper wallet that has your Public and Your Private Keys (password/pin#/access credentials) and is used as an offline cold storage method of saving cryptocurrency. It includes printing out your public and private keys on a piece of paper which you then store and save in a secure place. The keys are printed in the form of QR codes which you can scan in the future for all your transactions. The reason it is so safe is that it gives complete control to you, the user. You do not need to worry about the well-being of a piece of hardware, nor do you have to worry about hackers or any piece of malware. You just need to take care of a piece of paper.')}</FAQContent>
            <FAQContent>{t('Without a doubt, the safest way to store any cryptocurrency is using a paper wallet. This truly makes you the master of your investment, and if precautions are followed, there\'s no possibility of your private keys being known by anyone else. Of course, this means that keeping a record of them is even more important. Losing private keys means you will forfeit the entire contents of your paper wallet (but then again, that is true for every wallet out there.)')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle99}>{t('What is Proof of Stake (PoS)? ')}</FAQTitle>
        {
          isShow99 && <div>
            <FAQContent>{t('Proof of stake (PoS) is a type of consensus algorithm by which a cryptocurrency blockchain network aims to achieve distributed consensus. In PoS-based cryptocurrencies the creator of the next block is chosen via various combinations of random selection and wealth or age (i.e., the stake). In contrast, the algorithm of PoW based cryptocurrencies such as Bitcoin uses mining; that is, the solving of computationally intensive puzzles to validate transactions and create new blocks.  [ https://en.wikipedia.org/wiki/Proof-of-stake ] ')}</FAQContent>
            <FAQContent>{t('Unlike mining that requires a lot of energy and specialized equipment, a PoS algorithm uses simple computers to “Stake” and not mine. Far less energy is required, but one must leave their device on 24/7 and monitor it. ')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle100}>{t('What is Staking? ')}</FAQTitle>
        {
          isShow100 && <div>
            <FAQContent>{t('Staking is the act of holding Proof of Stake (PoS) coins in a staking node to mint (or forge) new blocks.  Mining (or forging) is the act of creating new blocks in a PoS blockchain to have a chance to receive a block reward (new coins). This is a software program that runs on your Desktop PC or even on a Raspberry Pi. ')}</FAQContent>
            <FAQContent>{t('A staking node is a computer that runs the coin\'s wallet with a positive coin balance. The wallet will automatically stake by using the node\'s resources to protect the blockchain by verifying the legitimacy of the transactions. For its services, the blockchain will send rewards (coin payments). Rewards are based on the number of coins the wallet owns; the more coins the more chances there are to receive a reward. The node must always be online, or it will not be staking and therefore not receiving rewards.   ')}</FAQContent>
            <FAQContent>{t('[https://medium.com/stakenet/trustless-proof-of-stake-tpos-wallet-staking-and-pooled-staking-c57245eb9640] ')}</FAQContent>
            <FAQContent>{t('Staking requires a hot wallet, and this wallet needs to remain, unlocked and obvious potential security risks are involved when staking. You will also have penalties for being offline. You cannot earn while you are offline. ')}</FAQContent>
            <FAQContent>{t('Why Mine or Stake coins? This is becoming old technology. Now you can “Cold Stake” with HODL SIGNAL TOKEN. ')}</FAQContent>
          </div>
        }
        <FAQTitle onClick={toggle101}>{t('What is Cold Staking? ')}</FAQTitle>
        {
          isShow101 && <div>
            <FAQContent>{t('Cold Staking is unlike PoS Staking. PoS Staking requires the wallet to be online. Some might say that HODL SIGNAL uses what some call “Cold Staking” in that your wallet needs not to be connected to the network and it does not need to provide network protocol services to receive rewards. Cold Staking does not need to verify or legitimize transactions on the Polygon network.')}</FAQContent>
            <FAQContent>{t('However, the User only needs to signal intent to HODL. This is less than what “Cold Staking” wallets do. It is superior.')}</FAQContent>
            <FAQContent>{t('HODL SIGNAL allows for someone to earn passive coins without having to maintain a Masternode or PoS Staking device. ')}</FAQContent>
            <FAQContent>{t('HODL SIGNAL signaling process is the #1 passive income reward system in the Crypto Space.')}</FAQContent>
          </div>
        } */}
      </div>
    </Page>
  )
}

export default FAQ
