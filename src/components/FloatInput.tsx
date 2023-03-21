import React from 'react'

export const floatValidator = /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/

export const FloatInput = (
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
                const newVal =
                    event.target.value === '.' ? '0.' : event.target.value
                if (newVal === '' || floatValidator.test(newVal)) {
                    props?.onChange?.(event)
                }
            }}
        />
    )
}
