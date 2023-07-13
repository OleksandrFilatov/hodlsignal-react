import React from 'react'
import { AutoRenewIcon, Button, Flex, Text, Grid, Heading } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const Explorer = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Heading id="explorer">Explorer</Heading>
    </div>
  )
}

export default Explorer
