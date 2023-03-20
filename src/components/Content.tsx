import React from 'react'
import { Card } from './Card'
import { LayoutConfig } from './LayoutConfig'
import { RacerConfig } from './RacerConfig'
import { PrizePoolConfig } from './PrizePoolConfig'
import { CommentatorsConfig } from './CommentatorsConfig'
import { LayoutWindow } from '../layout/Layout'

export const Content = () => (
    <section>
        <Card>
            <LayoutConfig />
        </Card>
        <Card>
            <PrizePoolConfig />
        </Card>
        <Card>
            <CommentatorsConfig />
        </Card>
        <Card>
            <RacerConfig />
        </Card>
        <Card>
            <h1>Preview</h1>
            <LayoutWindow />
        </Card>
    </section>
)
