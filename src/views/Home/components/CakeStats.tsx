import React from 'react'
import { Card, CardBody, Text } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceCakeBusd } from '../../../state/hooks'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  opacity: 0.94;
  max-height: 62%;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`
 const Heading = styled.div`
 font-size: 40px;
 margin-bottom: 20px;
 color: ${({ theme }) => theme.colors.textSubtle};
 font-weight: 900;
  `
const CakeStats = () => {
  const { t } = useTranslation()
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const Farms = useFarms();
  const eggPrice = usePriceCakeBusd();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const cakeSupply = getBalanceNumber(circSupply);
  const marketCap = eggPrice.times(circSupply);
   
 
  return (
    <StyledCakeStats>
      <CardBody>
        <Heading>
        {t('Zeus Stats')}
        </Heading>
        <Row>
          <Text fontSize="17px" color='secondary'>{t('Market Cap')}</Text>
          <CardValue fontSize="17px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="17px" color='secondary'>{t('Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="17px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="17px" color='secondary'>{t('Circulating Supply')}</Text>
          {cakeSupply && <CardValue fontSize="17px" value={cakeSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="17px" color='secondary'>{t('Total Burned')}</Text>
          <CardValue fontSize="17px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
        <Text fontSize="17px" color='secondary'>{t('New ZEUS/block')}</Text>
          <CardValue fontSize="17px" decimals={0} value={0.8} />
        </Row>
       
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
