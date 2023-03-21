import React from 'react'
import { FloatInput } from '../../components/FloatInput'
import * as Types from '../../types'

export const PositionSetter = ({
    name,
    value,
    setter,
    cancel,
}: {
    name: string
    value: Types.TextLayout
    setter: (layout: Partial<Types.TextLayout>) => void
    cancel: () => void
}) => {
    const [color, setColor] = React.useState(value.color)
    const [fontSize, setFontSize] = React.useState(String(value.fontSize))
    const [textAlign, setTextAlign] = React.useState(value.textAlign)
    const [left, setLeft] = React.useState(value.left)
    const [top, setTop] = React.useState(value.top)
    const [height, setHeight] = React.useState(value.height)
    const [width, setWidth] = React.useState(value.width)

    React.useEffect(() => {
        setColor(value.color)
        setFontSize(String(value.fontSize))
        setTextAlign(value.textAlign)
        setLeft(value.left)
        setTop(value.top)
        setHeight(value.height)
        setWidth(value.width)
    }, [value])

    const disabled =
        !!color &&
        color === value.color &&
        !!fontSize &&
        !isNaN(Number(fontSize)) &&
        fontSize === String(value.fontSize) &&
        !!textAlign &&
        textAlign === value.textAlign &&
        !!left &&
        left === value.left &&
        !!top &&
        top === value.top &&
        !!height &&
        height === value.height &&
        !!width &&
        width === value.width

    return (
        <div>
            <div className="mt-5">
                <label>
                    Color:
                    <input
                        className="ml-2"
                        type="text"
                        value={color}
                        onChange={(event) => {
                            setColor(event.target.value)
                        }}
                    />
                </label>
                <div className="mt-2">
                    Font Size:
                    <FloatInput
                        className="ml-2"
                        value={fontSize}
                        onChange={(event) => {
                            setFontSize(event.target.value)
                        }}
                    />
                </div>
                <div className="mt-2">
                    Text Align:
                    <select
                        className="ml-2"
                        value={textAlign}
                        onChange={(event) => {
                            if (
                                event.target.value === 'center' ||
                                event.target.value === 'left'
                            ) {
                                setTextAlign(event.target.value)
                            }
                        }}
                    >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                    </select>
                </div>
                <div className="mt-2">
                    Left:
                    <PercentInput
                        className="ml-2"
                        value={left}
                        onChange={(event) => setLeft(event.target.value)}
                    />
                </div>
                <div className="mt-2">
                    Top:
                    <PercentInput
                        className="ml-2"
                        value={top}
                        onChange={(event) => setTop(event.target.value)}
                    />
                </div>
                <div className="mt-2">
                    Height:
                    <PercentInput
                        className="ml-2"
                        value={height}
                        onChange={(event) => setHeight(event.target.value)}
                    />
                </div>
                <div className="mt-2">
                    Width:
                    <PercentInput
                        className="ml-2"
                        value={width}
                        onChange={(event) => setWidth(event.target.value)}
                    />
                </div>
            </div>
            <div className="btn-row">
                <button
                    className="btn"
                    disabled={disabled}
                    onClick={() =>
                        setter({
                            color,
                            fontSize: Number(fontSize),
                            textAlign,
                            left,
                            top,
                            height,
                            width,
                        })
                    }
                >
                    Update Position
                </button>
                <button className="btn-secondary ml-6" onClick={() => cancel()}>
                    Cancel
                </button>
            </div>
        </div>
    )
}

const PercentInput = ({
    value,
    onChange,
    className,
}: {
    value?: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    className?: string
}) => (
    <input
        className={className}
        type="text"
        value={value}
        onChange={(event) => {
            if (/^\d*\.?\d*%?$/.test(event.target.value)) {
                onChange?.(event)
            }
        }}
    />
)
