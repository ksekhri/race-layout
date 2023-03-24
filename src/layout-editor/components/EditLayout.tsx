import React from 'react'
import { useRaceContext } from '../../race-context'

export const EditLayout = ({ cancel }: { cancel: () => void }) => {
    const { activeLayout, updateActiveLayout, selectedLayoutCollection } =
        useRaceContext()

    const [name, setName] = React.useState(activeLayout.name)
    const [background, setBackground] = React.useState(activeLayout.background)
    const [highlighted, setHighlighted] = React.useState(
        activeLayout.positions.highlight.length !== 0
    )
    const [placesVisible, setPlacesVisible] = React.useState(
        activeLayout.positions.places.length
    )

    const disabled =
        name === activeLayout.name &&
        background === activeLayout.background &&
        highlighted === (activeLayout.positions.highlight.length !== 0) &&
        placesVisible === activeLayout.positions.places.length

    return (
        <div>
            <h2>Edit Layout: {activeLayout.name}</h2>
            <div className="flex">
                <input
                    // TODO: Fix crasher
                    disabled
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="Background Image URL"
                    value={background}
                    onChange={(event) => {
                        setBackground(event.target.value)
                    }}
                />
            </div>
            <input
                // TODO: Test
                disabled
                type="checkbox"
                id="highlighted"
                className="m-2 p-2 rounded-full shadow"
                checked={highlighted}
                onChange={(event) => {
                    setHighlighted(event.target.checked)
                }}
            />
            <label htmlFor="highlighted">Has Highlight</label>
            <div>
                Number of places visible
                <select
                    value={placesVisible}
                    className="ml-2"
                    onChange={(event) =>
                        setPlacesVisible(parseInt(event.target.value))
                    }
                >
                    {Array(selectedLayoutCollection.racers + 1)
                        .fill(null)
                        .map((_, index) => (
                            <option key={index} value={index}>
                                {index}
                            </option>
                        ))}
                </select>
            </div>
            <div className="btn-row">
                <button
                    className="btn"
                    disabled={disabled}
                    onClick={() => {
                        updateActiveLayout(
                            { name, background },
                            highlighted,
                            placesVisible
                        )
                        cancel()
                    }}
                >
                    Update Layout
                </button>
                <button className="btn-secondary ml-6" onClick={() => cancel()}>
                    Cancel
                </button>
            </div>
        </div>
    )
}
