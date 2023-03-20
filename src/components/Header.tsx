import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

export const Header = () => (
    <header>
        <div>👟 RaceLayout</div>
        <div>Dashboard</div>
        <a href="/layout" target="_blank" rel="noopener">
            Open Layout <ArrowTopRightOnSquareIcon width={18} />
        </a>
    </header>
)
