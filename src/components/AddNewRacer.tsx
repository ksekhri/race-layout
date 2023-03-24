import React from 'react'
import { useRaceContextUpdater } from '../race-context'

export const AddNewRacer = () => {
    const { addRacer } = useRaceContextUpdater()
    const [name, setName] = React.useState('')
    const [pb, setPb] = React.useState('')

    const disabled = name === ''

    return (
        <div>
            <h3>Add New Racer</h3>
            <input
                type="text"
                value={name}
                placeholder="name"
                onChange={(event) => setName(event.target.value)}
            />
            <input
                disabled
                type="text"
                value={pb}
                placeholder="pb"
                onChange={(event) => setPb(event.target.value)}
            />
            <button
                disabled={disabled}
                className="btn"
                onClick={() => {
                    addRacer({ name, pb, time: '' })
                    setName('')
                    setPb('')
                }}
            >
                Add New Racer
            </button>
        </div>
    )
}
