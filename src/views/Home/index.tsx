import React from 'react'
import styled from 'styled-components'
import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
import { PageMeta } from 'components/Layout/Page'
import Hero from './components/Hero'
import MetricsSection from './components/MetricsSection'
import Header from './components/Header'
import Footer from './components/Footer'
import About from '../Help/About'
import Howitworks from '../Help/Howitworks'
import InterestRates from '../Help/InterestRates'
import Distribution from '../Help/Distribution'
import RoadMap from '../Help/RoadMap'
import Reports from '../Help/Reports'
import HodlPage from '../Hodl'
import ClaimTransform from '../ClaimTransform'
import Affiliate from '../Affiliate'
import ScrollToTopButton from '../../components/ScrollToTopButton'
import BlockchainsSelected from '../BlockchainsSelected'

const StyledSection = styled(PageSection)`
  padding-top: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    padding-top: 0;
  }
`

const Home: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div id="total-content">
      <PageMeta />
      <ScrollToTopButton />
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background="#001758"
        index={3}
        hasCurvedDivider={false}
      >
        <Header />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background='radial-gradient(103.12% 50% at 50% 50%, #012362 0%, #001758 100%)'
        index={2}
        hasCurvedDivider={false}
      >
        <Hero />
      </StyledSection>
      <PageSection
        innerProps={{ style: { margin: '0', width: '100%' } }}
        background='linear-gradient(180deg, #000d2a 22%, #002060 100%)'
        index={3}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background='linear-gradient(180deg, #002060 22%, #092143 100%)'
        index={3}
        hasCurvedDivider={false}
      >
        <About />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background="#092143"
        index={3}
        hasCurvedDivider={false}
      >
        <Howitworks />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background={theme.colors.background}
        index={3}
        hasCurvedDivider={false}
      >
        <InterestRates />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background='linear-gradient(180deg, #050f2a 22%, #002060 60%, #050f2a 100%)'
        index={3}
        hasCurvedDivider={false}
      >
        <HodlPage />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background={theme.colors.background}
        index={3}
        hasCurvedDivider={false}
      >
        <ClaimTransform />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background="radial-gradient(103.12% 50% at 50% 50%, #3b394d 0%, #393339 100%)"
        index={3}
        hasCurvedDivider={false}
      >
        <BlockchainsSelected />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background={theme.colors.background}
        index={3}
        hasCurvedDivider={false}
      >
        <Distribution />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background='linear-gradient(180deg, #0B4576 0%, #091115 100%)'
        index={3}
        hasCurvedDivider={false}
      >
        <Affiliate />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background={theme.colors.background}
        index={3}
        hasCurvedDivider={false}
      >
        <Reports />
      </StyledSection>
      <StyledSection
        innerProps={{ style: { margin: '0', width: '100%', padding: '0' } }}
        background="#192158"
        index={3}
        hasCurvedDivider={false}
      >
        <RoadMap />
      </StyledSection>
      <Footer />
    </div>
  )
}

export default Home
