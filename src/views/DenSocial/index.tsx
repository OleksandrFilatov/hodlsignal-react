import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Input, Button, ButtonMenu, ButtonMenuItem, Image } from '@pancakeswap/uikit'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import Page from 'components/Layout/Page'
import useCheckAffiliate from 'views/Affiliate/useCheckAffiliate'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import useToast from 'hooks/useToast'
import useTheme from 'hooks/useTheme'
import useRefresh from "hooks/useRefresh";
import { getAirdropContract } from "utils/contractHelpers";
import useSubmit from './hooks/useSubmit'
import BackButton from '../../components/BackButton'
import ConnectWalletButton from '../../components/ConnectWalletButton'


const StyledSunburst = styled.div`
display: 'flex';
flex-direction: column;
justify-content: space-between;
padding: 20px 80px 0 80px

@media only screen and (max-width: 768px) {
  padding: 20px 0px 0 0px
}
`

const HodlInput = styled(Input)`
  border-radius: 5px;
  background: #ffc000;
  color: #002060;
  margin: 15px 0;
  max-width: 500px;
  padding: 24px 10px;
  ::placeholder {
    color: #002060;
  }
  width: 420px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const StyledForm = styled.div`
display: flex; 
flex-direction: row; 
justify-content: space-between;
@media only screen and (max-width: 768px) {
  flex-direction: column; 
}
`

const StyledInput = styled(Input)`
borderRadius: 0; 
color: #000000; 
width: 60%; 
height: 54px;
backgroundColor: #ccc;
@media only screen and (max-width: 768px) {
  width: 100%; 
}
`

const Title = styled(Text)`
font-size: 40px;
margin: 80px 0 30px;
text-align: left;
color: #ffc000;
@media screen and (max-width: 600px) {
  font-size: 24px;
}
`

const SubTitle = styled(Text)`
font-size: 20px;
margin: 24px 0;
text-align: left;
color: #ffc000;
@media screen and (max-width: 600px) {
  font-size: 18px;
}
`

const CommonText = styled(Text)`
font-size: 26px;
margin: 20px;
text-align: left;
color: #ffffff;
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


const DenSocial = () => {
  const { t } = useTranslation()
  const { onSubmit } = useSubmit()
  const { toastSuccess, toastError } = useToast()
  const { theme } = useTheme()
  const history = useHistory()
  const [pendingTx, setPendingTx] = useState(false)
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [flagChangeAffiliate, setFlagChangeAffiliate] = useState(true)
  const [verifyAffiliateAddress, setVerifyAffiliateAddress] = useState('')
  const [verifyOk, setVerifyOk] = useState(false)

  const [denId, setDenId] = useState("")
  const [twitter, setTwitter] = useState("")
  const [hodlAddress, setHodlAddress] = useState("")

  const handleClick1 = (newIndex) => setIndex1(newIndex);
  const handleClick2 = (newIndex) => setIndex2(newIndex);


  const [pause, setPause] = useState(false)
  const { slowRefresh, fastRefresh } = useRefresh()
  const airdropContract = getAirdropContract()
  const { onCheckAffiliate } = useCheckAffiliate()

  useEffect(() => {
    const fetchPauseState = async () => {
      const _pause = await airdropContract._pause()
      setPause(_pause)
    }

    if(airdropContract) fetchPauseState()

  }, [fastRefresh, airdropContract])

  const toHome = () => {
    history.push('/');
  }

  
  const handleSubmit = async () => {
    if(denId === "" || twitter === "") {
      toastError(        
        t('Error'),
        t('Den Id or Twitter handle is empty.'),
      )
      return
    }
    if(hodlAddress === "") {
      toastError(        
        t('Error'),
        t('Den Id or Twitter handle is empty.'),
      )
      return
    }
    if(index1 === 1 || index2 === 1) {      
      toastError(        
        t('Error'),
        t('Subscribe to the HODLSignal Lair on Den.Social and follow the HODLSignal @HodlSignal on Twitter.'),
      )
      return
    }
    if(pause) {
      toastError(        
        t('Error'),
        t('Submitation paused.'),
      )
      return
    }
    const _isDuplicated = await airdropContract.isDuplicated(denId, twitter, hodlAddress)    
    if(_isDuplicated) {
      toastError(        
        t('Error'),
        t('Duplicated User.'),
      )
      return
    }
    try {
      setPendingTx(true)
      await onSubmit(denId, twitter, hodlAddress)
      setPendingTx(false)      
    } catch (error) {
      console.log(error)
      setPendingTx(false)
    }
    // return
  }

  const onChangeVerifyAffiliateAddress = (event) => {
    setFlagChangeAffiliate(true)
    setVerifyAffiliateAddress(event.target.value)
  }

  const onClickVerifyAffiliateAddress = async () => {
    try {
      const result = await onCheckAffiliate(verifyAffiliateAddress)
      setFlagChangeAffiliate(false)
      setVerifyOk(result)
    } catch {
      setFlagChangeAffiliate(false)
      setVerifyOk(false)
    }
  }

  return (
    <Page style={{ maxWidth: '1154px' }}>
      <div>
        {/* <BackButton /> */}
        <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />
        <Title style={{ textAlign: 'center' }}>{t('Den.Social Is the Primary Social Media Site for HODL Signal')}</Title>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('Den.Social Is the Primary Social Media Site for HODL Signal.')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('The Pool of 200 Million HODLS will be Divided Evenly to Everyone that Follows Us')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('Announcements, Community Support, Contest Entries, & General Information will Be Posted in Den')}</ListText>
        </Flex>
        <Flex alignItems="first">
          <Symbol>{t('•')}</Symbol>
          <ListText>{t('To Receive the HODLS Airdrop Enter You Need to Enter Your Den ID, Twitter Handle, & HODL Signal Address in the Link Below Before August 1, 2022')}</ListText>
        </Flex>
        <SubTitle style={{ textAlign: 'center' }}>{t('Subscribe & Follow Us on Den & Twitter')}</SubTitle>
        <Flex alignItems="center" justifyContent="center">
          <Box as="a" href="https://den.social/l/hodlsignal/" target='_blank' style={{ margin: '12px' }}>
            <img src="/images/den.jpg" alt="logo" width="160px" height="160px" />
          </Box>
          <Box as="a" href="https://twitter.com/HodlSignal/" target='_blank' style={{ margin: '12px' }}>
            <img src="/images/twitter.png" alt="logo" width="160px" height="160px" />
          </Box>
        </Flex>
        <Title style={{ textAlign: 'center' }}>{t('WHY DEN.SOCIAL')}</Title>
        <CommonText>{t('Den is not polluted by Bots & Scammers. Its unique content evaluation process by the community (Subscribers called Denizens) allows it to combat fraud, fake news, trolling, and censorship using blockchain technology and decentralized governance. For these reasons and others, ultimately Den was chosen as its primary Social Media Platform.')}</CommonText>
        <CommonText>{t('"It is the goal of Den to provide a marketplace that rewards Denizens for posting and evaluating quality content. The primary objective is quality content."')}</CommonText>
        <CommonText>{t('Den has “Lairs” or Categories and HODL Signal has its own Business Lair on Den.Social.')}</CommonText>
        <CommonText><span style={{ color: '#ffc000' }}>{t('Best of all')}</span>{t(', HODL Signal believes that Den\'s unique ability that incentivizes Denizens to evaluate content means that it can also quickly spot fraudulent postings. This means Scammers & Spammers can quickly be identified and tagged.')}</CommonText>
        <CommonText>{t('Also, a unique ability that Den provides is Contest management of sorts via Denizens votes (using NRG). This makes Den a perfect social media platform for everyone to vote for the best Videos, Memes, and Articles about HODL Signal. Then the community can decide the winners and rank the entries for each HODL Signal contest. Den provides a fair and equitable contest voting platform.')}</CommonText>
        <CommonText>{t('Den\'s strengths make it the best source for HODLer support too. Together a Community of HODL Signal Denizens can help each other; especially the newbies to the Crypto Space and to HODL Signal.')}</CommonText>
        <SubTitle style={{ textAlign: 'center' }}>{t('Den.Social Can and Will be the BEST location for Community Involvement and Support for Newbies to HODL Signal.')}</SubTitle>
        <SubTitle style={{ textAlign: 'center' }}>{t('Follow Us on Den, Twitter and Submit the Form Below to receive a HODL Signal Airdrop')}</SubTitle>
        <div style={{ width: '100%', textAlign: 'center', marginTop: '40px' }}>
          <ConnectWalletButton />
        </div>
        <StyledSunburst style={{ paddingTop: '50px' }}>
          <StyledForm>
            <Text className='StyledText' style={{ maxWidth: '300px', fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Input Your Den.Social ID:')}</Text>
            <StyledInput style={{ borderRadius: '0', color: '#000000', backgroundColor: '#ccc' }} value={denId} onChange={(e) => {setDenId(e.target.value)}} />
          </StyledForm>
        </StyledSunburst>
        <StyledSunburst style={{ paddingTop: '50px' }}>
          <StyledForm>
            <Text className='StyledText' style={{ maxWidth: '300px', fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('On Den.Social Do You Subscribe To The HODL Signal Lair?')}</Text>
            <ButtonMenu activeIndex={index1} onItemClick={handleClick1}>
              <ButtonMenuItem>Yes</ButtonMenuItem>
              <ButtonMenuItem>NO</ButtonMenuItem>
            </ButtonMenu>
          </StyledForm>
        </StyledSunburst>
        <StyledSunburst style={{ paddingTop: '50px' }}>
          <StyledForm>
            <Text className='StyledText' style={{ maxWidth: '300px', fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Your Twitter Handle:')}</Text>
            <StyledInput style={{ borderRadius: '0', color: '#000000', backgroundColor: '#ccc' }} value={twitter} onChange={(e) => {setTwitter(e.target.value)}}/>
          </StyledForm>
        </StyledSunburst>
        <StyledSunburst style={{ paddingTop: '50px' }}>
          <StyledForm>
            <Text className='StyledText' style={{ maxWidth: '300px', fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('On Twitter Do You Follow HODL Signal @HodlSignal?')}</Text>
            <ButtonMenu activeIndex={index2} onItemClick={handleClick2}>
              <ButtonMenuItem>Yes</ButtonMenuItem>
              <ButtonMenuItem>NO</ButtonMenuItem>
            </ButtonMenu>
          </StyledForm>
        </StyledSunburst>
        <StyledSunburst style={{ paddingTop: '50px' }}>
          <StyledForm>
            <Text className='StyledText' style={{ maxWidth: '300px', fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Input Your HODL Signal Address:')}</Text>
            <StyledInput style={{ borderRadius: '0', color: '#000000', backgroundColor: '#ccc' }} value={hodlAddress} onChange={(e) => {setHodlAddress(e.target.value)}}/>
          </StyledForm>
        </StyledSunburst>
        <div style={{ width: "100%", textAlign: 'center', marginTop: '40px' }}>
          <Button width="250px" color="#002060" style={{ fontSize: '24px', background: '#ffc000', borderRadius: '0' }} disabled={pendingTx} onClick={handleSubmit}>SUBMIT</Button>
        </div>
        <SubTitle style={{ textAlign: 'center' }}>{t('Click Submit to Receive Your HODL Signal Airdrop on Distribution Day')}</SubTitle>
        <SubTitle style={{ textAlign: 'center' }}>{t('To Qualify for the Airdrop you Must Follow Us on Both Den.Social and Twitter')}</SubTitle>
        <CommonText>{t('Enter Your Den ID, Twitter Handle, & HODL Signal Address in the form above before August 1, 2022. Important: You will need a small amount of Polygon (MATIC) to register an address. The gas fees to register each address is less than $0.02 USD in MATIC.')}</CommonText>
        <Flex mb="50px" flexDirection={['column', null, null, 'row']} justifyContent='center' alignItems='center'>
          <Text>Verify you registered for the Den-Twitter Airdrop</Text>
          <Flex alignItems="center" mx="30px" flexDirection={['column', null, null, 'row']}>
            <HodlInput type="text" scale="md" placeholder={t('Input Affiliate Address Here')} value={verifyAffiliateAddress} onChange={onChangeVerifyAffiliateAddress} />
            <Flex justifyContent="space-around">
              <Button color="#002060" mr="30px" style={{ borderRadius: "5px" }} onClick={onClickVerifyAffiliateAddress}>{t('>')}</Button>
              <Button color="#002060" style={{ borderRadius: '5px' }}>{flagChangeAffiliate ? t('') : verifyOk ? t('Yes') : t('NO')}</Button>
            </Flex>
          </Flex>
        </Flex>
      </div>
    </Page>
  )
}

export default DenSocial
function async() {
  throw new Error('Function not implemented.')
}

