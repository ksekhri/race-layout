import React from 'react'

const positiveInteger = /^\d+$/

export const AddLayoutCollection = ({
    cancelAdding,
}: {
    cancelAdding: () => void
}) => {
    const [collectionName, setCollectionName] = React.useState('')
    const [layoutName, setLayoutName] = React.useState('')
    const [racers, setRacers] = React.useState('')
    const [background, setBackground] = React.useState('')
    const disabled =
        !positiveInteger.test(racers) ||
        collectionName.length === 0 ||
        layoutName === '' ||
        background === ''

    return (
        <div>
            <h2>Add New Layout Collection</h2>
            <h3>Layout Collection Info</h3>
            <input
                type="text"
                placeholder="Layout Collection Name"
                value={collectionName}
                onChange={(event) => {
                    setCollectionName(event.target.value)
                }}
            />
            <input
                type="text"
                placeholder="Number of Racers"
                value={racers}
                onChange={(event) => {
                    const val = event.target.value
                    if (val === '' || positiveInteger.test(val)) {
                        setRacers(val)
                    }
                }}
            />
            <h3>Add First Layout Info</h3>
            <input
                type="text"
                placeholder="Layout Name"
                value={layoutName}
                onChange={(event) => {
                    setLayoutName(event.target.value)
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
            <div className="mt-4">
                <button
                    className="btn"
                    // TODO: Test
                    disabled={disabled || true}
                >
                    Add Collection
                </button>
                <button
                    className="btn-secondary ml-6"
                    onClick={() => cancelAdding()}
                >
                    Cancel
                </button>
            </div>
        </div>
    )
}
