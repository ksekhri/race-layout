import React from 'react'
import { useRaceContext } from '../race-context'
import { AddNewRacer } from './AddNewRacer'
import { RemoveRacer } from './RemoveRacer'
import { Tabs } from './Tabs'
import { UpdateRacers } from './UpdateRacers'

export const RacerConfig = () => {
    const { racers } = useRaceContext()
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <div>
            <h2>Racers</h2>
            <Tabs
                tabList={[{ name: 'View Racers' }, { name: 'Edit Racers' }]}
                activeIndex={activeIndex}
                handleUpdate={setActiveIndex}
                className="mb-6"
            />
            {activeIndex === 0 && (
                <>
                    <UpdateRacers />
                    {Object.keys(racers).length === 0 && (
                        <div className="mt-6">
                            Add racers by clicking the "Edit Racers" tab above
                        </div>
                    )}
                </>
            )}
            {activeIndex === 1 && (
                <>
                    <AddNewRacer />
                    <RemoveRacer className="mt-6" />
                </>
            )}
        </div>
    )
}
