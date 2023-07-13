import React, {useState} from 'react'
import { Button, Flex, Text, Heading, CopyIcon, Input, Image } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useHistory } from 'react-router'
import useTheme from 'hooks/useTheme'
import styled from 'styled-components'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import ConnectWalletButton from '../../components/ConnectWalletButton'
import BackButton from '../../components/BackButton'

const Tooltip = styled.div<{ isTooltipDisplayed: boolean }>`
display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? 'inline-block' : 'none')};
position: absolute;
padding: 8px;
right: 20px;
text-align: center;
background-color: ${({ theme }) => theme.colors.contrast};
color: ${({ theme }) => theme.colors.invertedContrast};
border-radius: 16px;
opacity: 0.7;
width: 100px;
`
const StyledSunburst = styled.div`
display: 'flex';
flex-direction: column;
justify-content: space-between;
padding: 20px 80px 0 80px

@media only screen and (max-width: 768px) {
  padding: 20px 0px 0 0px
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
backgroundColor: #ccc;
@media only screen and (max-width: 768px) {
  width: 100%; 
}
`

const StyledText = styled(Input)`
width: 40%; 
@media only screen and (max-width: 768px) {
  width: 100%; 
}
`

const ClaimPage = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const history = useHistory()
  const [isDisplayed, setIsDisplayed] = useState(false)
  const [blockchainAddress, setBlockchainAddress] = useState("")
  const [affiliateAddress, setAffiliateAddress] = useState('')
  const [pendingTx, setPendingTx] = useState(false)

  const items = [
    {
      dname: 'BITCOIN',
      ticker: 'BTC',
      blockchain: 'BITCOIN'
    },
    {
      dname: 'POLYGON',
      ticker: 'MATIC',
      blockchain: 'POLYGON'
    },
    {
      dname: 'AAVEGOTCH-P',
      ticker: 'GHST',
      blockchain: 'POLYGON'
    },
    {
      dname: 'AAVE-P',
      ticker: 'AAVE',
      blockchain: 'POLYGON'
    },
    {
      dname: 'ANKR-P',
      ticker: 'ANKR',
      blockchain: 'POLYGON'
    },
    {
      dname: 'APESWAP',
      ticker: 'BANANA',
      blockchain: 'POLYGON'
    },
    {
      dname: 'AUTOMATA-P',
      ticker: 'ATA',
      blockchain: 'POLYGON'
    },
    {
      dname: 'BALANCER-P',
      ticker: 'BAL',
      blockchain: 'POLYGON'
    },
    {
      dname: 'BANANO-P',
      ticker: 'BAND',
      blockchain: 'POLYGON'
    },
    {
      dname: 'BASIC ATTENTION-P',
      ticker: 'BAT',
      blockchain: 'POLYGON'
    },
    {
      dname: 'BATTLE WORLD',
      ticker: 'BWO',
      blockchain: 'POLYGON'
    },
    {
      dname: 'BLOCKCHAIN MONTER HUNT-P',
      ticker: 'BCMC',
      blockchain: 'POLYGON'
    },
    {
      dname: 'BLOKTOPIA',
      ticker: 'BLOK',
      blockchain: 'POLYGON'
    },
    {
      dname: 'CARTESI-P',
      ticker: 'CTSI',
      blockchain: 'POLYGON'
    },
    {
      dname: 'CELSIUS-P',
      ticker: 'CEL',
      blockchain: 'POLYGON'
    },
    {
      dname: 'CHAINLINK-P',
      ticker: 'LINK',
      blockchain: 'POLYGON'
    },
    {
      dname: 'COMPOUND-P',
      ticker: 'COMP',
      blockchain: 'POLYGON'
    },
    {
      dname: 'CURVE DAO-P',
      ticker: 'CRV',
      blockchain: 'POLYGON'
    },
    {
      dname: 'CYCLONE PROTOCOL-P',
      ticker: 'CYC',
      blockchain: 'POLYGON'
    },
    {
      dname: 'DECENTRAL GAMES-P',
      ticker: 'DG',
      blockchain: 'POLYGON'
    },
    {
      dname: 'DECENTRALAND',
      ticker: 'MANA',
      blockchain: 'POLYGON'
    },
    {
      dname: 'DERI PROTOCOL-P',
      ticker: 'DERI',
      blockchain: 'POLYGON'
    },
    {
      dname: 'DODO',
      ticker: 'DODO',
      blockchain: 'POLYGON'
    },
    {
      dname: 'DOGELON-P',
      ticker: 'ELON',
      blockchain: 'POLYGON'
    },
    {
      dname: 'FRAX SHARE-P',
      ticker: 'FXS',
      blockchain: 'POLYGON'
    },
    {
      dname: 'FRAX-P',
      ticker: 'FRAX',
      blockchain: 'POLYGON'
    },
    {
      dname: 'GENSOKISHI METAVERSE',
      ticker: 'MV',
      blockchain: 'POLYGON'
    },
    {
      dname: 'KOMMUNITAS-P',
      ticker: 'KOM',
      blockchain: 'POLYGON'
    },
    {
      dname: 'KYBER NETWORK-P',
      ticker: 'KNC',
      blockchain: 'POLYGON'
    },
    {
      dname: 'Lido DADO',
      ticker: 'LDO',
      blockchain: 'POLYGON'
    },
    {
      dname: 'MAGIC INTERNET MONEY-P',
      ticker: 'MIM',
      blockchain: 'POLYGON'
    },
    {
      dname: 'MASK NETWORK-P',
      ticker: 'MASK',
      blockchain: 'POLYGON'
    },
    {
      dname: 'MYWORLD',
      ticker: 'MWT',
      blockchain: 'POLYGON'
    },
    {
      dname: 'Nest Protocol-P',
      ticker: 'NEST',
      blockchain: 'POLYGON'
    },
    {
      dname: 'OPENOCEAN-P',
      ticker: 'OOE',
      blockchain: 'POLYGON'
    },
    {
      dname: 'POLYDOGE',
      ticker: 'POLYDOGE',
      blockchain: 'POLYGON'
    },
    {
      dname: 'POLYTRADE-P',
      ticker: 'TRADE',
      blockchain: 'POLYGON'
    },
    {
      dname: 'RADIOSHACK-P',
      ticker: 'RADIO',
      blockchain: 'POLYGON'
    },
    {
      dname: 'RENDER-P',
      ticker: 'RNDR',
      blockchain: 'POLYGON'
    },
    {
      dname: 'REQUEST-P',
      ticker: 'REQ',
      blockchain: 'POLYGON'
    },
    {
      dname: 'REVV-P',
      ticker: 'REVV',
      blockchain: 'POLYGON'
    },
    {
      dname: 'SANDBOX-P',
      ticker: 'SAND',
      blockchain: 'POLYGON'
    },
    {
      dname: 'SUSHI-P',
      ticker: 'SUSHI',
      blockchain: 'POLYGON'
    },
    {
      dname: 'SYNAPSE-P',
      ticker: 'SYN',
      blockchain: 'POLYGON'
    },
    {
      dname: 'SYNTHETIX NETWORK-P',
      ticker: 'SNX',
      blockchain: 'POLYGON'
    },
    {
      dname: 'TELCOIN-P',
      ticker: 'TEL',
      blockchain: 'POLYGON'
    },
    {
      dname: 'THE GRAPH-P',
      ticker: 'GRT',
      blockchain: 'POLYGON'
    },
    {
      dname: 'THE SANDBOX-P',
      ticker: 'SAND',
      blockchain: 'POLYGON'
    },
    {
      dname: 'TrueUSD-P',
      ticker: 'TUSD',
      blockchain: 'POLYGON'
    },
    {
      dname: 'UNISWAP-P',
      ticker: 'UNI',
      blockchain: 'POLYGON'
    },
    {
      dname: 'USDC-P',
      ticker: 'USDC',
      blockchain: 'POLYGON'
    },
    {
      dname: 'USDT-P',
      ticker: 'USDT',
      blockchain: 'POLYGON'
    },
    {
      dname: 'VULCAN-P',
      ticker: 'PRY',
      blockchain: 'POLYGON'
    },
    {
      dname: 'WOO NETWORK-P',
      ticker: 'WOO',
      blockchain: 'POLYGON'
    },
    {
      dname: 'YEARN FINANCE-P',
      ticker: 'YFI',
      blockchain: 'POLYGON'
    },
    {
      dname: 'ETHEREUM',
      ticker: 'ETH',
      blockchain: 'ETH'
    },
    {
      dname: '0X-E',
      ticker: 'ZRX',
      blockchain: 'ETH'
    },
    {
      dname: '1INCH',
      ticker: '1INCH',
      blockchain: 'ETH'
    },
    {
      dname: 'AAVE-E',
      ticker: 'AAVE',
      blockchain: 'ETH'
    },
    {
      dname: 'AAVEGOTCHI-E',
      ticker: 'GHST',
      blockchain: 'ETH'
    },
    {
      dname: 'AIOZ NETWORK',
      ticker: 'AIOZ',
      blockchain: 'ETH'
    },
    {
      dname: 'AIRSWAP',
      ticker: 'AST',
      blockchain: 'ETH'
    },
    {
      dname: 'ALIEN WORLDS-E',
      ticker: 'TLM',
      blockchain: 'ETH'
    },
    {
      dname: 'ALPHA VENTURE DAO-E',
      ticker: 'ALPHA',
      blockchain: 'ETH'
    },
    {
      dname: 'AMP',
      ticker: 'AMP',
      blockchain: 'ETH'
    },
    {
      dname: 'ANKR-E',
      ticker: 'ANKR',
      blockchain: 'ETH'
    },
    {
      dname: 'APECOIN',
      ticker: 'APE',
      blockchain: 'ETH'
    },
    {
      dname: 'APENFT-E',
      ticker: 'NFT',
      blockchain: 'ETH'
    },
    {
      dname: 'AUGUR',
      ticker: 'REP',
      blockchain: 'ETH'
    },
    {
      dname: 'AUTOMATA-E',
      ticker: 'ATA',
      blockchain: 'ETH'
    },
    {
      dname: 'AXIE INFINITY',
      ticker: 'AXS',
      blockchain: 'ETH'
    },
    {
      dname: 'BABY DOGE COIN-E',
      ticker: 'BABYDOGE',
      blockchain: 'ETH'
    },
    {
      dname: 'BALANCER-E',
      ticker: 'BAL',
      blockchain: 'ETH'
    },
    {
      dname: 'BANCOR NETWORK',
      ticker: 'BNT',
      blockchain: 'ETH'
    },
    {
      dname: 'BAND PROTOCOL-E',
      ticker: 'BAND',
      blockchain: 'ETH'
    },
    {
      dname: 'BASIC ATTENTION',
      ticker: 'BAT',
      blockchain: 'ETH'
    },
    {
      dname: 'BLOCKCHAIN MONTER HUNT-E',
      ticker: 'BCMC',
      blockchain: 'ETH'
    },
    {
      dname: 'BRAINTRUST',
      ticker: 'BTRST',
      blockchain: 'ETH'
    },
    {
      dname: 'CARTESI-E',
      ticker: 'CTSI',
      blockchain: 'ETH'
    },
    {
      dname: 'CDAI',
      ticker: 'CDAI',
      blockchain: 'ETH'
    },
    {
      dname: 'CEEK SMART VR - E',
      ticker: 'CEEK',
      blockchain: 'ETH'
    },
    {
      dname: 'CELER NETWORK',
      ticker: 'CELR',
      blockchain: 'ETH'
    },
    {
      dname: 'CELSIUS-E',
      ticker: 'CEL',
      blockchain: 'ETH'
    },
    {
      dname: 'Ceth',
      ticker: 'CETH',
      blockchain: 'ETH'
    },
    {
      dname: 'CHAIN',
      ticker: 'XCN',
      blockchain: 'ETH'
    },
    {
      dname: 'CHAIN GAMES',
      ticker: 'CHAIN',
      blockchain: 'ETH'
    },
    {
      dname: 'CHAINLINK-E',
      ticker: 'LINK',
      blockchain: 'ETH'
    },
    {
      dname: 'CHILLZ-E',
      ticker: 'CHZ',
      blockchain: 'ETH'
    },
    {
      dname: 'CIVIC',
      ticker: 'CVC',
      blockchain: 'ETH'
    },
    {
      dname: 'COIN98-E',
      ticker: 'C98',
      blockchain: 'ETH'
    },
    {
      dname: 'COINEX',
      ticker: 'CET',
      blockchain: 'ETH'
    },
    {
      dname: 'COMPOUND-E',
      ticker: 'COMP',
      blockchain: 'ETH'
    },
    {
      dname: 'CRONOS-E',
      ticker: 'CRO',
      blockchain: 'ETH'
    },
    {
      dname: 'CUBE-E',
      ticker: 'ITAMCUBE',
      blockchain: 'ETH'
    },
    {
      dname: 'CURATE-E',
      ticker: 'XCUR',
      blockchain: 'ETH'
    },
    {
      dname: 'CURVE DAO-E',
      ticker: 'CRV',
      blockchain: 'ETH'
    },
    {
      dname: 'CUSDC',
      ticker: 'CUSDC',
      blockchain: 'ETH'
    },
    {
      dname: 'CYCLONE PROTOCOL-E',
      ticker: 'CYC',
      blockchain: 'ETH'
    },
    {
      dname: 'DECENTRAL GAMES-E',
      ticker: 'DG',
      blockchain: 'ETH'
    },
    {
      dname: 'DECENTRALAND',
      ticker: 'MANA',
      blockchain: 'ETH'
    },
    {
      dname: 'DERI PROTOCOL-E',
      ticker: 'DERI',
      blockchain: 'ETH'
    },
    {
      dname: 'DOGELON-E',
      ticker: 'ELON',
      blockchain: 'ETH'
    },
    {
      dname: 'DOGS OF ELON',
      ticker: 'DOE',
      blockchain: 'ETH'
    },
    {
      dname: 'DYDX',
      ticker: 'DYDX',
      blockchain: 'ETH'
    },
    {
      dname: 'ECOMI',
      ticker: 'OMI',
      blockchain: 'ETH'
    },
    {
      dname: 'ENJIN',
      ticker: 'ENJ',
      blockchain: 'ETH'
    },
    {
      dname: 'ENJIN COIN-E',
      ticker: 'ENJ',
      blockchain: 'ETH'
    },
    {
      dname: 'Ethernity Chain',
      ticker: 'ERN',
      blockchain: 'ETH'
    },
    {
      dname: 'FANTOM-E',
      ticker: 'FTM',
      blockchain: 'ETH'
    },
    {
      dname: 'FEG-E',
      ticker: 'FEG',
      blockchain: 'ETH'
    },
    {
      dname: 'FEG-H',
      ticker: 'FEG',
      blockchain: 'ETH'
    },
    {
      dname: 'FLOKI INU-E',
      ticker: 'FLOKI',
      blockchain: 'ETH'
    },
    {
      dname: 'FRAX SHARE-E',
      ticker: 'FXS',
      blockchain: 'ETH'
    },
    {
      dname: 'FRAX-E',
      ticker: 'FRAX',
      blockchain: 'ETH'
    },
    {
      dname: 'FRONTIER',
      ticker: 'FRONT',
      blockchain: 'ETH'
    },
    {
      dname: 'FTX',
      ticker: 'FTX',
      blockchain: 'ETH'
    },
    {
      dname: 'GALA-E',
      ticker: 'GALA',
      blockchain: 'ETH'
    },
    {
      dname: 'GAME STARTER-E',
      ticker: 'GAME',
      blockchain: 'ETH'
    },
    {
      dname: 'GAMERCOIN-E',
      ticker: 'GHX',
      blockchain: 'ETH'
    },
    {
      dname: 'GATE',
      ticker: 'GT',
      blockchain: 'ETH'
    },
    {
      dname: 'GNOSIS',
      ticker: 'GNO',
      blockchain: 'ETH'
    },
    {
      dname: 'GODS UNCHAINED',
      ticker: 'GODS',
      blockchain: 'ETH'
    },
    {
      dname: 'GOLEM',
      ticker: 'GLM',
      blockchain: 'ETH'
    },
    {
      dname: 'HALO-E',
      ticker: 'HOT',
      blockchain: 'ETH'
    },
    {
      dname: 'HOBI-E',
      ticker: 'HT',
      blockchain: 'ETH'
    },
    {
      dname: 'HOGE FINANCE-E',
      ticker: 'HOGE',
      blockchain: 'ETH'
    },
    {
      dname: 'HOLO TOKEN',
      ticker: 'HOT',
      blockchain: 'ETH'
    },
    {
      dname: 'IDEX',
      ticker: 'IDEX',
      blockchain: 'ETH'
    },
    {
      dname: 'ILLUVIUM',
      ticker: 'ILV',
      blockchain: 'ETH'
    },
    {
      dname: 'IMMKUTABLE X',
      ticker: 'IMX',
      blockchain: 'ETH'
    },
    {
      dname: 'INJECTIVE-E',
      ticker: 'INJ',
      blockchain: 'ETH'
    },
    {
      dname: 'KISHU INU',
      ticker: 'KISHU',
      blockchain: 'ETH'
    },
    {
      dname: 'KYBER NETWORK-E',
      ticker: 'KNC',
      blockchain: 'ETH'
    },
    {
      dname: 'LEAGUE OF KINGDOMS',
      ticker: 'LOKA',
      blockchain: 'ETH'
    },
    {
      dname: 'LEO TOKEN (BITFINEX)',
      ticker: 'LEO',
      blockchain: 'ETH'
    },
    {
      dname: 'Lido DADO',
      ticker: 'LDO',
      blockchain: 'ETH'
    },
    {
      dname: 'LIDO STAKED ETHER',
      ticker: 'STETH',
      blockchain: 'ETH'
    },
    {
      dname: 'LINEAR-E',
      ticker: 'LINA',
      blockchain: 'ETH'
    },
    {
      dname: 'LOOPRING',
      ticker: 'LRC',
      blockchain: 'ETH'
    },
    {
      dname: 'MAGIC INTERNET MONEY-E',
      ticker: 'MIM',
      blockchain: 'ETH'
    },
    {
      dname: 'MAKER-E',
      ticker: 'MKR',
      blockchain: 'ETH'
    },
    {
      dname: 'MASK NETWORK-E',
      ticker: 'MASK',
      blockchain: 'ETH'
    },
    {
      dname: 'MATH',
      ticker: 'MATH',
      blockchain: 'ETH'
    },
    {
      dname: 'MERIT CIRCLE-E',
      ticker: 'MC',
      blockchain: 'ETH'
    },
    {
      dname: 'MY NEIGHBOR  ALICE',
      ticker: 'ALICE',
      blockchain: 'ETH'
    },
    {
      dname: 'Nest Protocol-E',
      ticker: 'NEST',
      blockchain: 'ETH'
    },
    {
      dname: 'NEXO',
      ticker: 'NEXO',
      blockchain: 'ETH'
    },
    {
      dname: 'OCEAN PROTOCOL',
      ticker: 'OCEAN',
      blockchain: 'ETH'
    },
    {
      dname: 'OKB',
      ticker: 'OKB',
      blockchain: 'ETH'
    },
    {
      dname: 'ONESWAP DAO TOKEN',
      ticker: 'ONES',
      blockchain: 'ETH'
    },
    {
      dname: 'OPENOCEAN-E',
      ticker: 'OOE',
      blockchain: 'ETH'
    },
    {
      dname: 'OVR',
      ticker: 'OVR',
      blockchain: 'ETH'
    },
    {
      dname: 'PAID NETWORK',
      ticker: 'PAID',
      blockchain: 'ETH'
    },
    {
      dname: 'REQUEST-E',
      ticker: 'REQ',
      blockchain: 'ETH'
    },
    {
      dname: 'POSER LEDGER',
      ticker: 'POWR',
      blockchain: 'ETH'
    },
    {
      dname: 'PRESEARCH',
      ticker: 'PRE',
      blockchain: 'ETH'
    },
    {
      dname: 'PROJECT GALAXY-E',
      ticker: 'GAL',
      blockchain: 'ETH'
    },
    {
      dname: 'PROTON-E',
      ticker: 'XPR',
      blockchain: 'ETH'
    },
    {
      dname: 'PUNDIX',
      ticker: 'NPXS',
      blockchain: 'ETH'
    },
    {
      dname: 'QUANT',
      ticker: 'QNT',
      blockchain: 'ETH'
    },
    {
      dname: 'RADIO CACA-E',
      ticker: 'RACA',
      blockchain: 'ETH'
    },
    {
      dname: 'RADIOSHACK-E',
      ticker: 'RADIO',
      blockchain: 'ETH'
    },
    {
      dname: 'RALLY',
      ticker: 'RLY',
      blockchain: 'ETH'
    },
    {
      dname: 'RENDER-E',
      ticker: 'RNDR',
      blockchain: 'ETH'
    },
    {
      dname: 'REN-E',
      ticker: 'REN',
      blockchain: 'ETH'
    },
    {
      dname: 'REQUEST-E',
      ticker: 'REQ',
      blockchain: 'ETH'
    },
    {
      dname: 'REVV-E',
      ticker: 'REVV',
      blockchain: 'ETH'
    },
    {
      dname: 'SANDBOX-E',
      ticker: 'SAND',
      blockchain: 'ETH'
    },
    {
      dname: 'SERUM',
      ticker: 'SRM',
      blockchain: 'ETH'
    },
    {
      dname: 'SHIBA INU',
      ticker: 'SHIB',
      blockchain: 'ETH'
    },
    {
      dname: 'SHIBA PREDATOR',
      ticker: 'QOM',
      blockchain: 'ETH'
    },
    {
      dname: 'SHOPPING.IO',
      ticker: 'SPI',
      blockchain: 'ETH'
    },
    {
      dname: 'SMOOTH LOVE POTION',
      ticker: 'SLP',
      blockchain: 'ETH'
    },
    {
      dname: 'SPELL-E',
      ticker: 'SPELL',
      blockchain: 'ETH'
    },
    {
      dname: 'SPOOKYSWAP-E',
      ticker: 'BOO',
      blockchain: 'ETH'
    },
    {
      dname: 'SUSD',
      ticker: 'SUSD',
      blockchain: 'ETH'
    },
    {
      dname: 'SUSHI-E',
      ticker: 'SUSHI',
      blockchain: 'ETH'
    },
    {
      dname: 'SYNAPSE-E',
      ticker: 'SYN',
      blockchain: 'ETH'
    },
    {
      dname: 'SYNTHETIX NETWORK-E',
      ticker: 'SNX',
      blockchain: 'ETH'
    },
    {
      dname: 'TELCOIN-E',
      ticker: 'TEL',
      blockchain: 'ETH'
    },
    {
      dname: 'THE GRAPH-E',
      ticker: 'GRT',
      blockchain: 'ETH'
    },
    {
      dname: 'THE OPEN NETWORK-E',
      ticker: 'TON',
      blockchain: 'ETH'
    },
    {
      dname: 'THE SANDBOX-E',
      ticker: 'SAND',
      blockchain: 'ETH'
    },
    {
      dname: 'TITANSWAP',
      ticker: 'TITAN',
      blockchain: 'ETH'
    },
    {
      dname: 'TrueUSD-E',
      ticker: 'TUSD',
      blockchain: 'ETH'
    },
    {
      dname: 'TRUSTSWAP',
      ticker: 'SWAP',
      blockchain: 'ETH'
    },
    {
      dname: 'ULTRA',
      ticker: 'UOS',
      blockchain: 'ETH'
    },
    {
      dname: 'UMA-E',
      ticker: 'UMA',
      blockchain: 'ETH'
    },
    {
      dname: 'UNCL',
      ticker: 'UNCL',
      blockchain: 'ETH'
    },
    {
      dname: 'UNICRYPT-E',
      ticker: 'UNCX',
      blockchain: 'ETH'
    },
    {
      dname: 'UNISWAP-E',
      ticker: 'UNI',
      blockchain: 'ETH'
    },
    {
      dname: 'UNMARSHAL-E',
      ticker: 'MARSH',
      blockchain: 'ETH'
    },
    {
      dname: 'USDC-E',
      ticker: 'USDC',
      blockchain: 'ETH'
    },
    {
      dname: 'USDD-E',
      ticker: 'USDD',
      blockchain: 'ETH'
    },
    {
      dname: 'USDT-E',
      ticker: 'USDT',
      blockchain: 'ETH'
    },
    {
      dname: 'VERASITY',
      ticker: 'VRA',
      blockchain: 'ETH'
    },
    {
      dname: 'VULCAN-E',
      ticker: 'PRY',
      blockchain: 'ETH'
    },
    {
      dname: 'WAVES',
      ticker: 'WAVES',
      blockchain: 'ETH'
    },
    {
      dname: 'WEWAY-E',
      ticker: 'WWY',
      blockchain: 'ETH'
    },
    {
      dname: 'WOO NETWORK-E',
      ticker: 'WOO',
      blockchain: 'ETH'
    },
    {
      dname: 'YEARN FINANCE-E',
      ticker: 'YFI',
      blockchain: 'ETH'
    },
    {
      dname: 'YIELD GUILD GAMES-E',
      ticker: 'YGG',
      blockchain: 'ETH'
    },
    {
      dname: 'ZKSAPCE',
      ticker: 'ZKS',
      blockchain: 'ETH'
    },
    {
      dname: 'BINANCE',
      ticker: 'BNB',
      blockchain: 'BINANCE'
    },
    {
      dname: 'ALIEN WORLDS-B',
      ticker: 'TLM',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'ALPHA VENTURE DAO-B',
      ticker: 'ALPHA',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'ANKR-B',
      ticker: 'ANKR',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'APENFT-B',
      ticker: 'NFT',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'AUTOMATA-B',
      ticker: 'ATA',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'BABY DOGE COIN-B',
      ticker: 'BABYDOGE',
      blockchain: 'BSC'
    },
    {
      dname: 'BANANO-B',
      ticker: 'BAND',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'BLOCKCHAIN MONTER HUNT-B',
      ticker: 'BCMC',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'BOBMCRYPTO',
      ticker: 'BCOIN',
      blockchain: 'BSC'
    },
    {
      dname: 'CAFESWAP',
      ticker: 'BREW',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'CARTESI-B',
      ticker: 'CTSI',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'CATECOIN',
      ticker: 'CATE',
      blockchain: 'BSC'
    },
    {
      dname: 'CEEK SMART VR - B',
      ticker: 'CEEK',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'CHAINLINK-B',
      ticker: 'LINK',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'COIN98-B',
      ticker: 'C98',
      blockchain: 'BSC'
    },
    {
      dname: 'COMPOUND-B',
      ticker: 'COMP',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'CUBE-B',
      ticker: 'ITAMCUBE',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'CYCLONE PROTOCOL-B',
      ticker: 'CYC',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'DERI PROTOCOL-B',
      ticker: 'DERI',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'FANTOM-B',
      ticker: 'FTM',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'FLOKI INU-B',
      ticker: 'FLOKI',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'FRAX SHARE-B',
      ticker: 'FXS',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'FRAX-B',
      ticker: 'FRAX',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'GALA-B',
      ticker: 'GALA',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'GAME STARTER-B',
      ticker: 'GAME',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'GAMERCOIN-B',
      ticker: 'GHX',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'GAMEX',
      ticker: 'GMX',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'GAMING SHIBA',
      ticker: 'GAMINGSHIBA',
      blockchain: 'BSC'
    },
    {
      dname: 'HOGE FINANCE-B',
      ticker: 'HOGE',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'INJECTIVE-B',
      ticker: 'INJ',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'JETSWAP',
      ticker: 'WINGS',
      blockchain: 'BSC'
    },
    {
      dname: 'KOMMUNITAS-B',
      ticker: 'KOM',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'KYBER NETWORK-B',
      ticker: 'KNC',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'LINEAR-B',
      ticker: 'LINA',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'MAGIC INTERNET MONEY-B',
      ticker: 'MIM',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'MASK NETWORK-B',
      ticker: 'MASK',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'MATH',
      ticker: 'MATH',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'MERIT CIRCLE-B',
      ticker: 'MC',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'MOBOX',
      ticker: 'MBOX',
      blockchain: 'BSC'
    },
    {
      dname: 'MRWEB FINANCE',
      ticker: 'AMA',
      blockchain: 'BSC'
    },
    {
      dname: 'MY NEIGHBOR  ALICE',
      ticker: 'ALICE',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'NARFEX',
      ticker: 'NRFX',
      blockchain: 'BSC'
    },
    {
      dname: 'Nest Protocol-B',
      ticker: 'NEST',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'NFTGamingStars',
      ticker: 'GS1',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'PAID NETWORK',
      ticker: 'PAID-B',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'PANCAKESWAP',
      ticker: 'CAKE',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'POLYTRADE-B',
      ticker: 'TRADE',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'PROJECT GALAXY-B',
      ticker: 'GAL',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'PROTON-B',
      ticker: 'XPR',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'RADIO CACA-B',
      ticker: 'MC',
      blockchain: 'BSC'
    },
    {
      dname: 'RADIOSHACK-B',
      ticker: 'RADIO',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'REVV-B',
      ticker: 'REVV',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'SAFEMOON',
      ticker: 'SFM',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'SAFEPAL',
      ticker: 'SFP',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'SUGAR KINGDOM',
      ticker: 'CANDY',
      blockchain: 'BSC'
    },
    {
      dname: 'SYNAPSE-B',
      ticker: 'SYN',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'TENSET',
      ticker: '10SET',
      blockchain: 'BSC'
    },
    {
      dname: 'THE OPEN NETWORK-B',
      ticker: 'TON',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'TrueUSD-B',
      ticker: 'TUSD',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'TRUST WALLET',
      ticker: 'TWT',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'UNISWAP-B',
      ticker: 'UNI',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'UNMARSHAL-B',
      ticker: 'MARSH',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'USDC-B',
      ticker: 'USDC',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'USDD-B',
      ticker: 'USDD',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'USDT-B',
      ticker: 'USDT',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'WEWAY-B',
      ticker: 'WWY',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'WOO NETWORK-H',
      ticker: 'WOO',
      blockchain: 'BNB SMART CHAIN'
    },
    {
      dname: 'AVALANCHE',
      ticker: 'AVAX',
      blockchain: 'AVAX'
    },
    {
      dname: '0X-A',
      ticker: 'ZRX',
      blockchain: 'AVAX'
    },
    {
      dname: 'AAVE-A',
      ticker: 'AAVE',
      blockchain: 'AVAX'
    },
    {
      dname: 'ALPHA VENTURE DAO-A',
      ticker: 'ALPHA',
      blockchain: 'AVAX'
    },
    {
      dname: 'ANKR-A',
      ticker: 'ANKR',
      blockchain: 'AVAX'
    },
    {
      dname: 'CARTESI-A',
      ticker: 'CTSI',
      blockchain: 'AVAX'
    },
    {
      dname: 'COMPOUND-A',
      ticker: 'COMP',
      blockchain: 'AVAX'
    },
    {
      dname: 'FRAX SHARE-A',
      ticker: 'FXS',
      blockchain: 'AVAX'
    },
    {
      dname: 'FRAX-A',
      ticker: 'FRAX',
      blockchain: 'AVAX'
    },
    {
      dname: 'JOE',
      ticker: 'JOE',
      blockchain: 'AVAX'
    },
    {
      dname: 'KYBER NETWORK-A',
      ticker: 'KNC',
      blockchain: 'AVAX'
    },
    {
      dname: 'MAGIC INTERNET MONEY-A',
      ticker: 'MIM',
      blockchain: 'AVAX'
    },
    {
      dname: 'MAKER-A',
      ticker: 'MKR',
      blockchain: 'AVAX'
    },
    {
      dname: 'OPENOCEAN-A',
      ticker: 'OOE',
      blockchain: 'AVAX'
    },
    {
      dname: 'PANGOLIN',
      ticker: 'PNG',
      blockchain: 'AVAX'
    },
    {
      dname: 'RADIOSHACK-A',
      ticker: 'RADIO',
      blockchain: 'AVAX'
    },
    {
      dname: 'SPELL-A',
      ticker: 'SPELL',
      blockchain: 'AVAX'
    },
    {
      dname: 'SPOOKYSWAP-A',
      ticker: 'BOO',
      blockchain: 'AVAX'
    },
    {
      dname: 'SUSHI-A',
      ticker: 'SUSHI',
      blockchain: 'AVAX'
    },
    {
      dname: 'SYNAPSE-A',
      ticker: 'SYN',
      blockchain: 'AVAX'
    },
    {
      dname: 'SYNTHETIX NETWORK-A',
      ticker: 'SNX',
      blockchain: 'AVAX'
    },
    {
      dname: 'THE GRAPH-A',
      ticker: 'GRT',
      blockchain: 'AVAX'
    },
    {
      dname: 'TrueUSD-A',
      ticker: 'TUSD',
      blockchain: 'AVAX'
    },
    {
      dname: 'UMA-A',
      ticker: 'UMA',
      blockchain: 'AVAX'
    },
    {
      dname: 'USDT-A',
      ticker: 'USDT',
      blockchain: 'AVAX'
    },
    {
      dname: 'WOO NETWORK-A',
      ticker: 'WOO',
      blockchain: 'AVAX'
    },
    {
      dname: 'YEARN FINANCE-A',
      ticker: 'YFI',
      blockchain: 'AVAX'
    },
    {
      dname: 'HARMONY',
      ticker: 'ONES',
      blockchain: 'HARMONY'
    },
    {
      dname: '0X-H',
      ticker: 'ZRX',
      blockchain: 'HARMONY'
    },
    {
      dname: 'AAVE-H',
      ticker: 'AAVE',
      blockchain: 'HARMONY'
    },
    {
      dname: 'BALANCER-H',
      ticker: 'BAL',
      blockchain: 'HARMONY'
    },
    {
      dname: 'BASIC ATTENTION-H',
      ticker: 'BAT',
      blockchain: 'HARMONY'
    },
    {
      dname: 'CELSIUS-H',
      ticker: 'CEL',
      blockchain: 'HARMONY'
    },
    {
      dname: 'CHAINLINK-H',
      ticker: 'LINK',
      blockchain: 'HARMONY'
    },
    {
      dname: 'COMPOUND-H',
      ticker: 'COMP',
      blockchain: 'HARMONY'
    },
    {
      dname: 'CRONOS-H',
      ticker: 'CRO',
      blockchain: 'HARMONY'
    },
    {
      dname: 'ENJIN COIN-H',
      ticker: 'ENJ',
      blockchain: 'HARMONY'
    },
    {
      dname: 'FANTOM-H',
      ticker: 'FTM',
      blockchain: 'HARMONY'
    },
    {
      dname: 'FRAX SHARE-H',
      ticker: 'FXS',
      blockchain: 'HARMONY'
    },
    {
      dname: 'FRAX-H',
      ticker: 'FRAX',
      blockchain: 'HARMONY'
    },
    {
      dname: 'HALO-H',
      ticker: 'HOT',
      blockchain: 'HARMONY'
    },
    {
      dname: 'HOBI-H',
      ticker: 'HT',
      blockchain: 'HARMONY'
    },
    {
      dname: 'LINEAR-H',
      ticker: 'LINA',
      blockchain: 'HARMONY'
    },
    {
      dname: 'REN-H',
      ticker: 'REN',
      blockchain: 'HARMONY'
    },
    {
      dname: 'SUSHI-H',
      ticker: 'SUSHI',
      blockchain: 'HARMONY'
    },
    {
      dname: 'SYNTHETIX NETWORK-H',
      ticker: 'SNX',
      blockchain: 'HARMONY'
    },
    {
      dname: 'THE GRAPH-H',
      ticker: 'GRT',
      blockchain: 'HARMONY'
    },
    {
      dname: 'THE SANDBOX-H',
      ticker: 'SAND',
      blockchain: 'HARMONY'
    },
    {
      dname: 'TrueUSD-H',
      ticker: 'TUSD',
      blockchain: 'HARMONY'
    },
    {
      dname: 'USDC-H',
      ticker: 'USDC',
      blockchain: 'HARMONY'
    },
    {
      dname: 'USDT-H',
      ticker: 'USDT',
      blockchain: 'HARMONY'
    },
    {
      dname: 'YEARN FINANCE-H',
      ticker: 'YFI',
      blockchain: 'HARMONY'
    },
    {
      dname: 'YIELD GUILD GAMES-H',
      ticker: 'YGG',
      blockchain: 'HARMONY'
    },
    {
      dname: 'SOLANA',
      ticker: 'SOL',
      blockchain: 'SOLANA'
    },
    {
      dname: 'AURORY',
      ticker: 'AURY',
      blockchain: 'SOLANA'
    },
    {
      dname: 'DEFI LAND',
      ticker: 'DFL',
      blockchain: 'SOLANA'
    },
    {
      dname: 'KIN',
      ticker: 'KIN',
      blockchain: 'SOLANA'
    },
    {
      dname: 'ORCA',
      ticker: 'ORCA',
      blockchain: 'SOLANA'
    },
    {
      dname: 'RADIUM',
      ticker: 'RAY',
      blockchain: 'SOLANA'
    },
    {
      dname: 'SAMOYEDCOIN',
      ticker: 'SAMO',
      blockchain: 'SOLANA'
    },
    {
      dname: 'SOLRAZR',
      ticker: 'SOLR',
      blockchain: 'SOLANA'
    },
    {
      dname: 'STEPN',
      ticker: 'GMT',
      blockchain: 'SOLANA'
    },
    {
      dname: 'TRON',
      ticker: 'TRX',
      blockchain: 'TRON'
    },
    {
      dname: 'APENFT-T',
      ticker: 'NFT',
      blockchain: 'TRON'
    },
    {
      dname: 'USDD-T',
      ticker: 'USDD',
      blockchain: 'TRON'
    },
    {
      dname: 'USDT-T',
      ticker: 'USDT',
      blockchain: 'TRON'
    },
    {
      dname: 'ALGORAND',
      ticker: 'ALGO',
      blockchain: 'OTHER'
    },
    {
      dname: 'BITCOIN CASH',
      ticker: 'BCH',
      blockchain: 'OTHER'
    },
    {
      dname: 'CARDANO',
      ticker: 'ADA',
      blockchain: 'OTHER'
    },
    {
      dname: 'CELERY',
      ticker: 'CLR',
      blockchain: 'OTHER'
    },
    {
      dname: 'CELO',
      ticker: 'CELO',
      blockchain: 'OTHER'
    },
    {
      dname: 'COSMOS HUB',
      ticker: 'ATOM',
      blockchain: 'OTHER'
    },
    {
      dname: 'DASH',
      ticker: 'DASH',
      blockchain: 'OTHER'
    },
    {
      dname: 'DECRED',
      ticker: 'DCR',
      blockchain: 'OTHER'
    },
    {
      dname: 'DOGE',
      ticker: 'DOGE',
      blockchain: 'OTHER'
    },
    {
      dname: 'ELROND',
      ticker: 'EGLD',
      blockchain: 'OTHER'
    },
    {
      dname: 'ETHEREUM CLASSIC',
      ticker: 'ETC',
      blockchain: 'OTHER'
    },
    {
      dname: 'EVMOS',
      ticker: 'EVMOS',
      blockchain: 'OTHER'
    },
    {
      dname: 'FILECOIN',
      ticker: 'FIL',
      blockchain: 'OTHER'
    },
    {
      dname: 'ICON',
      ticker: 'ICX',
      blockchain: 'OTHER'
    },
    {
      dname: 'KAVA',
      ticker: 'KAVA',
      blockchain: 'OTHER'
    },
    {
      dname: 'KLAYTN',
      ticker: 'KLAY',
      blockchain: 'OTHER'
    },
    {
      dname: 'KUCOIN',
      ticker: 'KCS',
      blockchain: 'OTHER'
    },
    {
      dname: 'KUSAMA',
      ticker: 'KSM',
      blockchain: 'OTHER'
    },
    {
      dname: 'LBRY CREDITS',
      ticker: 'LBC',
      blockchain: 'OTHER'
    },
    {
      dname: 'LISK',
      ticker: 'LISK',
      blockchain: 'OTHER'
    },
    {
      dname: 'LITECOIN',
      ticker: 'LTC',
      blockchain: 'OTHER'
    },
    {
      dname: 'MAIAR DEX',
      ticker: 'MEX',
      blockchain: 'OTHER'
    },
    {
      dname: 'NEAR PROTOCOL',
      ticker: 'NEAR',
      blockchain: 'OTHER'
    },
    {
      dname: 'NEM',
      ticker: 'XEM',
      blockchain: 'OTHER'
    },
    {
      dname: 'NEO',
      ticker: 'NEO',
      blockchain: 'OTHER'
    },
    {
      dname: 'POLKADOT',
      ticker: 'DOT',
      blockchain: 'OTHER'
    },
    {
      dname: 'QTUM',
      ticker: 'QTUM',
      blockchain: 'OTHER'
    },
    {
      dname: 'RAVENCOIN',
      ticker: 'RVN',
      blockchain: 'OTHER'
    },
    {
      dname: 'SPIRITSWAP',
      ticker: 'SPIRIT',
      blockchain: 'OTHER'
    },
    {
      dname: 'STACKS',
      ticker: 'STX',
      blockchain: 'OTHER'
    },
    {
      dname: 'STELLAR',
      ticker: 'XLM',
      blockchain: 'OTHER'
    },
    {
      dname: 'TERRA (LUNA)',
      ticker: 'LUNA',
      blockchain: 'OTHER'
    },
    {
      dname: 'TEZOS',
      ticker: 'XTZ',
      blockchain: 'OTHER'
    },
    {
      dname: 'THETA',
      ticker: 'THETA',
      blockchain: 'OTHER'
    },
    {
      dname: 'THORChain',
      ticker: 'RUNE',
      blockchain: 'OTHER'
    },
    {
      dname: 'VECHAIN',
      ticker: 'VET',
      blockchain: 'OTHER'
    },
    {
      dname: 'XRP',
      ticker: 'XRP',
      blockchain: 'OTHER'
    },
    {
      dname: 'ZILLIQA',
      ticker: 'ZIL',
      blockchain: 'OTHER'
    },
  ]

  const ditems = items.map((item) => ({
    name: `${item.blockchain} (${item.dname} - ${item.ticker})`,
    dname: item.dname,
    ticker: item.ticker,
    blockchain: item.blockchain
  }))

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results)
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result)
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item)
  }

  const handleOnFocus = () => {
    console.log('Focused')
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>name: {item.dname}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>ticker: {item.ticker}</span>
        <span style={{ display: 'block', textAlign: 'left' }}>blockchain: {item.blockchain}</span>
      </>
    )
  }

  const toHome = () => {
    history.push('/');
  }

  const copyAddress = () => {
    const add = "0xDF465C98bB8dDC6eBb7F9c1086120FD01eEF70AD"
    if (navigator.clipboard && navigator.permissions) {
      navigator.clipboard.writeText(add).then(() => displayTooltip())
    } else if (document.queryCommandSupported('copy')) {
      const ele = document.createElement('textarea')
      ele.value = add
      document.body.appendChild(ele)
      ele.select()
      document.execCommand('copy')
      document.body.removeChild(ele)
      displayTooltip()
    }
  }

  function displayTooltip() {
    setIsDisplayed(true)
    setTimeout(() => {
      setIsDisplayed(false)
    }, 1000)
  }

  const onChangeBlockchainAddress = (e) => {
    setBlockchainAddress(e.target.value)
  }

  const goToWalletSetup = () => {
    return history.push('/walletsetup');
  }

  const onChangeAffiliateAddress = (e) => {
    setAffiliateAddress(e.target.value)
  }

  const onClickSubmit = () => {
    console.log("submit")
  }
  
  return (
    <div style={{ background: '#002060', maxWidth: '1024px', paddingBottom: '100px', margin: 'auto' }}>
      {/* <BackButton /> */}
      <Image src="/images/logo-1.png" onClick={toHome} alt="logo" width={120} height={80} style={{ cursor: 'pointer' }} />

      <div style={{ margin: 'auto' }}>
        <Text style={{ fontSize: '36px', margin: '80px 0 60px ', textAlign: 'center' }} color="#ffc000">{t('About Claiming HODL SIGNAL TOKENS')}</Text>
      </div>
      <div style={{ padding: '0px 20px'}}>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('•')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('250 Blockchains Have Been Selected for Claiming')}</Text>
        </Flex>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('•')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('If you Own/Control Addresses in these Blockchains You Can Claim HODL SIGNAL Tokens (HODLS)')}</Text>
        </Flex>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('•')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('5 Million HODLS have been Allocated for Each of the 250 Blockchains')}</Text>
        </Flex>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('•')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('You Do Not Give-Up Your Coins/Tokens to Claim')}</Text>
        </Flex>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('•')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('No KYC/AML or Email is Required')}</Text>
        </Flex>
      </div>

      <Text style={{ fontSize: '32px', margin: '40px 20px' }} color="#ffc000">{t('You only need to do 2 things to get your HODL Signal Tokens')}</Text>
      <div style={{ padding: '0px 20px' }}>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('1.')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('Send 0.00000001 Coin/Token to a Designated Address')}</Text>
        </Flex>
        <div style={{ padding: '0px 20px' }}>
          <Flex>
            <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('a.')}</Text>
            <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('Proves you control/own the claiming address(s)')}</Text>
          </Flex>
        </div>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('2.')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('Enter your Coin/Token Address and Your HODL Signal Address to the Claiming Smart Contract')}</Text>
        </Flex>
        <Text style={{ fontSize: '22px', textAlign: 'left', marginTop: '12px' }} color="#ffffff">{t('Then on “Distribution Day” (Launch Day) Your HODLS that you Claimed Will be Sent to Your HODL Signal Address.')}</Text>
      </div>

      <Text style={{ fontSize: '32px', margin: '40px 20px' }} color="#ffc000">{t('What is the Purpose of Claiming HODL Signal Tokens (HODLS)?')}</Text>
      <div style={{ padding: '0px 20px' }}>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('•')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('Primary Purpose of the Claiming Event is to Give Numerous Crypto Holders of Various Blockchains a chance to Receive HODL Signal Tokens')}</Text>
        </Flex>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('•')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('The Secondary Purpose is to tell the World about HODL Signal Token and how Everyone Can Mine Time by HODLing to Earn a Fixed Mining Reward')}</Text>
        </Flex>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('•')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('HODL Signal Token as a Store-of-Value will Pay Rewards to HODL Miners 3x the Rate of Core Commodity Inflation')}</Text>
        </Flex>
        <Flex>
          <Text style={{ fontSize: '22px', marginRight: '10px ', textAlign: 'left' }} color="#ffffff">{t('•')}</Text>
          <Text style={{ fontSize: '22px', textAlign: 'left' }} color="#ffffff">{t('Lastly, to Teach Everyone that Crypto Can Function in a Decentralized Way, Pay Rewards without 3rd Parties, without Lockups, and without Lending or Yield Farming')}</Text>
        </Flex>
      </div>
      <Text style={{ fontSize: '32px', margin: '40px 20px' }} color="#ffc000">{t('How Many Tokens Will I receive From Claiming?')}</Text>
      <Text style={{ fontSize: '22px', textAlign: 'left', margin: '0 20px' }} color="#ffffff">{t('It is not an exact number that can be calculated because it depends upon how many other people claim their Tokens within each Blockchain. It also depends on if you Claim using a Registered Affiliate or not.')}</Text>
      <Text style={{ fontSize: '32px', margin: '40px 20px' }} color="#ffc000">{t('See Example:')}</Text>
      <div style={{ width: "100%", margin: '0 20px', textAlign: 'center' }}>
        <Image src="/images/imgpsh_fullsize_anim.jpg" alt="logo" width={984} height={1050} />
      </div>


      <div style={{ margin: 'auto' }}>
        <Text style={{ fontSize: '28px', margin: '40px 0', textAlign: 'center' }} color="#ffc000">{t('Claim Entry Form')}</Text>
        <Text style={{ fontSize: '22px', margin: '40px 0', textAlign: 'center' }} color="#ffc000">{t('Claim Your HODL SIGNAL Tokens (HODLS)')}</Text>
      </div>
      <div style={{ padding: '30px 20px', margin: 'auto' }}>
        <div>      
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>
            <Text style={{ width: '10%', fontWeight: 700}}>Step #1:</Text>
            <Text style={{ width: '80%', fontWeight: 700}}>Find the Blockchain on the list of 250 Blockchains that you wish to claim. You must have ownership/control of the address in order to claim HODL Signals. You can claim more than one address for each Blockchain by repeating steps 1 through 5 for each address.</Text>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>  
            <Text style={{ width: '10%', fontWeight: 700}}>Step #2:</Text>
            <Text style={{ width: '80%', fontWeight: 700}}>Find the Blockchain on the list of 250 Blockchains that you wish to claim. You must have ownership/control of the address in order to claim HODL Signals. You can claim more than one address for each Blockchain by repeating steps 1 through 5 for each address.</Text>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>    
            <Text style={{ width: '10%', fontWeight: 700}}>Step #3:</Text>
            <Text style={{ width: '80%', fontWeight: 700 }}>Set-up your HODL Signal Address using your Metamask Wallet. If you do not know how to setup a Metamask wallet click here: <Button onClick={goToWalletSetup} style={{ color: '#d1c422', backgroundColor: 'transparent' }} ><u>LINK TO METAMASK SETUP</u></Button><br />Note: Your HODL Signal (HODLS) Address is the same as your Polygon (MATIC) address</Text>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>   
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>    
              <Text style={{ width: '10%', fontWeight: 700}}>Step #4:</Text>
              <Text style={{ width: '80%', fontWeight: 700}}>Connect your Polygon (MATIC) Metamask Wallet to the Claiming Smart Contract<br />Important: You will need a small amount of Polygon (MATIC) to register an address.<br/>The gas fees to register each address is less than $0.02 USD.</Text>
            </div> 
            <div style={{ width: '100%', textAlign: 'center', margin: '20px auto 50px' }}><ConnectWalletButton headstring="Address:" colorHeading="#ffc000" colorAddress="#ffffff" colorIcon="primary" /></div>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '30px'}}>  
            <Text style={{ width: '10%', fontWeight: 700 }}>Step #5:</Text>
              <Text style={{ width: '80%', fontWeight: 700 }}>Using your Polygon (MATIC) Metamask Wallet, fill out the form below and approve the smart contract interaction to register your Blockchain Address to Your HODL Signal Address</Text>
          </div>
          <Text style={{ width: '80%', fontWeight: 700, marginTop: '12px' }}>Important: You will need a small amount of Polygon (MATIC) to register an address.</Text>
          <Text style={{ width: '80%', fontWeight: 700 }}>The gas fees to register each address is less than $0.02 USD.</Text>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', paddingTop: '100px'}}>
          <Text style={{ fontSize: '20px', fontWeight: 800, color: '#ffc000' }}>{t('Pleases Enter the Following Information to Claim Your Portion of 5 Million')}</Text>
          <Text style={{ fontSize: '20px', fontWeight: 800, color: '#ffc000' }}>{t('HODL Signal Tokens (HODLS) for each Blockchain:')}</Text>
          
          <StyledSunburst style={{paddingTop: '50px'}}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Blockchain Name:')}</Text>
              {/* <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/> */}
              <div style={{ width: 400 }}>
                <ReactSearchAutocomplete
                  items={ditems}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  formatResult={formatResult}
                  showItemsOnFocus
                  showIcon={false}
                  maxResults={7}
                  styling={
                    {
                      color: "#000000",
                      height: "40px",
                      borderRadius: "0px",
                      backgroundColor: "#CCCCCC",
                    }
                  }
                  // fuseOptions={{
                  //   shouldSort: true,
                  //   threshold: 0.6,
                  //   location: 0,
                  //   distance: 100,
                  //   minMatchCharLength: 1,
                  // }}
                />
              </div>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: Avalanche(AVAX)')}</Text>
          </StyledSunburst>
          <StyledSunburst style={{paddingTop: '15px'}}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Your Blockchain Address:')}</Text>
              <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0x050ec0de1E21686adCa965AC6C0f721Ee6Eb0e55')}</Text>
          </StyledSunburst>
          <StyledSunburst style={{paddingTop: '15px'}}>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Send Transaction Hash/ID:')}</Text>
              <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0x050ec0de1E21686adCa965AC6C0f721Ee6Eb0e55')}</Text>
          </StyledSunburst>
          <StyledSunburst style={{ paddingTop: '15px' }}>
            <Text style={{ fontSize: '14px', textAlign: 'left' }} color="#ffc000">{t('(on Polygon-MATIC Network)')}</Text>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Your HODL Signal Address:')}</Text>
              <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0x050ec0de1E21686adCa965AC6C0f721Ee6Eb0e55')}</Text>
          </StyledSunburst>
          <div style={{ padding: '12px 24px' }}>
            <Text style={{ fontSize: '13px', textAlign: 'left' }} color="#ffffff">{t('If you do not know your HODL SIGNAL address, please see the Metamask Setup Page on this website. Or Follow your favorite Affiliate for additional help. Your Polygon (MATIC) address is the same as your HODL Signal address.')}</Text>
          </div>
          <StyledSunburst style={{ paddingTop: '15px' }}>
            <Text style={{ fontSize: '14px', textAlign: 'left' }} color="#ffffff">{t('Optional')}</Text>
            <StyledForm>
              <Text className='StyledText' style={{ fontSize: '18px', textAlign: 'left', color: '#ffc000' }}>{t('Your Affiliate\'s Address:')}</Text>
              <StyledInput style={{borderRadius: '0', color: '#000000', backgroundColor: '#ccc'}}/>
            </StyledForm>
            <Text style={{ fontSize: '16px', textAlign: 'right' }} color="#ffffff">{t('Example: 0x050ec0de1E21686adCa965AC6C0f721Ee6Eb0e55')}</Text>
          </StyledSunburst>
          
          <Flex style={{ position: 'relative', wordBreak: 'break-all', marginTop: '20px' }} justifyContent="start" alignItems="center">
            <Text style={{ fontSize: '15px', textAlign: 'left', marginRight: '15px' }} color="white">{t('To Tip A Developer, Use this Affiliate Address: ')}</Text>
            <Text style={{ fontSize: '15px', textAlign: 'left' }} color="#ffc000">{t('0xDF465C98bB8dDC6eBb7F9c1086120FD01eEF70AD')}</Text>
            <Button padding="0" style={{ background: "#002060", marginLeft: '8px' }} onClick={copyAddress}><CopyIcon padding="0" color="#ffc000" /></Button>
            <Tooltip isTooltipDisplayed={isDisplayed}>{t('Copied')}</Tooltip>
          </Flex>

          
          <Flex mb="50px" flexDirection="column" justifyContent='center' alignItems='center' mt='50px'>
            <Button width="250px" color="#002060" style={{ fontSize: '24px', background: '#ffc000', borderRadius: '0' }} disabled={pendingTx} onClick={onClickSubmit} >SUBMIT</Button>
            <Text style={{ fontSize: '17px', textAlign: 'center', marginTop: '20px' }} width="auto" color="#ffffff">{t('Click Submit Button to Claim your HODL Signal Tokens')}</Text>
          </Flex>

          <Text style={{ fontSize: '18px', textAlign: 'left', marginBottom: '12px' }} color="#ffffff">{t('Important: You will need a small amount of Polygon (MATIC) to register an address. The gas fees to register each address is less than $0.02USD')}</Text>
          <Text style={{ fontSize: '24px', textAlign: 'left', marginBottom: '12px' }} color="#ffc000">{t('On “Distribution Day” (Launch Day) Your HODL Signal Tokens will be Sent to the Address You Entered Above.')}</Text>
          <Text style={{ fontSize: '18px', textAlign: 'left', marginBottom: '12px' }} color="#ffffff">{t('Remember, you can claim all the addresses you control in each Blockchain that is selected.')}</Text>
        </div>

      </div>
    </div>
  )
}

export default ClaimPage
