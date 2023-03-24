import React from 'react'
import * as Types from '../../types'
import { useLayoutContext } from '../layout-context'

export const Text = ({
    text,
    positions: { flag, fontSize, left, top, width, height, ...positions },
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
        innerRef.current.style.position = 'initial'
        innerRef.current.style.transform = '0'
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
        innerRef.current.style.position = 'absolute'
        innerRef.current.style.top = '50%'
        innerRef.current.style.left = '0'
        innerRef.current.style.right = '0'
        innerRef.current.style.transform = 'translateY(-50%)'
    }, [text, containerOffsetSize, positions])

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
