import React from 'react'
import styled from 'styled-components'
import { AutoRenewIcon, Button, Flex, Text, Grid, Heading, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const Reports = () => {
  const { t } = useTranslation()

  return (
    <div>
      <div id="reports" style={{ textAlign: 'center' }}>
        <Heading style={{ fontSize: '56px', color: '#ffc000', margin: '30px auto' }}>{t('Reports')}</Heading>
      </div>
      <div style={{ padding: '24px' }}>
        <div style={{ background: '#ffffff', borderRadius: '10px', padding: '3px' }}>
          <Image src="/images/reports.png" alt="reports" width={1152} height={1300} style={{ margin: 'auto' }} />
        </div>
      </div>
    </div>
  )
}

export default Reports
