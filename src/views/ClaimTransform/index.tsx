import React from 'react'
import { Button, Flex, Text, Heading, Image, CardBody, Box } from '@pancakeswap/uikit'
import styled from 'styled-components'
import Page from 'components/Layout/Page'
import { useHistory } from 'react-router'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'

const StyledSocial = styled.div`
display: flex; 
flexDirection: row;
justify-content: space-around;
alignItems: center;
padding: 20px 100px 40px 100px;
@media screen and (max-width: 728px) {
  padding: 20px 20px 40px 60px;
}
`

const ClaimTransform = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const handleNavigate = async (aid: any) => {
    return history.push(aid);
  }

  const getOffset = (el: any) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  const goClaimPage = () => {
    return history.push('/claimpage');
  }

  const goHowToTransform = () => {
    return history.push('/howtotransform');
  }

  const goHowToBuy = () => {
    return history.push('/howtobuy');
  }

  return (
    <Page id="claimtransform" style={{ maxWidth: '1200px' }}>
      <div id="claintransform">
        <div style={{ textAlign: 'center' }}>
          <Heading style={{ fontSize: '44px', color: '#ffc000', margin: '30px auto' }}>{t('4 WAYS TO GET HODL SIGNAL TOKENS  (Ticker HODLS)')}</Heading>
        </div>
        <Flex mb="30px" flexWrap="wrap" justifyContent="space-around" alignItems="flex-stretch">
          <Flex margin="20px 0" flexDirection="column" width="480px" minHeight="472px" padding="20px" border="1px solid #000000" style={{ boxShadow: '5px 5px 10px #000000' }}>
            <Flex mb="20px" width="100%" background="#ffc000" padding="20px" border="1px solid #000000">
              <Text color="#020060" textAlign="center" margin="auto">{t('1. Already Own Crypto? Use the Claiming Tool')}</Text>
            </Flex>
            <Flex flexDirection="column" width="100%" background="#ffc000" padding="20px" border="1px solid #000000">
              <Flex mb="16px" alignItems="start">
                <Text color="#020060" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#020060" fontSize='12px'>{t('250+ Different Blockchains Selected for Claiming')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#020060" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#020060" fontSize='12px'>{t('5 Million HODLS Allocated for Each Blockchain')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#020060" fontSize='12px' pr="12px">&#9654;</Text>
                <Flex flexDirection="column">
                  <Text color="#020060" fontSize='12px'>{t('Get Your Share of 5 Million HODLS for Each Address you Control in All the 250 Blockchains')}</Text>
                </Flex>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#020060" fontSize='12px' pr="12px">&#9654;</Text>
                <Flex flexDirection="column">
                  <Text color="#020060" fontSize='12px'>{t('Use the Claiming Tool & Just Send 0.00000001 for Address Verification')}</Text>
                </Flex>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#020060" fontSize='12px' pr="12px">&#9654;</Text>
                <Flex flexDirection="column">
                  <Text color="#020060" fontSize='12px'>{t('No KYC/AML')}</Text>
                </Flex>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#020060" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#020060" fontSize='12px'>{t('HURRY! CLAIM YOUR ADDRESS(S)')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#020060" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#020060" fontSize='12px'>{t('Claiming Event Lasts Only 25 Days')}</Text>
              </Flex>
              <Flex justifyContent="center" pt="20px">
                <Button onClick={() => { goClaimPage() }} style={{ color: '#ffc000', borderRadius: '30px', background: '#002060' }}>{t('How to Claim')}</Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex margin="20px 0" background="#ffc000" flexDirection="column" width="480px" padding="20px" border="1px solid #000000" style={{ boxShadow: '5px 5px 10px #000000' }}>
            <Flex mb="20px" width="100%" background="#002060" padding="20px" border="1px solid #000000">
              <Text color="#ffc000" textAlign="center" margin="auto">{t('2. Transform = Convert Polygon (MATIC) into HODLS')}</Text>
            </Flex>
            <Flex flexDirection="column" width="100%" background="#002060" padding="20px" border="1px solid #000000">
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Get the Most HODLS, Transform Polygon (MATIC) into HODLS')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('100 Million HODLS Allocated for Each Day for 30 Days')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Simple, Send in 4% of the Polygon into the Daily Transformation Pool, Get 4% of that Day’s Pool')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Use a Valid Affiliate Address and Receive Additional Bonus HODLS')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('30-Day Event! You Can Transform Each Day (Almost Like Dollar Cost Averaging)')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('No KYC/AML When Transforming')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('IMPORTANT:  100% of Polygon (MATIC) Received Go into Locked Liquidity Pools, Making HODL Signal (HODLS) an Asset Backed Token')}</Text>
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => { goHowToTransform() }} style={{ color: '#002060', borderRadius: '30px', background: '#ffc000' }}>{t('How to Transform')}</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex mb="30px" flexWrap="wrap" justifyContent="space-around" alignItems="center">
          <Flex margin="20px 0" flexDirection="column" width="480px" padding="20px" border="1px solid #000000" style={{ boxShadow: '5px 5px 10px #000000' }}>
            <Flex mb="20px" width="100%" background="#89001c" padding="20px" border="1px solid #000000">
              <Text color="#fff" textAlign="center" margin="auto">{t('3. Den.Social Community Subscription')}</Text>
            </Flex>
            <Flex flexDirection="column" width="100%" background="#89001c" padding="20px" border="1px solid #000000">
              <Flex mb="16px" alignItems="start">
                <Text color="#fff" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#fff" fontSize='12px'>{t('Follow Us and Get Your Share of 200 Million HODLS on Distribution Day (Launch Day)')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#fff" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#fff" fontSize='12px'>{t('Announcements, Community Support, Contest Entries, & General Information will Be Posted in Den')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#fff" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#fff" fontSize='12px'>{t('Subscribe & Follow Us on Den & Twitter')}</Text>
              </Flex>
              <StyledSocial>
                <a style={{ width: '40px' }} href='https://den.social/l/hodlsignal/' target='_blank' rel="noreferrer"><Image src="/images/den.jpg" alt="den" width={40} height={40} /></a>
                <a style={{width: '40px'}} href='https://twitter.com/hodlsignal/' target='_blank' rel="noreferrer"><Image src="/images/twitter.png" alt="den" width={40} height={40} /></a>
              </StyledSocial>
              <Flex mb="16px" alignItems="start">
                <Text color="#fff" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#fff" fontSize='12px'>{t('Enter Your Den ID, Twitter Handle, & HODL Signal Address in the Link Below Before August 1, 2022')}</Text>
              </Flex>
              <Flex justifyContent="center">
                <Button onClick={() => handleNavigate('/densocial')} style={{ color: '#fff', borderRadius: '30px', background: '#002060' }}>{t('Get Den.Social Airdrop')}</Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex margin="20px 0" background="#ffc000" flexDirection="column" width="480px" padding="20px" border="1px solid #000000" style={{ boxShadow: '5px 5px 10px #000000' }}>
            <Flex mb="20px" width="100%" background="#7030A0" padding="20px" border="1px solid #000000">
              <Text color="#ffc000" textAlign="center" margin="auto">{t('4. Chance to Win Millions of HODLS')}</Text>
            </Flex>
            <Flex flexDirection="column" width="100%" background="#7030A0" padding="20px" border="1px solid #000000">
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('50,000,000 HODLS Awarded to Winners')}</Text>
              </Flex>
              <Flex alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Numerous Contests')}</Text>
              </Flex>
              <Flex mb="16px" ml="40px" flexDirection='column'>
                <Text color="#ffc000" fontSize='12px'>{t('Best HODL Signal YouTube Video')}</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Best HODL Signal Memes on Twitter')}</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Best HODL Signal Articles on Medium')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Various Contests in June, July, & August')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Some 1st Place Prizes are 2,000,000 HODLS')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Even 10th Place is a Winner!')}</Text>
              </Flex>
              <Flex mb="16px" alignItems="start">
                <Text color="#ffc000" fontSize='12px' pr="12px">&#9654;</Text>
                <Text color="#ffc000" fontSize='12px'>{t('Most Votes on Den.Social Wins')}</Text>
              </Flex>
              <Flex justifyContent="center" style={{paddingTop: '30px'}}>
                <Button onClick={() => handleNavigate('/contestlist')} style={{ color: '#7030A0', borderRadius: '30px', background: '#ffc000' }}>{t('CLICK FOR CONTEST LIST')}</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </Page>
  )
}

export default ClaimTransform
