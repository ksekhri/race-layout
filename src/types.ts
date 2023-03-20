export type State = {
    prizePool: number
    commentators: string
    layout: string
    layoutData: LayoutCollection
    activeLayout: string
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
    x: number
    y: number
    size: number
}
