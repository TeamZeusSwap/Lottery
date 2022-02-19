import React, { useEffect, useMemo, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Heading, Card, CardBody, Flex, ArrowForwardIcon, Skeleton } from '@pancakeswap/uikit'
import max from 'lodash/max'
import { NavLink } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { useTranslation } from 'contexts/Localization'
import { useAppDispatch } from 'state'
import { useFarms, usePriceCakeBusd } from 'state/hooks'
import { fetchFarmsPublicDataAsync, nonArchivedFarms } from 'state/farms'
import { getFarmApr } from 'utils/apr'

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
const EarnAPRCard = () => {
  const [isFetchingFarmData, setIsFetchingFarmData] = useState(true)
  const { t } = useTranslation()
  const { data: farmsLP } = useFarms()
  const cakePrice = usePriceCakeBusd()
  const dispatch = useAppDispatch()

  // Fetch farm data once to get the max APR
  useEffect(() => {
    const fetchFarmData = async () => {
      try {
        await dispatch(fetchFarmsPublicDataAsync(nonArchivedFarms.map((nonArchivedFarm) => nonArchivedFarm.pid)))
      } finally {
        setIsFetchingFarmData(false)
      }
    }

    fetchFarmData()
  }, [dispatch, setIsFetchingFarmData])

  const highestApr = useMemo(() => {
    if (cakePrice.gt(0)) {
      const aprs = farmsLP.map((farm) => {
        // Filter inactive farms, because their theoretical APR is super high. In practice, it's 0.
        if (farm.pid !== 0 && farm.multiplier !== '0X' && farm.lpTotalInQuoteToken && farm.quoteToken.busdPrice) {
          const totalLiquidity = new BigNumber(farm.lpTotalInQuoteToken).times(farm.quoteToken.busdPrice)
          return getFarmApr(new BigNumber(farm.poolWeight), cakePrice, totalLiquidity)
        }
        return null
      })

      const maxApr = max(aprs)
      return maxApr?.toLocaleString('en-US', { maximumFractionDigits: 2 })
    }
    return null
  }, [cakePrice, farmsLP])

  const aprText = highestApr || '-'
  const earnAprText = t('Earn up to %highestApr% APR in Farms', { highestApr: aprText })
  const [earnUpTo, InFarms] = earnAprText.split(aprText)

  return (
    <StyledFarmStakingCard>
      <NavLink exact activeClassName="active" to="/farms" id="farm-apr-cta">
        <CardBody>
          <Heading color="secondary" scale="lg">
            {earnUpTo}
          </Heading>
          <CardMidContent color="text">
            {highestApr && !isFetchingFarmData ? (
              `${highestApr}%`
            ) : (
              <Skeleton animation="pulse" variant="rect" height="44px" />
            )}
          </CardMidContent>
          <Flex justifyContent="space-between">
            <Heading color="secondary" scale="lg">
              {InFarms}
            </Heading>
            <ArrowForwardIcon mt={30} color="secondary" />
          </Flex>
        </CardBody>
      </NavLink>
    </StyledFarmStakingCard>
  )
}

export default EarnAPRCard
