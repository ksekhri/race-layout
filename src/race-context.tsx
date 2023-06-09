import * as React from 'react'
import map from 'lodash/map'
import * as Types from './types'
import { DEFAULT_TEXT_LAYOUT } from './constants'
import { DEFAULT_STATE, WEB_VERSION } from './constants'

const LOCAL_STORAGE_DATA_KEY = 'raceLayout'

type Updater = {
    setLayoutLibrary: (layoutLibrary: Types.State['layoutLibrary']) => void
    setPrizePool: (prizePool: Types.State['prizePool']) => void
    setCommentators: (commentators: Types.State['commentators']) => void
    setStartEpoch: (startEpoch: Types.State['startEpoch']) => void
    setRaceLength: (raceLength: Types.State['raceLength']) => void
    setLayoutCollectionId: (
        selectedLayoutCollectionId: Types.State['selectedLayoutCollectionId']
    ) => void
    setActiveLayoutId: (activeLayoutId: Types.State['activeLayoutId']) => void
    setActiveRacer: (racerId: string, index: number) => void
    setHighlightedRacer: (racerId: Types.State['highlightedRacerId']) => void
    addRacer: (racer: Types.Racer) => void
    updateRacer: (racer: Types.Racer) => void
    removeRacer: (racerId: string) => void
    setRacers: (racers: Types.State['racers']) => void
    duplicateLayoutCollection: (name: string) => void
    updateActiveLayout: (
        layout: Partial<Types.Layout>,
        highlighted: boolean,
        placesVisible: number
    ) => void
    updatePosition: (
        data: {
            layoutId?: string
            layoutCollectionId?: string
        } & (
            | {
                  position: Types.TextLayout
                  positionKey: 'prizePool' | 'commentators' | 'timeLeft'
              }
            | {
                  position: Types.TextLayout[]
                  positionKey: 'places' | 'racers' | 'highlight' | 'highlightPb'
              }
        )
    ) => void
    updatePlace: ({
        updatedPlace,
        index,
    }: {
        updatedPlace: number
        index: number
    }) => void
}

const RaceContextState = React.createContext<Types.State | null>(null)
const RaceContextUpdater = React.createContext<Updater | null>(null)

export const useRaceContextState = () => {
    const context = React.useContext(RaceContextState)
    if (context === null) {
        throw new Error('useRaceContextState was used outside of its Provider')
    }
    return context
}

export const useRaceContextUpdater = () => {
    const context = React.useContext(RaceContextUpdater)
    if (context === null) {
        throw new Error(
            'useRaceContextUpdater was used outside of its Provider'
        )
    }
    return context
}

export const useRaceContext = () => {
    const stateContext = React.useContext(RaceContextState)
    const updaterContext = React.useContext(RaceContextUpdater)
    if (updaterContext === null || stateContext === null) {
        throw new Error('useRaceContext was used outside of its Provider')
    }
    return { ...stateContext, ...updaterContext }
}

export const RaceContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [data, setData] = React.useState<Types.State>(() => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY)
        return savedData
            ? {
                  ...DEFAULT_STATE,
                  ...JSON.parse(savedData),
                  //   layoutLibrary: DEFAULT_STATE.layoutLibrary,
                  //   raceLength: 60 * 1000 * 60,
                  localVersion: WEB_VERSION,
              }
            : DEFAULT_STATE
    })

    React.useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_DATA_KEY, JSON.stringify(data))
    }, [data])

    React.useEffect(() => {
        const handleStorageChange = () => {
            const savedData = localStorage.getItem(LOCAL_STORAGE_DATA_KEY)
            setData(savedData ? JSON.parse(savedData) : {})
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    const setLayoutLibrary = (layoutLibrary: Types.State['layoutLibrary']) => {
        setData({ ...data, layoutLibrary })
    }

    const setPrizePool = (prizePool: Types.State['prizePool']) => {
        setData({ ...data, prizePool })
    }

    const setCommentators = (commentators: Types.State['commentators']) => {
        setData({ ...data, commentators })
    }

    const setStartEpoch = (startEpoch: Types.State['startEpoch']) => {
        setData({ ...data, startEpoch })
    }

    const setRaceLength = (raceLength: Types.State['raceLength']) => {
        setData({ ...data, raceLength })
    }

    const setLayoutCollectionId = (
        selectedLayoutCollectionId: Types.State['selectedLayoutCollectionId']
    ) => {
        setData({
            ...data,
            selectedLayoutCollectionId,
            activeLayoutId: '',
            highlightedRacerId: '',
        })
    }

    const setActiveLayoutId = (
        activeLayoutId: Types.State['activeLayoutId']
    ) => {
        setData({ ...data, activeLayoutId })
    }

    const setRacers = (racers: Types.State['racers']) => {
        setData({ ...data, racers })
    }

    const setHighlightedRacer = (
        highlightedRacerId: Types.State['highlightedRacerId']
    ) => {
        setData({ ...data, highlightedRacerId })
    }

    const addRacer = (racer: Types.Racer) => {
        setData({ ...data, racers: { ...data.racers, [racer.name]: racer } })
    }

    const setActiveRacer = (racerId: string, index: number) => {
        const activeRacers = data.activeRacers.map((id) =>
            id === racerId ? '' : id
        )
        activeRacers[index] = racerId
        setData({ ...data, activeRacers })
    }

    const getRacer = (racerId: string) => {
        if (data.racers[racerId]) {
            return data.racers[racerId]
        }
        return { name: '', pb: '', time: '' }
    }

    const getLayout = (layoutId: string) => {
        if (data.selectedLayoutCollection.layouts[layoutId]) {
            return data.selectedLayoutCollection.layouts[layoutId]
        }
        return {
            name: '',
            background: '',
            positions: {
                prizePool: DEFAULT_TEXT_LAYOUT,
                commentators: DEFAULT_TEXT_LAYOUT,
                places: [],
                racers: [],
                highlight: [],
                highlightPb: [],
            },
        }
    }

    const updateRacer = (racer: Types.Racer) => {
        const racers = data.racers
        racers[racer.name] = racer
        setData({ ...data, racers })
    }

    const removeRacer = (racerId: string) => {
        const racers = { ...data.racers }
        delete racers[racerId]
        const activeRacers = data.activeRacers.map((id) =>
            id === racerId ? '' : id
        )
        setData({ ...data, racers, activeRacers })
    }

    const getFirstLayoutCollectionIfExists = () => {
        const collectionArray = map(data.layoutLibrary, (item) => item)
        return collectionArray.length > 0
            ? collectionArray[0]
            : { name: '', racers: 0, layouts: {} }
    }
    const selectedLayoutCollection =
        data.selectedLayoutCollectionId !== ''
            ? data.layoutLibrary[data.selectedLayoutCollectionId]
            : getFirstLayoutCollectionIfExists()
    const getFirstLayoutIfExists = () => {
        const layoutArray = map(
            selectedLayoutCollection.layouts,
            (item) => item
        )
        return layoutArray.length > 0 ? layoutArray[0].name : ''
    }
    const activeLayoutId =
        data.activeLayoutId !== ''
            ? data.activeLayoutId
            : getFirstLayoutIfExists()

    const selectedLayoutCollectionId = selectedLayoutCollection.name

    const getFirstRacerIdIfExists = () => {
        return data.activeRacers.length > 0 ? data.activeRacers[0] : ''
    }
    const highlightedRacerId =
        data.highlightedRacerId !== ''
            ? data.highlightedRacerId
            : getFirstRacerIdIfExists()

    const activeLayout =
        activeLayoutId !== ''
            ? data.layoutLibrary[selectedLayoutCollectionId].layouts[
                  activeLayoutId
              ]
            : {
                  name: '',
                  background: '',
                  positions: {
                      prizePool: DEFAULT_TEXT_LAYOUT,
                      commentators: DEFAULT_TEXT_LAYOUT,
                      places: [],
                      racers: [],
                      highlight: [],
                      highlightPb: [],
                  },
              }

    const duplicateLayoutCollection = (name: string) => {
        setData({
            ...data,
            layoutLibrary: {
                ...data.layoutLibrary,
                [name]: {
                    ...data.layoutLibrary[selectedLayoutCollectionId],
                    name,
                },
            },
        })
    }

    const updateActiveLayout = (
        layout: Partial<Types.Layout>,
        highlighted: boolean,
        placesVisible: number
    ) => {
        const oldPlaces =
            data.layoutLibrary[selectedLayoutCollectionId].layouts[
                activeLayoutId
            ].positions.places
        let newPlaces: Types.TextLayout[] = []
        for (let i = 0; i < placesVisible; i++) {
            newPlaces.push(oldPlaces?.[i] ?? DEFAULT_TEXT_LAYOUT)
        }

        const oldHighlight =
            data.layoutLibrary[selectedLayoutCollectionId].layouts[
                activeLayoutId
            ].positions.highlight
        const wasHighlighted = oldHighlight.length === 1
        let newHighlight: Types.TextLayout[] = oldHighlight
        if (!!highlighted !== wasHighlighted) {
            newHighlight = highlighted ? [DEFAULT_TEXT_LAYOUT] : []
        }

        setData({
            ...data,
            layoutLibrary: {
                ...data.layoutLibrary,
                [selectedLayoutCollectionId]: {
                    ...data.layoutLibrary[selectedLayoutCollectionId],
                    layouts: {
                        ...data.layoutLibrary[selectedLayoutCollectionId]
                            .layouts,
                        [activeLayoutId]: {
                            ...data.layoutLibrary[selectedLayoutCollectionId]
                                .layouts[activeLayoutId],
                            positions: {
                                ...data.layoutLibrary[
                                    selectedLayoutCollectionId
                                ].layouts[activeLayoutId].positions,
                                highlight: newHighlight,
                                places: newPlaces,
                            },
                            ...layout,
                        },
                    },
                },
            },
        })
    }

    const updatePosition = ({
        position,
        layoutCollectionId = selectedLayoutCollectionId,
        layoutId = activeLayoutId,
        positionKey,
    }: {
        layoutId?: string
        layoutCollectionId?: string
    } & (
        | {
              position: Types.TextLayout
              positionKey: 'prizePool' | 'commentators'
          }
        | {
              position: Types.TextLayout[]
              positionKey: 'places' | 'racers' | 'highlight' | 'highlightPb'
          }
    )) => {
        setData({
            ...data,
            layoutLibrary: {
                ...data.layoutLibrary,
                [layoutCollectionId]: {
                    ...data.layoutLibrary[layoutCollectionId],
                    layouts: {
                        ...data.layoutLibrary[layoutCollectionId].layouts,
                        [layoutId]: {
                            ...data.layoutLibrary[layoutCollectionId].layouts[
                                layoutId
                            ],
                            positions: {
                                ...data.layoutLibrary[layoutCollectionId]
                                    .layouts[layoutId].positions,
                                [positionKey]: position,
                            },
                        },
                    },
                },
            },
        })
    }

    const updatePlace = ({
        updatedPlace,
        index,
    }: {
        updatedPlace: number
        index: number
    }) => {
        const updatedPlaces = [...data.places].map((currPlace) =>
            currPlace !== updatedPlace ? currPlace : 0
        )
        updatedPlaces[index] = updatedPlace
        setData({ ...data, places: updatedPlaces })
    }

    return (
        <RaceContextState.Provider
            value={{
                ...data,
                getRacer,
                selectedLayoutCollection,
                selectedLayoutCollectionId,
                getLayout,
                activeLayoutId,
                activeLayout,
                highlightedRacerId,
            }}
        >
            <RaceContextUpdater.Provider
                value={{
                    setLayoutLibrary,
                    setPrizePool,
                    setCommentators,
                    setStartEpoch,
                    setRaceLength,
                    setLayoutCollectionId,
                    setActiveLayoutId,
                    setActiveRacer,
                    setHighlightedRacer,
                    addRacer,
                    setRacers,
                    updateRacer,
                    removeRacer,
                    duplicateLayoutCollection,
                    updateActiveLayout,
                    updatePosition,
                    updatePlace,
                }}
            >
                {children}
            </RaceContextUpdater.Provider>
        </RaceContextState.Provider>
    )
}
