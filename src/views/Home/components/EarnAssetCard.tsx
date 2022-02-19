import React from 'react'
import styled, { keyframes } from 'styled-components'
import orderBy from 'lodash/orderBy'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon } from '@pancakeswap/uikit'
import { NavLink } from 'react-router-dom'
import pools from 'config/constants/pools'
import { Pool } from 'state/types'
import { useTranslation } from 'contexts/Localization'

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

const StyledFarmStakingCard = styled(Card)`
background: linear-gradient(
  45deg,
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
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-size: 500% 500%;
  animation: ${RainbowLight} 2.5s linear infinite;
  border-radius: 25px;
  opacity: 0.94;
  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  }
`
const CardMidContent = styled(Heading).attrs({ scale: 'xl' })`
  line-height: 44px;
`

const activeNonCakePools = pools.filter((pool) => !pool.isFinished && !pool.earningToken.symbol.includes('CAKE'))
const latestPools: Pool[] = orderBy(activeNonCakePools, ['sortOrder', 'pid'], ['desc', 'desc']).slice(0, 3)
// Always include CAKE
const assets = [latestPools.map((pool) => pool.earningToken.symbol)].join(', ')

const EarnAssetCard = () => {
  const { t } = useTranslation()
  const assetText = t('Earn %assets% in Pools', { assets })
  const [earn, InPools] = assetText.split(assets)

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/syrup" id="pool-cta">
        <CardBody>
          <Heading color="secondary" scale="lg">
            {earn}
          </Heading>
          <CardMidContent color="text">{assets}</CardMidContent>
          <Flex justifyContent="space-between">
            <Heading color="secondary" scale="lg">
              {InPools}
            </Heading>
            <ArrowForwardIcon mt={30} color="primary" />
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default EarnAssetCard
