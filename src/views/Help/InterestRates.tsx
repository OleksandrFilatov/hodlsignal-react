import React from 'react'
import { AutoRenewIcon, Button, Flex, Text, Grid, Heading, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from "recharts";

const CustomFlex = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin: 32px 0;
`

const TopImage = styled(Image)`
  z-index: 999;
  position: absolute; 
  top: 72px; 
  left: 100px;
`

const TextDiv = styled(Flex)`
  background: #002060;
  padding: 3px 10px;
  border-radius: 8px;
  position: absolute;
  bottom: 12px;
  left: 500px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`

const NoteText = styled(Heading)`
  color: #002060; 
  z-index: 999;
  position: absolute;
  bottom: 84px;
  right: 48px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`



const CustomButton = styled(Button)`
  margin: auto;
  width: 100%;
  padding: 0 10px !important;
  color: #ffc000;
  border-radius: 8px;
  background: #050f2a;
  border: 3px solid #ffc000;
  font-size: 20px;
`

const ChartTitle = styled(Heading)`
  text-align: center;
  color: #002060;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 18px;
`

const CustomHeading = styled(Heading)`
  margin-top: 40px;
  color: #ffc000;
  text-align: center;
  font-size: 36px;
`

const CustomDiv = styled.div`
  padding: 60px 30px 30px;
  border-radius: 10px;
  background: #ffffff;
  position: relative;
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

const StyledFlex = styled(Flex)`
flex-direction: column; 
max-width: 70%; 
padding-top: 18px; 
margin: 70px auto 10px auto; 
align-items: center; 
justify-content: center;
background-color: #ffc000; 
border-radius: 20px;
text-align: center;
@media screen and (max-width: 800px) {
max-width: 90%; 
}
`

const data = [
  {
    name: "0",
    'Rate of Return': 0,
    'With affillate Bonus': 0,
    amt: 2400
  },
  {
    name: "10",
    'Rate of Return': 2.877,
    'With affillate Bonus': 3.164,
    amt: 2400
  },
  {
    name: "20",
    'Rate of Return': 5.753,
    'With affillate Bonus': 6.329,
    amt: 2400
  },
  {
    name: "30",
    'Rate of Return': 8.630,
    'With affillate Bonus': 9.493,
    amt: 2210
  },
  {
    name: "40",
    'Rate of Return': 11.507,
    'With affillate Bonus': 12.658,
    amt: 2210
  },
  {
    name: "50",
    'Rate of Return': 14.384,
    'With affillate Bonus': 15.822,
    amt: 2210
  },
  {
    name: "60",
    'Rate of Return': 17.260,
    'With affillate Bonus': 18.986,
    amt: 2290
  },
  {
    name: "70",
    'Rate of Return': 20.136,
    'With affillate Bonus': 22.151,
    amt: 2290
  },
  {
    name: "80",
    'Rate of Return': 23.013,
    'With affillate Bonus': 25.315,
    amt: 2290
  },
  {
    name: "90",
    'Rate of Return': 25.890,
    'With affillate Bonus': 28.479,
    amt: 2000
  },
  {
    name: "100",
    'Rate of Return': 28.767,
    'With affillate Bonus': 31.643,
    amt: 2000
  },
  {
    name: "110",
    'Rate of Return': 31.643,
    'With affillate Bonus': 34.803,
    amt: 2000
  },
  {
    name: "120",
    'Rate of Return': 34.520,
    'With affillate Bonus': 37.972,
    amt: 2000
  },
  {
    name: "130",
    'Rate of Return': 37.397,
    'With affillate Bonus': 41.136,
    amt: 2000
  },
  {
    name: "140",
    'Rate of Return': 40.273,
    'With affillate Bonus': 44.301,
    amt: 2000
  },
  {
    name: "150",
    'Rate of Return': 43.150,
    'With affillate Bonus': 47.465,
    amt: 2000
  },
  {
    name: "160",
    'Rate of Return': 46.027,
    'With affillate Bonus': 50.630,
    amt: 2000
  },
  {
    name: "170",
    'Rate of Return': 48.904,
    'With affillate Bonus': 53.794,
    amt: 2000
  },
  {
    name: "180",
    'Rate of Return': 51.780,
    'With affillate Bonus': 56.958,
    amt: 2181
  },
  {
    name: "190",
    'Rate of Return': 54.657,
    'With affillate Bonus': 60.123,
    amt: 2181
  },
  {
    name: "200",
    'Rate of Return': 57.534,
    'With affillate Bonus': 63.287,
    amt: 2181
  },
  {
    name: "210",
    'Rate of Return': 60.410,
    'With affillate Bonus': 66.452,
    amt: 2500
  },
  {
    name: "220",
    'Rate of Return': 63.287,
    'With affillate Bonus': 69.616,
    amt: 2500
  },
  {
    name: "230",
    'Rate of Return': 66.164,
    'With affillate Bonus': 72.780,
    amt: 2500
  },
  {
    name: "240",
    'Rate of Return': 69.041,
    'With affillate Bonus': 75.945,
    amt: 2100
  },
  {
    name: "250",
    'Rate of Return': 71.917,
    'With affillate Bonus': 79.109,
    amt: 2100
  },
  {
    name: "260",
    'Rate of Return': 74.794,
    'With affillate Bonus': 82.273,
    amt: 2100
  },
  {
    name: "270",
    'Rate of Return': 77.671,
    'With affillate Bonus': 85.438,
    amt: 2100
  },
  {
    name: "280",
    'Rate of Return': 80.547,
    'With affillate Bonus': 88.602,
    amt: 2100
  },
  {
    name: "290",
    'Rate of Return': 83.324,
    'With affillate Bonus': 91.767,
    amt: 2100
  },
  {
    name: "300",
    'Rate of Return': 86.301,
    'With affillate Bonus': 94.931,
    amt: 2100
  },
  {
    name: "310",
    'Rate of Return': 89.178,
    'With affillate Bonus': 98.095,
    amt: 2100
  },
  {
    name: "320",
    'Rate of Return': 92.054,
    'With affillate Bonus': 101.260,
    amt: 2100
  },
  {
    name: "330",
    'Rate of Return': 94.931,
    'With affillate Bonus': 104.424,
    amt: 2100
  },
  {
    name: "340",
    'Rate of Return': 97.8087,
    'With affillate Bonus': 107.589,
    amt: 2100
  },
  {
    name: "350",
    'Rate of Return': 100.684,
    'With affillate Bonus': 110.753,
    amt: 2100
  },
  {
    name: "365",
    'Rate of Return': 105,
    'With affillate Bonus': 115.5,
    amt: 2100
  }
];

function formatYAxis(value) {
  if (value === 0) return ""
  if (value === 30) return "30%"
  if (value === 60) return "60%"
  if (value === 90) return "90%"
  if (value === 120) return "120%"
  return value
}

const InterestRates = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div id="interestrates" style={{ padding: '24px' }}>
        {/* <BgWrapper>
          <InnerWrapper><img src="/images/background-3.jpg" alt="background" width="1920px" /></InnerWrapper>
        </BgWrapper> */}
        <CustomHeading>{t('HODL Signal\'s Mining Rewards Chart')}</CustomHeading>
        <div style={{ paddingTop: '20px', display: 'flex' }}>
          <div style={{ background: '#ffffff', borderRadius: '10px', padding: '5px', margin: 'auto' }}>
            <img src="/images/rates-1.png" alt="blockchainsselected" style={{ margin: 'auto', width: '100%' }} />
          </div>
        </div>
        <Heading style={{marginTop: '70px', marginBottom: '30px', color: '#ffc000', fontSize: '24px'}}>Key Reward Dates:</Heading>
        <div style={{display: 'flex' }}>
          <div style={{ background: '#ffffff', borderRadius: '10px', padding: '5px', margin: 'auto' }}>
            <img src="/images/rates-2.png" alt="blockchainsselected" style={{ margin: 'auto', width: '100%' }} />
          </div>
        </div>
        <Heading style={{marginTop: '20px', marginBottom: '30px', color: '#ffc000', fontSize: '24px', textAlign: 'center'}}>The Maximum Reward is Earned on completion of Day 365</Heading>
        <Heading style={{marginTop: '20px', marginBottom: '30px', color: '#ffc000', fontSize: '24px', textAlign: 'center'}}>For Complete Miner Rewards Table Go To FAQ: “Mining Rewards”</Heading>
        <Flex flexDirection="column" maxWidth="384px" pt="18px" mx="auto" mt="70px" alignItems="center" style={{backgroundColor: '#ffc000'}}>
          <Heading style={{color: 'rgb(0 32 96)', fontSize: '36px'}}>This is how you beat</Heading>
          <Heading style={{color: 'rgb(0 32 96)', fontSize: '36px'}}>inflation: <u>Mine Time</u></Heading>
          <Heading style={{color: 'rgb(0 32 96)', fontSize: '20px', paddingTop: '20px'}}>HODL Signal (HODLS) Rewards are 3x</Heading>
          <Heading style={{color: 'rgb(0 32 96)', fontSize: '20px', paddingBottom: '20px'}}> the Core Commodity Inflation Rate</Heading>
        </Flex>

        <Heading style={{marginTop: '70px', marginBottom: '30px', color: '#ffc000', fontSize: '24px', textAlign: 'center'}}>HODL Mining Rewards are calculated based on the inflation rate of 10 different core commodities.</Heading>
        <StyledFlex>
          <Heading style={{color: 'rgb(0 32 96)', fontSize: '36px', marginBottom: '20px'}}>CORE COMMODITIES INDEX</Heading>
          <Flex flexDirection="row" alignItems="center" justifyContent='center' style={{backgroundColor: '#ffc000', flexWrap: 'wrap' }}>
            <Flex flexDirection="column" mr="20px" mb="20px" alignItems="start" padding="20px" style={{backgroundColor: 'rgb(0 32 96)', borderRadius: '10px'}}>
              
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Corn</Heading>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Rice</Heading>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Soybeans</Heading>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Wheat</Heading>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Poultry</Heading>
              </Flex>
            </Flex>
            <Flex flexDirection="column" mb="20px" alignItems="start" padding="20px" style={{backgroundColor: 'rgb(0 32 96)', borderRadius: '10px'}}>
              
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Cotton</Heading>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Crude Oil</Heading>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Steel</Heading>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Copper</Heading>
              </Flex>
              <Flex alignItems="center" justifyContent="center">
                <Text color="#ffc000" fontSize='24px' pr="12px">&#9654;</Text>
                <Heading style={{color: '#ffc000', fontSize: '36px'}}>Silver</Heading>
              </Flex>
            </Flex>
          </Flex>
        </StyledFlex>
        {/* <div style={{display: 'flex' }}>
          <div style={{ background: '#ffffff', borderRadius: '10px', padding: '5px', margin: 'auto' }}>
            <img src="/images/rates-3.png" alt="blockchainsselected" style={{ margin: 'auto', width: '100%' }} />
          </div>
        </div> */}
        <Heading style={{marginTop: '10px', marginBottom: '30px', color: '#ffc000', fontSize: '24px', textAlign: 'left'}}>These Core Commodities are put into an index. This index is monitored for price increases and decreases. This index and the Smart Contract to calculate HODL Mining Rewards is updated every August 1st. Price data comes from NASDAQ, IndexMundi, BarChart, & MacroTrends, based in USD.</Heading>
        <Heading style={{marginTop: '70px', marginBottom: '30px', color: '#ffc000', fontSize: '24px', textAlign: 'left'}}>NOTE: Crude Oil’s value is multiplied by 2. This is so that logistics cost, energy costs & other crude oil by-products (ex. plastics) are included in this inflation index.</Heading>
        <Heading style={{marginTop: '70px', marginBottom: '30px', color: '#ffc000', fontSize: '36px', textAlign: 'center'}}>Below Is the 5 Year Inflation History</Heading>
        <div style={{display: 'flex' }}>
          <div style={{ background: '#ffffff', borderRadius: '10px', padding: '5px', margin: 'auto' }}>
            <img src="/images/rates-4.png" alt="blockchainsselected" style={{ margin: 'auto', width: '100%' }} />
          </div>
        </div>
        {/* <CustomFlex>
          <CustomButton>Mining Rewards Rates</CustomButton>
        </CustomFlex>
        <CustomHeading>{t('HODL Signal Token Mining Rewards Rates')}</CustomHeading> */}
        {/* <CustomDiv>
          <TopImage src="/images/logo-2.png" alt="logo for chart" width={120} height={72} />
          <NoteText style={{ fontSize: '14px' }}>{t('NOTE: No Additional Mining Rewards is Earned Beyond Day 365')}</NoteText>
          <TextDiv>
            <Text style={{ color: '#ffc000', fontSize: '15px' }}>
              {t('HODL for 1 to 365 Days')}
            </Text>
          </TextDiv>
          <Text style={{ color: '#777', fontSize: '15px', position: 'absolute', bottom: '24px', right: '32px' }}>
            {t('DAYS')}
          </Text>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              width={730}
              height={400}
              data={data}
            >
              <CartesianGrid strokeDasharray="6 1" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={formatYAxis} />
              <Tooltip />
              <Legend wrapperStyle={{ top: -20, left: 25 }} />
              <Line type="monotone" dataKey="Rate of Return" stroke="#0000ff" />
              <Line type="monotone" dataKey="With affillate Bonus" stroke="#ef985d" />
            </LineChart>
          </ResponsiveContainer >
        </CustomDiv> */}
        {/* <Flex width="100%">
          <Flex flexDirection="column" maxWidth="384px" pt="18px" margin="auto" alignItems="start">
            <Text style={{ color: '#ffc000' }}>{t('HODL SIGNAL Rate Formula:')}</Text>
            <Text style={{ color: '#ffc000', margin: '0' }}>{t('[ Tokens * 105.0  Days / 365 (Without Affiliate Bonus) ]')}</Text>
          </Flex>
        </Flex> */}
      </div>
    </div>
  )
}

export default InterestRates
