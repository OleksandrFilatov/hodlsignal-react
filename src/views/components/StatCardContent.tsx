import React from 'react'
import { Heading, Flex, Text, useMatchBreakpoints } from '@pancakeswap/uikit'

const StatCardContent: React.FC<{ headingText: string; bodyText: string; middleText: string; highlightColor: string }> = ({
  headingText,
  bodyText,
  middleText,
  highlightColor,
}) => {
  const { isMobile, isTablet } = useMatchBreakpoints()
  const isSmallerScreen = isMobile || isTablet

  // const split = headingText.split(' ')
  // const lastWord = split.pop()
  // const remainingWords = split.slice(0, split.length).join(' ')

  return (
    <Flex
      minHeight={[null, null, null, '168px']}
      minWidth="232px"
      width="fit-content"
      flexDirection="column"
      justifyContent="flex-end"
      mt={[null, null, null, '64px']}
    >
      {/* {isSmallerScreen && remainingWords.length > 13 ? (
        <Heading color="#002060" scale="lg">{remainingWords}</Heading>
      ) : (
        <Heading color="#002060" scale="xl">{remainingWords}</Heading>
      )} */}
      {isSmallerScreen && headingText.length > 11 ? (
        <Heading color="#002060" scale="lg">{headingText}</Heading>
      ) : (
        <Heading color="#002060" scale="xl">{headingText}</Heading>
      )}
      <Heading color="#002060" scale="xl" mb="24px">
        {middleText}
      </Heading>
      <Text color="#363268">{bodyText}</Text>
    </Flex>
  )
}

export default StatCardContent
