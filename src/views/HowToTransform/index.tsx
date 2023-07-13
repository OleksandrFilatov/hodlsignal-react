import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Heading, Input, CopyIcon, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const HowToTransform = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)
  const copyAddress = () => {
    const add = "0xDF465C98bB8dDC6eBb7F9c1086120FD01eEF70AD"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(add).then(() => displayTooltip())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = add
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip()
    }
  }

  function displayTooltip() {
    setIsDisplayed(true)
    setTimeout(() => {
      setIsDisplayed(false)
    }, 1000)
  }

  const onClickSubmit = () => {
    console.log("submit")
  }

  const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
    display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? 'inline-block' : 'none')};
    position: absolute;
    padding: 8px;
    right: 20px;
    text-align: center;
    background-color: #ffffff;
    color: #191326;
    border-radius: 16px;
    opacity: 0.7;
    width: 100px;
  `

  const Title1 = styled(Heading)`
    font-size: 32px;
    margin: 32px 0;
    text-align: center;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 24px;
    }
  `

  const Title2 = styled(Text)`
    font-size: 22px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 17px;
    }
  `

  const Title3 = styled(Text)`
    font-size: 16px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 712px) {
      font-size: 14px;
    }
  `

  const ListText = styled(Text)`
    font-size: 24px;
    lineHeight: 36px;
    text-align: left;
    color: #ffffff;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `

  const Symbol = styled(Text)`
    font-size: 24px;
    margin-right: 18px;
    color: #ffffff;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `

  const StyledSunburst = styled.div`
    display: 'flex';
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 80px 0 80px

    @media only screen and (max-width: 768px) {
      padding: 20px 0px 0 0px
    }
  `
  const StyledForm = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      flex-direction: column; 
    }
  `

  const StyledInput = styled(Input)`
    borderRadius: 0; 
    color: #000000; 
    width: 60%; 
    backgroundColor: #ccc;
    @media only screen and (max-width: 768px) {
      width: 100%; 
    }
  `

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <Flex alignItems='center' justifyContent='center' marginTop='20vh'>
          <Heading scale='xxl'>Coming Soon!</Heading>
        </Flex>
        {/* <Image margin="80px 0" src="/images/howtotransform1.jpg" alt="how to transform" width={1473} height={874} />
        <Title1 style={{ color: '#ffffff', fontSize: '36px' }}>{t('3 BILLION')}</Title1>
        <Title1 style={{ color: '#ffffff' }}>{t('HODL SIGNAL TOKENS (HODLS)')}</Title1>
        <Title1 style={{ color: '#ffffff' }}>{t('ARE READY TO BE TRANSFORMED')}</Title1>
        <Title2>{t('Transforming/Converting Polygon (MATIC) and Celsius (CEL) for HODL Signal (HODLS) will take place during a 30-Day Event, 100 Million HODLS per Day')}</Title2>
        <Title1 style={{ textAlign: 'left' }}>{t('What To Know')}</Title1>
        <div style={{ paddingLeft: '20px' }}>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('IMPORTANT: You will Receive more HODLS from Transforming than Claiming')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('3 Billion HODL Signal Tokens (HODLS) Are Available for Transforming, or 60% of the Supply')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Holders of Polygon (MATIC) will have 30-Days to Transform their Stack into HODLS')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Holders of Celsius (CEL) will have 30-Days to Transform their Stack into HODLS')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('2.70 Billion HODLS Allocated to Polygon (MATIC) Pool for Transform/Conversion')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('0.30 Billion HODLS Allocated to Celsius (CEL) Pool for Transformation/Conversion')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Each Day’s HODLS are divided into the Polygon & Celsius Pools, “Transformation Pools”')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('90 Million HODLS Allocated to Polygon Daily Transformations')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('10 Million HODLS Allocated to the Celsius Daily Transformations')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('10% of Each Daily’s Transformation Pool is Allocated to Affiliate Bonus HODLS')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Everyone That Sends in Their MATIC that Day will Receive the Evenly Divided Share of HODLS from the Daily Transformation Pool')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('It is Simple, Send in 4% of the Polygon into the Daily Transformation Pool, Get 4% of that Day’s Pool')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('It might be a good strategy to Daily Cost Average each day')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('You Can Get Additional Bonus HODLS if You Use an Affiliate Address')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('100% of the Celsius from Transformations will be Converted into Polygon for Liquidity Pools')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Purpose of Transforming is to setup Liquidity Pools with 100% of the Polygon that is Transformed')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('All the Polygon will be Locked in Liquidity Pools making HODLS an Asset Backed Crypto')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('No KYC/AML is Required')}</ListText>
          </Flex>
        </div>
        <Title1 style={{ textAlign: 'left' }}>{t('How Many HODL Signals Will I Get?')}</Title1>
        <ListText>{t('It is simple. If you send in 4% of the Polygon into the daily Transformation Pool, you will get 4% of that day’s HODLS.')}</ListText>
        <ListText><span style={{ color: '#ffc000' }}>{t('It gets better')}</span>{t('. If you send 4% of the Polygon into the daily Transformation Pool, and use a valid Affiliate Address you get 4% from the Transformation Pool, plus HODLS from the “Affiliate Bonus Pool”')}</ListText>
        <Title1 style={{ textAlign: 'left' }}>{t('100% of the Polygon (MATIC) & Celsius (CEL) that are Transformed will be locked up in Liquidity Pools. This is how HODL SIGNAL TOKEN becomes an Asset Backed Cryptocurrency. 100% of the Celsius Tokens received will be converted into Polygon and added to the Liquidity Pools.')}</Title1>
        <Title1 style={{ textAlign: 'left' }}>{t('Smart Contract Transformation Form:')}</Title1>
        <ListText style={{ fontSize: '18px' }}>{t('(Detailed instructions including wallet setup are at the bottom of this page)')}</ListText>
        <ListText style={{ marginTop: '20px', marginBottom: '30px' }}>{t('Please Enter the Following Information to Transform Your Polygon (MATIC) and Celsius (CEL) Tokens into HODL Signal Tokens (HODLS):')}</ListText>
        <Title3>{t('Step #1')}<Button width="250px" color="#002060" style={{ marginLeft: '20px', fontSize: '24px', background: '#ffc000', borderRadius: '0' }}>Connect Wallet</Button></Title3>
        <Title3 style={{ marginTop: '20px' }}>{t('Step #2')}<Button width="250px" color="#002060" style={{ marginLeft: '17px', fontSize: '18px', background: '#ffc000', borderRadius: '0' }}>Approve Smart Contract Connection</Button></Title3>
        <Title3 style={{ marginTop: '20px' }}>{t('Step #3 Complete Form Below')}</Title3>
        <div style={{ paddingLeft: '20px' }}>
          <StyledSunburst style={{ paddingTop: '50px' }}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Blockchain Name (Polygon or Celsius):')}</Text>
              <StyledInput style={{ borderRadius: '0', color: '#000000', backgroundColor: '#ccc' }} />
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Polygon or Celsius')}</Text>
          </StyledSunburst>
          <div style={{ padding: '12px 24px' }}>
            <Text style={{ fontSize: '13px', textAlign: 'left' }} color="#ffffff">{t('IMPORTANT: Only Celsius on Polygon can be transformed, Contract ID: 0xd85d1e945766fea5eda9103f918bd915fbca63e6')}</Text>
          </div>
          <StyledSunburst style={{ paddingTop: '15px' }}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Token Quantity to Transform:')}</Text>
              <StyledInput style={{ borderRadius: '0', color: '#000000', backgroundColor: '#ccc' }} />
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 1695.01234567')}</Text>
          </StyledSunburst>
          <StyledSunburst style={{ paddingTop: '15px' }}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Your HODL Signal Address:')}</Text>
              <StyledInput style={{ borderRadius: '0', color: '#000000', backgroundColor: '#ccc' }} />
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0x37df7ac747Db435CFd5704eA5d7704A553692093')}</Text>
          </StyledSunburst>
          <div style={{ padding: '12px 24px' }}>
            <Text style={{ fontSize: '13px', textAlign: 'left' }} color="#ffffff">{t('Your Polygon (MATIC) address is the same as your HODL Signal address. For additional help see bottom of this page.')}</Text>
          </div>
          <StyledSunburst style={{ paddingTop: '15px' }}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Optional Your Affiliate’s Address:')}</Text>
              <StyledInput style={{ borderRadius: '0', color: '#000000', backgroundColor: '#ccc' }} />
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0xDE5B5881b07DF4569D707583738A310e80AbBd27')}</Text>
          </StyledSunburst>
        </div>
        <Flex style={{ position: 'relative', wordBreak: 'break-all', marginTop: '20px' }} justifyContent="start" alignItems="center">
          <Text style={{ fontSize: '15px', textAlign: 'left', marginRight: '15px' }} color="#ffc000">{t('To Tip a Social Media Staffer, Use this Affiliate Address: ')}</Text>
          <Text style={{ fontSize: '15px', textAlign: 'left' }} color="#ffffff">{t('0xDE5B5881b07DF4569D707583738A310e80AbBd27 ')}</Text>
          <Button padding="0" style={{ background: "#002060", marginLeft: '8px' }} onClick={copyAddress}><CopyIcon padding="0" color="#ffc000" /></Button>
          <Tooltip isTooltipDisplayed={isDisplayed}>{t('Copied')}</Tooltip>
        </Flex>
        <Flex mb="50px" flexDirection="column" justifyContent='center' alignItems='center' mt='50px'>
          <Button width="250px" color="#002060" style={{ fontSize: '24px', background: '#ffc000', borderRadius: '0' }} disabled={pendingTx} onClick={onClickSubmit} >SUBMIT</Button>
          <Text style={{ fontSize: '17px', textAlign: 'center', marginTop: '20px' }} width="auto" color="#ffffff">{t('When you Submit your tokens, you will be automatically added to today’s pool. Save your Transaction Hash ID. You will receive your HODL Signal Tokens on Distribution Day (Launch Day).')}</Text>
        </Flex>
        <Title1 style={{ textAlign: 'left', fontSize: '24px' }}><span style={{ color: '#ff0000' }}>{t('IMPORTANT: ')}</span>{t(' Primary Purpose for Transformations/Conversion is to create a Liquidity Pool of Polygon (MATIC) making HODL Signal an Asset backed Cryptocurrency. It also creates a “Price Floor” for HODL Signal. Once the price floor/liquidity pool is set it will be locked. This locking mechanism means that the Liquidity Pool becomes ownerless. It also means that HODL Signal can never go to zero in value. For it to go to zero would mean that Polygon (MATIC) would also have to go to zero. 100% of all Polygon (MATIC) goes to Liquidity Pools.')}</Title1>
        <Title1 style={{ textAlign: 'left' }}>{t('Why was Celsius also Selected for Transforming?')}</Title1>
        <ListText style={{ marginTop: '20px' }}>{t('Due to recent news about the losses many have suffered from Celsius mismanagement, the Founders felt it was the least they can do is give some value to the Celsius token by allowing it to be transformed into HODL Signal Token. While they cannot give out Bitcoin, ETH, and other Cryptos to those who have lost their Crypto, they can provide a use/utility/value to the Celsius token on the Polygon Blockchain. Now they can convert their Celsius Tokens into a token that does not rely on 3rd parties and is designed to be an asset backed store-of-value Crypto.')}</ListText>
        <ListText style={{ marginTop: '20px' }}>{t('The Celsius calamity helps to illustrate that Cryptocurrencies were originally designed to eliminate 3rd Party risk. Not you Private Keys Not Your Coins or Tokens. Celsius mishandled everyone’s Bitcoins, Ethereum, and other Cryptos with risky investments. The lesson learned should be to never hand over your Crypto to a 3rd Party. HODL Signal is a splendid example of how a Crypto Asset should work. The User always holds and controls their HODL Signal Tokens. Even signaling to Start and Stop a HODL (hold) does not touch, spend, or lockup their tokens.')}</ListText>
        <ListText style={{ marginTop: '20px' }}>{t('All the Celsius that is transformed will be converted into Polygon and added to the HODL Signal Liquidity Pools.')}</ListText>
        <Title1 style={{ textAlign: 'left', fontSize: '24px' }}>{t('How the Transformation process works is each of the 30 Days has a separate pool of HODL SIGNAL TOKENS. Each daily pool has 100 Million HODLS in them. The payment to each User that Transforms is based upon what percentage of the daily total they sent in for transformation. HODLS will be distributed on Distribution Day (Launch Day).')}</Title1>
        <ListText style={{ marginTop: '20px' }}><span style={{ color: '#ffc000' }}>{t('Best part: ')}</span>{t('You can receive bonus HODL SIGNAL TOKENS if you use a valid Affiliate Address. You can query the Smart Contract below to verify if the Affiliate Address is Registered or Not.')}</ListText>
        <Flex margin="24px" alignItems="center" flexDirection={['column', null, null, 'row']} justifyContent={['space-around', null, null, 'start']}>
          <Text color="#ffc000" textAlign="left">{t('Verify Affiliate Address:')}</Text>
          <Flex mx="20px">
            <Flex padding="6px auto" minWidth="320px" background="#ffc000" borderRadius="5px" border="5px solid #000000">
              <Text color="#000000" fontSize='16px' margin="auto">{t('Input Address Here')}</Text>
            </Flex>
            <Flex padding="6px" background="#ffc000" borderRadius="5px" border="5px solid #000000">
              <Text color="#000000" fontSize='16px' margin="auto">{t('>')}</Text>
            </Flex>
          </Flex>
          <Flex padding="6px 20px" background="#ffc000" borderRadius="5px" border="5px solid #000000">
            <Text color="#000000" fontSize='16px' margin="auto">{t('Yes / ')}<span style={{ color: '#ff0000' }}>No</span></Text>
          </Flex>
        </Flex>
        <Title1 style={{ textAlign: 'left' }}>{t('What is a Blockchain Transformation?')}</Title1>
        <ListText style={{ marginTop: '20px' }}>{t('"A Blockchain Transformation is a process where you convert your Tokens for another Blockchain prior to launch. HODL SIGNAL TOKEN is doing a Transformation like others have in the pass. This process is done using a Smart Contract when a User sends their Coins/Tokens in for Transformation/Conversion. On Distribution Day, HODL SIGNAL TOKENS are sent to the User’s Wallet Address(s) that they entered into the Transformation Smart Contract."')}</ListText>
        <Title1 style={{ textAlign: 'left', fontSize: '24px' }}>{t('During this 30-Day Period, each day will have 100 Million HODLS in Transformation Pools available for anyone to transform their POLYGON (MATIC) and Celsius (CEL) into HODL Signal (HODLS).')}</Title1>
        <Title1 style={{ marginTop: '50px' }}>{t('MOST IMPORTANT THINGS TO KNOW')}</Title1>
        <Title1 style={{ marginTop: '30px' }}>{t('ABOUT HODL SIGNAL’S TRANSFORMATION')}</Title1>
        <Flex alignItems="first">
          <Symbol>{t('1. ')}</Symbol>
          <ListText>{t('100% of Transformations go into Liquidity Pools on Decentralized Exchanges (DEX)')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('2. ')}</Symbol>
          <ListText>{t('These Liquidity Pools will be Locked and will Remain Permanent Assets Creating a Price Floor for HODL Signal Token')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('3. ')}</Symbol>
          <ListText>{t('This means, if everyone sold their HODL Signal Tokens, they all would get back some POLYGON (MATIC) in Return')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('4.')}</Symbol>
          <ListText>{t('A Price Floor means HODL Signal Token can never go to zero, unless POLYGON also went to zero in value')}</ListText>
        </Flex>
        <Title1 style={{ textAlign: 'left' }}>{t('What is a Blockchain Transformation?')}</Title1>
        <ListText style={{ marginTop: '16px' }}>{t('First, it is unknown how many Holders of Polygon (MATIC) or Celsius (CEL) Token Holders will Transform their Stack into HODL Signal (HODLS) on each of the 30 Days.')}</ListText>
        <ListText style={{ marginTop: '16px' }}>{t('It also depends upon how many people transformed with a Valid Affiliate Address. These variables determine the quantity you will receive.')}</ListText>
        <ListText style={{ marginTop: '16px' }}>{t('Here is a simple example:')}</ListText>
        <div style={{ marginLeft: '20px' }}>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Imagine You Transformed on Day 5 of Day 30')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('(You Did Not Use an Affiliate Address)')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Each Day has 81,000,000 HODLS in the Non-Affiliate Transforming Pool')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('You Transform/Send 1,695 MATIC to the Transforming Smart Contract')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Imagine Your 1,695 MATIC represents 2% of Day 5’s Transformations')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('81,000,000 x 2% = 1,620,000 HODLS')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('On Distribution Day You Will Receive 1,620,000 HODLS')}</ListText>
          </Flex>
        </div>
        <ListText style={{ marginTop: '16px' }}>{t('NOTE: If you use a Valid Affiliate Address when Transforming you will receive additional HODLS')}</ListText>
        <Title1>{t('How The Transformation Affiliate Bonus Works')}</Title1>
        <ListText style={{ marginTop: '16px' }}>{t('The Bonus is tied to the Affiliate Program. For a User to receive a Transformation Bonus they must enter a valid/registered Affiliate\'s HODL SIGNAL TOKEN Address when transforming. The Affiliate\'s Address is called the “Referral Code.”')}</ListText>
        <ListText style={{ marginTop: '16px' }}>{t('Both Polygon and Celsius can be Transformed/Converted into HODL SIGNAL TOKENS and be transformed using an Affiliate Address.')}</ListText>
        <Flex flexWrap="wrap" alignItems="center" justifyContent="space-around" my="24px">
          <Image src="/images/howtotransform2.jpg" alt="logo" width={320} height={530} />
          <Image src="/images/howtotransform3.jpg" alt="logo" width={320} height={530} />
        </Flex>
        <ListText style={{ marginTop: '16px' }}>{t('Ten percent of the Transformation Pool is allocated toward Affiliate Bonuses. The Affiliates and the Users share 50% of this allocation of HODLS.')}</ListText>
        <ListText style={{ marginTop: '16px' }}>{t('Example:')}</ListText>
        <div style={{ marginLeft: '20px' }}>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('270 Million HODLS are Allocated to the Polygon Affiliate Pool')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Imagine 4,500 Transformations were completed with a Valid Affiliate Address')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Each Address gets an equal share')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Each Affiliate Address linked to each Address gets an equal share')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('This would mean there are 4,500 User Addresses and 4,500 corresponding Affiliate Addresses for each Transformation')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('Math:')}</ListText>
          </Flex>
          <div style={{ paddingLeft: '20px' }}>
            <Flex alignItems="first">
              <Symbol>{t('o')}</Symbol>
              <ListText>{t('270 Million HODLS / 4, 500 Transformations = 60, 000 HODLS')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('o')}</Symbol>
              <ListText>{t('o	60,000 HODLS / 2 = 30,000 HODLS')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('o')}</Symbol>
              <ListText>{t('This Means each Affiliate Address gets 30,000 HODLS')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('o')}</Symbol>
              <ListText>{t('This Means each User Address gets 30,000 HODLS')}</ListText>
            </Flex>
          </div>
          <Flex alignItems="first">
            <Symbol>{t('•')}</Symbol>
            <ListText>{t('The User would get both their Transforming HODLS plus their Bonus HODLS of 30,000')}</ListText>
          </Flex>
        </div>
        <Title1 style={{ textAlign: 'left' }}>{t('How To Setup Polygon & HODL Signal Wallet:')}</Title1>
        <div style={{ paddingLeft: '20px' }}>
          <Flex alignItems="first">
            <Symbol>{t('1.')}</Symbol>
            <ListText>{t('Download the METAMASK Wallet, (Platforms Supported):')}</ListText>
          </Flex>
          <div style={{ paddingLeft: '20px' }}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <ListText>{t('Mobile: Android, iOS')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <ListText>{t('Metamask Browser Extension On: Brave, Chrome, or Firefox')}</ListText>
            </Flex>
          </div>
          <Flex alignItems="first">
            <Symbol>{t('2.')}</Symbol>
            <ListText>{t('Setup your Polygon Wallet on your new METAMASK Wallet')}</ListText>
          </Flex>
          <div style={{ paddingLeft: '20px' }}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <ListText>{t('METAMASK Wallet Setup for Instructions')}</ListText>
            </Flex>
            <div style={{ paddingLeft: '20px' }}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <ListText>{t('Network Name:  Polygon Mainnet')}</ListText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('ii.')}</Symbol>
                <ListText>{t('New RPC URL:  http://polygon-rpc.com/')}</ListText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('iii.')}</Symbol>
                <ListText>{t('Chain ID:  137')}</ListText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('iv.')}</Symbol>
                <ListText>{t('Currency Symbol:  MATIC')}</ListText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('v.')}</Symbol>
                <ListText>{t('Block Explorer URL: https://polygonscan.com/')}</ListText>
              </Flex>
            </div>
          </div>
          <Flex alignItems="first">
            <Symbol>{t('3.')}</Symbol>
            <ListText>{t('Next, Setup Your HODL Signal Wallet in your METAMASK Wallet')}</ListText>
          </Flex>
          <div style={{ paddingLeft: '20px' }}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <ListText>{t('Click on Assets Tab')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <ListText>{t('Go to bottom of Metamask Polygon Wallet and click on “Import tokens”')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('c.')}</Symbol>
              <ListText>{t('Copy the HODL Signal Contract Address')}</ListText>
            </Flex>
            <div style={{ paddingLeft: '20px' }}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <ListText>{t('HODL SIGNAL CONTRACT: ((( we will input contract address when done )))')}</ListText>
              </Flex>
            </div>
            <Flex alignItems="first">
              <Symbol>{t('d.')}</Symbol>
              <ListText>{t('Paste this Contract Address in the “Token Contract Address” box')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('e.')}</Symbol>
              <ListText>{t('Click in the Token Symbol Box, it will then auto populate all the boxes')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('f.')}</Symbol>
              <ListText>{t('Then Click on the blue button: “Add Custom Token”')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('g.')}</Symbol>
              <ListText>{t('Next Click on the blue button: “Import Tokens”')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('h.')}</Symbol>
              <ListText>{t('Your HODL Signal Wallet is now ready to receive HODLS')}</ListText>
            </Flex>
            <div style={{ paddingLeft: '20px' }}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <ListText>{t('Under Account is your HODL Signal Address')}</ListText>
              </Flex>
            </div>
          </div>
        </div>
        <ListText>{t('If you need more help, click on this link below:')}</ListText>
        <a style={{ marginLeft: '20px', fontSize: '16px', color: '#ffc000', textDecoration: 'underline' }} href="/walletsetup" target="_blank">Wallet Setup</a>
        <Title1 style={{ textAlign: 'left' }}>{t('How To Transform MATIC into HODLS')}</Title1>
        <div style={{ paddingLeft: '20px' }}>
          <Flex alignItems="first">
            <Symbol>{t('1.')}</Symbol>
            <ListText>{t('Select either the Polygon (MATIC) or Celsius (CEL) Transformation Form Below')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('2.')}</Symbol>
            <ListText>{t('Connect Your Wallet to the HODL Signal Smart Contract')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('3.')}</Symbol>
            <ListText>{t('Approve this Connection')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('4.')}</Symbol>
            <ListText>{t('Next Complete the Form with the Required Information')}</ListText>
          </Flex>
          <div style={{ paddingLeft: '20px' }}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <ListText>{t('Your Blockchain Wallet Address for Your Tokens')}</ListText>
            </Flex>
            <div style={{ paddingLeft: '20px' }}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <ListText>{t('This is your Polygon or Celsius Address')}</ListText>
              </Flex>
            </div>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <ListText>{t('Quantity of Tokens You are Transforming')}</ListText>
            </Flex>
            <div style={{ paddingLeft: '20px' }}>
              <Flex alignItems="first">
                <Symbol>{t('i.')}</Symbol>
                <ListText>{t('This is the Total Polygon, or Celsius Tokens You Wish to Transform')}</ListText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('ii.')}</Symbol>
                <ListText>{t('Your Wallet/Address Must Contain this Quantity of Tokens')}</ListText>
              </Flex>
              <Flex alignItems="first">
                <Symbol>{t('iii.')}</Symbol>
                <ListText>{t('These Tokens will be sent from your wallet to the Smart Contract for Transforming ')}</ListText>
              </Flex>
            </div>
            <Flex alignItems="first">
              <Symbol>{t('c.')}</Symbol>
              <ListText>{t('Input Your HODL Signal Address')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('d.')}</Symbol>
              <ListText>{t('(OPTIONAL) Input Your Affiliate Address')}</ListText>
            </Flex>
          </div>
          <Flex alignItems="first">
            <Symbol>{t('5.')}</Symbol>
            <ListText>{t('The Smart Contract will Input Your Transformation into the Current Day’s Total')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('6.')}</Symbol>
            <ListText>{t('Then Select the “TRANSFORM” Button')}</ListText>
          </Flex>
          <div style={{ paddingLeft: '20px' }}>
            <Flex alignItems="first">
              <Symbol>{t('a.')}</Symbol>
              <ListText>{t('This Registers Your HODL SIGNAL ADDRESS to your Blockchain Coins/Tokens Address and the Quantity of your Coins/Tokens you will Transform')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>{t('b.')}</Symbol>
              <ListText>{t('It also deducts your Polygon (MATIC) or Celsius (CEL) tokens from your address and sends them to the Transforming Smart Contract')}</ListText>
            </Flex>
          </div>
        </div>
        <ListText style={{ marginTop: '16px' }}>{t('On Distribution Day You will Receive Your HODL SIGNAL Tokens')}</ListText>
        <ListText style={{ marginTop: '16px' }}>{t('Distribution Day is When Everyone Receives their HODL SIGNAL TOKENS from Transformations & Claiming Epochs')}</ListText>
        <ListText style={{ marginTop: '16px' }}>{t('Transformation is Calculated Based on How Many People Entered into the Daily Pool')}</ListText>
        <ListText style={{ marginTop: '16px' }}>{t('Additional HODL SIGNAL TOKENS are Awarded to Users that Entered a Registered Affiliate Address (Valid Affiliate Address)')}</ListText>
        <ListText style={{ marginTop: '16px' }}>{t('The Bonus Pool Rewards the User and the Affiliate')}</ListText>
        <Title1 style={{ textAlign: 'left' }}>{t('IMPORTANT:')}</Title1>
        <ListText>{t('HODL Signal (HODLS) is doing a completely fair launch where 100% of its tokens are being distributed to the community. Founders/Devs/Creators will not receive any HODLS during the distribution. They must Claim or Transform Polygon and Celsius like everyone else. No ICO, IEO, IDO or Venture Capital was raised to create HODL Signal. The creation of HODL Signal was prepaid by the Founders. Like Satoshi, it is a gift to the world. 100% of the Polygon (MATIC) sent to be transformed into HODLS will be Locked in Liquidity Pools making HODL Signal an Asset Backed Token. Pools will be setup on QuickSwap and ApeSwap.')}</ListText> */}
      </div>
    </Page >
  )
}

export default HowToTransform
