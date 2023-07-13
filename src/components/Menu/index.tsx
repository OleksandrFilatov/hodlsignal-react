import React from 'react'
import { useLocation } from 'react-router'
import { Menu as UikitMenu } from '@pancakeswap/uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceCakeBusd } from 'state/farms/hooks'
import { useGetCakeBalance } from 'hooks/useTokenBalance'
import { getBalanceNumber } from 'utils/formatBalance'
import { BigNumber } from 'bignumber.js'
import config from './config/config'
import UserMenu from './UserMenu'
import { getActiveMenuItemHref } from './utils'
import { footerLinks } from './config/footerConfig'

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = usePriceCakeBusd()
  const TMPBalance = useGetCakeBalance()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useLocation()

  // const activeMenuItem = getActiveMenuItem({ pathname, menuConfig: config(t) })
  // const activeMenuItemhref = pathname.includes('help') ? '/help' : '/';
  const activeMenuItemhref = getActiveMenuItemHref(pathname)
  // const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })
  const TMPPrice = new BigNumber("0.00");

  return (
    <UikitMenu
      userMenu={<UserMenu />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      // cakePriceUsd={cakePriceUsd.toNumber()}
      cakeBalance={getBalanceNumber(new BigNumber( TMPBalance.balance.toString()), 8)}
      cakePriceUsd={TMPPrice.toNumber()}
      links={config(t)}
      // subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
      footerLinks={footerLinks(t)}
      activeItem={activeMenuItemhref}
      // activeSubItem={activeSubMenuItem?.href}
      buyCakeLabel={t('Buy SERA')}
      {...props}
    />
  )
}

export default Menu
