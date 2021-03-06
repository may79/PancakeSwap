import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'InterSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('InterSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('InterSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('InterSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('InterSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('InterSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('InterSwap')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('InterSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('InterSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('InterSwap')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('InterSwap')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('InterSwap')}`,
      }
    default:
      return null
  }
}
