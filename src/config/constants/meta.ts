import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'HODLSignal',
  description:
    'The most popular AMM on BSC by user count! Earn SERA through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by HODLSignal), NFTs, and more, on a platform you can trust.',
  image: 'https://HODLSignal.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('HODLSignal')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('HODLSignal')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('HODLSignal')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('HODLSignal')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('HODLSignal')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('HODLSignal')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('HODLSignal')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('HODLSignal')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('HODLSignal')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('HODLSignal')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('HODLSignal')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('HODLSignal')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('HODLSignal')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('HODLSignal')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('HODLSignal')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('HODLSignal')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('HODLSignal')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('HODLSignal')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('HODLSignal Info & Analytics')}`,
        description: 'View statistics for HODLSignal exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('HODLSignal Info & Analytics')}`,
        description: 'View statistics for HODLSignal exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('HODLSignal Info & Analytics')}`,
        description: 'View statistics for HODLSignal exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('HODLSignal')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('HODLSignal')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('HODLSignal')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('HODLSignal')}`,
      }
    default:
      return null
  }
}
