import React from 'react'
import { AutoRenewIcon, Button, Flex, Text, Image, Heading, Stepper, Step, Card, CardBody, Box } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import { useTranslation } from 'contexts/Localization'

const Howitworks = () => {
  const { t } = useTranslation()

  return (
    <Page style={{ maxWidth: '1200px' }}>
      <div id="howitworks">
        <Flex alignItems="center" justifyContent="space-between" mb="32px">
          <Button style={{ margin: 'auto', width: '70%', height: '60px', fontSize: '24px', color: '#ffc000', borderRadius: '8px', background: '#092143', border: '3px solid #ffc000' }}>HOW IT WORKS</Button>
        </Flex>
        <Flex alignItems="center" justifyContent="space-around" style={{ flexWrap: 'wrap' }}>
          <div style={{ marginBottom: '30px', flexWrap: 'wrap', width: '320px', height: '500px', border: '5px solid #ffc000', borderRadius: '40px', textAlign: 'center' }}>
            <span style={{ display: 'flex' }}>
              <img src="/images/image2.png" width="270px" alt="image1" style={{ margin: '24px auto' }} />
            </span>
            <Heading style={{ color: '#ffc000' }}>Signal - HODL - Signal</Heading>
            <Text style={{ color: '#ffc000', fontSize: '18px', margin: '40px 20px' }}>
              {t('"It\'s not that hard, you Signal you are going to HODL (hold & not spend your tokens), then you Signal to collect your rewards."')}
            </Text>
            <Text style={{ color: '#ffc000', fontSize: '18px', margin: '30px 20px' }}>
              {t('Your Tokens Never Leave Your Wallet - You Control Your Tokens at All Times')}
            </Text>
          </div>
          <div style={{ marginBottom: '30px', width: '320px', height: '500px', border: '5px solid #002060', background: '#ffc000', borderRadius: '40px' }}>
            <span style={{ display: 'flex' }}>
              <img src="/images/image3.png" width="270px" alt="image1" style={{ margin: '24px auto' }} />
            </span>
            <Heading style={{ color: '#002060', margin: '0 50px', textAlign: 'center', fontSize: '24px' }}>After You Signal You Just HODL</Heading>
            <Text style={{ color: '#002060', fontSize: '18px', margin: '30px 20px' }}>
              {t('No Token Lockups, No need to Stake, No Nodes to Setup and best of all   NO THIRD PARTIES')}
            </Text>
            <Text style={{ color: '#002060', fontSize: '18px', margin: '30px 20px' }}>
              {t('Better than Yield Farming Safer then Yield Farming Your Private Keys - Your Tokens')}
            </Text>
          </div>
          <div style={{ marginBottom: '30px', width: '320px', height: '500px', border: '5px solid #ffc000', borderRadius: '40px' }}>
            <span style={{ display: 'flex' }}>
              <img src="/images/image1.png" width="270px" alt="image1" style={{ margin: '24px auto' }} />
            </span>
            <Heading style={{ color: '#ffc000', textAlign: 'center', margin: 'auto 25px', fontSize: '24px' }}>Signal Again When You Want to Collect Rewards</Heading>
            <Text style={{ color: '#ffc000', fontSize: '18px', margin: '30px 20px' }}>
              {t('Banks and other Cryptos charge fees, penalties, & take control of your assets.')}
            </Text>
            <Text style={{ color: '#ffc000', fontSize: '18px', margin: '20px' }}>
              {t('HODLS does Time Deposits better than Banks.')}
            </Text>
          </div>
        </Flex>
        <Flex alignItems="center" justifyContent="center">
          <Heading scale='lg' style={{ margin: '0 10px 50px', color: '#ffc000', textAlign: 'center' }}>{t('"HODL Signal.io (HODLS) is the Best Way to Beat RunAway Inflation"')}</Heading>
        </Flex>
        <div>
          <Stepper>
            <Step index={0} statusFirstPart="past">
              <Card borderBackground="#ffc000" background="#092143">
                <Box background="#ffc000" p="16px" height="50px">
                  <Heading size="xl" color="#092143">
                    Step #1
                  </Heading>
                </Box>
                <CardBody>
                  <div style={{ overflowWrap: 'anywhere' }}>
                    <Text style={{ color: 'white', fontSize: '16px' }}>Signal to the Smart Contract Using Your Metamask Wallet</Text>
                    <Text style={{ color: 'white', fontSize: '16px', marginTop: '14px' }}>{t('Go to the ')}<small style={{ color: '#ffc000' }}>{t("START/STOP")}</small>{t(' page on this Website')}</Text>
                    <Text style={{ color: 'white', fontSize: '16px', marginTop: '14px' }}>{t('Connect Your Wallet & then Click ')}<small style={{ color: '#ffc000' }}>{t("START HODL")}</small></Text>
                    <Text style={{ color: 'white', fontSize: '16px', marginTop: '14px' }}>Or</Text>
                    <Text style={{ color: 'white', fontSize: '16px', marginTop: '14px' }}>{t('Using the Polygon Explorer, Go to the Contract, then to the "WRITE" tab and Signal Directly from there.')}</Text>
                    <Text style={{ color: 'white', fontSize: '16px', marginTop: '0' }}>(Users do not need the website to signal a Start HODL)</Text>
                  </div>
                </CardBody>
              </Card>
            </Step>
            <Step index={1} statusFirstPart="past" statusSecondPart="past">
              <Card borderBackground="#ffc000" background="#092143">
                <Box background="#ffc000" p="16px" height="50px">
                  <Heading size="xl" color="#092143">
                    Step #2
                  </Heading>
                </Box>
                <CardBody>
                  <div style={{ overflowWrap: 'anywhere' }}>
                    <Text style={{ color: 'white', fontSize: '15px' }}><b style={{ color: '#ffc000', fontSize: '18px' }}>EASY STEP.... </b>{t('Just HODL, Hold your HODL Signal Tokens in Your Wallet')}</Text>
                    <Text style={{ color: 'white', fontSize: '18px', marginTop: '15px' }}>DO NOT SPEND THEM or SEND THEM</Text>
                    <Text style={{ color: 'white', fontSize: '15px', marginTop: '15px' }}>If you Send/Spend them, you automatically end your HODL without collecting reward</Text>
                    <Text style={{ color: '#fcc000', fontSize: '15px', marginTop: '15px' }}>{t('Always perform "STOP HODL" before doing a Send Transaction')}</Text>
                    <Text style={{ color: 'white', fontSize: '15px', marginTop: '15px' }}>{t('If you forget to STOP HODL before doing a Send Transaction, this is when you must do a "RESET" with your wallet connected to the contract before you can start a new HODL.')}</Text>
                  </div>
                </CardBody>
              </Card>
            </Step>
            <Step index={2} statusFirstPart="past" statusSecondPart="past">
              <Card borderBackground="#ffc000" background="#092143">
                <Box background="#ffc000" p="16px" height="50px">
                  <Heading size="xl" color="#092143">
                    Step #3
                  </Heading>
                </Box>
                <CardBody>
                  <div style={{ overflowWrap: 'anywhere' }}>
                    <Text style={{ color: '#ffc000', fontSize: '16px' }}>{t('Follow the Same Steps as Step #1 but "STOP" and not "START"')}</Text>
                    <Text style={{ color: 'white', fontSize: '16px', marginTop: '18px' }}>{t('Connect Your Wallet & This time you are going to "STOP HODL"')}</Text>
                    <Text style={{ color: 'white', fontSize: '16px', marginTop: '18px' }}>{t('Simply clicking on the "STOP HODL" signals to the Smart Contract you are ending your HODL and wish to collect your rewards payment.')}</Text>
                    <Text style={{ color: 'white', fontSize: '16px', marginTop: '18px' }}>{t('Again, you can accomplish this from this website or going to the Explorer and directly interact with the Smart Contract from there.')}</Text>
                  </div>
                </CardBody>
              </Card>
            </Step>
            <Step index={3} statusFirstPart="past" statusSecondPart="past">
              <Card background="#ffc000">
                <CardBody>
                  <div style={{ overflowWrap: 'anywhere' }}>
                    <Text style={{ color: '#002060', fontSize: '16px' }}>{t('HODL Mining Rewards Earned and Any Affiliate Bonuses are Automatically Paid to Your Address at the Completion of a Valid HODL.')}</Text>
                    <Text style={{ color: '#002060', fontSize: '16px', marginTop: '18px' }}>{t('(A "Valid HODL" = No Send Transactions Between START & STOP HODL Signals)')}</Text>
                  </div>
                </CardBody>
              </Card>
            </Step>
          </Stepper>
        </div>
        <Flex alignItems="center" mt={['30px', null, null, '0']} justifyContent={["center", null, null, "right"]} mb="32px">
          <Image src='/images/howitwork.png' width={432} height={322} alt="howitwork" />
        </Flex>
      </div>
    </Page>
  )
}

export default Howitworks
