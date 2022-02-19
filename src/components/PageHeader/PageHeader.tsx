import React from 'react'
import styled from 'styled-components'
import { Box } from '@pancakeswap/uikit'
import Container from '../layout/Container'

const Outer = styled(Box)<{ background?: string }>`
 `

const Inner = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader
