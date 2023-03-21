import React from 'react'
import { Card } from '../../components/Card'
import { LayoutCollectionEditor } from './LayoutCollectionEditor'
import { LayoutItemEditor } from './LayoutItemEditor'
import { AddLayoutCollection } from './AddLayoutCollection'
import { AddLayout } from './AddLayout'
import { PositionsEditor } from './PositionsEditor'

export const Content = () => {
    const [isAddingCollection, setIsAddingCollection] = React.useState(false)
    const [isAddingLayout, setIsAddingLayout] = React.useState(false)
    return (
        <section className="max-w-screen-xl mx-auto">
            <div className="mt-3 -mx-2">
                <div className="flex justify-stretch">
                    {!isAddingCollection && (
                        <>
                            <Card>
                                <LayoutCollectionEditor
                                    onAddCollection={() =>
                                        setIsAddingCollection(true)
                                    }
                                />
                            </Card>
                            <Card>
                                {!isAddingLayout && (
                                    <LayoutItemEditor
                                        onAddLayout={() =>
                                            setIsAddingLayout(true)
                                        }
                                    />
                                )}
                                {isAddingLayout && (
                                    <AddLayout
                                        cancelAdding={() =>
                                            setIsAddingLayout(false)
                                        }
                                    />
                                )}
                            </Card>
                        </>
                    )}
                    {isAddingCollection && (
                        <Card className="w-full">
                            <AddLayoutCollection
                                cancelAdding={() =>
                                    setIsAddingCollection(false)
                                }
                            />
                        </Card>
                    )}
                </div>
                {!isAddingCollection && !isAddingLayout && <PositionsEditor />}
            </div>
        </section>
    )
}
