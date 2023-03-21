export type State = {
    prizePool: number
    commentators: string
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
    positions: {
        prizePool: TextLayout
        commentators: TextLayout
        places: TextLayout[]
        racers: TextLayout[]
        highlight: TextLayout[]
    }
}

export type TextLayout = {
    left: string
    top: string
    fontSize: number
    color: string
    width: string
    height: string
    textAlign: 'left' | 'center' | 'right'
}

export type OffsetSize = { width: number; height: number }
