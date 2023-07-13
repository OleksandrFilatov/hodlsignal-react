import React, { useEffect, useState } from 'react'
import { Button, Input, Image, Flex, Text, Heading, Checkbox } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { getCakeContract } from 'utils/contractHelpers'
import { useWeb3React } from '@web3-react/core'
import styled, { keyframes } from 'styled-components'
import Page from 'components/Layout/Page'
import useToast from 'hooks/useToast'
import { useTranslation } from 'contexts/Localization'
import useRegisterAffiliate from './useRegisterAffiliate'
import useCheckAffiliate from './useCheckAffiliate'
import useGetAffiliate from './useGetAffiliate'
import useDeleteAffiliate from './useDeleteAffiliate'
import { getSrcSet } from './CompositeImage'
import ConnectWalletButton from '../../components/ConnectWalletButton'

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

const AffiliateDiv = styled.div`
  width: 70%;
  margin: 20px 30px;
  padding: 24px 48px;
  border-radius: 20px;
  border: 5px solid #070d5a;
  background: #ffc000;
  @media screen and (max-width: 920px) {
    width: 100%;
    margin: 20px 0;
    padding: 12px 16px;
  }
`

const Title = styled(Heading)`
  font-size: 36px;
  @media screen and (max-width: 720px) {
    font-size: 24px;
  }
`

const AffilateTitle = styled(Text)`
  font-size: 52px;
  @media screen and (max-width: 1116px) {
    font-size: 40px;
  }
  @media screen and (max-width: 700px) {
    font-size: 34px;
  }
`

const AffiliateText = styled(Text)`
  font-size: 28px;  
  @media screen and (max-width: 970px) {
    font-size: 24px;
  }
  @media screen and (max-width: 570px) {
    font-size: 20px;
  }
`

const imagePath = '/images/'
const imageSrc = 'affiliate-logo'

const Affiliate = () => {
  const { t } = useTranslation()
  const [pendingTx, setPendingTx] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const [isAffiliate, setAffiliate] = useState(false)

  const { account } = useWeb3React()
  const { onRegisterAffiliate } = useRegisterAffiliate()
  const { toastSuccess, toastError } = useToast()

  const checkAffiliate = useGetAffiliate()

  useEffect(() => {
    if (account) {
      setAffiliate(checkAffiliate)
    }
  }, [account, checkAffiliate])

  const onClickCheckBox = async (event) => {
    setIsChecked(!isChecked)
  }

  const onClickRegisterSubmit = async () => {
    if (account) {
      setPendingTx(true)
      try {
        if (!isChecked) {
          toastError(
            t('Error'),
            t('Please take the "Do No Harm" Pledge'),
          )
        } else {
          const aaaa = await onRegisterAffiliate(isChecked)
          toastSuccess(
            `${t('Success!')}!`,
            t('HODL Started. You will earn 0.2575% TMPv3 per day.'),
          )
        }
      } catch (e) {
        if (e.code === 4001) {
          toastError(
            t('Error'),
            t(e.message),
          )
        } else {
          toastError(
            t('Error'),
            t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
          )
        }
        console.error(e)
      } finally {
        setPendingTx(false)
      }
    } else {
      toastError(
        t('Error'),
        t('Please connect your wallet!'),
      )
    }
  }

  return (
    <Page id="affiliate" style={{ maxWidth: '1200px', textAlign: 'center' }}>
      <>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Heading maxWidth={['520px', null, null, '100%']} style={{ fontSize: '52px', margin: 'auto' }} color="#ffc000">AFFILIATE PROGRAM</Heading>
          <Title maxWidth={['520px', null, null, '100%']} style={{ maxWidth: '1000px', margin: '60px auto' }} color="#ffffff">{t('IMAGINE IF BITCOIN MINERS PAID YOU A PART OF THEIR BLOCK REWARDS, OR ETHEREUM MINERS PAID YOU SOME OF THEIR GAS FEES')}</Title>
        </div>
        <Heading style={{ fontSize: '20px', marginBottom: '40px', textAlign: 'left' }} color="#ffc000">{t('WHAT HODL SIGNAL TOKEN DOES FOR ITS AFFILIATES:')}</Heading>
        <Flex flexDirection={['column-reverse', null, null, 'row']} mb="30px" justifyContent="space-around" alignItems={['center', null, null, 'start']}>
          <Flex flexDirection="column" padding={["0 0", null, null, "0 25px"]}>
            <Flex alignItems="start">
              <Text style={{ padding: '5px 5px', borderRadius: '5px', backgroundColor: "#ffffff", margin: '12px 15px' }} />
              <Text style={{ fontSize: '22px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('You will earn 10% of the mining rewards to a HODLer when they add your Affiliate Address to their HODL. The User is incentivized to use your Affiliate Address to earn an additional 10% mining bonus.')}</Text>
            </Flex>
            <Flex alignItems="start">
              <Text style={{ padding: '5px 5px', borderRadius: '5px', backgroundColor: "#ffffff", margin: '12px 15px' }} />
              <Text style={{ fontSize: '22px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('You can also earn a Portion of the User\'s Claiming Bonus if they Claim with your Affiliate Bonus Address.')}</Text>
            </Flex>
            <Flex alignItems="start">
              <Text style={{ padding: '5px 5px', borderRadius: '5px', backgroundColor: "#ffffff", margin: '12px 15px' }} />
              <Text style={{ fontSize: '22px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('Plus, you can earn a Portion of the User\'s Transforming Bonus when they use your Affiliate Address.')}</Text>
            </Flex>
          </Flex>
          <Flex>
            <BunnyWrapper>
              <img src={`${imagePath}${imageSrc}.png`} srcSet={getSrcSet(imagePath, imageSrc)} alt={t('affiliate')} />
            </BunnyWrapper>
          </Flex>
        </Flex>
        <Heading style={{ fontSize: '20px', marginBottom: '40px', textAlign: 'left' }} color="#ffc000">{t('Why does HODL SIGNAL TOKEN have an affiliate Program?')}</Heading>
        <Flex flexDirection="column" pb="30px" px={['0', null, null, '25px']}>
          <Flex flexDirection="row" alignItems="start">
            <Text style={{ padding: '5px 5px', borderRadius: '5px', backgroundColor: "white", margin: '12px 15px' }} />
            <Text style={{ fontSize: '22px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('Many Companies and Organizations use Affiliate Programs to market their products or services (examples include Amazon & Walmart). Affiliate programs have played a vital role in growing customers & clients for millions of Companies and Organizations')}</Text>
          </Flex>
          <Flex flexDirection="row" alignItems="start">
            <Text style={{ padding: '5px 5px', borderRadius: '5px', backgroundColor: "white", margin: '12px 15px' }} />
            <Text style={{ fontSize: '22px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('Bitcoin never had a marketing solution, and therefore its adoption levels have not kept pace with adoption rates of Airbnb, Skype, Angry Birds, or Uber, etc')}</Text>
          </Flex>
          <Flex flexDirection="row" alignItems="start">
            <Text style={{ padding: '5px 5px', borderRadius: '5px', backgroundColor: "white", margin: '12px 15px' }} />
            <Text style={{ fontSize: '22px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('HODL SIGNAL TOKEN is one of few Cryptocurrencies to have an Affiliate Program with Generous Rewards')}</Text>
          </Flex>
          <Flex flexDirection="row" alignItems="start">
            <Text style={{ padding: '5px 5px', borderRadius: '5px', backgroundColor: "white", margin: '12px 15px' }} />
            <Text style={{ fontSize: '22px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('There may never be a better time to become an Affiliate than now because Central Banks are printing money beyond anyone\'s predictions & creating inflation - HODL SIGNAL TOKEN (HODLS) is designed to be a hedge against inflation because it is a Store-of-Value Token, with a Mining Reward 3x Core Commodity Inflation Rates')}</Text>
          </Flex>
        </Flex>
        <Heading style={{ fontSize: '20px', marginBottom: '28px', textAlign: 'left' }} color="#ffc000">{t('To Become an Affiliate, It Cost next to Nothing. One must take the "Do No Harm" Pledge (agree to the Code of Conduct as an Affiliate).')}</Heading>
        <Heading style={{ fontSize: '20px', marginBottom: '40px', textAlign: 'left' }} color="#ffffff">{t('The gas fee to register your address as an Affiliate is less than $0.01 USD in Polygon (MATIC), December 2021')}</Heading>
        <div style={{ width: '100%' }}>
          <div style={{ maxWidth: '900px', background: '#FFC000', margin: 'auto', borderRadius: '10px', padding: '5px', marginBottom: '40px' }}>
            <Image src="/images/affiliate-program.png" alt="affiliate" width={900} height={420} style={{ margin: 'auto' }} />
          </div>
        </div>
        <Heading style={{ fontSize: '20px', marginBottom: '28px', textAlign: 'left' }} color="#ffc000">{t('Using your Metamask Wallet, connect to the Contract, agree to the "Do No Harm Pledge" and enter your Address. Approve this Smart contract interaction and your Address will be a Registered Affiliate Address.')}</Heading>
        <Heading style={{ fontSize: '20px', marginBottom: '28px', textAlign: 'left' }} color="#ffffff">{t('You can do this from this website or write to the Smart Contract using the Polygon Explorer: PolygonScan.com')}</Heading>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Text maxWidth={['520px', null, null, '100%']} style={{ fontSize: '24px', maxWidth: '780px', margin: '60px auto' }} color="#ffc000">{t('As an Affiliate you advertise and encourage others to Claim Tokens, Transform HODL SIGNAL Tokens and make HODLs')}</Text>
        </div>
        <Flex justifyContent='center'>
          <AffiliateDiv>
            <AffilateTitle textAlign="center" fontWeight="600" mb="50px" color="#070d5a">{t('Become an Affiliate Today!')}</AffilateTitle>
            <ConnectWalletButton style={{ background: '#070d5a', color: '#ffffff', height: '40px' }} headstring="Address:" colorHeading='#002060' colorAddress="#002060" colorIcon="blue" />
            {!account || !isAffiliate ? (
              <div>
                <Flex alignItems="center" my="16px" mt="30px" justifyContent='center'>
                  <Checkbox style={{ marginRight: '20px' }} scale="sm" checked={isChecked} onClick={onClickCheckBox} />
                  <AffiliateText fontWeight="bold" color="#070d5a">{t('I have taken the ')}<Link to="/noharm" style={{ textDecoration: 'underline' }}>{t('"Do No Harm" Pledge')}</Link></AffiliateText>
                </Flex>
                <Flex alignItems="center" justifyContent='center'>
                  <Button disabled={pendingTx} style={{ background: '#070d5a', color: '#ffffff', height: '40px' }} onClick={onClickRegisterSubmit}>{t('SUBMIT')}</Button>
                </Flex>
              </div>
            ) : (
              <Text color="#070d5a" fontWeight="bold" fontSize='24px'>Already Registered!</Text>
            )}
          </AffiliateDiv>
        </Flex>
        <Heading style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'left' }} color="#ffc000">{t('Remember:')}</Heading>
        <Heading style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'left' }} color="#ffffff">{t('As an Affiliate you can also encourage others to Claim/Transform HODL SIGNAL TOKENS during the Distribution Phase. Here is where you can earn a lot of tokens.')}</Heading>
        <Heading style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'left' }} color="#ffc000"><i>{t('After the HODL SIGNAL TOKENS have been distributed your earnings don\'t end there.')}</i></Heading>
        <Heading style={{ fontSize: '20px', marginBottom: '60px', textAlign: 'left' }} color="#ffffff">{t('When Users HODL their Tokens and use your Affiliate Address you continue to earn more HODL SIGNAL TOKENS.')} <span style={{ color: '#ffc000' }}><i>{t('This could be perpetual income for you.')}</i></span></Heading>
        <Heading style={{ fontSize: '28px', marginBottom: '20px', textAlign: 'center' }} color="#ffc000">{t('What does the Affiliate Program do?')}</Heading>
        <Heading style={{ fontSize: '20px', marginBottom: '20px', textAlign: 'left' }} color="#ffffff">{t('It\'s a WIN + WIN for Everyone in the HODL SIGNAL TOKEN Community')}</Heading>
        <Flex alignItems="start">
          <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#ffc000", margin: '10px 15px 10px 0' }} />
          <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffc000">{t('New Users Learn About HODL SIGNAL TOKEN from Affiliates')}</Text>
        </Flex>
        <Flex alignItems="start">
          <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#ffc000", margin: '10px 15px 10px 0' }} />
          <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffc000">{t('Crypto HODLers Receive a High HODL Mining Reward')}</Text>
        </Flex>
        <Flex flexDirection="column" padding="0 25px">
          <Flex alignItems="start">
            <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#002060", border: '1px solid #ffffff', margin: '10px 15px 10px 0' }} />
            <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('102.91% On Day 365 with no Affiliate Address')}</Text>
          </Flex>
          <Flex alignItems="start">
            <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#002060", border: '1px solid #ffffff', margin: '10px 15px 10px 0' }} />
            <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('113.20% On Day 365 WITH an Affiliate Address')}</Text>
          </Flex>
          <Flex alignItems="start">
            <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#002060", border: '1px solid #ffffff', margin: '10px 15px 10px 0' }} />
            <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('The Affiliate Gets 10.29% Bonus Reward on a 365 Day HODL')}</Text>
          </Flex>
        </Flex>
        <Flex alignItems="start">
          <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#ffc000", margin: '10px 15px 10px 0' }} />
          <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffc000">{t('HODL SIGNAL TOKEN is:')}</Text>
        </Flex>
        <Flex flexDirection="column" padding="0 25px">
          <Flex alignItems="start">
            <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#002060", border: '1px solid #ffffff', margin: '10px 15px 10px 0' }} />
            <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('Safer Than Yield Farming')}</Text>
          </Flex>
          <Flex alignItems="start">
            <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#002060", border: '1px solid #ffffff', margin: '10px 15px 10px 0' }} />
            <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('Safer Than Lending Out Their Crypto to a 3rd Party')}</Text>
          </Flex>
          <Flex alignItems="start">
            <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#002060", border: '1px solid #ffffff', margin: '10px 15px 10px 0' }} />
            <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('Safer Than Day or Swing Trading - especially on a 3rd Party Exchanges')}</Text>
          </Flex>
          <Flex alignItems="start">
            <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#002060", border: '1px solid #ffffff', margin: '10px 15px 10px 0' }} />
            <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('Far, Far Better & Safer than Leverage Trading on 3rd Party Exchanges')}</Text>
          </Flex>
        </Flex>
        <Flex alignItems="start">
          <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#ffc000", margin: '10px 15px 10px 0' }} />
          <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffc000">{t('It\'s a Win + Win')}</Text>
        </Flex>
        <Flex flexDirection="column" padding="0 25px">
          <Flex alignItems="start">
            <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#002060", border: '1px solid #ffffff', margin: '10px 15px 10px 0' }} />
            <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('Users are Incentivized to Use an Affiliate\'s Address to Receive a Bonus')}</Text>
          </Flex>
          <Flex alignItems="start">
            <Text style={{ padding: '4px 4px', borderRadius: '4px', backgroundColor: "#002060", border: '1px solid #ffffff', margin: '10px 15px 10px 0' }} />
            <Text style={{ fontSize: '20px', marginBottom: '18px', textAlign: 'left' }} color="#ffffff">{t('The Affiliate Wins Too by Earning More HODL SIGNAL TOKENS When Their Affiliate Address is Used')}</Text>
          </Flex>
        </Flex>
      </>
    </Page>
  )
}

export default Affiliate
