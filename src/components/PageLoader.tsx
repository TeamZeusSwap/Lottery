import React from 'react'
import styled from 'styled-components'
import { BunnyCardsIcon } from '@pancakeswap/uikit'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      Loading
  </Wrapper>
)
}

export default PageLoader
