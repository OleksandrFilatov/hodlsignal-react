import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'HODL Now. Far Better and Much Safer Than Yield Farming.',
  bodyText: 'No Token Lock-ups & No Need to Stake, just HODL from Your Wallet. You Never Surrender Your Tokens or Private Keys to Earn Interest. HODL SIGNAL Token Without a Doubt is the Best Internet Savings Account',
  reverse: true,
  primaryButton: {
    to: '/hodl',
    text: 'HODL Now',
    external: false,
  },
  secondaryButton: {
    to: '/help',
    text: 'Learn',
    external: false,
  },
  images: {
    path: '/images/',
    attributes: [
      { src: 'image1', alt: 'HODL image' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Become a affiliater. Register Now. Earning TMP.',
  bodyText: 'Users will use Affiliate address so that they will earn bonus. You can earn affiliate reward. Earning when sleeping. HODL SIGNAL Does Time Deposits Better Than Banks.',
  reverse: false,
  primaryButton: {
    to: '/affiliate',
    text: 'Register Now',
    external: false,
  },
  secondaryButton: {
    to: '/help',
    text: 'Learn',
    external: false,
  },
  images: {
    path: '/images/',
    attributes: [
      { src: 'image1', alt: 'HODL image' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'TMP will change the crypto world.',
  bodyText:
    'HODL SIGNAL Token Will Outperform HEX, WISE – All of Them! Remember in 2016 it was Bank the Unbanked? Now it is definitely UnBank the Banked with HODL SIGNAL Token.',
  reverse: true,
  primaryButton: {
    to: '/',
    text: 'Buy TMP',
    external: false,
  },
  secondaryButton: {
    to: '/help',
    text: 'Learn',
    external: false,
  },

  images: {
    path: '/images/',
    attributes: [
      { src: 'image1', alt: 'HODL image' },
    ],
  },
}
