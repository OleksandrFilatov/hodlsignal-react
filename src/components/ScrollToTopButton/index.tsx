import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, ChevronUpIcon, ChevronDownIcon, Flex } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useHistory } from 'react-router'

const FixedContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
`

const ScrollToTopButton = () => {
  const [topvisible, setTopvisible] = useState(false)
  const [bottomvisible, setBottomvisible] = useState(false)
  const { t } = useTranslation()
  const history = useHistory()

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    const obj = document.getElementById('total-content')
    if (obj) {
      if (scrolled > 500 && scrolled < (obj.scrollHeight - 2000)) {
        setTopvisible(true)
        setBottomvisible(true)
      } else if (scrolled <= 500) {
        setTopvisible(false)
        setBottomvisible(true)
      } else if (scrolled >= (obj.scrollHeight - 2000)) {
        setTopvisible(true)
        setBottomvisible(false)
      }
    }
  }

  const scrollToTop = () => {
    history.push('/');
  }

  const scrollToBottom = () => {
    const obj = document.getElementById('total-content');
    window.scrollTo({
      top: obj.scrollHeight,
      behavior: 'auto',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)

    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  return (
    <FixedContainer>
      <Flex flexDirection="column">
        <Button variant="subtle" style={{ height: '30px', borderRadius: '5px', display: topvisible ? 'inline' : 'none' }} onClick={scrollToTop}>
          <ChevronUpIcon color="invertedContrast" />
        </Button>
        <Button variant="subtle" style={{ height: '30px', borderRadius: '5px', display: bottomvisible ? 'inline' : 'none' }} onClick={scrollToBottom}>
          <ChevronDownIcon color="invertedContrast" />
        </Button>
      </Flex>
    </FixedContainer >
  )
}

export default ScrollToTopButton
