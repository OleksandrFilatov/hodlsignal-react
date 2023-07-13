import React from 'react'
import styled from 'styled-components'
import { Image, Button, Flex, Text, Grid, Heading } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const TitleHeading = styled(Heading)`
  text-align: center;
  color: #ffc000;
  font-size: 48px;
  font-weight: 500;
`

const NormalHeading = styled(Heading)`
  text-align: center;
  color: #ffc000;
  font-size: 36px;
  font-weight: 300;
  margin-bottom: 18px;
  padding: 0 16px;
  @media screen and (max-width: 600px) {
    font-size: 28px;
  }
`

const CustomText = styled(Text)`
  color: #ffc000;
  font-size: 18px;
  margin-bottom: 14px;
  text-indent: -14px;
`

const CustomFlex = styled(Flex)`
  padding: 0 16px;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
`

const CustomDiv = styled.div`
  margin: 0 20px;
  width: 520px;
`

const CustomDivTwo = styled.div`
  width: auto;
  margin: 0 20px 50px;
  @media screen and (max-width: 1127px) {
    width: 520px;
  }
`

const CustomHr = styled.hr`
  border: 0;
  border-top: 2px solid black;
  margin: 50px 0;
`

const About = () => {
  const { t } = useTranslation()

  return (
    <div id="about">
      <TitleHeading style={{ marginBottom: '20px' }}>HODL SIGNAL TOKEN</TitleHeading>
      <TitleHeading style={{ fontSize: '28px' }}>(Ticker HODLS)</TitleHeading>
      <NormalHeading style={{ maxWidth: '450px', fontSize: '18px', margin: '0px auto', marginTop: '20px' }}>
        {t('"First Asset Backed Minable Token"')}
      </NormalHeading>
      <NormalHeading style={{ marginBottom: '20px', maxWidth: '450px', fontSize: '18px', margin: '0px auto' }}>
        {t('"HODLing = Mining"')}
      </NormalHeading>
      <div style={{ padding: '24px 16px 50px' }}>
        <div style={{ background: '#ffffff', borderRadius: '10px', padding: '8px', maxWidth: '660px', maxHeight: '469px', margin: 'auto' }}>
          <Image src="/images/landing.png" alt="landing" width={644} height={453} style={{ margin: 'auto' }} />
        </div>
      </div>
      <NormalHeading>What is HODL Signal Token?</NormalHeading>
      <CustomFlex>
        <CustomDiv>
          <CustomText>
            &diams; {t('HODL Signal Token is Designed to be a Store-of-Value Token on the Polygon (MATIC) Blockchain')}
          </CustomText>
          <CustomText>
            &diams; {t('Holder/HODLer/User Always Maintains their Private Keys & No KYC is Required')}
          </CustomText>
          <CustomText>
            &diams; {t('Using your Metamask Wallet you simply signal to the Smart Contract your intention to HODL (hold your tokens and not spend them)')}
          </CustomText>
          <CustomText>
            &diams; {t('Your HODL Signal Tokens never leave your Wallet - No 3rd Parties')}
          </CustomText>
          <CustomText>
            &diams; {t('Mining rewards or valid HODLs are no send transactions between START & STOP Signals. Rewards are based upon your Address’s HODL Signal Balance. Example of rewards are: One Day Pays 0.03%, Day 7 Pays 0.37%, Day 30 Pays 2.89%, Day 90 Pays 13.88%, 6 Months Pays 37.42% and Max Day is 365 and it Pays 102.91%. Using an Affiliate Address Pays Larger Rewards')}
          </CustomText>
          <CustomText>
            &diams; {t('IMPORTANT: HODL Signal Token is Asset Backed so it Can Never Go to Zero in Value. For it to go to Zero, Polygon (MATIC) would also have to go to zero. Nothing compares to HODL Signal Token that is asset backed & allows you to HODL & earn while you hold your token\'s private keys!')}
          </CustomText>
          <CustomText>
            &diams; {t('HODL Signal is Mining Time with Your Balance. It works better than HEX or WISE. Mining Your Time with Your Balance Pays Better Than a Bank CD, Time Deposit, or a Bond.')}
          </CustomText>
        </CustomDiv>
        <CustomDiv>
          <CustomText>
            &diams; {t('HODLS Token Performs BETTER THAN a Bank Savings Account, CD, Bond, HEX Token, or WISE Token')}
          </CustomText>
          <CustomText>
            &diams; {t('The Longer You HODL the Higher the Mining Reward. Unlike Banks or HEX There Are No Early Withdrawal Penalties!')}
          </CustomText>
          <CustomText>
            &diams; {t('You SIGNAL to START your HODL and signal again when you want to STOP your HODL. Payment of Mining Rewards is nearly immediate')}
          </CustomText>
          <CustomText>
            &diams; {t('No Lending, No Lockups, No Penalties, No Leverage Trading, No DeFi Farming')}
          </CustomText>
          <CustomText>
            &diams; {t('HODL Signal Token is Easy to Use, not complicated & No "Shares" to Calculate. It pays a fixed mining reward for how many days you HODL. Using the Simple Mining Time Chart anyone can calculate their earnings, unlike others that use Shares. With Shares one never knows what their earnings will be.')}
          </CustomText>
          <CustomText>
            &diams; {t('HODL Signal Token Pays HUGE MINING REWARDS because Smart Contracts Don\'t Require a Salary. They Do Not Have to Pay High Electric Bills like Bitcoin Miners Do. Also, They Don\'t Have To Pay for a Big Bank Building on Prime Real Estate.')}
          </CustomText>
          <CustomText>
            &diams; {t('Unlike fiat money, HODL Signal Token is Asset Backed. Unlike a bank or similar Cryptos you can also stop HODLing at anytime WITHOUT PENALTIES')}
          </CustomText>
        </CustomDiv>
      </CustomFlex>
      <CustomHr />
      <NormalHeading>HODL Signal Token Is Asset Backed!</NormalHeading>
      <CustomFlex>
        <CustomDiv>
          <CustomText>
            &diams; {t('HODL Signal Tokens in its ecosystem are backed by ownerless Polygon (MATIC)')}
          </CustomText>
          <CustomText>
            &diams; {t('During the Transformation Phase (July 2022), Polygon (MATIC) from numerous Users will be transformed into HODL Signal Tokens. 100% of All Polygon (MATIC) received will go directly into liquidity pools.')}
          </CustomText>
          <CustomText>
            &diams; {t('The Explorer & Reporting will show the total Polygon locked up in the DEX Pools')}
          </CustomText>
          <CustomText>
            &diams; {t('HODL Signal Token CANNOT go to ZERO in value!')}
          </CustomText>
        </CustomDiv>
        <CustomDiv>
          <CustomText>
            &diams; {t('Polygon is the asset via DEX Liquidity pools. This makes HODL Signal an asset backed Cryptocurrency')}
          </CustomText>
          <CustomText>
            &diams; {t('This massive liquidity is permanently locked (rug pull proof). 100% of Polygon (MATIC) Received from Transformations will Go Into 2 Different DEXs. This Prevents All Liquidity Being Put into only One DEX.')}
          </CustomText>
          <CustomText>
            &diams; {t('As the value of Polygon (MATIC) increases so does the price floor of HODL Signal Token')}
          </CustomText>
          <CustomText>
            &diams; {t('If everyone sold their HODL Signal Token, everyone would get some amount of Polygon (MATIC) back from the Liquidity pools')}
          </CustomText>
        </CustomDiv>
      </CustomFlex>
      <CustomHr />
      <NormalHeading>100% Fair Launch</NormalHeading>
      <CustomFlex>
        <CustomDiv>
          <CustomText>
            &diams; {t('No Founders Fees (No Pre-Launch Payments to the Founders)')}
          </CustomText>
          <CustomText>
            &diams; {t('No Exclusive early investment stage or offerings granted or discounted to insiders or anyone')}
          </CustomText>
          <CustomText>
            &diams; {t('Founders & Devs received no special compensation from the distribution of HODL Signal Tokens')}
          </CustomText>
          <CustomText>
            &diams; {t('No ICO, IEO, or IDO was held - No funding was raised in advance of launch therefore, no compensation was required - Founders owe no one for its creation and launch - this dispenses the notion that it is a security ')}
          </CustomText>
        </CustomDiv>
        <CustomDiv>
          <CustomText>
            &diams; {t('No Special Reserve for "The Team" or to Developers, or Advisors, meaning No Special Reserves for anyone')}
          </CustomText>
          <CustomText>
            &diams; {t('5 Billion HODL Signal Tokens or 90% of the Tokens are for the Community, 500 Million or 10% go to two DEX Liquidity Pools. 3 Billion are Dedicated to Polygon (MATIC) Transformations. 1.25 Billion will go to Crypto Users that Claim Coins/Tokens from 250 Different Blockchains. The Balance of 250 Million are for 60 Day Contests and Den.Social Subscribers.')}
          </CustomText>
          <CustomText>
            &diams; {t('Founders & Devs must Claim and Transform just like everyone else does')}
          </CustomText>
          <CustomText>
            &diams; {t('The Founders prepaid everything from design to smart contract deployment. They did this seeking no reward, no reciprocity, no fame, no fortune, only the joy found when giving anonymously. This is their Legacy')}
          </CustomText>
        </CustomDiv>
      </CustomFlex>
      <CustomHr />
      <NormalHeading>Store-of-Value By Design from Day One</NormalHeading>
      <CustomFlex>
        <CustomDiv>
          <CustomText>
            &diams; {t('Best Game Theory – New Token Supply is Restricted/Choked. New Tokens Can Only Be Minted from HODL Mining Rewards & Bonuses to HODLers and Affiliates')}
          </CustomText>
          <CustomText>
            &diams; {t('No Expensive PoW Miners to Pay, No Masternodes and No PoS Stakers to Pay, No Developer Teams Need to Be Paid, and No Governance Group Requires a Payment - Only HODLers that Mine Time are Paid')}
          </CustomText>
          <CustomText>
            &diams; {t('HODL SIGNAL\'S Brilliant Design is to Choke the Open Market Supply by Incentivizing HODL Time Miners to Signal START/STOP HODLs and Pay Them High Fixed Mining Rewards. Price Appreciation = HODL Mining & Choking Open Market Supply')}
          </CustomText>
          <CustomText>
            &diams; {t('Imagine, when price stability happens soon after launch and people feel risk averse to using fiat loans to buy HODL Signal Tokens. They can then use the monthly mining rewards to pay for the monthly loan obligations')}
          </CustomText>
        </CustomDiv>
        <CustomDiv>
          <CustomText>
            &diams; {t('We Recognize Bitcoin as the Reserve Currency of Crypto, but it Does Not Pay You to HODL. It Pays the Miners Who Dump Coins on the Market to Pay their Large Electricity Bills.')}
          </CustomText>
          <CustomText>
            &diams; {t('HODL Signal piggy-backs on top of the Polygon Blockchain where gas fees are extremely low so Signaling HODLs and Send Transactions are cheap, taking less away from one\'s stack of tokens, unlike ETH')}
          </CustomText>
          <CustomText>
            &diams; {t('If No HODLs are Made, then No New Tokens are Minted.  If a Growing Number of Users Continue to Make HODLs then the Price of HODL Signal Token Should Increase on the DEX Due to Supply Shortages')}
          </CustomText>
          <CustomText>
            &diams; {t('Just Like Nobody Owns the Internet, Nobody Owns the HODL Signal\'s Smart Contract or the Polygon Network. Furthermore, the HODL Signal Token ecosystem isn\'t a DAO or Non-Profit. It is owned by no one')}
          </CustomText>
        </CustomDiv>
      </CustomFlex>
      <CustomHr />
      <NormalHeading style={{ maxWidth: '512px', margin: '20px auto' }}>{t('HODL Signal Token & Its Smart Contract On a Proven & Secure Network')}</NormalHeading>
      <CustomFlex>
        <CustomDiv>
          <CustomText>
            &diams; {t('HODL SIGNAL TOKEN is a 5 Pillar Cryptocurrency: Open, Borderless, Neutral, Censorship Resistant, & Public')}
          </CustomText>
          <CustomText>
            &diams; {t('HODL Signal Token transactions are On-Chain and not on a side chain, meaning it is Public & Neutral')}
          </CustomText>
          <CustomText>
            &diams; {t('Polygon was developed out of necessity to fix the Ethereum scaling problem')}
          </CustomText>
          <CustomText>
            &diams; {t('Polygon was chosen not just because of its low gas fees and scalability, but also for it interoperability. This makes Polygon Flexible, Extensible, Robust, Permissionless, and of course a Free & Open Sourced Blockchain')}
          </CustomText>
        </CustomDiv>
        <CustomDiv>
          <CustomText>
            &diams; {t('HODL SIGNAL TOKEN is an ERC-20 on the Polygon (MATIC) Blockchain')}
          </CustomText>
          <CustomText>
            &diams; {t('HODL Signal utilizes the Polygon Network so Gas fees are extremely cheap (unlike Ethereum\'s network)')}
          </CustomText>
          <CustomText>
            &diams; {t('Low gas fees means that the lower 1/3 of the world\'s population can use HODL Signal and become Savers')}
          </CustomText>
          <CustomText>
            &diams; {t('Smart Contract utilizes "The Kiss Principle" or Keeping it Simple. This Means the Protocol is Less Complicated, More Secure, as well as Stable. Complexity often enhances risk & is less reliable')}
          </CustomText>
        </CustomDiv>
      </CustomFlex>
      <CustomHr />
      <NormalHeading>Affiliate Program</NormalHeading>
      <CustomFlex>
        <CustomDiv>
          <CustomText>
            &diams; {t('5 Billion HODL Signal Tokens Are to be Distributed. Affiliate Bonuses are paid to:  #1 Those that Transform Polygon (MATIC)  #2. Holders that hold Coins/Tokens and Claim with an Affiliate Code their address(s) of 200+ Selected Blockchains  #3. START/STOP Hodls using an Affiliate Code')}
          </CustomText>
          <CustomText>
            &diams; {t('Huge Bonuses will be Paid Out to Those that Transform Polygon (MATIC) for HODL Signal Tokens and use a Registered Affiliate Address. Holders that Claim can also receive Affiliate Bonuses. However, larger Bonuses are for those that Transform Polygon into HODL Signal. Transforming and Claiming each have Bonus Pools that are divided evenly to everyone that inputs a valid & registered Affiliate Address.')}
          </CustomText>
          <CustomText>
            &diams; {t('Bonus Pools from Transformations & Claiming are Rewarded Justly to All Those that Input a Valid & Registered Affiliate Address.  Those that do not input an Affiliate Code will not receive a bonus. Also, those that do not input a valid Affiliate Address will not receive a bonus.')}
          </CustomText>
          <CustomText>
            &diams; {t('The Affiliate Program Continues Long Past the Distribution Phase. Yes, HODL Mining can pay a reward & a bonus if a registered & valid address is submitted at the START Signal of a Hodl.')}
          </CustomText>
        </CustomDiv>
        <CustomDiv>
          <CustomText>
            &diams; {t('Having an Affiliate Program Gives Everyone a Chance to Earn HODL Signal Tokens, Even if They Do Not Own Crypto. Founders/Creators Wanted to Give Everyone an Opportunity to Earn Crypto. The Affiliate Program accomplishes this goal.')}
          </CustomText>
          <CustomText>
            &diams; {t('To Become an Affiliate, One Must Register their Wallet Address in the Smart Contract & Take the "Do No Harm Pledge"  Their HODL Signal Address becomes their Affiliate Code. The Affiliate Program is NOT an MLM.  It is an Affiliate Program Just Like Amazon and eBay Have Affiliate Programs')}
          </CustomText>
          <CustomText>
            &diams; {t('Affiliates Can Earn Perpetual HODL Signal Tokens from other User HODLs when they enter the Affiliate\'s address at the START of a HODL. Win - Win because HODLers & Affiliates are Together Incentivized to Use Affiliate Codes')}
          </CustomText>
        </CustomDiv>
      </CustomFlex>
      <CustomHr />
    </div>
  )
}

export default About
