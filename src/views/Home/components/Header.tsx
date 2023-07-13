import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Heading, Button, Box, Dropdown, EllipsisIcon } from '@pancakeswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import ConnectWalletButton from 'components/ConnectWalletButton'
import useTheme from 'hooks/useTheme'
import { getSrcSet } from './CompositeImage'

const imagePath = '/images/'
const imageSrc = 'logo-1'

const Header = () => {
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

  const LaptopMenuItem = styled(Heading)`
    padding: 3px 10px;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      color: #ffc000;
    }
  `

  const LaptopMenu = styled(Flex)`
    width: 900px;
    flex-wrap: wrap;
    @media screen and (max-width: 850px) {
      display: none;
    }
  `

  const MobileMenu = styled(Flex)`
    width: 90px;
    @media screen and (min-width: 849px) {
      display: none;
    }
  `

  const MenuContent = styled.div`
    color: #ffffff;
    &:hover {
      color: #ffc000;
    }
    font-size: 11px;
    margin-bottom: 8px;
    cursor: pointer;
  `

  return (
    <>
      <Flex
        alignItems="center"
        padding="20px"
        maxWidth="1200px"
        margin="auto"
      >
        <Flex width="12%" minWidth="80px">
          <div style={{ width: '120px' }}>
            <img src={`${imagePath}${imageSrc}.png`} srcSet={getSrcSet(imagePath, imageSrc)} alt={t('mobile-vault')} />
          </div>
        </Flex>
        <Flex flex="1" width="88%" justifyContent="end" zIndex={9999}>
          <LaptopMenu>
            <Link to="/">
              <LaptopMenuItem>
                {t('HOME')}
              </LaptopMenuItem>
            </Link>
            <LaptopMenuItem onClick={() => handleNavigate('about')}>
              {t('ABOUT')}
            </LaptopMenuItem>
            <LaptopMenuItem onClick={() => handleNavigate('howitworks')}>
              {t('HOW IT WORKS')}
            </LaptopMenuItem>
            <LaptopMenuItem onClick={() => handleNavigate('interestrates')}>
              {t('MINING REWARDS')}
            </LaptopMenuItem>
            <LaptopMenuItem onClick={() => handleNavigate('hodl')}>
              {t('START/STOP HODL')}
            </LaptopMenuItem>
            <LaptopMenuItem onClick={() => handleNavigate('claimtransform')}>
              {t('CLAIM/TRANSFORM')}
            </LaptopMenuItem>
            <LaptopMenuItem onClick={() => handleNavigate('blockchainsselected')}>
              {t('BLOCKCHAINS SELECTED')}
            </LaptopMenuItem>
            <LaptopMenuItem onClick={() => handleNavigate('distribution')}>
              {t('DISTRIBUTION')}
            </LaptopMenuItem>
            <LaptopMenuItem onClick={() => handleNavigate('affiliate')}>
              {t('AFFILIATE PROGRAM')}
            </LaptopMenuItem>
            <LaptopMenuItem onClick={() => handleNavigate('reports')}>
              {t('REPORTS')}
            </LaptopMenuItem>
            <a href="https://polygonscan.com" target="_blank" rel="noreferrer">
              <LaptopMenuItem>
                {t('EXPLORER')}
              </LaptopMenuItem>
            </a>
            <Link to="/faq">
              <LaptopMenuItem>
                {t('FAQ')}
              </LaptopMenuItem>
            </Link>
          </LaptopMenu>
          <MobileMenu>
            <Dropdown target={<Button style={{ background: '#002060', border: '1px solid #ffc000' }}><EllipsisIcon color="#ffc000" width="18px" /></Button>}>
              <Link to="/">
                <MenuContent>HOME</MenuContent>
              </Link>
              <MenuContent onClick={() => handleNavigate('about')}>ABOUT</MenuContent>
              <MenuContent onClick={() => handleNavigate('howitworks')}>HOW IT WORKS</MenuContent>
              <MenuContent onClick={() => handleNavigate('interestrates')}>MINING REWARDS</MenuContent>
              <MenuContent onClick={() => handleNavigate('hodl')}>START/STOP HODL</MenuContent>
              <MenuContent onClick={() => handleNavigate('claimtransform')}>CLAIM / TRANSFORM</MenuContent>
              <MenuContent onClick={() => handleNavigate('blockchainsselected')}>BLOCKCHAINS SELECTED</MenuContent>
              <MenuContent onClick={() => handleNavigate('distribution')}>DISTRIBUTION</MenuContent>
              <MenuContent onClick={() => handleNavigate('affiliate')}>AFFILATE PROGRAM</MenuContent>
              <MenuContent onClick={() => handleNavigate('reports')}>REPORTS</MenuContent>
              <a href="https://polygonscan.com" rel="noreferrer">
                <MenuContent>EXPLORER</MenuContent>
              </a>
              <Link to="/faq">
                <MenuContent>FAQ</MenuContent>
              </Link>
            </Dropdown>
          </MobileMenu>
        </Flex>
      </Flex>
    </>
  )
}

export default Header
