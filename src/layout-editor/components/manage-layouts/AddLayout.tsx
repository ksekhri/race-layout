import React from 'react'

export const AddLayout = ({ cancel }: { cancel: () => void }) => {
    const [name, setName] = React.useState('')
    const [background, setBackground] = React.useState('')
    const [highlighted, setHighlighted] = React.useState(false)
    const disabled = name.length === 0 || background.length === 0

    return (
        <div>
            <h2>Add New Layout</h2>
            <div className="flex">
                <input
                    // TODO: Test
                    disabled
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    // TODO: Test
                    disabled
                    type="text"
                    placeholder="Background Image URL"
                    value={background}
                    onChange={(event) => setBackground(event.target.value)}
                />
            </div>
            <input
                // TODO: Test
                disabled
                type="checkbox"
                id="highlighted"
                className="m-2 p-2 rounded-full shadow"
                checked={highlighted}
                onChange={(event) => setHighlighted(event.target.checked)}
            />
            <label htmlFor="highlighted">Has Highlight</label>
            <div className="btn-row">
                <button
                    className="btn"
                    // TODO: Test
                    disabled={disabled || true}
                    onClick={() => {}}
                >
                    Add Layout
                </button>
                <button className="btn-secondary ml-6" onClick={() => cancel()}>
                    Cancel
                </button>
            </div>
        </div>
    )
}
