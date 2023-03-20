import * as Types from './types'

const DEFAULT_TEXT_LAYOUT = {
    left: '20%',
    top: '20%',
    fontSize: 20,
    color: '#ffffff',
    maxWidth: '10%',
    maxHeight: '10%',
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
                    prizePool: {
                        left: '20%',
                        top: '20%',
                        fontSize: 20,
                        color: '#ffffff',
                    },
                    commentators: {
                        left: '20%',
                        top: '20%',
                        fontSize: 20,
                        color: '#ffffff',
                    },
                    places: [
                        {
                            left: '20%',
                            top: '20%',
                            fontSize: 20,
                            color: '#ffffff',
                        },
                        {
                            left: '20%',
                            top: '20%',
                            fontSize: 20,
                            color: '#ffffff',
                        },
                        {
                            left: '20%',
                            top: '20%',
                            fontSize: 20,
                            color: '#ffffff',
                        },
                        {
                            left: '20%',
                            top: '20%',
                            fontSize: 20,
                            color: '#ffffff',
                        },
                    ],
                    racers: [
                        {
                            left: '20%',
                            top: '20%',
                            fontSize: 20,
                            color: '#ffffff',
                        },
                        {
                            left: '20%',
                            top: '20%',
                            fontSize: 20,
                            color: '#ffffff',
                        },
                        {
                            left: '20%',
                            top: '20%',
                            fontSize: 20,
                            color: '#ffffff',
                        },
                        {
                            left: '20%',
                            top: '20%',
                            fontSize: 20,
                            color: '#ffffff',
                        },
                    ],
                    highlight: [],
                },
            },
            Highlight: {
                name: 'Highlight',
                background: 'https://istation64.com/racelayout/assets/4h.png',
                positions: {
                    prizePool: DEFAULT_TEXT_LAYOUT,
                    commentators: {
                        left: '3.2%',
                        top: '29.8%',
                        fontSize: 30,
                        color: '#ffffff',
                        maxWidth: '18.6%',
                        maxHeight: '39.6%',
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
