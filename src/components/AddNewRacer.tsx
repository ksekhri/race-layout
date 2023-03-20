import React from 'react'
import { useRaceContextUpdater } from '../context'

export const AddNewRacer = () => {
    const { addRacer } = useRaceContextUpdater()
    const [name, setName] = React.useState('')
    const [pb, setPb] = React.useState('')

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
                type="text"
                value={pb}
                placeholder="pb"
                onChange={(event) => setPb(event.target.value)}
            />
            <button
                onClick={() => {
                    addRacer({ name, pb, time: '' })
                    setName('')
                    setPb('')
                }}
            >
                Add new racer
            </button>
        </div>
    )
}
