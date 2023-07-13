import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { useHistory } from 'react-router'
import { getSrcSet } from './CompositeImage'
import { SlideSvgDark, SlideSvgLight } from './SlideSvg'

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
  padding-top: 30px;
  width: 360px;
  animation: ${flyingAnim} 3.5s ease-in-out infinite;
  margin: auto;
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0px;
  left: 0px;
`

const InnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: -3px;
`

const DiamondSquare = styled.div`
  margin-top: 50px;
  background: transparent;
  height: 160px;
  text-align: center;
  transform: rotate(45deg);
  width: 160px;
  border: 5px solid #ffc000
`

// const DiamondSquare = styled.div`
//   width: 0;
//   height: 0;
//   border: 50px solid red;
//   border-bottom: 70px solid transparent;
//   position: relative;
//   top: -50px;
//   &:after {
//     content: '';
//     position: absolute;
//     left: -50px;
//     top: 70px;
//     width: 0;
//     height: 0;
//     border: 50px solid red;
//     border-top: 70px solid transparent;
//   }
// `

const DiamondTextGroup = styled.div`
  color: #ffffff;
  display: table-cell;
  height: 160px;
  transform: rotate(-45deg);
  vertical-align: middle;
  width: 160px;
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
`

const DiamondText = styled.div`
  color: #ffffff;
  height: 160px;
  vertical-align: middle;
  width: 160px;
`

const imagePath = '/images/'
const imageSrc = 'mobile-vault'

const Hero = () => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const { theme } = useTheme()
  const history = useHistory()

  const handleNavigate = async (aid: any) => {
    const elem = document.getElementById(aid)
    if (elem !== null) {
      const posY = getOffset(elem).top;
      window.scrollTo(window.scrollX, posY)
      history.push(`/#${aid}`)
    }
  }

  const getOffset = (el: any) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  return (
    <>
      <BgWrapper>
        <InnerWrapper>{theme.isDark ? <SlideSvgDark width="100%" /> : <SlideSvgLight width="100%" />}</InnerWrapper>
      </BgWrapper>
      <Flex
        position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        alignItems={["center", null, null, "center"]}
        justifyContent="center"
        px="10px"
        pb="72px"
        pt={['0', null, null, '50px']}
        // mt={[account ? '280px' : '50px', null, 0]}
        id="homepagehero"
      >
        <Flex
          width={['300px', null, null, '100%']}
          flex={[null, null, null, '2']}
          mt={['24px', null, null, '0']}
          padding="0"
          position="relative"
          alignItems="center"
        >
          <BunnyWrapper>
            <img src={`${imagePath}${imageSrc}.png`} srcSet={getSrcSet(imagePath, imageSrc)} alt={t('mobile-vault')} />
            <Heading scale="lg" color="#ffc000" ml="21px" mt="12px">
              {t('Ticker: HODLS')}
            </Heading>
          </BunnyWrapper>
        </Flex>
        <Flex flex="3" flexDirection="column">
          <Heading scale="xxl" color="#ffc000" mb="24px" style={{ fontSize: '80px', textAlign: 'center' }}>
            {t('HODL Signal')}
          </Heading>
          {/* <Heading scale="xl" mb="24px" style={{ fontSize: '42px', textAlign: 'center' }}>
            {t('Be Your Own Bank')}
          </Heading> */}
          <Heading scale="md" mb="24px" color="#ffc000" style={{ textAlign: 'center', margin: 'auto' }}>
            {t('The First Asset Backed, Mineable Token, That Pays a Fixed Reward,')}
          </Heading>
          <Heading scale="md" mb="24px" color="#ffc000" style={{ textAlign: 'center', margin: 'auto' }}>
            {t('3x the Annual Core Commodity Inflation Rate')}
          </Heading>
          <Heading scale="md" mb="24px" color="#ffc000" style={{ textAlign: 'center', margin: 'auto', paddingTop: '10px'}}>
            {t('(Crude Oil, Wheat, Rice, Poultry, Cotton, etc.)')}
          </Heading>
          <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', marginTop: '20px'}}>
            <div  style={{ flexFlow: 'wrap', width: '250px', height: '130px', border: '5px solid #ffc000', borderRadius: '20px', textAlign: 'center', marginRight: '20px', paddingTop: '10px', paddingBottom: '10px' }}>            
              <Heading style={{ fontSize: '20px', marginTop: '5px'}} color="#ffffff">
                {t('HODL Mining')}
              </Heading>            
              <Heading style={{ fontSize: '20px', marginTop: '10px' }} color="#ffffff">
                {t('Rewards 102%+')}
              </Heading>        
              <Heading style={{ fontSize: '20px', marginTop: '10px'  }} color="#ffffff">
                {t('on Day 365')}
              </Heading>
            </div>
            <div  style={{flexWrap: 'wrap', width: '250px', height: '130px', border: '5px solid #ffc000', borderRadius: '20px', textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>            
              <Heading style={{ fontSize: '18px'}} color="#ffffff">
                {t('Claiming & Transforming')}
              </Heading>            
              <Heading style={{ fontSize: '18px' }} color="#ffffff">
                {t('Begins September 1st 2022')}
              </Heading>        
              <Heading style={{ fontSize: '18px', marginTop: '10px'  }} color="#ffffff">
                {t('Launch Date:')}
              </Heading>        
              <Heading style={{ fontSize: '20px' }} color="#ffffff">
                {t('October 1st 2022')}
              </Heading>
            </div>
          </div>          
          <Heading scale="md" mb="24px" color="#ffc000" style={{ textAlign: 'center', margin: 'auto', paddingTop: '10px'}}>
            {t('Mine From Your Desktop or Phone  &  Beat Inflation')}
          </Heading>

          <Flex mt="30px" flexDirection={['column', null, null, 'row']} justifyContent="space-around" alignItems="center">
            <Flex flexDirection="column">
              <Heading style={{ fontSize: '22px' }} color="#ffffff">
                {t('No 3rd Parties')}
              </Heading>
              <Heading style={{ fontSize: '22px' }} color="#ffffff" mt="10px">
                {t('No Lockups')}
              </Heading>
              <Heading style={{ fontSize: '22px' }} color="#ffffff" mt="10px">
                {t('No Lending')}
              </Heading>
              <Heading style={{ fontSize: '22px' }} color="#ffffff" mt="10px">
                {t('No Defi Yield Farming')}
              </Heading>
              <Heading style={{ fontSize: '22px' }} color="#ffffff" mt="10px">
                {t('No Penalties')}
              </Heading>
              <Heading style={{ fontSize: '28px' }} color="#ffc000" mt="10px">
                {t('Earn from Your Wallet')}
              </Heading>
            </Flex>
            <Flex flexDirection={['column', null, null, 'column']} width={['300px', null, null, '250px']} justifyContent="center" alignItems="center">
              <Button variant="primary" onClick={() => handleNavigate('hodl')}>{t('Simple: Just Signal START & STOP HODL')}</Button>
              {/* <DiamondSquare>            
                <DiamondTextGroup>  
                <Heading>
                  {t('You Hold')}
                </Heading>  
                <Heading>
                  {t('Your Tokens')}
                </Heading>
                <Heading>
                  {t('You Control Your')}
                </Heading>
                <Heading>
                  {t('Private Keys')}
                </Heading>
                </DiamondTextGroup>  
              </DiamondSquare> */}
            </Flex>
          </Flex>
          <Heading scale="lg" color="#ffffff" textAlign="center" mt="64px">
            {t('You Hold Your Tokens')}
          </Heading>
          <Heading scale="lg" color="#ffffff" textAlign="center">
            {t('You Control Your Private Keys')}
          </Heading>
        </Flex>
      </Flex>
    </>
  )
}

export default Hero
