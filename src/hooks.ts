import React from 'react'
import { OffsetSize } from './types'

export const useOffsetSize = (
    ref: React.RefObject<HTMLElement>
): OffsetSize => {
    const [offsetSize, setOffsetSize] = React.useState({
        width: 0,
        height: 0,
    })

    React.useEffect(() => {
        const onResize = () => {
            setOffsetSize({
                width: ref.current?.offsetWidth ?? 0,
                height: ref.current?.offsetHeight ?? 0,
            })
        }
        onResize()
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [ref])

    return offsetSize
}
