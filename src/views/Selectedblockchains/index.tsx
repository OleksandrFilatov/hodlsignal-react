import React from 'react'
import { useHistory } from 'react-router'
import { Text, Image, Table, Card, Th, Td } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const Selectedblockchains = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const CustomImage = styled.img`
    margin-top: 30px;
  `

  return (
    <Page style={{ maxWidth: '1024px' }}>
      <div style={{ marginBottom: '150px', width: '100%', padding: '0 20px', textAlign: 'center' }}>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <CustomImage src="/images/blockchains/title.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/btc.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/eth1.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/eth2.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/eth3.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/bsc1.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/bsc2.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/polygon.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/sol_tron.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/avax.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/harmony.jpg" alt="logo" width="984px" />
        <CustomImage src="/images/blockchains/total.jpg" alt="logo" width="984px" />
        {/* <div style={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'center', margin: '40px 0' }}>
          <Title style={{ margin: 'auto' }}>{t('NEARLY 250 BLOCKCHAINS ARE READY FOR CLAIMING')}</Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          <Title style={{ margin: 'auto', fontSize: '24px' }}>{t('Follow Us On Den.Social When We Annouce the Remaining Blockchains You Can Claim')}</Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '60px' }}>
          <Title style={{ margin: 'auto', fontSize: '24px', color: '#ffffff' }}>{t('Remember, To Claim You Only Send 0.00000001 (7 zeros)')}</Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '30px' }}>
          <Title style={{ margin: 'auto', fontSize: '24px', color: '#ffffff' }}>{t('to Prove You Own/Control the Address(s) You Are Claiming')}</Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '30px' }}>
          <Title style={{ margin: 'auto', fontSize: '24px', color: '#ffffff' }}>{t('Then Complete the Smart Contract Claiming')}</Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'center', margin: '40px 0' }}>
          <Title style={{ margin: 'auto', fontSize: '32px' }}>{t('Claim Today to Get Your Share of the 1.25 Billion HODL Signal Tokens')}</Title>
        </div>
        <Card style={{ marginTop: '30px' }}>
          <Table style={{ backgroundColor: '#FAF9FA' }}>
            <thead>
              <tr>
                <Th colSpan={5} style={{ fontSize: "24px" }}>BITCOIN (BTC)</Th>
              </tr>
              <tr>
                <Th textAlign="left">ID</Th>
                <Th textAlign="left">NAME</Th>
                <Th textAlign="left">TICKER</Th>
                <Th textAlign="left">BLOCKCHAIN</Th>
                <Th textAlign="left">ADDRESS</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>1</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BITCOIN</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BTC</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BITCOIN</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>bc1q6sl595jyzlw5c7dfgl3f3kr4ew423h67smns57</Td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card style={{ marginTop: '30px' }}>
          <Table style={{ backgroundColor: '#FAF9FA' }}>
            <thead>
              <tr>
                <Th colSpan={5} style={{ fontSize: "24px" }}>POLYGON (MATIC)</Th>
              </tr>
              <tr>
                <Th textAlign="left">ID</Th>
                <Th textAlign="left">NAME</Th>
                <Th textAlign="left">TICKER</Th>
                <Th textAlign="left">BLOCKCHAIN</Th>
                <Th textAlign="left">ADDRESS</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>2</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MATIC</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>5</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>DECENTRALAND</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MANA</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>6</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>USDT-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>USDT</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>7</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>DODO</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>DODO</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>13</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>SANDBOX-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>SAND</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>17</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CELSIUS-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CEL</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>19</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BASIC ATTENTION-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BAT</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>46</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BLOKTOPIA</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BLOK</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>48</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>APESWAP</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BANANA</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>51</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>USDC-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>USDC</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>69</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CHAINLINK-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>LINK</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>75</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>UNISWAP-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>UNI</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>86</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>FRAX-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>FRAX</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>89</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>TrueUSD-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>TUSD</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>92</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>AAVE-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>AAVE</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>95</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>THE GRAPH-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>GRT</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>108</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>SYNTHETIX NETWORK-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>SNX</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>110</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CURVE DAO-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CRV</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>111</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>Lido DADO</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>LDO</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>114</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>ANKR-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>ANKR</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>116</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>SUSHI-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>SUSHI</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>117</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>NETWORK-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>WOO</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>118</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>YEARN FINANCE-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>YFI</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>119</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MAGIC INTERNET MONEY-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MIM</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>121</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BALANCER-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BAL</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>123</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>KYBER NETWORK-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>KNC</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>124</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>RENDER-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>RNDR</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>126</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>SYNAPSE-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>SYN</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>127</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>TELCOIN-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>TEL</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>130</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>Nest Protocol-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>NEST</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>134</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CARTESI-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CTSI</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>137</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>OPENOCEAN-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>OOE</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>138</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>GENSOKISHI METAVERSE</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MV</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>139</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>REQUEST-E</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>REQ</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>140</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>AAVEGOTCH-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>GHST</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>142</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>AUTOMATA-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>ATA</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>167</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>FRAX SHARE-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>FXS</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>172</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>COMPOUND-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>COMP</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>201</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>DERI PROTOCOL-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>DERI</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>207</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>DOGELON-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>ELON</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>213</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CARTESI-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CTSI</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>216</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>VULCAN-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>PRY</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>237</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>THE SANDBOX-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>SAND</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>240</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BATTLE WORLD</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BWO</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>245</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MASK NETWORK-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MASK</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>247</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYDOGE</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYDOGE</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>249</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BANANO-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BAND</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>261</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>DECENTRAL GAMES-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>DG</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>263</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>REVV-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>REVV</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>269</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BLOCKCHAIN MONTER HUNT-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>BCMC</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>270</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CYCLONE PROTOCOL-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>CYC</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>271</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYTRADE-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>TRADE</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>273</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>KOMMUNITAS-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>KOM</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>274</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MYWORLD</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MWT</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>282</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>RADIOSHACK-P</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>RADIO</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>POLYGON</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x9f3444dD66d57221AC8e2974DDBF30B798aDae67</Td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card style={{ marginTop: '30px' }}>
          <Table style={{ backgroundColor: '#FAF9FA' }}>
            <thead>
              <tr>
                <Th colSpan={5} style={{ fontSize: "24px" }}>POLYGON (MATIC)</Th>
              </tr>
              <tr>
                <Th textAlign="left">ID</Th>
                <Th textAlign="left">NAME</Th>
                <Th textAlign="left">TICKER</Th>
                <Th textAlign="left">BLOCKCHAIN</Th>
                <Th textAlign="left">ADDRESS</Th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>3</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>ETHEREUM</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>ETH</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>ETH</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x6D683d7B9A4Ce88111B0Dae1162A8128a3e7ee58</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>5</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>DECENTRALAND</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>MANA</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>ETH</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>0x6D683d7B9A4Ce88111B0Dae1162A8128a3e7ee58</Td>
              </tr>
              <tr>
                <Td textAlign="left" style={{ color: '#280d5f' }}>6</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>...</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>...</Td>
                <Td textAlign="left" style={{ color: '#280d5f' }}>...</Td>
                <Td textAlign="left" style={{ color: '#280d5f', fontSize: '12px' }}>............</Td>
              </tr>
            </tbody>
          </Table>
        </Card> */}
      </div>
    </Page>
  )
}

export default Selectedblockchains
