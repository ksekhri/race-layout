import React from 'react'

export const Card = ({
    children,
    className = '',
}: {
    children: React.ReactNode
    className?: string
}) => (
    <div className={`bg-slate-50 px-6 py-5 my-3 mx-3 grow ${className}`}>
        {children}
    </div>
)
