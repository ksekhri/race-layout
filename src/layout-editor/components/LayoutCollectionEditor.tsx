import React from 'react'
import { useRaceContext } from '../../race-context'
import * as Types from '../../types'
import { LayoutCollectionSelector } from '../../components/LayoutCollectionSelector'
import { DownloadObject } from './DownloadObject'
import UploadObject from './UploadObject'

export const LayoutCollectionEditor = ({
    onAddCollection,
}: {
    onAddCollection: () => void
}) => {
    const { layoutLibrary, setLayoutLibrary } = useRaceContext()
    return (
        <div>
            <h2>Layout Collection</h2>
            <LayoutCollectionSelector />

            <div className="btn-row flex">
                <button
                    disabled
                    className="btn"
                    onClick={() => onAddCollection()}
                >
                    Add New Collection...
                </button>
                <DownloadObject
                    className="btn ml-4"
                    obj={layoutLibrary}
                    fileDescription={'Backup'}
                />
                <UploadObject
                    onObjectLoad={(newLibrary: Types.LayoutLibrary) => {
                        setLayoutLibrary(newLibrary)
                    }}
                    className="btn inline-block !py-2 ml-4"
                    title="Restore From Backup..."
                />
            </div>
        </div>
    )
}
