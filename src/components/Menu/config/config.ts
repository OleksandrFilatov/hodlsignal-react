import { MenuItemsType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
// import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('HOME'),
    icon: 'Home',
    href: '/',
    showItemsOnMobile: false,
    items: [
    ],
  },
  {
    label: t('START/STOP HODL'),
    href: '/hodl',
    icon: 'hodl',
    showItemsOnMobile: false,
    items: [
    ],
  },
  {
    label: t('AFFILIATE PROGRAM'),
    href: '/affiliate',
    icon: 'affiliateprogram',
    showItemsOnMobile: false,
    items: [
    ],
  },
  {
    label: '',
    href: '/help',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('ABOUT'),
        icon: 'About',
        href: '/help#about',
        showItemsOnMobile: false,
        items: [
        ],
      },
      {
        label: t('HOW IT WORKS'),
        href: '/help#howitworks',
        icon: 'Help',
        showItemsOnMobile: false,
        items: [
        ],
      },
      {
        label: t('MINING REWARDS'),
        href: '/help#interestrates',
        icon: 'interestrates',
        showItemsOnMobile: false,
        items: [
        ],
      },
      {
        label: t('DISTRIBUTION'),
        href: '/help#distribution',
        icon: 'distribution',
        showItemsOnMobile: false,
        items: [
        ],
      },
      {
        label: t('REPORTS'),
        href: '/help#reports',
        icon: 'reports',
        showItemsOnMobile: false,
        items: [
        ],
      },
      {
        label: t('EXPLORER'),
        href: '/help#explorer',
        icon: 'explorer',
        showItemsOnMobile: false,
        items: [
        ],
      },
      {
        label: t('FAQ'),
        href: '/help#faq',
        icon: 'faq',
        showItemsOnMobile: false,
        items: [
        ],
      },
    ],
  },



]

export default config
