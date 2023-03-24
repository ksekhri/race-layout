import React from 'react'
import { useRaceContextUpdater } from '../race-context'

export const AddNewRacer = ({ className }: { className?: string }) => {
    const { addRacer } = useRaceContextUpdater()
    const [name, setName] = React.useState('')
    const [pb, setPb] = React.useState('')

    const disabled = name === ''

    return (
        <div className={className}>
            <h3>Add New Racer</h3>
            <div className="flex">
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
                    disabled={disabled}
                    className="btn"
                    onClick={() => {
                        addRacer({ name, pb, time: '' })
                        setName('')
                        setPb('')
                    }}
                >
                    Add
                </button>
            </div>
        </div>
    )
}
