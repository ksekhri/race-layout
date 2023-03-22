export type State = {
    prizePool: number
    commentators: string
    layoutLibrary: LayoutLibrary
    selectedLayoutCollectionId: string
    selectedLayoutCollection: LayoutCollection
    activeLayoutId: string
    activeLayout: Layout
    getLayout: (layoutId: string) => Layout
    activeRacers: string[]
    racers: Record<string, Racer>
    getRacer: (racerId: string) => Racer
    highlightedRacerId: string
}

type LayoutLibrary = Record<string, LayoutCollection>

export type Racer = {
    name: string
    pb: string
    time: string
}

export type LayoutCollection = {
    name: string
    racers: number
    layouts: Record<string, Layout>
}

export type Layout = {
    name: string
    background: string
    positions: Positions
}

export type Positions = {
    prizePool: TextLayout
    commentators: TextLayout
    places: TextLayout[]
    racers: TextLayout[]
    highlight: TextLayout[]
}

export type TextLayout = {
    left: number
    top: number
    fontSize: number
    color: string
    width: number
    height: number
    textAlign: 'left' | 'center' | 'right'
}

export type OffsetSize = { width: number; height: number }
