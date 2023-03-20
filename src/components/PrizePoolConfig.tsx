import React from 'react'
import { useRaceContext } from '../race-context'

const floatValidator = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/

export const PrizePoolConfig = () => {
    const [additionToPool, setAdditionToPool] = React.useState('')
    const [updatePool, setUpdatePool] = React.useState('')
    const { prizePool, setPrizePool } = useRaceContext()
    return (
        <div>
            <h2>Prize</h2>
            <h3>Current Prize Pool is ${prizePool.toFixed(2)}</h3>
            <h3>Set Prize Pool</h3>
            <input
                type="text"
                name="prize-pool"
                placeholder="Prize Pool"
                id=""
                value={updatePool}
                onChange={(event) => {
                    const newVal =
                        event.target.value === '.' ? '0.' : event.target.value
                    if (newVal === '' || floatValidator.test(newVal)) {
                        setUpdatePool(newVal)
                    }
                }}
            />
            <button
                className="btn"
                onClick={() => {
                    setPrizePool(Number(updatePool))
                    setUpdatePool('')
                }}
            >
                Set Amount
            </button>
            <h3>Add to prize pool</h3>
            <input
                type="text"
                name="prize-pool"
                placeholder="Prize Pool"
                id=""
                value={additionToPool}
                onChange={(event) => {
                    const newVal =
                        event.target.value === '.' ? '0.' : event.target.value
                    if (newVal === '' || floatValidator.test(newVal)) {
                        setAdditionToPool(newVal)
                    }
                }}
            />
            <button
                className="btn"
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
