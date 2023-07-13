import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Grid, Heading, Card, CopyIcon, Image, Input } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { CurrencyAmount, JSBI, Token, Trade } from '@pancakeswap/sdk'
import useToast from 'hooks/useToast'
import { useParams } from 'react-router-dom'
import tokens from 'config/constants/tokens'
import useCheckAffiliate from 'views/Affiliate/useCheckAffiliate'
import { useTranslation } from 'contexts/Localization'
import { useGetCakeBalance, useGetBnbBalance } from 'hooks/useTokenBalance'
import useTheme from 'hooks/useTheme'
import { useWeb3React } from '@web3-react/core'
import BackButton from '../../components/BackButton'
import ConnectWalletButton from '../../components/ConnectWalletButton'
import useDeposit from './hooks/useDeposit'
import useValidTime from './hooks/useInvalidTime'
import useIsApproved from './hooks/useIsApproved'
import useApprove from './hooks/useApprove'
import { TRANSFORM_ADDRESS } from '../../config/constants'
import CopyAddress from '../../components/Menu/UserMenu/CopyAddress'


const EntryForm = ({ match }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [isContactDisplayed, setIsContactDisplayed] = useState(false)
  const [affiliateAddress, setAffiliateAddress] = useState('')
  const [blockchainAddress, setBlockchainAddress] = useState("")
  const [quantity, setQuantity] = useState(0)
  const [pendingTx, setPendingTx] = useState(false)
  const [validTime, setValidTime] = useState<boolean>(false)
  const [isApproved, setIsApproved] = useState<boolean>(true)
  // const [poolindex, setPoolIndex] = useState(0)
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const network = match.params.network.split('_').join(' ')
  const token = match.params.token
  const poolindex = parseInt(match.params.poolindex)
  const { account } = useWeb3React()

  const { onDeposit } = useDeposit()
  const { onApprove } = useApprove(network, poolindex)
  const { onCheckAffiliate } = useCheckAffiliate()

  const TMPBalance = useGetCakeBalance()
  const MATICBalance = useGetBnbBalance()

  const { toastSuccess, toastError } = useToast()
  const validpool: boolean = useValidTime(poolindex)

  const approved: boolean = useIsApproved(network, poolindex, quantity)

  useEffect(() => {
    setValidTime(validpool)
    setIsApproved(approved)
  }, [validpool, approved])

  const copyAddress = () => {
    const add = "0xDF465C98bB8dDC6eBb7F9c1086120FD01eEF70AD"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(add).then(() => displayTooltip())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = add
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip()
    }
  }

  const copyContactAddress = () => {
    navigator.clipboard.writeText(TRANSFORM_ADDRESS).then(() => displayContactTooltip())
  }

  function displayTooltip() {
    setIsDisplayed(true)
    setTimeout(() => {
      setIsDisplayed(false)
    }, 1000)
  }

  function displayContactTooltip() {
    setIsContactDisplayed(true)
    setTimeout(() => {
      setIsContactDisplayed(false)
    }, 1000)
  }

  const onChangeBlockchainAddress = (e) => {
    setBlockchainAddress(e.target.value)
  }

  const onChangeQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const onChangeAffiliateAddress = (e) => {
    setAffiliateAddress(e.target.value)
  }

  const onClickApprove = async () => {
    try {
      setPendingTx(true)
      await onApprove(quantity)
      setPendingTx(false)
      setIsApproved(true)
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
  }

  const onClickSubmit = async () => {
    if(!account) {
      toastError(
        t('Error'),
        t('Disconnect wallet!'),
      )
      return      
    }
    if (blockchainAddress === "") {
      toastError(
        t('Error'),
        t('Please enter blockchain address!'),
      )
      return
    }
    if (quantity <= 0) {
      toastError(
        t('Error'),
        t('Error quantity!'),
      )
      return
    }

    if (TMPBalance.balance.isZero() || MATICBalance.balance.isZero()) {
      toastError(
        t('Error'),
        t('Insuficient Balance!'),
      )
      return
    }

    if (!isApproved) {
      toastError(
        t('Error'),
        t('Not Approved!'),
      )
      return
    }

    try {
      if (affiliateAddress === "") {
        setPendingTx(true)
        await onDeposit(poolindex, quantity, "")
        setPendingTx(false)
        return
      }

      let result = false;
      result = await onCheckAffiliate(affiliateAddress)
      console.log("result:  ", result)
      if (!result) {
        toastError(
          t('Error'),
          t('Invalid Affiliate Address!'),
        )
        return
      }

      setPendingTx(true)
      await onDeposit(poolindex, quantity, affiliateAddress)
      setPendingTx(false)
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

  const NetworkList = styled(Text)`
    color: #ffc000;
    font-size: 16px;
    margin-right: 24px;
    text-decoration: underline;
    cursor: pointer;
  `

  const Blackboard = styled.div`
    padding: 16px;
    background: #000000;
    width: 300px;
    border-radius: 20px;
    position: absolute;
    right: -50px;
    top: -20px;
    @media screen and (max-width: 1266px) {
      display: none;
    }
  `

  const PurpleText = styled(Flex)`
    flex-direction: column;
    margin: auto;
    width: 200px;
  `

  const PurpleFlex = styled(Flex)`
    border-radius: 160px;
    width: 320px;
    height: 180px;
    background: #7030a0;
    position: absolute;
    right: 0;
    top: -30px;
    @media screen and (max-width: 1160px) {
      display: none;
    }
  `

  return (
    <div>
      {!validTime &&
        <Flex alignItems='center' justifyContent='center' marginTop='20vh'>
          <Heading scale='xxl'>Coming Soon!</Heading>
        </Flex>}
      {validTime &&
        <div style={{ background: '#002060', width: '100%', padding: '12px' }}>
          <div style={{ paddingTop: '30px', maxWidth: '1152px', margin: 'auto' }}>
            {/* <BackButton /> */}
            <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
            <Text style={{ fontSize: '18px', margin: '80px 0 60px ', textAlign: 'left' }} color="#ffc000">{t('TRANSFORMING BLOCKCHAIN ENTRY FORM')}</Text>
            <Text style={{ fontSize: '28px', margin: '80px 0 30px ', textAlign: 'center' }} color="#ffc000"><span style={{ color: '#ffffff' }}>{token}</span>{t(' to HODL SIGNAL TOKEN')}</Text>
            <div style={{ width: '100%', textAlign: 'center', position: 'relative' }}>
              <Blackboard>
                <Text style={{ fontSize: '14px', textAlign: 'left' }} color="#ffffff">{t('ATTENTION FELLOW CRYPTO USER:')}</Text>
                <br />
                <Text style={{ fontSize: '13px', textAlign: 'left' }} color="#ffffff">{t('In order to Transform your Crypto into HODL SIGNAL Tokens You must Connect with metamask after Setting Up a Polygon Wallet.')}</Text>
                <br />
                <Text style={{ fontSize: '13px', textAlign: 'left' }} color="#ffffff">{t('A small Polygon (MATIC) gas fee will be required.')}</Text>
                <Text style={{ fontSize: '13px', textAlign: 'left' }} color="#ffffff">{t('The polygon gas fee should be less than $0.03 USD in Polygon (MATIC).')}</Text>
                <br />
                <Text style={{ fontSize: '13px', textAlign: 'left' }} color="#ffffff">{t('See metamask Setup for Additional Instructions If you Haven\'t Done So Already.')}</Text>
              </Blackboard>
              <CopyAddress account={TRANSFORM_ADDRESS} headstring={t('Contract ID:')} colorHeading="#ffc000" colorAddress="#ffc000" colorIcon="#ffc000" my="24px" />
              <ConnectWalletButton style={{ background: '#ffc000', margin: '10px', color: '#002060', height: '40px', padding: 'auto' }} headstring="Address:" colorHeading='#ffc000' colorAddress="#ffc000" colorIcon="#ffc000" />
              <Text style={{ fontSize: '18px', textAlign: 'center' }} color="#ffc000">{t('Your are connecting to the HODL SIGNAL Smart')}</Text>
              <Text style={{ fontSize: '18px', textAlign: 'center' }} color="#ffc000">{t('Contract to Begin the Transformation Process')}</Text>
            </div>
            <Flex mt="20px" alignItems="center">
              <Flex mr="20px" style={{ background: '#ffc000', padding: '5px 18px' }}>
                <Text style={{ fontSize: '24px', textAlign: 'center' }} color="#002060">{t('STEP #1')}</Text>
              </Flex>
              <Text style={{ fontSize: '20px', textAlign: 'center' }} color="#ffffff">{t('Complete the Form')}</Text>
            </Flex>
            <Flex padding='32px 12px' flexDirection="column">
              <Flex mb="12px" alignItems={["start", null, null, "center"]} flexDirection={['column', null, null, 'row']}>
                <Flex width={["100%", null, null, "34%"]} alignItems="end">
                  <Text style={{ fontSize: '18px', textAlign: 'left' }} color="#ffc000">{t('Blockchain Name Your are Transforming From:')}</Text>
                </Flex>
                <Flex width={["100%", null, null, "36%"]} alignItems="start">
                  <Input style={{ borderRadius: '0', color: '#000000', width: '400px', backgroundColor: '#ccc' }} value={token} disabled />
                </Flex>
                <Flex width={["100%", null, null, "30%"]} alignItems="start">
                  <Text style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff">{t('Example: ') + token}</Text>
                </Flex>
              </Flex>
              <Flex mb="12px" alignItems={["start", null, null, "center"]} flexDirection={['column', null, null, 'row']}>
                <Flex width={["100%", null, null, "34%"]} alignItems="end">
                  <Text style={{ fontSize: '18px', textAlign: 'left' }} color="#ffc000">{t('Your Coin/Token Blockchain Address:')}</Text>
                </Flex>
                <Flex width={["100%", null, null, "36%"]} alignItems="start">
                  <Input style={{ borderRadius: '0', color: '#000000', width: '400px', backgroundColor: '#ffffff' }} placeholder='Copy Paste Your Blockchain Address' onChange={onChangeBlockchainAddress} value={blockchainAddress} />
                </Flex>
                <Flex width={["100%", null, null, "30%"]} alignItems="start">
                  <Text style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff">{t('Example: Your ') + network + t(' Address')}</Text>
                </Flex>
              </Flex>
              <Flex mb="12px" alignItems={["start", null, null, "center"]} flexDirection={['column', null, null, 'row']}>
                <Flex width={["100%", null, null, "34%"]} alignItems="end">
                  <Text style={{ fontSize: '18px', textAlign: 'left' }} color="#ffc000">{t('Quantity of Coins/Tokens You Will Transform:')}</Text>
                </Flex>
                <Flex width={["100%", null, null, "36%"]} justifyContent="space-between" alignItems="start">
                  <Input style={{ borderRadius: '0', color: '#000000', width: '400px', backgroundColor: '#ffffff' }} placeholder='Entry the Quantity of Coins/Tokens You Will Transform' onChange={onChangeQuantity} value={quantity} />
                  {!isApproved && <Button mx="7px" style={{ borderRadius: '0', background: '#ffc000' }} height="38px" disabled={pendingTx} onClick={onClickApprove}><img src='/images/icon-lock-token.svg' alt="lock" /></Button>}
                </Flex>
                <Flex width={["100%", null, null, "30%"]} alignItems="start">
                  <Text style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff">{t('Example: 156,777.12345678')}</Text>
                </Flex>
              </Flex>
              <Flex mb="12px" alignItems={["start", null, null, "center"]} flexDirection={['column', null, null, 'row']}>
                <Flex width={["100%", null, null, "34%"]} alignItems="end">
                  <Text style={{ fontSize: '18px', textAlign: 'left' }} color="#ffc000">{t('Affiliate Address (Optional):')}</Text>
                </Flex>
                <Flex width={["100%", null, null, "36%"]} alignItems="start">
                  <Input style={{ borderRadius: '0', color: '#000000', width: '400px', backgroundColor: '#ffffff' }} placeholder={t('Copy Paste Your Affiliate\'s Address (optional)')} onChange={onChangeAffiliateAddress} value={affiliateAddress} />
                </Flex>
                <Flex width={["100%", null, null, "30%"]} alignItems="start">
                  <Text style={{ fontSize: '16px', textAlign: 'left' }} color="#ffffff">{t('Example: 0x123456988sf9009ewsdaf656123')}</Text>
                </Flex>
              </Flex>
              <Flex flexDirection="column" maxWidth="424px" margin={[null, null, null, "auto"]} pl={["0", null, null, "32px"]}>
                <Text style={{ fontSize: '17px', textAlign: 'left' }} color="#ffffff">{t('Optional:  If you do not have an Affiliate, you can tip the Developers with Bonus HODL SIGNAL Tokens')}</Text>
                <Text style={{ fontSize: '17px', textAlign: 'left' }} color="#ffffff">{t('Copy Paste This Address to Tip the Developers')}</Text>
                <Flex style={{ position: 'relative', wordBreak: 'break-all' }} justifyContent="space-between" alignItems="center">
                  <Text style={{ fontSize: '15px', textAlign: 'left' }} color="#ffc000">{t('0xDF465C98bB8dDC6eBb7F9c1086120FD01eEF70AD')}</Text>
                  <Button padding="0" style={{ background: "#002060" }} onClick={copyAddress}><CopyIcon padding="0" color="#ffc000" /></Button>
                  <Tooltip isTooltipDisplayed={isDisplayed}>{t('Copied')}</Tooltip>
                </Flex>
              </Flex>
            </Flex>
            <Flex alignItems="start" flexDirection={['column', null, null, 'row']} style={{ position: 'relative' }}>
              <PurpleFlex>
                <PurpleText>
                  <Text style={{ fontSize: '14px', textAlign: 'center' }} color="#ffff">{t('ON')}</Text>
                  <Text style={{ fontSize: '20px', textAlign: 'center' }} color="#ffff"><strong>{t('DISTRIBUTION DAY')}</strong></Text>
                  <Text mb="16px" style={{ fontSize: '14px', textAlign: 'center' }} color="#ffff">{t('EVERYONE WILL RECEIVE THEIR HODL SIGNAL TOKEN.')}</Text>
                  <Text style={{ fontSize: '12px', textAlign: 'center' }} color="#ffff">{t('THE SMART CONTRACT WILL SEND THEM TO EVERYONE\'S WALLET')}</Text>
                </PurpleText>
              </PurpleFlex>
              <Flex mb="50px" mr="272px" style={{ background: '#ffc000', padding: '5px 18px' }}>
                <Text style={{ fontSize: '24px', textAlign: 'center' }} color="#002060">{t('STEP #2')}</Text>
              </Flex>
              <Flex mb="50px" flexDirection="column">
                <Button width="400px" color="#002060" style={{ fontSize: '24px', background: '#ffc000', borderRadius: '0' }} disabled={pendingTx} onClick={onClickSubmit} >SUBMIT</Button>
                <Text style={{ fontSize: '17px', textAlign: 'left' }} width="400px" color="#ffffff">{t('This Step Sends Your Coins/Tokens into the HODL SIGNAL Smart Contract to be Transformed Into HODL SIGNAL TOKENS')}</Text>
              </Flex>
            </Flex>
            <Text mb="50px" style={{ fontSize: '18px', textAlign: 'center' }} color="#ffc000">{t('For Additional Instructions see Transformation Page, FAQ, or follow your favorite Affiliate for guidance on their Social Media Channels')}</Text>
          </div>
        </div>
      }
    </div>
  )
}

export default EntryForm
