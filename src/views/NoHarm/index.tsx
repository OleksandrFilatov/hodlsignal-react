import React, { useState, useEffect } from 'react'
import { Button, Flex, Text, Heading, Checkbox, CardBody, Image } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import Page from 'components/Layout/Page'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
import useToast from 'hooks/useToast'
import BackButton from '../../components/BackButton'
import useGetAffiliate from './useGetAffiliate'
import useRegisterAffiliate from './useRegisterAffiliate'
import ConnectWalletButton from '../../components/ConnectWalletButton'

const NoHarm = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [isAffiliate, setAffiliate] = useState(false)
  const [pendingTx, setPendingTx] = useState(false)
  const [isChecked, setIsChecked] = useState(false)
  const { toastSuccess, toastError } = useToast()
  const { account } = useWeb3React()
  const checkAffiliate = useGetAffiliate()
  const { onRegisterAffiliate } = useRegisterAffiliate()
  const history = useHistory()

  const toHome = () => {
    history.push('/');
  }

  const Title = styled(Text)`
    font-size: 40px;
    margin: 80px 0 30px;
    text-align: center;
    color: #ffc000;
    @media screen and (max-width: 480px) {
      font-size: 30px;
      margin: 30px 0 30px;
    }
  `

  const AffiliateDiv = styled.div`
  width: 70%;
  margin: 20px 30px;
  padding: 24px 48px;
  border-radius: 20px;
  border: 5px solid #070d5a;
  background: #ffc000;
  @media screen and (max-width: 920px) {
    width: 100%;
    margin: 20px 0;
    padding: 12px 16px;
  }
`

  const AffilateTitle = styled(Text)`
  font-size: 52px;
  @media screen and (max-width: 1116px) {
    font-size: 40px;
  }
  @media screen and (max-width: 700px) {
    font-size: 34px;
  }
`

  const AffiliateText = styled(Text)`
  font-size: 28px;  
  @media screen and (max-width: 970px) {
    font-size: 24px;
  }
  @media screen and (max-width: 570px) {
    font-size: 20px;
  }
`

  const CommonText = styled(Text)`
    font-size: 26px;
    margin: 20px 0;
    text-align: left;
    color: #ffc000;
    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  `

  const GeneralText = styled(Text)`
    font-size: 24px;
    text-align: left;
    ling-height: 36px;
    color: #ffc000;
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  `

  const Symbol = styled(Text)`
    margin-right: 24px;
    font-size: 24px;
    color: #ffc000;
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  `

  useEffect(() => {
    if (account) {
      setAffiliate(checkAffiliate)
    }
  }, [account, checkAffiliate])

  const onClickCheckBox = async (event) => {
    setIsChecked(!isChecked)
  }

  const onClickRegisterSubmit = async () => {
    if (account) {
      setPendingTx(true)
      try {
        if (!isChecked) {
          toastError(
            t('Error'),
            t('Please take the "Do No Harm" Pledge'),
          )
        } else {
          const aaaa = await onRegisterAffiliate(isChecked)
          toastSuccess(
            `${t('Success!')}!`,
            t('HODL Started. You will earn 0.2575% TMPv3 per day.'),
          )
        }
      } catch (e) {
        if (e.code === 4001) {
          toastError(
            t('Error'),
            t(e.message),
          )
        } else {
          toastError(
            t('Error'),
            t('Please try again. Confirm the transaction and make sure you are paying enough gas!'),
          )
        }
        console.error(e)
      } finally {
        setPendingTx(false)
      }
    } else {
      toastError(
        t('Error'),
        t('Please connect your wallet!'),
      )
    }
  }

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        {/* <Image src="/images/logo-1.png" margin="50px auto 0" alt="logo" width={360} height={240} /> */}
        <Title>{t('AFFILIATE PROGRAM: "DO NO HARM PLEDGE"')}</Title>
        <Text style={{ fontSize: '22px', margin: '0 0 50px', textAlign: 'center' }} color="#ffc000"><i>{t('(This is the Do No Harm Pledge which can also be referred to as the Code of Conduct Pledge for all Affiliates.)')}</i></Text>
        <Flex flexDirection="column" padding="30px 0" pl={['10px', null, null, '50px']}>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('To be an Affiliate once must agree to the following HODL SIGNAL TOKEN Code of Conduct Pledge:')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Each Affiliate is Expected To & Pledges:')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Do No Harm & Do the Right Thing – Every Time')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Agree that Individual Financial Sovereignty is a HUMAN RIGHT')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Align with the HODL SIGNAL TOKEN\'S mission statement')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Agree to work together in order to achieve the HODL SIGNAL TOKEN goals')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Agree that no individual can be excluded from HODL SIGNAL TOKEN on the basis of race, class, gender, disability, religion, political affiliation, citizenship, or sexual orientation')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Agree to Encourage Users to make time deposits so that HODL SIGNAL TOKEN has price appreciation & price stabilization because time deposits restrict coins on the open market and creates scarcity')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Help create on/off ramps between Crypto and Fiat after consistent price appreciation, in order to use Credit Facilities like Credit Cards for HODL SIGNAL TOKEN purchases because HODL SIGNAL TOKEN mining rewards rates will exceed debt payment obligations')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Commit to open sharing of resources and best practices for the common good')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Use social media wisely and responsibly')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Not act or speak in a manner that harms the reputation or damages the credibility of HODL SIGNAL TOKEN, or ANY OTHER CRYPTOCURRENCY that isn\'t fraudulent')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Handles any disagreements with HODL SIGNAL TOKEN and other Affiliates both privately and professionally')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Reports any violations of the Referral Code of Conduct on the official and appropriate HODL SIGNAL TOKEN social media, in order for self-policing to protect users and future users of HODL SIGNAL TOKEN, and allow the Free Market to enforce and pass judgement on bad actors')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Not use abusive language toward or engages in verbal, physical or visual harassment of another Member, User, HODLer, or future HODLer')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Not commit or threaten violence toward any individual or group')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Engage in conduct endangering the life, safety, health or well-being of others')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Never bully or takes unfair advantage of any other Member, User, HODLer, or future Depositor')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Agree to Disagree when appropriate – “keep the peace”')}</GeneralText>
          </Flex>
          <Flex alignItems="start">
            <Symbol>{t('•')}</Symbol>
            <GeneralText>{t('Be the Change you want to see in this world')}</GeneralText>
          </Flex>
        </Flex>
        <CommonText>{t('All Affiliates must comply with this Code of Conduct in Full.')}</CommonText>
        <CommonText>{t('This Code of Conduct has been prepared to protect the rights and safety of all. However, each Affiliate is and remains responsible and liable for its actions and HODL SIGNAL TOKEN (HODLS) assumes no responsibility or liability to that respect. For the avoidance of doubt, HODL SIGNAL TOKEN (HODLS) is not responsible for content on third party websites and does not accept any liability for content on third party websites.')}</CommonText>
        <CommonText>{t('1. Each Affiliate must comply with all laws, rules and regulations that are applicable to their activities, including but not limited to those pertaining to marketing, privacy, social media, consumer protection and advertising. Each Affiliate must further comply with all applicable industry best practices and guidelines.')}</CommonText>
        <CommonText>{t('2. Each Affiliate must in any event:')}</CommonText>
        <CommonText>{t('refrain from any illegal, unlawful or inappropriate acts (such as, but not limited to: criminal acts (e.g. discrimination, racism, defamation, abuse, phishing, fraud, SPAM etc.), tortuous acts, copyright infringement, trademark infringement or infringement of any other IP rights, privacy infringement, the use of malware or spyware etc.);')}</CommonText>
        <CommonText>{t('refrain from using personal information about someone (including his/her name) unless the Affiliate has the prior written approval from the relevant person; ')}</CommonText>
        <CommonText>{t('comply with all guidelines set forth by relevant authorities, such as consumer and market authorities (including, but not limited to any similar authority in all relevant or applicable jurisdictions). This includes that each Affiliate must guarantee that all reviews are clear and honest and that all reviews comply with consumer and advertising guidelines regarding testimonials and endorsements, including, but not limited to: the disclosure of (i) a material connection between the endorser and Affiliate, (ii) requests made to provide an endorsement and (iii) any compensation received by the endorser for its endorsement. Affiliates shall never use the word “free” or use a substantially equivalent claim, except if such claim is accurate;')}</CommonText>
        <CommonText>{t('not make any misrepresentations or publish misleading information;')}</CommonText>
        <CommonText>{t('modify or hide any specific disclosures or disclaimers;')}</CommonText>
        <CommonText>{t('observe and comply with the terms, conditions, guidelines and policies of all third-party services they use, including but not limited to social media services, search engine marketing systems and other third-party services;')}</CommonText>
        <CommonText>{t('refrain from using sweepstakes entries, lotteries, rewards, points or other participation incentives in their activities; not promote through CPA networks; not syndicate or broker offers to any third party that would mislead or provide false information, or be dishonest, or illegal, inappropriate, or discriminatory, or use spyware, malware, or infringe on any other IP rights, or property including trademarks, copyrights, etc.;')}</CommonText>
        <CommonText>{t('not include price information, unless current and accurate, but no use of future expectations of price;')}</CommonText>
        <CommonText>{t('not circumvent any security measures or tracking systems nor attempt to automate of falsify activity through the links;')}</CommonText>
        <CommonText>{t('not modify the links or transaction tracker codes in any way;')}</CommonText>
        <CommonText>{t('not create the impression that the website of the Affiliate or its services are provided or endorsed directly by HODL SIGNAL TOKEN;')}</CommonText>
        <CommonText>{t('not display any content next to or one click away from third party content, if such third-party content in itself would be in violation of this Code of Conduct;')}</CommonText>
        <CommonText>{t('comply with all data protection laws, rules and regulations in all relevant jurisdictions;')}</CommonText>
        <CommonText>{t('3. In case an Affiliate makes use of automated systems or software for its activities, that Affiliate shall make sure that the use thereof shall not lead to a breach of this Code of Conduct. The relevant Affiliate is responsible and liable for any actions so taken and understands that HODL SIGNAL TOKEN cannot be held liable for an Affiliate\'s use of automated systems or software.')}</CommonText>
        <CommonText>{t('4. An Affiliate is solely responsible and liable for the development, operation and maintenance of its website(s) and database(s) and for any and all content that may appear on its website(s). For the avoidance of doubt, HODL SIGNAL TOKEN is not responsible for content on third party websites and does not accept any liability for content on third party websites. ')}</CommonText>
        <CommonText>{t('5. Affiliates shall ensure that all its activities comply with relevant legal rules and regulations regarding SPAM (such as, but not limited to: the CAN SPAM Act 2003 and the EC Directive 2002/58, and shall ensure that at least the following terms are met:')}</CommonText>
        <CommonText>{t('all email lists must be opt-in lists whereby the recipient has pre-approved and agreed to receive email messages specifically from the Affiliate. No rented, leased or third-party lists may be used;')}</CommonText>
        <CommonText>{t('an Affiliate may not advertise in any way that effectively conceals or misrepresents its identity, its domain name or their return e-mail address;')}</CommonText>
        <CommonText>{t('the Affiliate is the sender of the email, pursuant to (anti-)SPAM rules (this includes that (i) the Affiliate must be identified in the “From:” field of the email, (ii) the Affiliate must state in the email how the Affiliate obtained the recipient\'s email address and (iii) the Affiliate must make clear that HODL SIGNAL TOKEN is not the sender of the email);')}</CommonText>
        <CommonText>{t('6. An affiliate shall delete, recall and cease the use of content of HODL SIGNAL TOKEN immediately after their participation in the relevant program ends.')}</CommonText>
        <CommonText>{t('7. An Affiliate represents and warrants that it will respond to all consumer complaints within twenty-four (24) hours of notification. In this respect reference is also made to HODL SIGNAL TOKEN\'S Notice and Takedown Procedure.')}</CommonText>
        <CommonText>{t('8. Each Affiliate shall maintain a privacy policy (“Affiliate Privacy Policy”) that complies with all applicable privacy laws, rules and regulations in each relevant jurisdiction. The Affiliate Privacy Policy shall at least include that each website of an Affiliate allows third parties, including Clients, to place content within its media, and that each such website is allowed to share any information so collected with third parties, such as Clients, as contemplated thereunder.')}</CommonText>
        <CommonText>{t('9. In case of an alleged breach of this Code of Conduct by an Affiliate, that Affiliate shall comply with all investigations and requests from or on behalf of HODL SIGNAL TOKEN and the relevant Affiliate shall provide all information necessary in connection with such investigation or inquiry to HODL SIGNAL TOKEN.')}</CommonText>
        <CommonText>{t('10. Each Affiliate acknowledges that in the event that the Affiliate has breached this Code of Conduct, its name and address may in certain circumstances be disclosed by HODL SIGNAL TOKEN to a third party.')}</CommonText>
        <CommonText>{t('11. Each Affiliate acknowledges and agrees that by clicking on the button labelled “I Agree” (or similar links as may be designated by HODL SIGNAL TOKEN.) the relevant Affiliate agrees to the relevant agreement(s), terms and conditions or further code(s) and/or procedure(s) and that by doing so that Affiliate is submitting a legally binding electronic signature and is entering into a legally binding contract. The relevant Affiliate acknowledges that that Affiliate\'s electronic submission constitutes Affiliate\'s agreement and intent to be bound by the relevant agreement(s), terms and conditions or further code(s) and/or procedure(s).')}</CommonText>
        <CommonText>{t('12. HODL SIGNAL TOKEN may amend, supplement or revise this Code of Conduct at any time and such amended, supplemented or revised Code of Conduct shall automatically be applicable. Each Affiliate hereby pre-approves and agrees to any amended, supplemented or revised Code of Conduct.  Once an Affiliate has received their official Referral Code, they have then agreed to  the HODL SIGNAL TOKEN\'S Code of Conduct.')}</CommonText>
        <CommonText>{t('13. EACH AFFILIATE ACKNOWLEDGES AND AGREES THAT A VIOLATION OF THIS CODE OF CONDUCT MAY RESULT IN TERMINATION FROM THE PROGRAM, THE FORFEITURE OF ANY AFFILIATE COMMISSIONS AND THE REQUIREMENT TO RETURN ANY AFFILIATE COMMISSIONS OBTAINED BY MEANS THAT ARE IN BREACH OF THIS CODE OF CONDUCT.')}</CommonText>
        <Flex justifyContent='center'>
          <AffiliateDiv>
            <AffilateTitle textAlign="center" fontWeight="600" mb="50px" color="#070d5a">{t('Become an Affiliate Today!')}</AffilateTitle>
            <ConnectWalletButton style={{ background: '#070d5a', color: '#ffffff', height: '40px', margin: 'auto' }} headstring="Address:" colorHeading='#002060' colorAddress="#002060" colorIcon="blue" />
            {!account || !isAffiliate ? (
              <div>
                <Flex alignItems="center" my="16px" mt="30px" justifyContent='center'>
                  <Checkbox style={{ marginRight: '20px' }} scale="sm" checked={isChecked} onClick={onClickCheckBox} />
                  <AffiliateText fontWeight="bold" color="#070d5a">{t('I have taken the ')}<Link to="/noharm" style={{ textDecoration: 'underline' }}>{t('"Do No Harm" Pledge')}</Link></AffiliateText>
                </Flex>
                <Flex alignItems="center" justifyContent='center'>
                  <Button disabled={pendingTx} style={{ background: '#070d5a', color: '#ffffff', height: '40px' }} onClick={onClickRegisterSubmit}>{t('SUBMIT')}</Button>
                </Flex>
              </div>
            ) : (
              <Text color="#070d5a" fontWeight="bold" fontSize='24px'>Already Registered!</Text>
            )}
          </AffiliateDiv>
        </Flex>
      </div>
    </Page>
  )
}

export default NoHarm
