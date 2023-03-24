import React from 'react'
import { useRaceContext } from '../../../race-context'
import * as Types from '../../../types'
import { PositionSetter } from './PositionSetter'
import { Card } from '../../../components/Card'
import { ImageMeasure, Rectangle } from './ImageMeasure'
import { LayoutWindow } from '../../../layout/Layout'

export const PositionsEditor = () => {
    const {
        selectedLayoutCollectionId,
        activeLayoutId,
        layoutLibrary,
        activeLayout,
        updatePosition,
    } = useRaceContext()
    const [positionNumber, setPositionNumber] = React.useState('')

    const { prizePool, commentators, places, racers, highlight, highlightPb } =
        layoutLibrary[selectedLayoutCollectionId].layouts[activeLayoutId]
            .positions
    const [rect, setRect] = React.useState<Rectangle | null>(null)

    const positionList = [
        {
            name: 'Prize Pool',
            value: prizePool,
            setter: (position: Types.TextLayout) =>
                updatePosition({
                    position,
                    positionKey: 'prizePool',
                }),
        },
        {
            name: 'Commentators',
            value: commentators,
            setter: (position: Types.TextLayout) =>
                updatePosition({
                    position,
                    positionKey: 'commentators',
                }),
        },
        ...places.map((place, index) => ({
            name: `Place ${index + 1}`,
            value: place,
            setter: (newPlace: Types.TextLayout) => {
                const position = [...activeLayout.positions.places]
                position[index] = newPlace
                updatePosition({
                    position,
                    positionKey: 'places',
                })
            },
        })),
        ...racers.map((racer, index) => ({
            name: `Racer ${index + 1}`,
            value: racer,
            setter: (newRacer: Types.TextLayout) => {
                const position = [...activeLayout.positions.racers]
                position[index] = newRacer
                updatePosition({
                    position,
                    positionKey: 'racers',
                })
            },
        })),
        ...highlight.map((highlightedItem, index) => ({
            name: `Highlight ${index + 1}`,
            value: highlightedItem,
            setter: (position: Types.TextLayout) =>
                updatePosition({
                    position: [position],
                    positionKey: 'highlight',
                }),
        })),
        ...highlightPb.map((highlightedItem, index) => ({
            name: `Highlight PB ${index + 1}`,
            value: highlightedItem,
            setter: (position: Types.TextLayout) =>
                updatePosition({
                    position: [position],
                    positionKey: 'highlightPb',
                }),
        })),
    ]

    const selectedItem = positionList[parseInt(positionNumber)]
    const isEditing = positionNumber !== ''

    return (
        <div className="flex">
            <Card>
                <h2>Positioning</h2>
                <select
                    name="position"
                    id="position"
                    value={positionNumber}
                    onChange={(event) => {
                        setPositionNumber(event.target.value)
                    }}
                >
                    <option value={''}>Select Item To Place</option>
                    {positionList.map(({ name }, index) => (
                        <option key={index} value={index}>
                            {name}
                        </option>
                    ))}
                </select>
                {/* Check selectedItem to handle case where user is editing highlight and switches to highlight free layout */}
                {selectedItem && positionNumber !== '' && (
                    <PositionSetter
                        name={selectedItem.name}
                        value={selectedItem.value}
                        setter={selectedItem.setter}
                        rect={rect}
                        setRect={setRect}
                        cancel={() => setPositionNumber('')}
                    />
                )}
            </Card>
            <Card className="max-w-3xl">
                {!isEditing && (
                    <>
                        <h2>Preview</h2>
                        <LayoutWindow />
                    </>
                )}
                {isEditing && (
                    <>
                        <h2>Place Item</h2>
                        <ImageMeasure
                            imageUrl={activeLayout.background}
                            rect={rect}
                            setRect={setRect}
                        />
                    </>
                )}
            </Card>
        </div>
    )
}
