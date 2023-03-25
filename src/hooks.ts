import React from 'react'
import { useRaceContextState } from './race-context'
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

const DEFAULT_TIME_LEFT = '00:00'

export const getTimeStringFromMS = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    const timeString = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    return timeString
}

export const useTimeLeft = () => {
    const { startEpoch, raceLength } = useRaceContextState()
    const [timeLeft, setTimeLeft] = React.useState('')
    React.useEffect(() => {
        const getTimeStringFromMS = (milliseconds: number) => {
            const totalSeconds = Math.floor(milliseconds / 1000)
            const hours = Math.floor(totalSeconds / 3600)
            const minutes = Math.floor((totalSeconds % 3600) / 60)
            const seconds = totalSeconds % 60

            const timeString = `${
                hours > 0 ? `${hours.toString()}:` : ''
            }${minutes.toString().padStart(2, '0')}:${seconds
                .toString()
                .padStart(2, '0')}`
            return timeString
        }
        const interval = setInterval(() => {
            const endEpoch = raceLength + startEpoch
            const currentEpoch = new Date().getTime()
            const timeLeftEpoch = endEpoch - currentEpoch
            if (raceLength === 0 || timeLeftEpoch < 0) {
                setTimeLeft(DEFAULT_TIME_LEFT)
            } else if (startEpoch === 0) {
                setTimeLeft(getTimeStringFromMS(raceLength))
            } else {
                setTimeLeft(getTimeStringFromMS(timeLeftEpoch))
            }
        }, 200)
        return () => {
            clearInterval(interval)
        }
    }, [startEpoch, raceLength])
    return timeLeft
}
