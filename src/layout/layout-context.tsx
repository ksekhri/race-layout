import * as React from 'react'
import * as Types from '../types'

type State = {
    containerOffsetSize: Types.OffsetSize
}

const LayoutContext = React.createContext<State | null>(null)

export const useLayoutContext = () => {
    const context = React.useContext(LayoutContext)
    if (context === null) {
        throw new Error('useLayoutContext was used outside of its Provider')
    }
    return context
}

export const LayoutContextProvider = ({
    children,
    containerOffsetSize,
}: {
    children: React.ReactNode
    containerOffsetSize: Types.OffsetSize
}) => {
    return (
        <LayoutContext.Provider value={{ containerOffsetSize }}>
            {children}
        </LayoutContext.Provider>
    )
}
