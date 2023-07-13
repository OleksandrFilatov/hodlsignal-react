import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, ChevronUpIcon, ChevronLeftIcon, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useHistory } from 'react-router'

const FixedContainer = styled.div`
  position: fixed;
  left: 20px;
  bottom: 20px;
  z-index: 999;
`

const BackButton = () => {
  const { t } = useTranslation()
  const history = useHistory()

  const scrollToTop = () => {
    history.push('/');
  }

  return (
    <FixedContainer>
      <Flex flexDirection="column">
        <Button variant="subtle" style={{ height: '50px', borderRadius: '10px' }} onClick={scrollToTop}>
          <ChevronLeftIcon color="invertedContrast" />&nbsp;
          {t('Back')}
        </Button>
      </Flex>
    </FixedContainer >
  )
}

export default BackButton
