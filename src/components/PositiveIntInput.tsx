import React from 'react'

export const intValidator = /^\d*$/
export const positiveIntValidator = /^[1-9]\d*$/

export const PositiveIntInput = (
    props: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >
) => {
    return (
        <input
            {...props}
            type="text"
            onChange={(event) => {
                const newVal = event.target.value
                console.log(newVal, newVal === '')
                if (newVal === '' || positiveIntValidator.test(newVal)) {
                    props?.onChange?.(event)
                }
            }}
        />
    )
}
