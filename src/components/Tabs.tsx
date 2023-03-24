import React from 'react'
import cn from 'classnames'
// import { useRaceContext } from '../../race-context'

export const Tabs = ({
    tabList,
    handleUpdate,
    activeIndex,
    className,
}: {
    tabList: { name: string; onClick?: () => void }[]
    handleUpdate: (index: number) => void
    activeIndex: number
    className?: string
}) => {
    // const {  } = useRaceContext()

    // const [name, setName] = React.useState('')
    // const [background, setBackground] = React.useState('')
    // const [highlighted, setHighlighted] = React.useState(false)
    // const disabled = name.length === 0 || background.length === 0

    return (
        <div className={cn('flex justify-center', className)}>
            <div className="inline-flex">
                {tabList.map(({ name }, index) => (
                    <div
                        key={index}
                        className={cn(
                            'p-2 mx-5 select-none underline underline-offset-8 decoration-2',
                            {
                                'text-sky-600 cursor-pointer ':
                                    activeIndex !== index,
                                'cursor-default': activeIndex === index,
                            }
                        )}
                        onClick={() => {
                            handleUpdate(index)
                        }}
                    >
                        {name}
                    </div>
                ))}
            </div>
        </div>
    )
}
