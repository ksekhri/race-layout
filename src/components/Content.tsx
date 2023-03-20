import React from 'react'
import { Card } from './Card'
import { LayoutConfig } from './LayoutConfig'
import { RacerConfig } from './RacerConfig'
import { PrizePoolConfig } from './PrizePoolConfig'
import { CommentatorsConfig } from './CommentatorsConfig'

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
    </section>
)
