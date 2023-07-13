import React, { useState } from 'react'
import { Box, CopyIcon, Flex, FlexProps, IconButton, Text, Heading } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'

interface CopyAddressProps extends FlexProps {
  account: string,
  headstring?: string,
  colorHeading?: string,
  colorAddress?: string,
  colorIcon?: string,
}

const Wrapper = styled(Flex)`
  align-items: center;
  background-color: transparent;
  border-radius: 16px;
  position: relative;
`

const Address = styled.div`
  flex: 1;
  position: relative;
  padding-left: 16px;
  min-width: 510px;

  & > input {
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.text};
    display: block;
    font-weight: 600;
    font-size: 21px;
    padding: 0;
    width: 100%;

    &:focus {
      outline: 0;
    }
  }

  &:after {
    content: '';
    height: 100%;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 40px;
  }
`

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? 'inline-block' : 'none')};
  position: absolute;
  padding: 8px;
  top: -38px;
  right: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
  width: 100px;
`

const MyAddress = styled(Text)`
  font-size: 18px;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

const CopyAddress: React.FC<CopyAddressProps> = ({ account, headstring, colorHeading, colorAddress, colorIcon, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false)
  const { t } = useTranslation()

  const copyAddress = () => {
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
    setIsTooltipDisplayed(true)
    setTimeout(() => {
      setIsTooltipDisplayed(false)
    }, 1000)
  }

  return (
    <>
      <Flex justifyContent='center'>
        <Box position="relative" {...props}>
          <Wrapper alignItems="flex-end">
            <Flex alignItems='center' flexDirection={['column', null, null, 'row']}>
              <Heading pr="16px" color={colorHeading} style={{ fontSize: '22px' }}>{headstring}</Heading>
              <Flex alignItems='center' width="auto">
                {/* <Address title={account} color={colorAddress}> */}
                {/* <input style={{ color: `${colorAddress}` }} type="text" readOnly value={account} /> */}
                <MyAddress style={{ color: `${colorAddress}` }}>{t(account)}</MyAddress>
                {/* </Address> */}
                <IconButton variant="text" onClick={copyAddress}>
                  <CopyIcon color={colorIcon} width="24px" />
                </IconButton>
              </Flex>
            </Flex>
          </Wrapper>
          <Tooltip isTooltipDisplayed={isTooltipDisplayed}>{t('Copied')}</Tooltip>
        </Box>
      </Flex>
    </>
  )
}

export default CopyAddress
