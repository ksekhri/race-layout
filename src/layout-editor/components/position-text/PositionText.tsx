import React from 'react'
import cn from 'classnames'
import { Card } from '../../../components/Card'
import { PositionsEditor } from '../PositionsEditor'
import { LayoutCollectionSelector } from '../../../components/LayoutCollectionSelector'
import { LayoutItemRadio } from '../../../components/LayoutItemRadio'

export const PositionText = ({ className }: { className?: string }) => (
    <div className={cn('mt-3 -mx-2', className)}>
        <div className="flex justify-stretch">
            <Card>
                <h2>Layout Collection</h2>
                <LayoutCollectionSelector />
            </Card>
            <Card>
                <h2>Layout Item</h2>
                <LayoutItemRadio />
            </Card>
        </div>
        <PositionsEditor />
    </div>
)
