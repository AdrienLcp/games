import { type Params, useParams as ReactRouterUseParams } from 'react-router'

import type { PARAMS } from '@/domain/navigation'
import type { ValueOf } from '@/infrastructure/utils'

type Param = ValueOf<typeof PARAMS>

export const useParams = ReactRouterUseParams<Params<Param>>
