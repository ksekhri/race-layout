import React from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

export const Header = ({ page }: { page: 'dashboard' | 'layout-editor' }) => (
    <header className="text-xl select-none bg-slate-50 shadow-md font-medium">
        <div className="flex justify-between h-24 items-center max-w-screen-xl mx-auto">
            <a className="text-3xl font-semibold" href="/">
                <div>👟 RaceLayout</div>
            </a>
            <div className="flex">
                <a href="/" className="py-2 px-6">
                    <div>Dashboard</div>
                </a>
                <a href="/" className="py-2 px-6">
                    <div>Layout Editor</div>
                </a>
                <a
                    className="flex py-2 px-6"
                    href="/layout"
                    target="_blank"
                    rel="noopener"
                >
                    Open Layout <ArrowTopRightOnSquareIcon width={18} />
                </a>
            </div>
        </div>
    </header>
)
