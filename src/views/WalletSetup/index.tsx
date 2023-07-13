import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { Button, Flex, Text, Heading, Card, CardBody, Image, CopyIcon } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const WalletSetup = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }
  const [isDisplayed1st, setIsDisplayed1st] = useState(false)
  const [isDisplayed2nd, setIsDisplayed2nd] = useState(false)
  const [isDisplayed3rd, setIsDisplayed3rd] = useState(false)
  const [isDisplayed4th, setIsDisplayed4th] = useState(false)
  const [isDisplayed5th, setIsDisplayed5th] = useState(false)

  const copyAddress1st = () => {
    const polygon = "Polygon Mainnet"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(polygon).then(() => displayTooltip1st())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = polygon
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip1st()
    }
  }

  const copyAddress2nd = () => {
    const polygonrpc = "http://polygon-rpc.com"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(polygonrpc).then(() => displayTooltip2nd())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = polygonrpc
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip2nd()
    }
  }

  const copyAddress3rd = () => {
    const chainid = "137"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(chainid).then(() => displayTooltip3rd())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = chainid
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip3rd()
    }
  }

  const copyAddress4th = () => {
    const symbol = "MATIC"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(symbol).then(() => displayTooltip4th())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = symbol
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip4th()
    }
  }

  const copyAddress5th = () => {
    const polygonurl = "https://polygonscan.com"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(polygonurl).then(() => displayTooltip5th())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = polygonurl
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip5th()
    }
  }

  function displayTooltip1st() {
    setIsDisplayed1st(true)
    setTimeout(() => {
      setIsDisplayed1st(false)
    }, 1000)
  }

  function displayTooltip2nd() {
    setIsDisplayed2nd(true)
    setTimeout(() => {
      setIsDisplayed2nd(false)
    }, 1000)
  }

  function displayTooltip3rd() {
    setIsDisplayed3rd(true)
    setTimeout(() => {
      setIsDisplayed3rd(false)
    }, 1000)
  }

  function displayTooltip4th() {
    setIsDisplayed4th(true)
    setTimeout(() => {
      setIsDisplayed4th(false)
    }, 1000)
  }

  function displayTooltip5th() {
    setIsDisplayed5th(true)
    setTimeout(() => {
      setIsDisplayed5th(false)
    }, 1000)
  }

  const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
    display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? 'inline-block' : 'none')};
    position: absolute;
    padding: 8px;
    top: 8px;
    right: -100px;
    text-align: center;
    background-color: #ffc000;
    color: #002060;
    border-radius: 16px;
    opacity: 0.7;
    width: 100px;
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

  return (
    <Page style={{ maxWidth: '1152px' }}>
      <div>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <Heading style={{ fontSize: '42px', margin: '40px 0 60px ', textAlign: 'center' }} color="#ffc000">{t('HOW TO SETUP A METAMASK WALLET')}</Heading>
        <Text style={{ fontSize: '23px', margin: '20px 0', textAlign: 'left' }} color="#ffffff">{t('First you need to install the Metamask Wallet for your Mobile or Desktop')}</Text>
        <div style={{ paddingLeft: '20px' }}>
          <Flex alignItems="first">
            <Symbol>&#9656;</Symbol>
            <ListText>{t('Use the Playstore to add the metamask Wallet to your Mobile')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>&#9656;</Symbol>
            <ListText>{t('Metamask Wallet is an Extension to Brave, Chrome, or Firefox Browers')}</ListText>
          </Flex>
        </div>
        <Text style={{ fontSize: '23px', margin: '20px 0', textAlign: 'left' }} color="#ffffff">{t('Under the Network Settings, please configure for Polygon (MATIC) Network')}</Text>
        <Text style={{ fontSize: '23px', margin: '40px 0', textAlign: 'left' }} color="#ffc000">{t('See Below:')}</Text>
        <div style={{ width: '100%' }}>
          <Image src='/images/walletsetup.png' margin="auto" alt="wallet setup" width={316} height={524} />
        </div>
        <Text style={{ fontSize: '23px', margin: '40px 0', textAlign: 'left' }} color="#ffc000">{t('You Can Copy Paste from Here:')}</Text>
        <Flex pl={["0", null, null, "50px"]} flexDirection="column" width={["350px", null, null, "540px"]}>
          <Flex justifyContent="space-between" position="relative" alignItems="center">
            <Flex flexDirection={['column', null, null, 'row']} margin="8px 0">
              <Text mr="20px" style={{ fontSize: '16px', color: '#ffc000', textAlign: 'left' }}>{t('Network Name: ')}</Text>
              <Text style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff" >{t('Polygon Mainnet')}</Text>
            </Flex>
            <Button style={{ background: "#002060" }} onClick={copyAddress1st}><CopyIcon color="#ffc000" /></Button>
            <Tooltip isTooltipDisplayed={isDisplayed1st}>{t('Copied')}</Tooltip>
          </Flex>
          <Flex justifyContent="space-between" position="relative" alignItems="center">
            <Flex flexDirection={['column', null, null, 'row']} margin="8px 0">
              <Text mr="20px" style={{ fontSize: '16px', color: '#ffc000', textAlign: 'left' }}>{t('New RPC URL: ')}</Text>
              <Text style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff" ><a href="https://polygon-rpc.com" rel="noreferrer" target="_blank">{t('http://polygon-rpc.com')}</a></Text>
            </Flex>
            <Button style={{ background: "#002060" }} onClick={copyAddress2nd}><CopyIcon color="#ffc000" /></Button>
            <Tooltip isTooltipDisplayed={isDisplayed2nd}>{t('Copied')}</Tooltip>
          </Flex>
          <Flex justifyContent="space-between" position="relative" alignItems="center">
            <Flex flexDirection={['column', null, null, 'row']} margin="8px 0">
              <Text mr="20px" style={{ fontSize: '16px', color: '#ffc000', textAlign: 'left' }}>{t('Chain ID: ')}</Text>
              <Text style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff" >{t('137')}</Text>
            </Flex>
            <Button style={{ background: "#002060" }} onClick={copyAddress3rd}><CopyIcon color="#ffc000" /></Button>
            <Tooltip isTooltipDisplayed={isDisplayed3rd}>{t('Copied')}</Tooltip>
          </Flex>
          <Flex justifyContent="space-between" position="relative" alignItems="center">
            <Flex flexDirection={['column', null, null, 'row']} margin="8px 0">
              <Text mr="20px" style={{ fontSize: '16px', color: '#ffc000', textAlign: 'left' }}>{t('Currency Symbol: ')}</Text>
              <Text style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff" >{t('MATIC')}</Text>
            </Flex>
            <Button style={{ background: "#002060" }} onClick={copyAddress4th}><CopyIcon color="#ffc000" /></Button>
            <Tooltip isTooltipDisplayed={isDisplayed4th}>{t('Copied')}</Tooltip>
          </Flex>
          <Flex justifyContent="space-between" position="relative" alignItems="center">
            <Flex flexDirection={['column', null, null, 'row']} margin="8px 0">
              <Text mr="20px" style={{ fontSize: '16px', color: '#ffc000', textAlign: 'left' }}>{t('Block Explorer URL (Optional): ')}</Text>
              <Text style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff" ><a href="https://polygonscan.com" rel="noreferrer" target="_blank">{t('https://polygonscan.com')}</a></Text>
            </Flex>
            <Button style={{ background: "#002060" }} onClick={copyAddress5th}><CopyIcon color="#ffc000" /></Button>
            <Tooltip isTooltipDisplayed={isDisplayed5th}>{t('Copied')}</Tooltip>
          </Flex>
        </Flex>
        <Text style={{ fontSize: '23px', margin: '40px 0 20px', textAlign: 'left' }} color="#ffc000">{t('For More Detailed Help Go to this Posting:')}</Text>
        <Text pl="40px" style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff" ><a href="https://medium.com/stakingbits/setting-up-metamask-for-polygon-matic-network-838058f6d844" rel="noreferrer" target="_blank">{t('https://medium.com/stakingbits/setting-up-metamask-for-polygon-matic-network-838058f6d844')}</a></Text>
        <Heading style={{ fontSize: '42px', margin: '40px 0 60px ', textAlign: 'center' }} color="#ffc000">{t('To Add HODL SIGNAL TOKEN:')}</Heading>
        <Flex alignItems="start">
          <Text mr="18px" mt="3px" style={{ fontSize: '20px' }} color="#ffffff">{t('1.')}</Text>
          <Text style={{ fontSize: '20px', textAlign: 'left', lineHeight: '36px' }} color="#ffffff">{t('Go to Assets in you Metamask Wallet')}</Text>
        </Flex>
        <Flex alignItems="start">
          <Text mr="18px" mt="3px" style={{ fontSize: '20px' }} color="#ffffff">{t('2.')}</Text>
          <Text style={{ fontSize: '20px', textAlign: 'left', lineHeight: '36px' }} color="#ffffff">{t('Scroll down to “Import tokens” and click on it')}</Text>
        </Flex>
        <Flex alignItems="start">
          <Text mr="18px" mt="3px" style={{ fontSize: '20px' }} color="#ffffff">{t('3.')}</Text>
          <Text style={{ fontSize: '20px', textAlign: 'left', lineHeight: '36px' }} color="#ffffff">{t('Add Toke Address:')}</Text>
        </Flex>
        <Text pl="80px" style={{ fontSize: '20px', textAlign: 'left', lineHeight: '36px' }} color="#ffffff">{t('HODL SIGNAL TOKEN CONTRACT: ')}<span style={{ color: "#ffc000", marginLeft: '12px' }}>{t('TDB')}</span></Text>
        <Flex alignItems="start">
          <Text mr="18px" mt="3px" style={{ fontSize: '20px' }} color="#ffffff">{t('4.')}</Text>
          <Text style={{ fontSize: '20px', textAlign: 'left', lineHeight: '36px' }} color="#ffffff">{t('Token Symbol and Token Decimal will auto-populate into these fields')}</Text>
        </Flex>
        <Flex alignItems="start">
          <Text mr="18px" mt="3px" style={{ fontSize: '20px' }} color="#ffffff">{t('5.')}</Text>
          <Text style={{ fontSize: '20px', textAlign: 'left', lineHeight: '36px' }} color="#ffffff">{t('Click on the Blue “Add Custom Token” at the bottom')}</Text>
        </Flex>
        <Text style={{ fontSize: '23px', margin: '40px 0 20px', textAlign: 'left' }} color="#ffc000">{t('Very Easy to Do…')}</Text>
        <Text style={{ fontSize: '20px', margin: '40px 0 20px', textAlign: 'left' }} color="#ffffff">{t('More Questions?')}</Text>
        <Flex pl="50px">
          <Text style={{ fontSize: '20px', textAlign: 'left' }} color="#ffffff">{t('Ask an Affiliate to Help You and show them some love by using their Affiliate Address to earn Bonus HODL SIGNAL TOKENS')}</Text>
        </Flex>
      </div>
    </Page>
  )
}

export default WalletSetup
