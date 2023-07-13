import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Flex, Image, Text, TwitterIcon, TelegramIcon, InstagramIcon, RedditIcon, GithubIcon } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { useAirdrop } from 'hooks/useContract'
import { getAirdropContract } from "utils/contractHelpers";
import { useTranslation } from 'contexts/Localization'
import ConnectWalletButton from 'components/ConnectWalletButton'
import Container from 'components/Layout/Container'
import { useWeb3React } from '@web3-react/core'
import SunburstSvg from './SunburstSvg'
import CompositeImage from './CompositeImage'

const BgWrapper = styled.div`
  background: #2B3245;
  padding: 60px 100px;
  @media screen and (max-width: 800px) {
    padding: 60px 20px;
  }
`

const LinkHeader = styled(Link)`
  color: #ffffff;
  margin: 25px 0 5px;
`

const LinkContent = styled(Link)`
  color: #B2B3B4;
  &:hover {
    color: #ffffff;
  }
  margin: 5px 0;
`

const FooterContent = styled(Text)`
  color: #B2B3B4;
  &:hover {
    color: #ffffff;
  }
  margin-top: 3px;
  cursor: pointer;
`

const Footer = () => {
  const { t } = useTranslation()
  const airdropContract = getAirdropContract()
  const { account } = useWeb3React()
  const history = useHistory()
  const [denCount, setDenCount] = useState(0)

  useEffect( () => {
    const fetchDenCount = async () => {
      const _denCount = await airdropContract.getCount()
      console.log("_denCount", _denCount)
      setDenCount(_denCount)
    }

    if(airdropContract) {
      fetchDenCount()
    }
  }, [airdropContract])

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
        <Flex flexDirection="column">
          <Flex
            justifyContent={["space-around", null, null, "space-between"]}
            alignItems={['center', null, null, 'start']}
            flexDirection={['column', null, null, 'row']}
          >
            <Flex flexDirection="column" alignItems={['center', null, null, 'start']}>
              <LinkHeader to="/">{t('HOME')}</LinkHeader>
              <FooterContent onClick={() => handleNavigate('about')}>{t('ABOUT')}</FooterContent>
              <FooterContent onClick={() => handleNavigate('howitworks')}>{t('HOW IT WORKS')}</FooterContent>
              <FooterContent onClick={() => handleNavigate('interestrates')}>{t('MINING REWARDS')}</FooterContent>
              <FooterContent onClick={() => handleNavigate('hodl')}>{t('START/STOP HODL')}</FooterContent>
              <FooterContent onClick={() => handleNavigate('claimtransform')}>{t('CLAIM/TRANSFORM')}</FooterContent>
              <FooterContent onClick={() => handleNavigate('blockchainsselected')}>{t('BLOCKCHAINS SELECTED')}</FooterContent>
              <FooterContent onClick={() => handleNavigate('distribution')}>{t('DISTRIBUTION')}</FooterContent>
              <FooterContent onClick={() => handleNavigate('affiliate')}>{t('AFFILIATE PROGRAM')}</FooterContent>
              <FooterContent onClick={() => handleNavigate('reports')}>{t('REPORTS')}</FooterContent>
            </Flex>
            <Flex flexDirection="column" alignItems={['center', null, null, 'start']}>
              <LinkHeader to="/faq">{t('FAQ')}</LinkHeader>
              <LinkContent to="/walletsetup">{t('METAMASK WALLET SETUP')}</LinkContent>
              <LinkContent to="/team">{t('TEAM')}</LinkContent>
              <LinkContent to="/mission">{t('MISSION')}</LinkContent>
              <LinkContent to="/strategy">{t('STRATEGY')}</LinkContent>
              <LinkContent to="/goal">{t('ULTIMATE GOAL')}</LinkContent>
              <LinkContent to="/densocial">{t('DEN.SOCIAL')}</LinkContent>
              <LinkContent to="/contestlist">{t('CONTESTS')}</LinkContent>
              <LinkContent to="/howtotransform">{t('TRANSFORM COINS/TOKENS')}</LinkContent>
            </Flex>
            <Flex flexDirection="column" alignItems={['center', null, null, 'start']}>
              <LinkHeader to="/whitepaper">{t('WHITE PAPER')}</LinkHeader>
              <LinkContent to="/noharm">{t('DO NO HARM PLEDGE')}</LinkContent>
              <LinkContent to="/abstract">{t('ABSTRACT & LEGAL')}</LinkContent>
              {/* <LinkContent to="/">{t('SITE MAP')}</LinkContent> */}
              <a href="https://polygonscan.com" target="_blank" rel="noreferrer">
                <FooterContent>{t('POLYGON SCAN')}</FooterContent>
              </a>
              <a href="https://polygonscan.com" target="_blank" rel="noreferrer">
                <FooterContent>{t('EXPLORER')}</FooterContent>
              </a>
              <LinkContent to="/brand">{t('BRAND PAGE')}</LinkContent>
              <FooterContent onClick={() => handleNavigate('roadmap')}>{t('ROAD MAP')}</FooterContent>
            </Flex>
          </Flex>
          <Flex margin="auto" width="300px" mt="30px" justifyContent="space-between" alignItems="center">
            <a href="https://den.social/l/hodlsignal/">
              <img src="/images/den2.jpg" width="70px" height="28px" alt="den" />
            </a>
            <a href="https://twitter.com/HodlSignal/" target="_blank" rel="noreferrer">
              <TwitterIcon width="25px" color="#B8ADD2" />
            </a>
            <a href="/">
              <TelegramIcon width="25px" color="#B8ADD2" />
            </a>
            <a href="/">
              <InstagramIcon width="25px" color="#B8ADD2" />
            </a>
            <a href="/">
              <RedditIcon width="25px" color="#B8ADD2" />
            </a>
            <a href="/">
              <GithubIcon width="25px" color="#B8ADD2" />
            </a>
          </Flex>
        </Flex>
      </BgWrapper>
      <Flex style={{ background: '#212735', padding: '40px 100px', justifyContent: 'space-between' }}>
        <span style={{ color: '#B2B3B4', fontSize: '14px' }}>
          &copy; {new Date().getFullYear()} HODL Signal
        </span>
        <span style={{ color: '#B2B3B4', fontSize: '14px' }}>
          {`Den-Twitter Count: ${denCount}`}
        </span>
      </Flex>
    </>
  )
}

export default Footer
