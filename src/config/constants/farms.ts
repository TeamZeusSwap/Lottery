import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
   {
    pid: 0,
    lpSymbol: 'ZEUS',
    lpAddresses: {
      97: '',
      56: '0x78358353B310FACDA32670998D9ecE2e34393012',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ZEUS-BNB LP',
    isEvent: true,
    lpAddresses: {
      97: '',
      56: '0xe3821648738e51686f11f0b74efb8e58c146383b',
    },
    token: tokens.zeus,
    quoteToken: tokens.wbnb,
   },
   {
    pid: 3,
    lpSymbol: 'ZEUS-BUSD LP',
    isEvent: true,
    lpAddresses: {
      97: '',
      56: '0x4fc9f152c23e225385e2a01a92de024c9979b1bc',
    },
    token: tokens.zeus,
    quoteToken: tokens.busd,
   },
   {
   pid: 2,
   lpSymbol: 'BUSD-BNB LP',
   isEvent: true,
   lpAddresses: {
     97: '',
     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
   },
   token: tokens.busd,
   quoteToken: tokens.wbnb,
  
  },
   
  
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
   
]

export default farms
