import React from 'react'
import * as Types from '../../types'
import { useLayoutContext } from '../layout-context'

export const Text = ({
    text,
    positions: { fontSize, left, top, width, height, ...positions },
}: {
    positions: Types.TextLayout
    text: string
}) => {
    const { containerOffsetSize } = useLayoutContext()
    const outerRef = React.useRef<HTMLDivElement | null>(null)
    const innerRef = React.useRef<HTMLElement | null>(null)

    React.useEffect(() => {
        if (!outerRef.current || !innerRef.current) {
            return
        }
        let updatedFontSize = fontSize
        outerRef.current.style.fontSize = `${
            containerOffsetSize.width / updatedFontSize
        }px`
        while (
            (innerRef.current.offsetWidth > outerRef.current.offsetWidth ||
                innerRef.current.offsetHeight >
                    outerRef.current.offsetHeight) &&
            fontSize > 0
        ) {
            updatedFontSize = updatedFontSize + 1
            outerRef.current.style.fontSize = `${
                containerOffsetSize.width / updatedFontSize
            }px`
        }
    }, [text, containerOffsetSize])

    return (
        <div
            className="absolute"
            style={{
                ...positions,
                left: `${left}%`,
                top: `${top}%`,
                width: `${width}%`,
                height: `${height}%`,
                fontSize: `${containerOffsetSize.width / fontSize}px`,
            }}
            ref={outerRef}
        >
            <span ref={innerRef}>{text}</span>
        </div>
    )
}
