import React from 'react'
import { Card } from './Card'
import { LayoutConfig } from './LayoutConfig'
import { RacerConfig } from './RacerConfig'
import { PrizePoolConfig } from './PrizePoolConfig'
import { CommentatorsConfig } from './CommentatorsConfig'
import { LayoutWindow } from '../layout/Layout'
import { TimerConfig } from './TimerConfig'

export const Content = () => (
    <section className="max-w-screen-2xl mx-auto">
        <div className="mt-3 -mx-2">
            <div className="flex justify-stretch">
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
                    <TimerConfig />
                </Card>
            </div>
            <div className="flex">
                <Card>
                    <RacerConfig />
                </Card>
                <Card>
                    <h2>Preview</h2>
                    <LayoutWindow />
                </Card>
            </div>
        </div>
    </section>
)
