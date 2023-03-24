import * as Types from './types'

export const DEFAULT_TEXT_LAYOUT: Types.TextLayout = {
    left: 20,
    top: 20,
    fontSize: 30,
    color: '#ffffff',
    width: 20,
    height: 10,
    textAlign: 'center',
    flag: false,
}

export const DEFAULT_STATE: Omit<
    Types.State,
    'selectedLayoutCollection' | 'getRacer' | 'getLayout' | 'activeLayout'
> = {
    localVersion: '0.0.3',
    prizePool: 0,
    commentators: '',
    selectedLayoutCollectionId: '',
    activeLayoutId: '',
    activeRacers: ['', '', '', '', '', '', '', '', '', ''],
    places: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    racers: {},
    highlightedRacerId: '',
    layoutLibrary: {
        '4 Person Race': {
            name: '4 Person Race',
            racers: 4,
            layouts: {
                'All Racers': {
                    name: 'All Racers',
                    background:
                        'https://istation64.com/racelayout/assets/4.jpg',
                    positions: {
                        prizePool: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 35,
                            top: 7.654320987654321,
                            height: 7.654320987654321,
                            width: 30,
                        },
                        commentators: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 34.86111111111111,
                            top: 21.728395061728396,
                            height: 14.320987654320987,
                            width: 30.416666666666664,
                        },
                        places: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 35.55555555555556,
                                top: 44.19753086419753,
                                height: 6.91358024691358,
                                width: 29.86111111111111,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 35.55555555555556,
                                top: 58.2716049382716,
                                height: 6.666666666666667,
                                width: 29.166666666666668,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 40,
                                top: 65,
                                height: 5.432098765432099,
                                width: 23,
                                flag: false,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 40,
                                top: 71.5,
                                height: 6.172839506172839,
                                width: 23,
                            },
                        ],
                        racers: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 6.388888888888888,
                                top: 0.495,
                                height: 7.4,
                                width: 26.2,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 67.5,
                                top: 0.495,
                                height: 7.4,
                                width: 26.2,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 6.666666666666667,
                                top: 50.5,
                                height: 7.4,
                                width: 26.2,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 67.5,
                                top: 50.5,
                                height: 7.4,
                                width: 26.2,
                                flag: true,
                            },
                        ],
                        highlight: [],
                        highlightPb: [],
                    },
                },
                Highlight: {
                    name: 'Highlight',
                    background:
                        'https://istation64.com/racelayout/assets/4h.jpg',
                    positions: {
                        prizePool: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 50,
                            top: 44.69135802469136,
                            height: 14.074074074074074,
                            width: 19.305555555555557,
                        },
                        commentators: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 73.05555555555556,
                            top: 4.691358024691358,
                            height: 19.753086419753085,
                            width: 26.111111111111114,
                        },
                        places: [
                            {
                                color: '#240f2c',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 75.27777777777777,
                                top: 40,
                                height: 7.5,
                                width: 21.805555555555557,
                            },
                            {
                                color: '#240f2c',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 74.86111111111111,
                                top: 54.25,
                                height: 7.5,
                                width: 22.36111111111111,
                            },
                            {
                                color: '#240f2c',
                                fontSize: 40,
                                textAlign: 'left',
                                left: 82,
                                top: 62.46913580246913,
                                height: 6.419753086419753,
                                width: 15,
                            },
                            {
                                color: '#240f2c',
                                fontSize: 40,
                                textAlign: 'left',
                                left: 82,
                                top: 72.34567901234567,
                                height: 6.666666666666667,
                                width: 15,
                            },
                        ],
                        racers: [
                            {
                                color: '#ffffff',
                                fontSize: 50,
                                textAlign: 'center',
                                left: 3.888888888888889,
                                top: 64.93827160493827,
                                height: 5.679012345679013,
                                width: 13.88888888888889,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 50,
                                textAlign: 'center',
                                left: 25.833333333333336,
                                top: 64.44444444444444,
                                height: 5.679012345679013,
                                width: 13.88888888888889,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 50,
                                textAlign: 'center',
                                left: 47.36111111111111,
                                top: 64.44444444444444,
                                height: 5.432098765432099,
                                width: 13.88888888888889,
                            },
                            {
                                left: 20,
                                top: 20,
                                fontSize: 30,
                                color: '#ffffff',
                                width: 20,
                                height: 10,
                                textAlign: 'center',
                            },
                        ],
                        highlight: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 9.75,
                                top: 51.85185185185185,
                                height: 8.88888888888889,
                                width: 30,
                                flag: true,
                            },
                        ],
                        highlightPb: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 49.30555555555556,
                                top: 28.14814814814815,
                                height: 7.654320987654321,
                                width: 21.11111111111111,
                                flag: false,
                            },
                        ],
                    },
                },
            },
        },
        '4 Person Race (Classic)': {
            name: '4 Person Race (Classic)',
            racers: 4,
            layouts: {
                'All Racers': {
                    name: 'All Racers',
                    background:
                        'https://istation64.com/racelayout/assets/4.jpg',
                    positions: {
                        prizePool: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 35,
                            top: 7.654320987654321,
                            height: 7.654320987654321,
                            width: 30,
                        },
                        commentators: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 34.86111111111111,
                            top: 21.728395061728396,
                            height: 14.320987654320987,
                            width: 30.416666666666664,
                        },
                        places: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 35.55555555555556,
                                top: 44.19753086419753,
                                height: 6.91358024691358,
                                width: 29.86111111111111,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 35.55555555555556,
                                top: 58.2716049382716,
                                height: 6.666666666666667,
                                width: 29.166666666666668,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 40,
                                top: 65,
                                height: 5.432098765432099,
                                width: 23,
                                flag: false,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 40,
                                top: 71.5,
                                height: 6.172839506172839,
                                width: 23,
                            },
                        ],
                        racers: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 6.388888888888888,
                                top: 0.495,
                                height: 7.4,
                                width: 26.2,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 67.5,
                                top: 0.495,
                                height: 7.4,
                                width: 26.2,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 6.666666666666667,
                                top: 50.5,
                                height: 7.4,
                                width: 26.2,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 67.5,
                                top: 50.5,
                                height: 7.4,
                                width: 26.2,
                                flag: true,
                            },
                        ],
                        highlight: [],
                        highlightPb: [],
                    },
                },
                Highlight: {
                    name: 'Highlight',
                    background:
                        'https://istation64.com/racelayout/assets/4h.png',
                    positions: {
                        prizePool: {
                            left: 1.85,
                            top: 14.9,
                            fontSize: 30,
                            color: '#ffffff',
                            width: 18.6,
                            height: 9.5,
                            textAlign: 'center',
                        },
                        commentators: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 1.5277777777777777,
                            top: 29.38271604938272,
                            height: 18.02469135802469,
                            width: 19.86111111111111,
                        },
                        places: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 78.88888888888889,
                                top: 15.06172839506173,
                                height: 8.395061728395062,
                                width: 20.694444444444443,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 79.02777777777777,
                                top: 29.876543209876544,
                                height: 8.88888888888889,
                                width: 20.27777777777778,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'left',
                                left: 83,
                                top: 39.50617283950617,
                                height: 5.432098765432099,
                                width: 16.5,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'left',
                                left: 83,
                                top: 47.40740740740741,
                                height: 5.679012345679013,
                                width: 16.5,
                            },
                        ],
                        racers: [
                            {
                                color: '#ffffff',
                                fontSize: 40,
                                textAlign: 'center',
                                left: 5.833333333333333,
                                top: 63.20987654320987,
                                height: 5.9259259259259265,
                                width: 21.11111111111111,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 40,
                                textAlign: 'center',
                                left: 39.30555555555556,
                                top: 62.96296296296296,
                                height: 6.172839506172839,
                                width: 20.694444444444443,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 40,
                                textAlign: 'center',
                                left: 73.47222222222223,
                                top: 63.456790123456784,
                                height: 5.679012345679013,
                                width: 20.555555555555554,
                            },
                            {
                                left: 20,
                                top: 20,
                                fontSize: 30,
                                color: '#ffffff',
                                width: 20,
                                height: 10,
                                textAlign: 'center',
                            },
                        ],
                        highlight: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 35.833333333333336,
                                top: 54.81481481481482,
                                height: 7.4074074074074066,
                                width: 29.86111111111111,
                                flag: true,
                            },
                        ],
                        highlightPb: [],
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
                    background:
                        'https://istation64.com/racelayout/assets/5.jpg',
                    positions: {
                        prizePool: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 52.8,
                            top: 38.76543209876544,
                            height: 9.62962962962963,
                            width: 12.1,
                        },
                        commentators: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 35.41666666666667,
                            top: 5,
                            height: 10.123456790123457,
                            width: 29.1,
                        },
                        places: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'left',
                                left: 45,
                                top: 16.049382716049383,
                                height: 4.197530864197531,
                                width: 20,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'left',
                                left: 45,
                                top: 20.246913580246915,
                                height: 4.691358024691358,
                                width: 20,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 39,
                                top: 24.691358024691358,
                                height: 4.691358024691358,
                                width: 24,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 39,
                                top: 28.888888888888886,
                                height: 4.691358024691358,
                                width: 24,
                            },
                        ],
                        racers: [
                            {
                                color: '#ffffff',
                                fontSize: 45,
                                textAlign: 'center',
                                left: 5.416666666666667,
                                top: 0.24691358024691357,
                                height: 7.5,
                                width: 27.916666666666668,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 45,
                                textAlign: 'center',
                                left: 68.05555555555556,
                                top: 0.24691358024691357,
                                height: 7.5,
                                width: 25.972222222222225,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 45,
                                textAlign: 'center',
                                left: 2.38,
                                top: 50.5,
                                height: 7.35,
                                width: 26.2,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 45,
                                textAlign: 'center',
                                left: 36.80555555555556,
                                top: 50.5,
                                height: 7.35,
                                width: 26.2,
                                flag: true,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 45,
                                textAlign: 'center',
                                left: 71.5,
                                top: 50.5,
                                height: 7.35,
                                width: 26.2,
                                flag: true,
                            },
                        ],
                        highlight: [],
                        highlightPb: [],
                    },
                },
                Highlight: {
                    name: 'Highlight',
                    background:
                        'https://istation64.com/racelayout/assets/5h.jpg',
                    positions: {
                        prizePool: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 23.7,
                            top: 84.4,
                            height: 14.320987654320987,
                            width: 9.8,
                        },
                        commentators: {
                            color: '#ffffff',
                            fontSize: 30,
                            textAlign: 'center',
                            left: 73.61111111111111,
                            top: 79.75308641975309,
                            height: 19.012345679012345,
                            width: 25.555555555555554,
                        },
                        places: [
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 47.5,
                                top: 77.28395061728395,
                                height: 4.6,
                                width: 24.9,
                                flag: false,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 47.5,
                                top: 83.5,
                                height: 4.6,
                                width: 24.9,
                                flag: false,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 41,
                                top: 89.5,
                                height: 4.6,
                                width: 24.9,
                                flag: false,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 35,
                                textAlign: 'left',
                                left: 41,
                                top: 95.5,
                                height: 4.6,
                                width: 24.9,
                                flag: false,
                            },
                        ],
                        racers: [
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 59.583333333333336,
                                top: 3.8,
                                height: 5.185185185185185,
                                width: 13.88888888888889,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 83.61111111111111,
                                top: 3.8,
                                height: 5.185185185185185,
                                width: 13.750000000000002,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 59.72222222222222,
                                top: 40.2,
                                height: 5.185185185185185,
                                width: 13.750000000000002,
                            },
                            {
                                color: '#ffffff',
                                fontSize: 30,
                                textAlign: 'center',
                                left: 83.61111111111111,
                                top: 40.2,
                                height: 5.185185185185185,
                                width: 13.750000000000002,
                            },
                        ],
                        highlight: [
                            {
                                color: '#ffffff',
                                fontSize: 26,
                                textAlign: 'center',
                                left: 10.13888888888889,
                                top: 65,
                                height: 11,
                                width: 37.77777777777778,
                                flag: true,
                            },
                        ],
                        highlightPb: [],
                    },
                },
            },
        },
    },
}
