import React from 'react'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useHistory } from 'react-router'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'

const BlockchainsSelected = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()
  const handleNavigate = async (aid: any) => {
    return history.push(aid);
  }

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div id="blockchainsselected">
        <Heading style={{ fontSize: '56px', margin: '80px auto', textAlign: 'center' }} color="#ffc000">{t('Blockchains Selected')}</Heading>
        <div style={{ padding: '120px 0 200px' }}>
          <div style={{ background: '#ffffff', borderRadius: '10px', padding: '5px', maxWidth: "584px", maxHeight: "424px", margin: 'auto', cursor: 'pointer' }}>
            <Image onClick={() => handleNavigate('/selectedblockchains')} src="/images/blockchainsselected.jpg" alt="blockchainsselected" width={574} height={414} style={{ margin: 'auto' }} />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default BlockchainsSelected
