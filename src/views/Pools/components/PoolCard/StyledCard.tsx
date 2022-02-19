import styled, { css, keyframes } from 'styled-components'
import { Card, Box } from '@pancakeswap/uikit'

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
 
interface PromotedStyleCardProps {
  isDesktop: boolean
}
 

export const StyledCard = styled(Card)<{ isPromoted?: PromotedStyleCardProps; isFinished?: boolean }>`
  max-width: 352px;
  display: flex;
  padding: 4px;
  background-color: rgb(0, 21, 46) ;
   justify-content: space-around;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  opacity: 0.97 ;

  ${({ isPromoted, theme }) =>
    isPromoted
      ? css`
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
           background-size: 400% 400%;
 
        `
      : `background: ${(props) => props.theme.card.background};`}

  ${({ isPromoted }) =>
    isPromoted &&
    isPromoted.isDesktop &&
    css`
    animation: ${RainbowLight} 2s linear infinite;
    `}

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 52px 70px;
  }
`
 

export default StyledCard
