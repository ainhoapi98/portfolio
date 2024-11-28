import 'styled-components'
import { type Theme } from '@resource/styles/dmo/types'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-object-type */
  export interface DefaultTheme extends Theme {}
}
