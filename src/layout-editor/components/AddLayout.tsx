import React from 'react'

export const AddLayout = ({ cancelAdding }: { cancelAdding: () => void }) => {
    const [name, setName] = React.useState('')
    const [background, setBackground] = React.useState('')
    const [highlighted, setHighlighted] = React.useState(false)
    const disabled = name.length === 0 || background.length === 0

    return (
        <div>
            <h2>Add New Layout</h2>
            <input
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
            <input
                type="checkbox"
                id="highlighted"
                className="m-2 p-2 rounded-full shadow"
                checked={highlighted}
                onChange={(event) => {
                    setHighlighted(event.target.checked)
                }}
            />
            <label htmlFor="highlighted">Has Highlight</label>
            <div className="btn-row">
                <button className="btn" disabled={disabled}>
                    Add Layout
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
