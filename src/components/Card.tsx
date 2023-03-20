import React from 'react'

export const Card = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-slate-50 px-6 py-5 my-3 mx-3 grow max-w-2xl">
        {children}
    </div>
)
