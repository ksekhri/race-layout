import React from 'react'

export type Rectangle = {
    left: number
    top: number
    width: number
    height: number
}

export const ImageMeasure = ({
    imageUrl,
    rect,
    setRect,
}: {
    imageUrl: string
    rect: Rectangle | null
    setRect: (rect: Rectangle | null) => void
}) => {
    const [dragging, setDragging] = React.useState(false)
    const [start, setStart] = React.useState<Rectangle | null>(null)
    const imageRef = React.useRef<HTMLImageElement | null>(null)
    const containerRef = React.useRef<HTMLDivElement | null>(null)

    React.useEffect(() => {
        const handleMouseUp = () => {
            setDragging(false)
        }
        document.body.addEventListener('mouseup', handleMouseUp)

        return () => document.body.removeEventListener('mouseup', handleMouseUp)
    }, [])

    const handleMouseDown = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault()
        setDragging(true)
        const { offsetLeft, offsetTop } = containerRef.current!
        const left = event.pageX - offsetLeft
        const top = event.pageY - offsetTop
        setStart({ left, top, width: 0, height: 0 })
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging || !start || !containerRef.current) {
            return
        }
        const { offsetLeft, offsetTop } = containerRef.current
        const mouseX = event.pageX - offsetLeft
        const mouseY = event.pageY - offsetTop
        const left = mouseX > start.left ? start.left : event.pageX - offsetLeft
        const top = mouseY > start.top ? start.top : event.pageY - offsetTop
        const width =
            mouseX > start.left ? mouseX - start.left : start.left - mouseX
        const height =
            mouseY > start.top ? mouseY - start.top : start.top - mouseY
        setRect(getPercentageRect({ width, height, left, top }))
    }

    const getPercentageRect = (rawRect: Rectangle | null) => {
        if (!rawRect || !imageRef.current) {
            return null
        }
        const { width, height } = imageRef.current.getBoundingClientRect()
        return {
            left: (rawRect.left / width) * 100,
            top: (rawRect.top / height) * 100,
            width: (rawRect.width / width) * 100,
            height: (rawRect.height / height) * 100,
        }
    }

    return (
        <div
            style={{ position: 'relative' }}
            ref={containerRef}
            onMouseMove={handleMouseMove}
        >
            <img
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                src={imageUrl}
                ref={imageRef}
                onMouseDown={handleMouseDown}
            />
            {rect && (
                <div
                    style={{
                        position: 'absolute',
                        left: `${rect.left}%`,
                        top: `${rect.top}%`,
                        width: `${rect.width}%`,
                        height: `${rect.height}%`,
                        border: '2px dashed white',
                        pointerEvents: 'none',
                    }}
                />
            )}
        </div>
    )
}
