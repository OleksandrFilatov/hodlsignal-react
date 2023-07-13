import React from 'react'
import { AutoRenewIcon, Flex, Text, Heading, Stepper, Step, Card, CardBody, Box, ArrowDownIcon } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled, { keyframes } from 'styled-components'
import { useTranslation } from 'contexts/Localization'

const RoadMap = () => {
  const { t } = useTranslation()

  const RoadMapText = styled(Text)`
    color: #002060;
    padding: 10px 0;
    font-size: 17px;
  `

  const RoadMapFlex = styled(Flex)`
    width: 540px;
    background: #b0b0b0;
    padding: 20px;
    border-radius: 20px;
    flex-direction: column;
    margin: 20px auto;
    outline: none;
    border-color: #ffffff;
    box-shadow: 0 0 8px #ffffff;
    @media screen and (max-width: 580px) {
      width: 100%;
    }
  `

  const RoadMapFlexTwo = styled(RoadMapFlex)`
    background: #ffc000;
    outline: none;
    border-color: #ffc000;
    box-shadow: 0 0 8px #ffc000;
  `

  const RoadMapFlexThree = styled(RoadMapFlex)`
    background: #002060;
    border: 10px solid #ffc000;
  `

  const ArrowSymbol = styled(ArrowDownIcon)`
    width: 60px;
  `

  const DateText = styled(RoadMapText)`
    color: #ff0000;
    @media screen and (max-width: 852px) {
      padding: 0;
    }
  `

  return (
    <Page style={{ maxWidth: '1200px' }}>
      <div id="roadmap">
        <Heading style={{ fontSize: '64px', margin: '50px 0 40px ', textAlign: 'center' }} color="#ffc000">{t('ROAD MAP')}</Heading>
        <Flex flexDirection="column" alignItems="center">
          <RoadMapFlex>
            <RoadMapText><strong>DESIGN PHASE:</strong></RoadMapText>
            <RoadMapText>{t('Test Various Blockchains for low Gas Fess, Scalability, Interoperability Focused, Security & Stability')}</RoadMapText>
            <RoadMapText><strong>Started 2 Years Ago</strong>{t(' - Waited for Tech & Infrastructure to Catchup')}</RoadMapText>
          </RoadMapFlex>
          <ArrowSymbol color="#ffffff" />
          <RoadMapFlex>
            <RoadMapText><strong>BUILD PHASE:</strong></RoadMapText>
            <RoadMapText>{t('Build and Test Code, Test Code, Test Code, Test Code, Test Again and Again and Again')}</RoadMapText>
            <RoadMapText>{t('Make Adjustments and Fixes as Required')}</RoadMapText>
            <RoadMapText><strong>However Long It Takes to Get it Right - </strong><span style={{ color: '#ff0000' }}>{t(' Code is Law')}</span></RoadMapText>
          </RoadMapFlex>
          <ArrowSymbol color="#ffffff" />
          <RoadMapFlexTwo style={{ boxShadow: '0 0 30px #ffc000' }}>
            <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["start", null, null, "center"]}>
              <RoadMapText><strong>Pre-Market PHASE:</strong></RoadMapText>
              <DateText>May to June 2022 est.</DateText>
            </Flex>
            <RoadMapText>{t('Complete Website, Get Outside Analysis to Verify no Group Think, Finalize Code for Audit and Complete FAQ & Whitepaper')}</RoadMapText>
            <RoadMapText>{t('Complete FAQ & Whitepaper')}</RoadMapText>
            <RoadMapText><strong>However Long It Takes to Get it Right - </strong><span style={{ color: '#ff0000' }}>{t(' Code is Law')}</span></RoadMapText>
          </RoadMapFlexTwo>
          <ArrowSymbol color="#ffc000" />
          <RoadMapFlexTwo>
            <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["start", null, null, "center"]}>
              <RoadMapText><strong>MARKETING PHASE:</strong></RoadMapText>
              <DateText>July to August 2022 est.</DateText>
            </Flex>
            <RoadMapText>{t('Set-up Social Media Sites, Announce 250 Blockchains for Claiming/Airdrop & use Social Media to inform their holders.')}</RoadMapText>
            <RoadMapText>{t('Kick-off Contests and Monitor Votes on Den.Social')}</RoadMapText>
            <RoadMapText><strong>60 + Day Duration</strong></RoadMapText>
          </RoadMapFlexTwo>
          <ArrowSymbol color="#ffc000" />
          <RoadMapFlexTwo>
            <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["start", null, null, "center"]}>
              <RoadMapText><strong>CLAIMING & TRANSFORM EVENT:</strong></RoadMapText>
              <DateText>September 1, 2022</DateText>
            </Flex>
            <RoadMapText>{t('Polygon (MATIC) Swaps for (HODLS) Begin')}</RoadMapText>
            <RoadMapText>{t('250 Blockchains Claiming Process Begins')}</RoadMapText>
            <RoadMapText><strong>30 +/- Day Duration</strong></RoadMapText>
          </RoadMapFlexTwo>
          <ArrowSymbol color="#ffc000" />
          <RoadMapFlexTwo>
            <Flex flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["start", null, null, "center"]}>
              <RoadMapText><strong>DISTRIBUTION DAY (Launch Day)</strong></RoadMapText>
              <DateText>October 1, 2022</DateText>
            </Flex>
            <RoadMapText><strong>{t('LIQUIDITY SETUP:')}</strong></RoadMapText>
            <RoadMapText>{t('Setup Trading & Liquidity Pools  (QuickSwap & ApeSwap) 100 % of all Polygon(MATIC) Transforms go to DEX Liquidity DEX Setup & Go Live')}</RoadMapText>
            <RoadMapText><strong>{t('DISTRIBUTION:')}</strong></RoadMapText>
            <RoadMapText>{t('Smart Contract Sends out to All Addresses HODL SIGNAL TOKEN (HODLS) that Properly Claimed and/or Transformed')}</RoadMapText>
            <RoadMapText>{t('Also sent are Den.Social Subscriber Rewards')}</RoadMapText>
            <RoadMapText><strong>{t('Contest Winner Distribution:')}</strong></RoadMapText>
            <RoadMapText><strong>{t('1 Day Duration')}</strong></RoadMapText>
            <RoadMapText><strong>{t('Contest Winner Distribution:')}</strong></RoadMapText>
            <RoadMapText><strong>{t('Few Days Post Distribution Day')}</strong></RoadMapText>
            <RoadMapText><strong>{t('1 Day Duration')}</strong></RoadMapText>
          </RoadMapFlexTwo>
          <ArrowSymbol color="#ffc000" />
          <RoadMapFlexThree>
            <RoadMapText style={{ color: '#ffc000', textAlign: 'center', fontSize: '24px' }}>{t('POST LAUNCH')}</RoadMapText>
            <RoadMapText style={{ color: '#ffc000', textAlign: 'center' }}>{t('HODL SIGNAL (HODLS)')}</RoadMapText>
            <RoadMapText style={{ color: '#ffc000', textAlign: 'center' }}>{t('is Now Officially on Autopilot')}</RoadMapText>
            <RoadMapText style={{ color: '#ffc000', textAlign: 'center' }}>{t('Handed Over to the Community')}</RoadMapText>
            <RoadMapText style={{ color: '#ffc000', textAlign: 'center' }}>{t('Follow & Participate on Den.Social')}</RoadMapText>
          </RoadMapFlexThree>
        </Flex>
      </div>
    </Page>
  )
}

export default RoadMap
