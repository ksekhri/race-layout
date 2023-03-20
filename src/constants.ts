import * as Types from './types'

export const DEFAULT_STATE: Omit<
    Types.State,
    'selectedLayoutCollection' | 'getRacer' | 'getLayout' | 'activeLayout'
> = {
    prizePool: 0,
    commentators: '',
    selectedLayoutCollectionId: '',
    activeLayoutId: 'Highlight',
    activeRacers: ['', '', '', '', '', '', ''],
    racers: {},
    highlightedRacerId: '',
}
