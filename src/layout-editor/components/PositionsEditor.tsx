import React from 'react'
import { useRaceContextState } from '../../race-context'
import * as Types from '../../types'
import { LAYOUTS } from '../../layouts'
import { PositionSetter } from './PositionSetter'
import { Card } from '../../components/Card'
import { ImageMeasure } from '../ImageMeasure'
import { LayoutWindow } from '../../layout/Layout'

const setter = (val: Partial<Types.TextLayout>) => {}

export const PositionsEditor = () => {
    const { selectedLayoutCollectionId, activeLayoutId } = useRaceContextState()
    const [positionNumber, setPositionNumber] = React.useState('')

    const { prizePool, commentators, places, racers, highlight } =
        LAYOUTS[selectedLayoutCollectionId].layouts[activeLayoutId].positions

    const positionList = [
        { name: 'Prize Pool', value: prizePool, setter },
        { name: 'Commentators', value: commentators, setter },
        ...places.map((place, index) => ({
            name: `Place ${index + 1}`,
            value: place,
            setter,
        })),
        ...racers.map((racer, index) => ({
            name: `Racer ${index + 1}`,
            value: racer,
            setter,
        })),
        ...highlight.map((highlightedItem, index) => ({
            name: `Highlight ${index + 1}`,
            value: highlightedItem,
            setter,
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
                {positionNumber !== '' && (
                    <PositionSetter
                        name={selectedItem.name}
                        value={selectedItem.value}
                        setter={selectedItem.setter}
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
                            imageUrl="https://istation64.com/racelayout/assets/4h.png"
                            onMeasure={(measurements) =>
                                console.log(measurements)
                            }
                        />
                    </>
                )}
            </Card>
        </div>
    )
}
