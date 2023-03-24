import React from 'react'
import cn from 'classnames'
import { Card } from '../../../components/Card'
import { LayoutCollectionEditor } from './LayoutCollectionEditor'
import { LayoutItemEditor } from './LayoutItemEditor'
import { AddLayoutCollection } from './AddLayoutCollection'
import { DuplicateLayoutCollection } from './DuplicateLayoutCollection'
import { LayoutWindow } from '../../../layout/Layout'

export const ManageLayouts = ({ className }: { className?: string }) => {
    const [isAddingCollection, setIsAddingCollection] = React.useState(false)
    return (
        <section className={cn('max-w-screen-xl mx-auto', className)}>
            <div className="mt-3 -mx-2">
                {!isAddingCollection && (
                    <>
                        <div className="flex justify-stretch">
                            <Card>
                                <LayoutCollectionEditor
                                    onAddCollection={() =>
                                        setIsAddingCollection(true)
                                    }
                                />
                            </Card>
                            <Card>
                                <LayoutItemEditor />
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <LayoutWindow />
                            </Card>
                        </div>
                    </>
                )}
                {isAddingCollection && (
                    <div className="flex">
                        <Card>
                            <AddLayoutCollection
                                cancelAdding={() =>
                                    setIsAddingCollection(false)
                                }
                            />
                        </Card>
                        <Card>
                            <DuplicateLayoutCollection
                                cancelAdding={() =>
                                    setIsAddingCollection(false)
                                }
                            />
                        </Card>
                    </div>
                )}
            </div>
        </section>
    )
}
