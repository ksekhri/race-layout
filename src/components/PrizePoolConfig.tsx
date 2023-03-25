import React from 'react'
import { useRaceContext } from '../race-context'
import { FloatInput } from './FloatInput'

export const PrizePoolConfig = () => {
    const [additionToPool, setAdditionToPool] = React.useState('')
    const [updatePool, setUpdatePool] = React.useState('')
    const { prizePool, setPrizePool } = useRaceContext()
    return (
        <div>
            <h2>Prize</h2>
            <h3>Current Prize Pool is ${prizePool.toFixed(2)}</h3>
            <h3>Set Prize Pool</h3>
            <FloatInput
                name="prize-pool"
                placeholder="Prize Pool"
                value={updatePool}
                onChange={(event) => setUpdatePool(event.target.value)}
            />
            <button
                className="btn ml-2"
                disabled={isNaN(Number(updatePool))}
                onClick={() => {
                    setPrizePool(Number(updatePool))
                    setUpdatePool('')
                }}
            >
                Set Amount
            </button>
            <h3>Add to prize pool</h3>
            <FloatInput
                name="prize-pool"
                placeholder="Prize Pool"
                value={additionToPool}
                onChange={(event) => {
                    setAdditionToPool(event.target.value)
                }}
            />
            <button
                className="btn ml-2"
                disabled={isNaN(Number(additionToPool))}
                onClick={() => {
                    setPrizePool(prizePool + Number(additionToPool))
                    setAdditionToPool('')
                }}
            >
                Add Amount
            </button>
        </div>
    )
}
