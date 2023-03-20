import * as Types from './types'

export const LAYOUTS: Record<string, Types.LayoutCollection> = {
    '4 Person Race': {
        name: '4 Person Race',
        racers: 4,
        layouts: {
            'All Racers': {
                name: 'All Racers',
                background: '4.png',
                positions: {
                    prizePool: { x: 0.5, y: 0.5, size: 0.5 },
                    commentators: { x: 0.5, y: 0.5, size: 0.5 },
                    places: [
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                    ],
                    racers: [
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                    ],
                    highlight: [],
                },
            },
            Highlight: {
                name: 'Highlight',
                background: '4h.png',
                positions: {
                    prizePool: { x: 0.5, y: 0.5, size: 0.5 },
                    commentators: { x: 0.5, y: 0.5, size: 0.5 },
                    places: [
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                    ],
                    racers: [
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                    ],
                    highlight: [{ x: 0.5, y: 0.5, size: 0.5 }],
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
                background: '5.png',
                positions: {
                    prizePool: { x: 0.5, y: 0.5, size: 0.5 },
                    commentators: { x: 0.5, y: 0.5, size: 0.5 },
                    places: [
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                    ],
                    racers: [
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                    ],
                    highlight: [],
                },
            },
            Highlight: {
                name: 'Highlight',
                background: '5h.png',
                positions: {
                    prizePool: { x: 0.5, y: 0.5, size: 0.5 },
                    commentators: { x: 0.5, y: 0.5, size: 0.5 },
                    places: [
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                    ],
                    racers: [
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                        { x: 0.5, y: 0.5, size: 0.5 },
                    ],
                    highlight: [{ x: 0.5, y: 0.5, size: 0.5 }],
                },
            },
        },
    },
}
