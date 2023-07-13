import React from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Heading, LoginIcon, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'

import BackButton from '../../components/BackButton'

const Brand = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const DownloadIcon = styled(LoginIcon)`
    transform: rotate(90deg);
    margin-right: 15px;
  `

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <Heading style={{ fontSize: '48px', margin: '50px 0 20px ', textAlign: 'center' }} color="#ffc000">{t('HODL SIGNAL Brand')}</Heading>
        <div style={{ background: '#1154db', padding: '40px', border: '2px solid #ffffff' }}>
          <Flex mb="30px" flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["center", null, null, "start"]}>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-1.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('RGB for screens')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-2.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Monochrome')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-3.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('CMYK for print')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-4.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Pantone for print')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex mb="30px" flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["center", null, null, "start"]}>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-5.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Digital Cash')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-1.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Digital Cash (White)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-2.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Accepted Here')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-3.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Accepted Here (Frame)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex mb="30px" flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["center", null, null, "start"]}>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-4.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Aceptado aquí')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-5.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Aceptado aquí (Frame)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-1.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Aceito aqui')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-2.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Aceito aqui (Frame)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
          </Flex><Flex mb="30px" flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["center", null, null, "start"]}>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-3.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Dash "D" (Blue)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-4.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Dash "D" (White)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-5.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Dash "D" (Circle)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-1.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Dash "D" (Square)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
          </Flex><Flex mb="30px" flexDirection={['column', null, null, 'row']} justifyContent="space-between" alignItems={["center", null, null, "start"]}>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-2.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('Dash "D" (Rounded Square)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-3.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('FastPass (Black)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-4.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('FastPass (White)')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
            <Flex flexDirection="column" my={['20px', null, null, '0']}>
              <Image src="/images/logo-5.png" alt="logo" width={120} height={80} />
              <Text fontSize='20px' maxWidth="120px" margin="12px 0">{t('FastPass Badge')}</Text>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('PNG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('JPG')}</Text>
              </Flex>
              <Flex style={{ cursor: 'pointer' }}>
                <DownloadIcon />
                <Text>{t('SVG')}</Text>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </div>
    </Page>
  )
}

export default Brand
