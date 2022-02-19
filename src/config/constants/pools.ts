import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.zeus,
    earningToken: tokens.zeus,
    contractAddress: {
      97: '',
      56: '0x53dD4Ff459a03c502a9F1fE408D6EE63aC600555',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
   },
 
   
]

export default pools
