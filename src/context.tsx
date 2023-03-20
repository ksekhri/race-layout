import * as React from 'react'
import map from 'lodash/map'
import * as Types from './types'
import { DEFAULT_STATE } from './constants'
import { LAYOUTS } from './layouts'

const LOCAL_STORAGE_DATA_KEY = 'raceLayout'

type Updater = {
    setPrizePool: (prizePool: Types.State['prizePool']) => void
    setCommentators: (commentators: Types.State['commentators']) => void
    setLayout: (layout: Types.State['layout']) => void
    setActiveLayout: (activeLayout: Types.State['activeLayout']) => void
    setActiveRacer: (racerId: string, index: number) => void
    setHighlightedRacer: (racerId: Types.State['highlightedRacerId']) => void
    addRacer: (racer: Types.Racer) => void
    updateRacer: (racer: Types.Racer) => void
    removeRacer: (racerId: string) => void
    setRacers: (racers: Types.State['racers']) => void
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
        return savedData ? JSON.parse(savedData) : DEFAULT_STATE
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

    const setPrizePool = (prizePool: Types.State['prizePool']) => {
        setData({ ...data, prizePool })
    }

    const setCommentators = (commentators: Types.State['commentators']) => {
        setData({ ...data, commentators })
    }

    const setLayout = (layout: Types.State['layout']) => {
        setData({ ...data, layout, activeLayout: '' })
    }

    const setActiveLayout = (activeLayout: Types.State['activeLayout']) => {
        setData({ ...data, activeLayout })
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
        const activeRacers = [...data.activeRacers]
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
        if (data.layoutData.layouts[layoutId]) {
            return data.layoutData.layouts[layoutId]
        }
        return {
            name: '',
            background: '',
            positions: {
                prizePool: {
                    x: 0,
                    y: 0,
                    size: 0,
                },
                commentators: {
                    x: 0,
                    y: 0,
                    size: 0,
                },
                places: [],
                racers: [],
                highlight: [],
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
        const collectionArray = map(LAYOUTS, (item) => item)
        return collectionArray.length > 0
            ? collectionArray[0]
            : { name: '', racers: 0, layouts: {} }
    }
    const layoutData =
        data.layout !== ''
            ? LAYOUTS[data.layout]
            : getFirstLayoutCollectionIfExists()
    const getFirstLayoutIfExists = () => {
        const layoutArray = map(layoutData.layouts, (item) => item)
        return layoutArray.length > 0 ? layoutArray[0].name : ''
    }
    const activeLayout =
        data.activeLayout !== '' ? data.activeLayout : getFirstLayoutIfExists()

    const getFirstRacerIdIfExists = () => {
        return data.activeRacers.length > 0 ? data.activeRacers[0] : ''
    }
    const highlightedRacerId =
        data.highlightedRacerId !== ''
            ? data.highlightedRacerId
            : getFirstRacerIdIfExists()

    return (
        <RaceContextState.Provider
            value={{
                ...data,
                getRacer,
                layoutData,
                getLayout,
                activeLayout,
                highlightedRacerId,
            }}
        >
            <RaceContextUpdater.Provider
                value={{
                    setPrizePool,
                    setCommentators,
                    setLayout,
                    setActiveLayout,
                    setActiveRacer,
                    setHighlightedRacer,
                    addRacer,
                    setRacers,
                    updateRacer,
                    removeRacer,
                }}
            >
                {children}
            </RaceContextUpdater.Provider>
        </RaceContextState.Provider>
    )
}