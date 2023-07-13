import React from 'react'
import { AutoRenewIcon, Button, Flex, Text, Grid, Heading, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import SunburstSvg from './SunburstSvg'

const Distribution = () => {
  const CustomHeading = styled(Heading)`
  margin: 20px 0;
  color: #ffc000;
  text-align: center;
`

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const ForDesktop = styled.div`
  display: block;
  @media (max-width: 992px) {
    display: none;
  }
`

const ForMobile = styled.div`
  display: none;
  margin: 0px 15px;
  @media (max-width: 992px) {
    display: block;
  }
`

const StyledSunburst = styled(SunburstSvg)`
height: 350%;
width: 350%;

${({ theme }) => theme.mediaQueries.xl} {
  height: 400%;
  width: 400%;
}
`

  const { t } = useTranslation()

  return (
    <div>
      <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper>
      <div id="distribution" style={{ textAlign: 'center', marginTop: '100px' }}>
        <Heading style={{ fontSize: '56px', color: '#ffc000', margin: '30px auto' }}>{t('Distribution')}</Heading>
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ background: 'transparent', borderRadius: '10px', padding: '10px' }}>
          <Image src="/images/distribution-1.png" alt="distribution" width={1152} height={760} style={{ margin: 'auto' }} />
        </div>
        {/* <CustomHeading>{t('Global Users Claim or Transform into HODL Signal TOKENS')}</CustomHeading> */}
      </div>
      <div id="distribution" style={{ textAlign: 'center', padding: '50px 0px' }}>
        <ForDesktop>
          <Heading style={{ fontSize: '36px', color: '#ffc000', margin: '30px auto' }}>{t('Distribution In Detail')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '10px' }}>          
            <div style={{ background: '#161af5', borderRadius: '10px', padding: '10px' }}>
              <Heading style={{ fontSize: '24px', color: '#ffc000', margin: '30px auto' }}>{t('HODL SIGNAL (HODLS) DISTRIBUTION SUMMARY')}</Heading>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', width: '100%', marginTop: '20px', padding: '0px 55px 0px 30px'}}>
              <div style={{width: '70%'}}>
                <Heading style={{ fontSize: '20px', color: '#000'}}>{t('')}</Heading>
              </div>
              <div style={{width: '15%'}}>
                <Heading style={{ fontSize: '20px', color: '#000', textAlign: 'right'}}>{t('HODLS')}</Heading>
              </div>
              <div style={{width: '15%'}}>
                <Heading style={{ fontSize: '20px', color: '#000', textAlign: 'right'}}>{t('%')}</Heading>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#7030a0', padding: '15px 55px 15px 30px'}}>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('HODL SIGNAL Tokens (HODLS) to be Transformed into Polygon (MATIC)')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff', textAlign: 'right'}}>{t('3,000,000,000')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff', textAlign: 'right'}}>{t('60.0%')}</Heading>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%', paddingTop: '10px'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('Transforming is converting your Polygon (MATIC) for HODL SIGNAL Tokens (HODLS), 100% MATIC go to DEX Liquidity, No Rug Pulls')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('')}</Heading>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#00b0f0', marginTop: '20px', padding: '15px 55px 15px 30px'}}>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Claiming 250 Blockchains')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff', textAlign: 'right'}}>{t('1,250,000,000')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff', textAlign: 'right'}}>{t('25.0%')}</Heading>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%', paddingTop: '10px'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('Claiming = Requestion an “Airdrop”\tUse the Claiming Smart Contract to Register Your Coins/Tokens that You Control')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('')}</Heading>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#00b050', marginTop: '20px', padding: '15px 55px 15px 30px'}}>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '20px', color: '#000'}}>{t('LIQUIDITY POOL - MATIC/HODLS')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#000', textAlign: 'right'}}>{t('500,000,000')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#000', textAlign: 'right'}}>{t('10.0%')}</Heading>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%', paddingTop: '10px'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '12px', color: '#000'}}>{t('Liquidity Setup on QuickSwap & ApeSwap to Trade HODL/MATIC')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#000'}}>{t('')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#000'}}>{t('')}</Heading>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#c00000', marginTop: '20px', padding: '15px 55px 15px 30px'}}>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Den.Social Community Subscription')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff', textAlign: 'right'}}>{t('200,000,000')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff', textAlign: 'right'}}>{t('4.0%')}</Heading>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%', paddingTop: '10px'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('Follow Us on Den.Social - Become a Den Subscriber/User and Get Your Share of 200 Million HODL SIGNAL Tokens (HODLS)')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('')}</Heading>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#002060', marginTop: '20px', padding: '15px 55px 15px 30px'}}>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('CONTEST to Win Millions of HODLS')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff', textAlign: 'right'}}>{t('50,000,000')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '20px', color: '#fff', textAlign: 'right'}}>{t('1.0%')}</Heading>
                </div>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', width: '100%', paddingTop: '10px'}}>
                <div style={{width: '70%', textAlign: 'start'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('Chance to Win Millions of HODLS - Make a YouTube Video, Post a Meme on Twitter, Write an Article on Medium.Com')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('')}</Heading>
                </div>
                <div style={{width: '15%'}}>
                  <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('')}</Heading>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'row', width: '100%', marginTop: '20px', background: '#ffc000', padding: '15px 65px 15px 30px'}}>
            <div style={{width: '70%', textAlign: 'center'}}>
              <Heading style={{ fontSize: '20px', color: '#002060'}}>{t('5 Billion Grand Total:')}</Heading>
            </div>
            <div style={{width: '15%'}}>
              <Heading style={{ fontSize: '20px', color: '#002060', textAlign: 'right'}}>{t('5,000,000,000')}</Heading>
            </div>
            <div style={{width: '15%'}}>
              <Heading style={{ fontSize: '20px', color: '#002060', textAlign: 'right'}}>{t('100.0%')}</Heading>
            </div>
          </div>


          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '200px' }}>{t('Transforming Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#7030a0', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('HODL SIGNAL Tokens (HODLS) to be Transformed into Polygon (MATIC)')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('3,000,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 40px'}}>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start' }}>{t('1. Transforming is converting your Polygon (MATIC) & Celsius (CEL) tokens for HODL SIGNAL Tokens (HODLS)')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('2. Celsius was added to Transformations to help Celsius holders with 3rd Party Losses, (100% of (CEL) will be converted into MATIC)')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start' }}>{t('3. 100% All Polygon (MATIC) from Transformations goes to DEX Liquidity Polls, Locked, & No Rug Pools')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('3 Billion HODL SIGNAL Tokens (HODLS) are allocated for Transformations. 2.7 Billion HODLS go directly to the addresses that transformed their Polygon (MATIC) and Celsius (CEL) tokens into HODLS. The remaining 10%, or 300 Million HODLS are put into an Affiliate Bonus Pool. This Affiliate Bonus Pool is justly divided up and given to the Transformers and their Affiliates as per the Affiliate Program.')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start'}}>{t('Attention: Transforming is how you get the most HODL SIGNAL Tokens')}</Heading>
              </div>
              <div style={{marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start'}}>{t('2.43 Billion (HODLS) direct to Transformers')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start' }}>{t('0.30 Billion (HODLS) direct to Celsius (CEL) Transformers')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', textDecoration: 'underline' }}>{t('0.30 Billion (HODLS) shared with Transformers and Affiliates')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px'}}>{t('3.0 Billion Total (HODLS)')}</Heading>
              </div>
              <div style={{background: '#7030a0', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'white', textAlign: 'start'}}>{t('IMPORTANT: 100% of all Polygon (MATIC) received go into 2 Liquidity Pools on QuickSwap & ApeSwap')}</Heading>
              </div>
            </div>
          </div>

          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '100px' }}>{t('Claiming Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#00b0f0', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Claiming: 250 Blockchains Available for Claiming')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('1,250,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 40px'}}>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Claiming is requesting an "Airdrop" by registering your Coins/Tokens that you control on the seleted 250 blockchains.')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('250 Blockchains have been selected for Claiming. Holders of Coins/Tokens of these different Blockchains can receive FREE HODL Signal Tokens. They must setup a Polygon & HODL Signal Wallet on Metamask and complete the claim process by registering their claiming addresses in a Smart Contract. It is very easy to do. NOTE: Some Address will require verification. Verification only requires the smallest quantity possible to be sent from our address to a specific address to prove ownership/control of the claiming address. Example: 0.0000000001ETH sent for verification.')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start'}}>{t('Claim Your Free HODL SIGNAL TOKENS & You Claim More Than One Address')}</Heading>
              </div>
              <div style={{marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start'}}>{t('875 Million (HODLS) direct to Blockchain Address Claimers')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', textDecoration: 'underline'}}>{t('375 Million (HODLS) shared with Claimers & Affiliates')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px'}}>{t('1.25 Billion Total (HODLS)')}</Heading>
              </div>
              <div style={{background: '#00b0f0', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'white', textAlign: 'start'}}>{t('Each of the 250 Blockchains will be allocated 5 HODL SIGNAL Tokens (HODLS) for Claiming')}</Heading>
              </div>
            </div>
          </div>

          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '100px' }}>{t('Liquidity Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#00b050', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#000'}}>{t('LIQUIDITY POOL TOKENS MATIC/HODLS')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#000'}}>{t('500,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 40px'}}>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Two Different DEXes will be set-up for trading HODL SIGNAL Token(HODLS) on Polygon (MATIC) Blockchain. 500 Million HODLS are allocated for Liquidity.')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('The 500 Million HODL SIGNAL Tokens (HODLS) have been allocated specifically for trading liquidity on at least two DEX(Decentralized Exchanges). The 500 Million HODLS will be paired up with 100% of the Polygon (MATIC) that was received during Transformations. QuickSwap & SushiSwap will be setup on "Distribution Day" (Launch Day). Distribution Day is when all wallets are properly populated with HODL SIGNALS(HODLS) from Transforming, Claiming & Den.Social Subscriptions. The initial trading pair will be HODLS/MATIC on both of the Decentralized Exchanges.')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start'}}>{t('SOON YOU CAN TRADE MATIC/HODLS ON A DEX(QuickSwap or SushiSwap)')}</Heading>
              </div>
              <div style={{marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px'}}>{t('500 Million (HODLS)')}</Heading>
              </div>
              <div style={{background: '#00b050', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#000', textAlign: 'start'}}>{t('Liquidity To Be Comprised of 500 Million HODLS and 100% of the Polygon (MATIC) from Transformations')}</Heading>
              </div>
            </div>
          </div>

          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '100px' }}>{t('Den.Social Community Subscription Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#c00000', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Den.Social Community Subscription')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('200,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 40px'}}>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Follow Us on Den.Social - Become a Den Subscriber/User and Get Your Share of 200 Million HODL SIGNAL Tokens (HODLS)')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('200 Million (HODLS) have been put in a pool. Each Subscriber/User in Den.Social that follows our Lair Will be awarded HODL SIGNAL Tokens. It\'s easy to do... 1. Become a Den.Social Subscriber/Users, 2. Setup a Metamask Wallet, 3. Follow the HODL SIGNAL Lair, and 4. Enter Your Den ID/Name and Metamask Address in the Smart Contract on the Website and you will get your share of 200 Million HODLS. There HODL SIGNAL Tokens will be sent to your address on "Distribution Day" (Launch Day)')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start'}}>{t('ATTN: HODL Signal\'s Support is located on Den.Social so are Latest Updates & Announcements')}</Heading>
              </div>
              <div style={{marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px'}}>{t('200 Million (HODLS)')}</Heading>
              </div>
              <div style={{background: '#c00000', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#fff', textAlign: 'start'}}>{t('JOIN THE DEN.SOCIAL COMMUNITY & GET YOUR SHARE OF 200 MILLION HODLS!')}</Heading>
              </div>
            </div>
          </div>

          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '100px' }}>{t('Contest Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#002060', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Contests to Win Millions of HODLS')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('50,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 40px'}}>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Chance to Win Millions of HODLS! Entries Include Videos, Memes & Articles Example: "What is HODL SIGNAL Tokens?" YouTube Video, or a Meme on Twitter')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Contests will be managed on Den.Social and votes by the Community will be tallied. All winners will be announced in the HODL SIGNAL Lair. All winners will receive their winnings a few days after the launch Date. A Contest example is Best YouTube Video in June 2022 on "What is the HODL Signal Token". Another example is "How to Join Den and get Free HODLS". Prizes are 1st to 10th place. Some 1st Prizes are 2 Million HODLS! Team Members of HODL SIGNAL cannot enter these contests. Other Contest Rules Apply. Learn more and get the latest information on Den.Social. Here is also where all winners will be announced.')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start'}}>{t('ATTN: HODL Signal\'s Support is located on Den.Social so are Latest Updates & Announcements')}</Heading>
              </div>
              <div style={{marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px'}}>{t('50 Million (HODLS)')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#fff', textAlign: 'start'}}>{t('More Than 20 Different Contests Gives You A Chance to Win Millions of HODLS!')}</Heading>
              </div>
            </div>
          </div>
        </ForDesktop>
        <ForMobile>
          <Heading style={{ fontSize: '36px', color: '#ffc000', margin: '30px auto' }}>{t('Distribution In Detail')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '10px' }}>          
            <div style={{ background: '#161af5', borderRadius: '10px', padding: '10px' }}>
              <Heading style={{ fontSize: '24px', color: '#ffc000', margin: '30px auto' }}>{t('HODL SIGNAL (HODLS) DISTRIBUTION SUMMARY')}</Heading>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#7030a0', padding: '15px', marginTop: '20px'}}>
              <div style={{textAlign: 'start'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('HODL SIGNAL Tokens (HODLS) to be Transformed into Polygon (MATIC)')}</Heading>
              </div>
              <div style={{textAlign: 'start', padding: '10px 0px'}}>
                <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('Transforming is converting your Polygon (MATIC) for HODL SIGNAL Tokens (HODLS), 100% MATIC go to DEX Liquidity, No Rug Pulls')}</Heading>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('3,000,000,000')}</Heading>
                </div>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('60.0%')}</Heading>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#00b0f0', marginTop: '20px', padding: '15px'}}>
              <div style={{textAlign: 'start'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Claiming 250 Blockchains')}</Heading>
              </div>
              <div style={{textAlign: 'start', padding: '20px 0px'}}>
                <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('Claiming = Requestion an “Airdrop”\tUse the Claiming Smart Contract to Register Your Coins/Tokens that You Control')}</Heading>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('1,250,000,000')}</Heading>
                </div>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('25.0%')}</Heading>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#00b050', marginTop: '20px', padding: '15px'}}>
              <div style={{textAlign: 'start'}}>
                <Heading style={{ fontSize: '20px', color: '#000'}}>{t('LIQUIDITY POOL - MATIC/HODLS')}</Heading>
              </div>
              <div style={{textAlign: 'start', padding: '20px 0px'}}>
                <Heading style={{ fontSize: '12px', color: '#000'}}>{t('Liquidity Setup on QuickSwap & ApeSwap to Trade HODL/MATIC')}</Heading>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#000'}}>{t('500,000,000')}</Heading>
                </div>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#000'}}>{t('10.0%')}</Heading>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#c00000', marginTop: '20px', padding: '15px'}}>
              <div style={{textAlign: 'start'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Den.Social Community Subscription')}</Heading>
              </div>
              <div style={{textAlign: 'start', padding: '20px 0px'}}>
                <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('Follow Us on Den.Social - Become a Den Subscriber/User and Get Your Share of 200 Million HODL SIGNAL Tokens (HODLS)')}</Heading>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('200,000,000')}</Heading>
                </div>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('4.0%')}</Heading>
                </div>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#002060', marginTop: '20px', padding: '15px'}}>
              <div style={{textAlign: 'start'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('CONTEST to Win Millions of HODLS')}</Heading>
              </div>
              <div style={{textAlign: 'start', padding: '20px 0px'}}>
                <Heading style={{ fontSize: '12px', color: '#fff'}}>{t('Chance to Win Millions of HODLS - Make a YouTube Video, Post a Meme on Twitter, Write an Article on Medium.Com')}</Heading>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('50,000,000')}</Heading>
                </div>
                <div style={{}}>
                  <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('1.0%')}</Heading>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{display: 'flex', flexDirection: 'column', width: '100%', background: '#ffc000', marginTop: '20px', padding: '15px'}}>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'end',  width: '100%'}}>
              <div style={{textAlign: 'end'}}>
                <Heading style={{ fontSize: '20px', color: '#002060'}}>{t('5 Billion Grand Total:')}</Heading>
              </div>
              <div style={{padding: '0px 20px'}}>
                <Heading style={{ fontSize: '20px', color: '#002060'}}>{t('5,000,000,000')}</Heading>
              </div>
              <div style={{}}>
                <Heading style={{ fontSize: '20px', color: '#002060'}}>{t('100.0%')}</Heading>
              </div>
            </div>
          </div>

          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '100px' }}>{t('Transforming Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#7030a0', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('HODL SIGNAL Tokens (HODLS) to be Transformed into Polygon (MATIC)')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('3,000,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 0px'}}>
              <div style={{ background: '#002060', border: '1px solid black', padding: '10px' }}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start' }}>{t('1. Transforming is converting your Polygon (MATIC) & Celsius (CEL) tokens for HODL SIGNAL Tokens (HODLS)')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start' }}>{t('2. Celsius was added to Transformations to help Celsius holders with 3rd Party Losses, (100% of (CEL) will be converted into MATIC)')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start' }}>{t('3. 100% All Polygon (MATIC) from Transformations goes to DEX Liquidity Polls, Locked, & No Rug Pools')}</Heading>
              </div>
              <div style={{ background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px' }}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start' }}>{t('3 Billion HODL SIGNAL Tokens (HODLS) are allocated for Transformations. 2.7 Billion HODLS go directly to the addresses that transformed their Polygon (MATIC) and Celsius (CEL) tokens into HODLS. The remaining 10%, or 300 Million HODLS are put into an Affiliate Bonus Pool. This Affiliate Bonus Pool is justly divided up and given to the Transformers and their Affiliates as per the Affiliate Program.')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start' }}>{t('Attention: Transforming is how you get the most HODL SIGNAL Tokens')}</Heading>
              </div>
              <div style={{ marginTop: '20px' }}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start' }}>{t('2.43 Billion (HODLS) direct to Transformers')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start' }}>{t('0.30 Billion (HODLS) direct to Celsius (CEL) Transformers')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', textDecoration: 'underline' }}>{t('0.30 Billion (HODLS) shared with Transformers and Affiliates')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px' }}>{t('3.0 Billion Total (HODLS)')}</Heading>
              </div>
              <div style={{background: '#7030a0', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'white', textAlign: 'start' }}>{t('IMPORTANT: 100% of all Polygon (MATIC) received go into 2 Liquidity Pools on QuickSwap & ApeSwap')}</Heading>
              </div>
            </div>
          </div>

          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '100px' }}>{t('Claiming Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#00b0f0', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Claiming: 250 Blockchains Available for Claiming')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('1,250,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 0px'}}>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Claiming is requesting an "Airdrop" by registering your Coins/Tokens that you control on the seleted 250 blockchains.')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('250 Blockchains have been selected for Claiming. Holders of Coins/Tokens of these different Blockchains can receive FREE HODL Signal Tokens. They must setup a Polygon & HODL Signal Wallet on Metamask and complete the claim process by registering their claiming addresses in a Smart Contract. It is very easy to do. NOTE: Some Address will require verification. Verification only requires the smallest quantity possible to be sent from our address to a specific address to prove ownership/control of the claiming address. Example: 0.0000000001ETH sent for verification.')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start'}}>{t('Claim Your Free HODL SIGNAL TOKENS & You Claim More Than One Address')}</Heading>
              </div>
              <div style={{marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start'}}>{t('875 Million (HODLS) direct to Blockchain Address Claimers')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', textDecoration: 'underline'}}>{t('375 Million (HODLS) shared with Claimers & Affiliates')}</Heading>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px'}}>{t('1.25 Billion Total (HODLS)')}</Heading>
              </div>
              <div style={{background: '#00b0f0', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'white', textAlign: 'start'}}>{t('Each of the 250 Blockchains will be allocated 5 HODL SIGNAL Tokens (HODLS) for Claiming')}</Heading>
              </div>
            </div>
          </div>

          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '100px' }}>{t('Liquidity Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#00b050', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#000'}}>{t('LIQUIDITY POOL TOKENS MATIC/HODLS')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#000'}}>{t('500,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 0px'}}>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Two Different DEXes will be set-up for trading HODL SIGNAL Token(HODLS) on Polygon (MATIC) Blockchain. 500 Million HODLS are allocated for Liquidity.')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('The 500 Million HODL SIGNAL Tokens (HODLS) have been allocated specifically for trading liquidity on at least two DEX(Decentralized Exchanges). The 500 Million HODLS will be paired up with 100% of the Polygon (MATIC) that was received during Transformations. QuickSwap & SushiSwap will be setup on "Distribution Day" (Launch Day). Distribution Day is when all wallets are properly populated with HODL SIGNALS(HODLS) from Transforming, Claiming & Den.Social Subscriptions. The initial trading pair will be HODLS/MATIC on both of the Decentralized Exchanges.')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start'}}>{t('SOON YOU CAN TRADE MATIC/HODLS ON A DEX(QuickSwap or SushiSwap)')}</Heading>
              </div>
              <div style={{marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px'}}>{t('500 Million (HODLS)')}</Heading>
              </div>
              <div style={{background: '#00b050', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#000', textAlign: 'start'}}>{t('Liquidity To Be Comprised of 500 Million HODLS and 100% of the Polygon (MATIC) from Transformations')}</Heading>
              </div>
            </div>
          </div>

          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '100px' }}>{t('Den.Social Community Subscription Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#c00000', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Den.Social Community Subscription')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('200,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 0px'}}>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Follow Us on Den.Social - Become a Den Subscriber/User and Get Your Share of 200 Million HODL SIGNAL Tokens (HODLS)')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('200 Million (HODLS) have been put in a pool. Each Subscriber/User in Den.Social that follows our Lair Will be awarded HODL SIGNAL Tokens. It\'s easy to do... 1. Become a Den.Social Subscriber/Users, 2. Setup a Metamask Wallet, 3. Follow the HODL SIGNAL Lair, and 4. Enter Your Den ID/Name and Metamask Address in the Smart Contract on the Website and you will get your share of 200 Million HODLS. There HODL SIGNAL Tokens will be sent to your address on "Distribution Day" (Launch Day)')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start'}}>{t('ATTN: HODL Signal\'s Support is located on Den.Social so are Latest Updates & Announcements')}</Heading>
              </div>
              <div style={{marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px'}}>{t('200 Million (HODLS)')}</Heading>
              </div>
              <div style={{background: '#c00000', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#fff', textAlign: 'start'}}>{t('JOIN THE DEN.SOCIAL COMMUNITY & GET YOUR SHARE OF 200 MILLION HODLS!')}</Heading>
              </div>
            </div>
          </div>

          <Heading style={{ fontSize: '36px', color: '#ffc000', marginTop: '100px' }}>{t('Contest Info')}</Heading>
          <div style={{ background: '#ffc000', borderRadius: '10px', padding: '20px', marginTop: '20px' }}>   
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', width: '100%', background: '#002060', border: '1px solid black'}}>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px', }}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('Contests to Win Millions of HODLS')}</Heading>
              </div>
              <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '10px'}}>
                <Heading style={{ fontSize: '20px', color: '#fff'}}>{t('50,000,000')}</Heading>
              </div>
            </div>  
            <div style={{margin: '20px 0px'}}>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Chance to Win Millions of HODLS! Entries Include Videos, Memes & Articles Example: "What is HODL SIGNAL Tokens?" YouTube Video, or a Meme on Twitter')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#ffc000', textAlign: 'start'}}>{t('Contests will be managed on Den.Social and votes by the Community will be tallied. All winners will be announced in the HODL SIGNAL Lair. All winners will receive their winnings a few days after the launch Date. A Contest example is Best YouTube Video in June 2022 on "What is the HODL Signal Token". Another example is "How to Join Den and get Free HODLS". Prizes are 1st to 10th place. Some 1st Prizes are 2 Million HODLS! Team Members of HODL SIGNAL cannot enter these contests. Other Contest Rules Apply. Learn more and get the latest information on Den.Social. Here is also where all winners will be announced.')}</Heading>
              </div>
              <div style={{background: '#ffff00', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: 'red', textAlign: 'start'}}>{t('ATTN: HODL Signal\'s Support is located on Den.Social so are Latest Updates & Announcements')}</Heading>
              </div>
              <div style={{marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#002060', textAlign: 'start', marginTop: '5px'}}>{t('50 Million (HODLS)')}</Heading>
              </div>
              <div style={{background: '#002060', border: '1px solid black', padding: '10px', marginTop: '20px'}}>
                <Heading style={{ fontSize: '18px', color: '#fff', textAlign: 'start'}}>{t('More Than 20 Different Contests Gives You A Chance to Win Millions of HODLS!')}</Heading>
              </div>
            </div>
          </div>
        </ForMobile>
      </div>
    </div>
  )
}

export default Distribution
