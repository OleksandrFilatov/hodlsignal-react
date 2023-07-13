import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Heading, Card, CopyIcon, Image, Input } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'
import ConnectWalletButton from '../../components/ConnectWalletButton'
import { polygonData, binanceData, ethereumData, avalancheData, smartbchData, powcoinsData, privacycoinsData } from './data'

const Transform = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [searchKey, setSearchKey] = useState('')

  const copyAddress = () => {
    const account = "0x798sd98sdf0sd9f009as0f09dsf09asdf90sadf09isdf"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(account).then(() => displayTooltip())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = account
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

  const NetworkList = styled(Link)`
    color: #ffc000;
    font-size: 16px;
    margin-right: 24px;
    margin-bottom: 14px;
    text-decoration: underline;
    cursor: pointer;
  `

  const Title = styled(Text)`
    font-size: 28px;
    margin: 80px 0;
    text-align: center;
    color: #ffc000;
    @media screen and (max-width: 450px) {
      font-size: 22px;
      margin: 40px 0;
    }
  `

  return (
    <div style={{ background: '#002060', width: '100%', padding: '16px' }}>
      <div style={{ paddingTop: '30px', maxWidth: '1152px', margin: 'auto' }}>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <Text style={{ fontSize: '18px', margin: '80px 0 60px ', textAlign: 'left' }} color="#ffc000">{t('TRANSFORMING BLOCKCHAIN SEARH & DATE FORM')}</Text>
        <Title>{t('100+ Blockchains to be Selected For Transformation')}</Title>
        <Flex justifyContent="space-between" alignItems="start" flexWrap="wrap">
          <Flex mb="18px" flexDirection="column" alignItems="center">
            <Text style={{ fontSize: '28px' }} color="#ffffff">{t('PLATFORMS/NETWORKS')}</Text>
            <Text style={{ fontSize: '18px' }} color="#ffffff">{t('Click on Blockchain Below for Form')}</Text>
          </Flex>
          <Flex mb="18px" flexDirection="column" alignItems="center">
            <Input style={{ borderRadius: '10px', color: '#000000', maxWidth: '500px', backgroundColor: '#ffffff' }} placeholder='Search Box (Input Coin/Token Name)' onChange={(e) => setSearchKey(e.target.value)} />
            <Text style={{ fontSize: '18px' }} color="#ffffff">{t('Search Takes You Directly to the Blockchain Entry Form')}</Text>
          </Flex>
        </Flex>
        <Flex flexDirection="column" py="50px" px={['8px', null, null, '50px']}>
          {polygonData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1).length !== 0 &&
            <Flex flexDirection="column" mb="40px">
              <Text style={{ fontSize: '20px' }} mb="16px" color="#ffffff">{t('POLYGON/MATIC')}</Text>
              <Flex pl="30px" flexWrap="wrap">
                {
                  polygonData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                    .map(data => (
                      <NetworkList to={`${data.link}/${data.text.split('(')[1].split(')')[0]}/${data.poolindex}`}>{t(data.text)}</NetworkList>
                    ))
                }
              </Flex>
            </Flex>
          }
          {binanceData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1).length !== 0 &&
            <Flex flexDirection="column" mb="40px">
              <Text style={{ fontSize: '20px' }} mb="16px" color="#ffffff">{t('BINANCE (BNC)')}</Text>
              <Flex pl="30px" flexWrap="wrap">
                {
                  binanceData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                    .map(data => (
                      <NetworkList to={`${data.link}/${data.text.split('(')[1].split(')')[0]}/${data.poolindex}`}>{t(data.text)}</NetworkList>
                    ))
                }
              </Flex>
            </Flex>
          }
          {ethereumData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1).length !== 0 &&
            <Flex flexDirection="column" mb="40px">
              <Text style={{ fontSize: '20px' }} mb="16px" color="#ffffff">{t('ETHEREUM')}</Text>
              <Flex pl="30px" flexWrap="wrap">
                {
                  ethereumData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                    .map(data => (
                      <NetworkList to={`${data.link}/${data.text.split('(')[1].split(')')[0]}/${data.poolindex}`}>{t(data.text)}</NetworkList>
                    ))
                }
              </Flex>
            </Flex>
          }
          {avalancheData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1).length !== 0 &&
            <Flex flexDirection="column" mb="40px">
              <Text style={{ fontSize: '20px' }} mb="16px" color="#ffffff">{t('AVALANCHE')}</Text>
              <Flex pl="30px" flexWrap="wrap">
                {
                  avalancheData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                    .map(data => (
                      <NetworkList to={`${data.link}/${data.poolindex}`}>{t(data.text)}</NetworkList>
                    ))
                }
              </Flex>
            </Flex>
          }
          {smartbchData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1).length !== 0 &&
            <Flex flexDirection="column" mb="40px">
              <Text style={{ fontSize: '20px' }} mb="16px" color="#ffffff">{t('SMART BCH')}</Text>
              <Flex pl="30px" flexWrap="wrap">
                {
                  smartbchData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                    .map(data => (
                      <NetworkList to={`${data.link}/${data.text.split('(')[1].split(')')[0]}/${data.poolindex}`}>{t(data.text)}</NetworkList>
                    ))
                }
              </Flex>
            </Flex>
          }
          {powcoinsData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1).length !== 0 &&
            <Flex flexDirection="column" mb="40px">
              <Text style={{ fontSize: '20px' }} mb="16px" color="#ffffff">{t('POW COINS')}</Text>
              <Flex pl="30px" flexWrap="wrap">
                {
                  powcoinsData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                    .map(data => (
                      <NetworkList to={`${data.link}/${data.text.split('(')[1].split(')')[0]}/${data.poolindex}`}>{t(data.text)}</NetworkList>
                    ))
                }
              </Flex>
            </Flex>
          }
          {privacycoinsData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1).length !== 0 &&
            <Flex flexDirection="column" mb="40px">
              <Text style={{ fontSize: '20px' }} mb="16px" color="#ffffff">{t('PRIVACY COINS')}</Text>
              <Flex pl="30px" mb="16px" flexWrap="wrap">
                {
                  privacycoinsData.filter(data => searchKey === "" ? true : t(data.text).toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                    .map(data => (
                      <NetworkList to={`${data.link}/${data.text.split('(')[1].split(')')[0]}/${data.poolindex}`}>{t(data.text)}</NetworkList>
                    ))
                }
              </Flex>
            </Flex>
          }
        </Flex>
      </div>
    </div>
  )
}

export default Transform
