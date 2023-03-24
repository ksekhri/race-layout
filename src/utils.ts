import { DEFAULT_TEXT_LAYOUT } from './constants'
import * as Types from './types'

const generateNewLayoutCollection = ({
    layoutCollectionName,
    racers,
    layoutName,
    layoutBackground,
    layoutHighlight,
}: {
    layoutCollectionName: string
    racers: number
    layoutName: string
    layoutBackground?: string
    layoutHighlight?: 0 | 1
}): Types.LayoutCollection => ({
    name: layoutCollectionName,
    racers,
    layouts: {
        [layoutName]: generateNewLayout({
            layoutName,
            racers,
            background: layoutBackground,
            highlight: layoutHighlight,
        }),
    },
})

const DEFAULT_BACKGROUND = ''

const generateNewLayout = ({
    layoutName,
    racers,
    places = racers,
    highlight = 0,
    background = DEFAULT_BACKGROUND,
}: {
    layoutName: string
    racers: number
    places?: number
    highlight?: 0 | 1
    background?: string
}): Types.Layout => ({
    name: layoutName,
    background,
    positions: {
        prizePool: DEFAULT_TEXT_LAYOUT,
        commentators: DEFAULT_TEXT_LAYOUT,
        racers: generatePositionArray(racers),
        places: generatePositionArray(places),
        highlight: generatePositionArray(highlight),
    },
})

const generatePositionArray = (count: number) =>
    Array(count)
        .fill(null)
        .map(() => DEFAULT_TEXT_LAYOUT)
