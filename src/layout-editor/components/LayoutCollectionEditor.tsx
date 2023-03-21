import React from 'react'
import { LayoutCollectionSelector } from '../../components/LayoutCollectionSelector'

export const LayoutCollectionEditor = ({
    onAddCollection,
}: {
    onAddCollection: () => void
}) => {
    return (
        <div>
            <h2>Layout Collection</h2>
            <LayoutCollectionSelector />

            <div className="btn-row">
                <button
                    disabled
                    className="btn"
                    onClick={() => onAddCollection()}
                >
                    Add New Collection...
                </button>
            </div>
        </div>
    )
}
