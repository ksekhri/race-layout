import React from 'react'
import { FloatInput } from '../../components/FloatInput'
import * as Types from '../../types'
import { Rectangle } from '../ImageMeasure'

export const PositionSetter = ({
    name,
    value,
    setter,
    rect,
    setRect,
    cancel,
}: {
    name: string
    value: Types.TextLayout
    setter: (layout: Types.TextLayout) => void
    rect: Rectangle | null
    setRect: (rect: Rectangle) => void
    cancel: () => void
}) => {
    const [color, setColor] = React.useState(value.color)
    const [fontSize, setFontSize] = React.useState(String(value.fontSize))
    const [textAlign, setTextAlign] = React.useState(value.textAlign)
    const [left, setLeft] = React.useState(String(value.left))
    const [top, setTop] = React.useState(String(value.top))
    const [height, setHeight] = React.useState(String(value.height))
    const [width, setWidth] = React.useState(String(value.width))

    React.useEffect(() => {
        setColor(value.color)
        setFontSize(String(value.fontSize))
        setTextAlign(value.textAlign)
        setLeft(String(value.left))
        setTop(String(value.top))
        setHeight(String(value.height))
        setWidth(String(value.width))
        setRect({
            top: Number(value.top),
            left: Number(value.left),
            width: Number(value.width),
            height: Number(value.height),
        })
    }, [value])

    React.useEffect(() => {
        if (rect) {
            setLeft(String(rect.left))
            setTop(String(rect.top))
            setHeight(String(rect.height))
            setWidth(String(rect.width))
        }
    }, [rect])

    const updateRect = (item: keyof Rectangle, value: string) => {
        if (value !== '.') {
            setRect({ ...rect, [item]: Number(value) })
        }
    }

    const disabled =
        !!color &&
        color === value.color &&
        !!fontSize &&
        !isNaN(Number(fontSize)) &&
        fontSize === String(value.fontSize) &&
        !!textAlign &&
        textAlign === value.textAlign &&
        !!left &&
        left === String(value.left) &&
        !!top &&
        top === String(value.top) &&
        !!height &&
        height === String(value.height) &&
        !!width &&
        width === String(value.width)

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
                        <option value="center">Center</option>
                        <option value="left">Left</option>
                    </select>
                </div>
                <div className="mt-2">
                    Left:
                    <PercentInput
                        className="ml-2"
                        value={left}
                        onChange={(event) => {
                            setLeft(event.target.value)
                            updateRect('left', event.target.value)
                        }}
                    />
                </div>
                <div className="mt-2">
                    Top:
                    <PercentInput
                        className="ml-2"
                        value={top}
                        onChange={(event) => {
                            setTop(event.target.value)
                            updateRect('top', event.target.value)
                        }}
                    />
                </div>
                <div className="mt-2">
                    Height:
                    <PercentInput
                        className="ml-2"
                        value={height}
                        onChange={(event) => {
                            setHeight(event.target.value)
                            updateRect('height', event.target.value)
                        }}
                    />
                </div>
                <div className="mt-2">
                    Width:
                    <PercentInput
                        className="ml-2"
                        value={width}
                        onChange={(event) => {
                            setWidth(event.target.value)
                            updateRect('width', event.target.value)
                        }}
                    />
                </div>
            </div>
            <div className="btn-row">
                <button
                    className="btn"
                    disabled={disabled}
                    onClick={() => {
                        setter({
                            color,
                            fontSize: Number(fontSize),
                            textAlign,
                            left: Number(left),
                            top: Number(top),
                            height: Number(height),
                            width: Number(width),
                        })
                    }}
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
    <>
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
        %
    </>
)
