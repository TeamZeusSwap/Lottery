import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import styled, { keyframes } from 'styled-components'
import { Flex, Text, Skeleton } from '@pancakeswap/uikit'
import { Farm } from 'state/types'
import { provider as ProviderType } from 'web3-core'
import { getBscScanAddressUrl } from 'utils/bscscan'
import { useTranslation } from 'contexts/Localization'
import ExpandableSectionButton from 'components/ExpandableSectionButton'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import DetailsSection from './DetailsSection'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
 
export interface FarmWithStakedValue extends Farm {
  apr?: number
  liquidity?: BigNumber
}

const RainbowLight = keyframes`
	0% {
		background-position: 0% 100%;
	}
	50% {
		background-position: 0% 0%;
	}
	100% {
		background-position: 100% 0%;
	}
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
   240deg,
   rgb(0,0,0) 0%,
   rgb(0,0,0) 10%,
   rgb(0, 16, 36)20%,
   rgb(0, 21, 46) 30%,
   rgb(0, 32, 71) 40%,
   rgb(0, 53, 117) 50%,
   rgb(0, 32, 71)60%,
   rgb(0, 21, 46) 70%,
   rgb(0, 16, 36) 80%,
   rgb(0,0,0) 90%,
   rgb(0,0,0) 100%);
   );
  background-size: 500% 500%;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 30px;
  filter: blur(0px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`


const FCard = styled.div<{ isPromotedFarm: boolean }>`
  align-self: baseline;
  background-color: rgb(0, 21, 46) ;
  border-radius: ${({ theme, isPromotedFarm }) => (isPromotedFarm ? '31px' : theme.radii.card)};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  position: relative;
  text-align: center;
  opacity: 0.97;
`

const Divider = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBorder};
  height: 1px;
  margin: 28px auto;
  width: 100%;
`

const ExpandingWrapper = styled.div<{ expanded: boolean }>`
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  provider?: ProviderType
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice, account }) => {
  const { t } = useTranslation()

  const [showExpandableSection, setShowExpandableSection] = useState(false)

  // We assume the token name is coin pair + lp e.g. CAKE-BNB LP, LINK-BNB LP,
  // NAR-CAKE LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()

  const totalValueFormatted =
    farm.liquidity && farm.liquidity.gt(0)
      ? `$${farm.liquidity.toNumber().toLocaleString(undefined, { minimumFractionDigits: 2,maximumFractionDigits: 2 })}`
      : ''

  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '')
  const earnLabel = farm.dual ? farm.dual.earnLabel : 'ZEUS'

  const farmAPR = farm.apr && farm.apr.toLocaleString('en-US', { maximumFractionDigits: 2 })

  const liquidityUrlPathParts = getLiquidityUrlPathParts({
    quoteTokenAddress: farm.quoteToken.address,
    tokenAddress: farm.token.address,
  })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]
  const isPromotedFarm = farm.isEvent === (true)

  return (
    <FCard isPromotedFarm={isPromotedFarm}>
      {isPromotedFarm && <StyledCardAccent />}
      <CardHeading
        lpLabel={lpLabel}
        multiplier={farm.multiplier}
        isCommunityFarm={farm.isCommunity}
        farmImage={farmImage}
        tokenSymbol={farm.token.symbol}
      />
      {!removed && (
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{t('APR')}:</Text>
          <Text bold style={{ display: 'flex', alignItems: 'center' }}>
            {farm.apr ? (
              <>
                 {farmAPR}%
              </>
            ) : (
              <Skeleton height={24} width={80} />
            )}
          </Text>
        </Flex>
      )}
      <Flex justifyContent="space-between">
        <Text>{t('Earn')}:</Text>
        <Text bold>{earnLabel}</Text>
      </Flex>
      <CardActionsContainer farm={farm} account={account} addLiquidityUrl={addLiquidityUrl} />
      <Divider />
      <ExpandableSectionButton
        onClick={() => setShowExpandableSection(!showExpandableSection)}
        expanded={showExpandableSection}
      />
      <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          bscScanAddress={getBscScanAddressUrl(farm.lpAddresses[process.env.REACT_APP_CHAIN_ID])}
          infoAddress={`https://pancakeswap.info/pair/${lpAddress}`}
          totalValueFormatted={totalValueFormatted}
          lpLabel={lpLabel}
          addLiquidityUrl={addLiquidityUrl}
        />
      </ExpandingWrapper>
    </FCard>
  )
}

export default FarmCard
