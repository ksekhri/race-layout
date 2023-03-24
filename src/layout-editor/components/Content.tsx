import React from 'react'
import { Tabs } from './Tabs'
import { ManageLayouts } from './manage-layouts/ManageLayouts'
import { PositionText } from './position-text/PositionText'

export const Content = () => {
    const [isAddingCollection, setIsAddingCollection] = React.useState(false)
    const [isAddingLayout, setIsAddingLayout] = React.useState(false)
    const [activeIndex, setActiveIndex] = React.useState(0)
    return (
        <section className="max-w-screen-xl mx-auto">
            <div className="mt-3">
                <Tabs
                    handleUpdate={setActiveIndex}
                    activeIndex={activeIndex}
                    tabList={[
                        { name: 'Position Text' },
                        { name: 'Manage Layouts' },
                    ]}
                />
                {activeIndex === 0 && <PositionText className="-mx-2" />}
                {activeIndex === 1 && <ManageLayouts className="-mx-2" />}
            </div>
        </section>
    )
}
