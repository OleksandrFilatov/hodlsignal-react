import React from 'react'
import { useHistory } from 'react-router'
import { Button, Flex, Text, Heading, Card, CardBody, Image } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import BackButton from '../../components/BackButton'

const ContestList = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const Title = styled(Heading)`
    font-size: 40px;
    margin: 80px 0 30px;
    text-align: center;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 24px;
    }
  `

  const CommonText = styled(Text)`
    font-size: 26px;
    margin: 20px;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 600px) {
      font-size: 18px;
    }
  `

  const ListText = styled(Text)`
    font-size: 24px;
    lineHeight: 36px;
    text-align: left;
    color: #ffffff;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `

  const Symbol = styled(Text)`
    font-size: 24px;
    margin-right: 18px;
    color: #ffffff;
    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  `

  return (
    <Page style={{ maxWidth: '1024px' }}>
      <div style={{marginBottom: '150px'}}>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginBottom: '30px'}}>
          <Title>{t('Welcome to the Limited Time Only Contest Page')}</Title>
        </div>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('50 Million HODLS will be Awarded to Winners')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('More Than 30 Different Contests')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('Contest Rewards 1st through 10th Place')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('Some 1st Place Winners will be Awarded 2 Million HODLS')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('Den.Social Community Ranks All Entries to Choose the Winners')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('Numerous Contests')}</ListText>
        </Flex>
        <div style={{ paddingLeft: '20px' }}>
          <Flex alignItems="first">
            <Symbol>{t('o')}</Symbol>
            <ListText>{t('Best YouTube Videos in July and August of 2022')}</ListText>
          </Flex>
          <div style={{ paddingLeft: '20px' }}>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('Best "What is HODL Signal Video"')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('Best "How to Transform Polygon to HODLS Video"')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('Best "How to Claim HODL Signal Tokens Video"')}</ListText>
            </Flex>
          </div>
          <Flex alignItems="first">
            <Symbol>{t('o')}</Symbol>
            <ListText>{t('Best MEME Posted on Twitter and Den.Social in July and August of 2022')}</ListText>
          </Flex>
          <div style={{ paddingLeft: '20px' }}>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('Best Meme "What is HODL Signal"')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('Best Meme "Inflation vs HODL Signal"')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('Best Meme "HODL Signal = No 3rd Parties, No Lockups"')}</ListText>
            </Flex>
          </div>
          <Flex alignItems="first">
            <Symbol>{t('o')}</Symbol>
            <ListText>{t('Best Medium.com Articles in July and August of 2022')}</ListText>
          </Flex>
          <div style={{ paddingLeft: '20px' }}>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('"What is HODL Signal" on Medium.com')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('"How to Transform Polygon (MATIC) into HODL Signal HODLS" on Medium.com')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('"How to Claim HODL Signal HODLS" on Medium.com')}</ListText>
            </Flex>
            <Flex alignItems="first">
              <Symbol>&#11200;</Symbol>
              <ListText>{t('"Why & How the Affiliate Program Works on HODL Signal" on Medium.com')}</ListText>
            </Flex>
          </div>
        </div>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('GREAT NEWS!!!')}</ListText>
        </Flex>
        <div style={{ paddingLeft: '20px' }}>
          <Flex alignItems="first">
            <Symbol>{t('o')}</Symbol>
            <ListText>{t('Nearly Every Contest is Duplicated in August 2022')}</ListText>
          </Flex>
          <Flex alignItems="first">
            <Symbol>{t('o')}</Symbol>
            <ListText>{t('You Could Win Twice…Enter in July and then Enter New Content in August of 2022')}</ListText>
          </Flex>
        </div>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('Enter Multiple Times With Unique Content')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('Contest Winners Will Receive Their Awards a Couple Days After Distribution Day')}</ListText>
        </Flex>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Title style={{ margin: '20px' }}>{t('To Enter a Contest Post on')}</Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Title style={{ margin: '20px' }}>{t('Twitter, YouTube, and/or Medium.com')}</Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Title style={{ margin: '20px' }}>{t('Then Repost Link on Den.Social')}</Title>
        </div>
        <ListText>{t('Denizens will Vote for their favorite Entry for each Contest. Those with the most votes will win!')}</ListText>
        <ListText>{t('All Contests and Contest Rules Will be Announced on: ')}<span style={{ color: '#ffc000' }}>{t('https://den.social/l/hodlsignal/')}</span></ListText>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Title style={{ margin: '48px 0', fontSize: '30px' }}>{t('Below is List of Contests Prizes')}</Title>
        </div>
        <ListText mb="20px">{t('50 Million HODL Signals (HODLS) Will Be Awarded to the Winners!!!')}</ListText>
        <div style={{ width: '100%', padding: '0 20px', textAlign: 'center' }}>
          <Image src="/images/contestlist.png" margin="auto" alt="logo" width={984} height={650} />
        </div>
        <ListText textAlign="center" my="20px">{t('Trouble Viewing Contest List? Download pdf version:')}</ListText>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <Title style={{ margin: '48px 0', fontSize: '30px' }}>{t('Contest Winners Will Receive Their Awards a Couple Days After Distribution Day')}</Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <ListText textAlign="center">{t('Be sure to Follow HODL Signal on Den.Social for More Details & Announcements')}</ListText>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <ListText textAlign="center">{t('Do Not Forget to Vote with NRG for Your Favorite Postings')}</ListText>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
          <ListText textAlign="center">{t('Good Luck and May The Best Content Win')}</ListText>
        </div>
        <div style={{ display: 'flex', alignItems: 'first', justifyContent: 'flex-start' }}>
          <Title style={{ margin: '48px 0', fontSize: '30px' }}>{t('General Rules:')}</Title>
        </div>
        <ListText style={{ fontSize: '21px', marginBottom: '24px' }}>{t('Need not participate to win. One Contest will be conducted and three Subscribers/Denizens who are subscribed to the HODL Signal Lair will be randomly selected. They will then be awarded HODL Signal Tokens. Each Subscriber to the Lair will be assigned a number, then the Google random number selector will be used to determine the winner. Follow Den for announcements and prize details.')}</ListText>
        <ListText style={{ fontSize: '21px', marginBottom: '24px' }}>{t('All other contests will be announced and posted in Den.Social. Winners will be determined by the Den.Social Community based upon those entries that received the most votes/NRG. Awards will be given based upon each contest allotted HODL Signal Tokens (HODLS) from 1st place to 10th place.')}</ListText>
        <ListText style={{ fontSize: '21px', marginBottom: '24px' }}>{t('Contestants can enter multiple times with unique content in July and in August of 2022.')}</ListText>
        <ListText style={{ fontSize: '21px', marginBottom: '24px' }}>{t('Denizens/Subscribers can only vote once for their favorite entry. When voting, Denizens are encouraged to consider the reach of the posting on Twitter, YouTube, and Medium.com. The term “Reach” means how many views did this posting receive and not vote solely for its content quality. The purpose of the Contest is to inform the world about HODL Signal, its purpose, its functionality, as well as how the Transforming and Claiming functions work. Finally, the reason for these contests is to explain how the Affiliate Program works.')}</ListText>
        <ListText style={{ fontSize: '21px', marginBottom: '24px' }}>{t('Each contest announced on Den.Social will have the rules associated for each contest. Winners are not selected or decided by its Founders, Developers or Creators. All winners are decided by votes with NRG from the Den Community (Denizens). The only contest that is randomly chosen is the HODL Signal Lair Subscribers contest. Furthermore, Founders and Developers are forbidden to enter any of these contests.')}</ListText>
        <ListText style={{ fontSize: '21px', marginBottom: '24px' }}>{t('HODL Signal is a decentralized store-of-value crypto asset and cannot prevent participation in various parts of the world where contests of this nature may be prohibited. Any and all participants should verify their own laws regarding contests within their Country, Provence, State, City, etc., and determine if it is legal or not legal to participate in these HODL Signal Contests. It is up to the contestants/individuals to determine if they can or cannot participate.')}</ListText>
        <ListText style={{ fontSize: '21px', marginBottom: '24px' }}>{t('All contestants who receive winnings/prizes are responsible for reporting their “income” or “winnings” as per their own tax laws within their jurisdiction/tax authority. HODL Signal is a decentralized application, on a blockchain, that is code running in the cloud, that also uses a decentralized social media platform, where winners are determined through a participation algorithm, therefore HODL Signal cannot be held responsible, nor is it capable of reporting prize “income” or “winnings.”')}</ListText>
      </div>
    </Page>
  )
}

export default ContestList
