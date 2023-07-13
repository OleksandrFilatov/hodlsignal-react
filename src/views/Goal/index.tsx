import React from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const Goal = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  return (
    <div style={{ background: '#ffc000', width: '100%', padding: '18px' }}>
      <div style={{ paddingTop: '30px', maxWidth: '763px', margin: 'auto' }}>
        {/* <BackButton /> */}
        <Image src="/images/logo-2.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <div style={{ margin: '50px 0 50px' }}>
          <Image src="/images/ultimategoal.png" alt="goal" style={{ margin: 'auto' }} width={763} height={304} />
        </div>
        <Text style={{ fontSize: '22px', margin: '50px 0 30px', textAlign: 'center', lineHeight: '24px' }} color="#002060"><strong>{t('The Ultimate Goal is to Obtain Monetary Sovereignty for All')}</strong></Text>
        <Text style={{ fontSize: '15px', margin: '20px 0', textAlign: 'left', lineHeight: '24px' }} color="#002060"><span style={{fontSize: '18px'}}><strong>{t('First: ')}</strong></span>{t('Central Banking is creating worldwide inflation on a scale we have never seen before. Inflation is an Evil and a Regressive Tax! Endless money printing eventually creates hyper-inflation. It is crucial that we all stay ahead of inflation that is being forced upon everyone around the world.')}</Text>
        <Text style={{ fontSize: '15px', margin: '20px 0', textAlign: 'left', lineHeight: '24px' }} color="#002060"><span style={{fontSize: '18px'}}><strong>{t('Second: ')}</strong></span>{t('Central Banks are planning the rollout of a Digital Central Bank Coin. These Central Bank Digital Coins (CBDCs) will lead to enslavement and bank account seizures.')}</Text>
        <Text style={{ fontSize: '15px', margin: '20px 0', textAlign: 'left', lineHeight: '24px' }} color="#002060">{t('We must separate ourselves from the Central Banks to stop their punishing inflation and before they enslave us with their CBDCs. To fight against the Big Central Banks and the Tyrannical Governments that are complicit in this crime…')}</Text>
        <Text style={{ fontSize: '15px', margin: '40px 0', textAlign: 'left', lineHeight: '24px' }} color="#002060"><span><i style={{ textDecoration: 'underline' }}><strong>{t(' Requires a Radical New Idea.')}</strong></i></span></Text>
        <Text style={{ fontSize: '18px', margin: '20px 0', textAlign: 'left', lineHeight: '24px' }} color="#002060"><i><strong>{t('This Idea is to Use the Bank’s Own Money to Fund Crypto Growth & Adoption.')}</strong></i></Text>
        <Text style={{ fontSize: '15px', margin: '20px 0', textAlign: 'left', lineHeight: '24px' }} color="#002060">{t('This is accomplished by using fiat loans to buy HODL SIGNAL TOKENS. HODLing those tokens to earn a substantial monthly mining reward (passive income) could then be used to off ramp from Crypto and pay the debit service (bank loans payments).')}</Text>
        <Text style={{ fontSize: '15px', margin: '20px 0', textAlign: 'left', lineHeight: '24px' }} color="#002060">{t('This is how we all obtain Individual Monetary Sovereignty and separate ourselves from worthless paper money. Remember, governments are printing fiat currencies faster than they can be counted. If we continue to allow Governments & Central Banks have this monopolistic printing of money; then they will maintain ultimate power over us.')}</Text>
        <Text style={{ fontSize: '16px', margin: '20px 0', textAlign: 'left', lineHeight: '24px' }} color="#002060"><strong>{t('We must all obtain our “Individual Monetary Sovereignty” through Crypto.')}</strong></Text>
        <Text pb="50px" style={{ fontSize: '15px', margin: '20px 0 0', textAlign: 'left', lineHeight: '24px' }} color="#ff0000"><i>{t('IMPORTANT: Using the Bankster’s Money to Fund Growth is Risky. This step should ONLY be done once price stability has been obtained.')}</i></Text>
      </div>
    </div>
  )
}

export default Goal
