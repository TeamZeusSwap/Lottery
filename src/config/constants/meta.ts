import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ZeusSwap',
  description:
    'The #1 AMM and yield farm in Slovakia.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ZeusSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ZeusSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ZeusSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ZeusSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ZeusSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ZeusSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('ZeusSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ZeusSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ZeusSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('ZeusSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('ZeusSwap')}`,
      }
    default:
      return null
  }
}
