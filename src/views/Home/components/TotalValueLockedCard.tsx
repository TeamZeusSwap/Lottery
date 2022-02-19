import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  flex: 1;
  opacity: 0.9;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
      `
  
const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="lg" mb="0px" color="secondary">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {data ? (
          <>
            <Heading scale="xl">{`$${tvl}`}</Heading>
            <Text color="textSubtle">{t('Across all LPs and Zeus Pool')}</Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
