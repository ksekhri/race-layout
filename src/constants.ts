import * as Types from './types'

export const DEFAULT_STATE: Omit<
    Types.State,
    'layoutData' | 'getRacer' | 'getLayout'
> = {
    prizePool: 0,
    commentators: '',
    layout: '',
    activeLayout: '',
    activeRacers: ['', '', '', '', '', '', ''],
    racers: {},
    highlightedRacerId: '',
}
