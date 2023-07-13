import React from 'react'
import PageSection from 'components/PageSection'
import useTheme from 'hooks/useTheme'
import MetricsSection from './components'

const HodlPage: React.FC = () => {
  const { theme } = useTheme()

  const HomeSectionContainerStyles = { margin: '0', width: '100%', maxWidth: '1200px' }

  return (
    <>
      <PageSection
        innerProps={{ style: HomeSectionContainerStyles }}
        background='linear-gradient(180deg, #050f2a 22%, #002060 60%, #050f2a 100%)'
        index={2}
        hasCurvedDivider={false}
      >
        <MetricsSection />
      </PageSection>
    </>
  )
}

export default HodlPage
