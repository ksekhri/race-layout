import * as Types from './types'

const DEFAULT_TEXT_LAYOUT: Types.TextLayout = {
    left: '20%',
    top: '20%',
    fontSize: 20,
    color: '#ffffff',
    width: '20%',
    height: '10%',
    textAlign: 'left',
}

export const LAYOUTS: Record<string, Types.LayoutCollection> = {
    '4 Person Race': {
        name: '4 Person Race',
        racers: 4,
        layouts: {
            'All Racers': {
                name: 'All Racers',
                background: 'https://istation64.com/racelayout/assets/4.png',
                positions: {
                    prizePool: DEFAULT_TEXT_LAYOUT,
                    commentators: DEFAULT_TEXT_LAYOUT,
                    places: [
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                    ],
                    racers: [
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                    ],
                    highlight: [],
                },
            },
            Highlight: {
                name: 'Highlight',
                background: 'https://istation64.com/racelayout/assets/4h.png',
                positions: {
                    prizePool: {
                        left: '1.85%',
                        top: '14.9%',
                        fontSize: 30,
                        color: '#ffffff',
                        width: '18.6%',
                        height: '9.5%',
                        textAlign: 'center',
                    },
                    commentators: {
                        left: '1.85%',
                        top: '29.8%',
                        fontSize: 30,
                        color: '#ffffff',
                        width: '18.6%',
                        height: '39.6%',
                        textAlign: 'center',
                    },
                    places: [
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                    ],
                    racers: [
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                    ],
                    highlight: [DEFAULT_TEXT_LAYOUT],
                },
            },
        },
    },
    '5 Person Race': {
        name: '5 Person Race',
        racers: 5,
        layouts: {
            'All Racers': {
                name: 'All Racers',
                background: 'https://istation64.com/racelayout/assets/5.png',
                positions: {
                    prizePool: DEFAULT_TEXT_LAYOUT,
                    commentators: DEFAULT_TEXT_LAYOUT,
                    places: [
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                    ],
                    racers: [
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                    ],
                    highlight: [],
                },
            },
            Highlight: {
                name: 'Highlight',
                background: 'https://istation64.com/racelayout/assets/5h.png',
                positions: {
                    prizePool: DEFAULT_TEXT_LAYOUT,
                    commentators: DEFAULT_TEXT_LAYOUT,
                    places: [
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                    ],
                    racers: [
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                        DEFAULT_TEXT_LAYOUT,
                    ],
                    highlight: [DEFAULT_TEXT_LAYOUT],
                },
            },
        },
    },
}
