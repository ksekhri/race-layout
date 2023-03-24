import React from 'react'
import { useRaceContext } from '../race-context'
import { AddNewRacer } from './AddNewRacer'
import { ActiveRacer } from './ActiveRacer'
import { RemoveRacer } from './RemoveRacer'
import { Tabs } from '../layout-editor/components/Tabs'
import { UpdateRacers } from './UpdateRacers'

export const RacerConfig = () => {
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
            {activeIndex === 0 && <UpdateRacers />}
            {activeIndex === 1 && (
                <>
                    <AddNewRacer />
                    <RemoveRacer className="mt-6" />
                </>
            )}
        </div>
    )
}
