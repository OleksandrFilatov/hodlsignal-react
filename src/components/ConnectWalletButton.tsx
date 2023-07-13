import React from 'react'
import { Heading, Button, useWalletModal } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import CopyAddress from './Menu/UserMenu/CopyAddress'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout, t)
  const { account } = useWeb3React()


  const renderButton = () => {
    if (!account) {
      return (
        <Button onClick={onPresentConnectModal} {...props}>
          {t('Connect Wallet')}
        </Button>
      )
    }

    return (
      <div>
        <Button mt='30px' {...props}>
          {t('Connected')}
        </Button>
        <CopyAddress account={account} headstring={props.headstring} colorHeading={props.colorHeading} colorAddress={props.colorAddress} colorIcon={props.colorIcon} my="24px" />
      </div>
    )
  }

  return (
    <div>
      {renderButton()}
    </div>

    // <Button>
    //   {t('Connect Wallet')}
    // </Button>
  )
}

export default ConnectWalletButton
