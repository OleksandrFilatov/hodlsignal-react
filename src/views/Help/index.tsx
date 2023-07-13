import React from 'react'
import { AutoRenewIcon, Button, Flex, Text, Grid, Heading } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import Howitworks from './Howitworks'
import About from './About'
import Distribution from './Distribution'
import InterestRates from './InterestRates'
import Explorer from './Explorer'
import Reports from './Reports'

const Help = () => {
  const { t } = useTranslation()

  return (
    <Page style={{ maxWidth: '1200px' }}>
      <About />
      <Howitworks />
      <InterestRates />
      <Distribution />
      <Reports />
      <Explorer />
    </Page>
  )
}

export default Help
