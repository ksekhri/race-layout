import React from 'react'

type Rectangle = {
    x: number
    y: number
    width: number
    height: number
}

export const ImageMeasure = ({
    imageUrl,
    onMeasure,
}: {
    imageUrl: string
    onMeasure: any
}) => {
    const [dragging, setDragging] = React.useState(false)
    const [rect, setRect] = React.useState<Rectangle | null>(null)
    const [start, setStart] = React.useState<Rectangle | null>(null)
    const imageRef = React.useRef<HTMLImageElement | null>(null)
    const containerRef = React.useRef<HTMLDivElement | null>(null)

    const handleMouseDown = (event: React.MouseEvent<HTMLImageElement>) => {
        event.preventDefault()
        setDragging(true)
        const { offsetLeft, offsetTop } = containerRef.current!
        const x = event.pageX - offsetLeft
        const y = event.pageY - offsetTop
        setRect({ x, y, width: 0, height: 0 })
        setStart({ x, y, width: 0, height: 0 })
    }

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging || !rect || !start || !containerRef.current) {
            return
        }
        const { offsetLeft, offsetTop } = containerRef.current
        const mouseX = event.pageX - offsetLeft
        const mouseY = event.pageY - offsetTop
        const x = mouseX > start.x ? start.x : event.pageX - offsetLeft
        const y = mouseY > start.y ? start.y : event.pageY - offsetTop
        const width = mouseX > start.x ? mouseX - start.x : start.x - mouseX
        const height = mouseY > start.y ? mouseY - start.y : start.y - mouseY
        setRect({ width, height, x, y })
    }

    const handleMouseUp = () => {
        setDragging(false)
        console.log(getPercentageRect())
    }

    const getPercentageRect = () => {
        if (!rect || !imageRef.current) {
            return null
        }
        const { width, height } = imageRef.current.getBoundingClientRect()
        return {
            x: (rect.x / width) * 100,
            y: (rect.y / height) * 100,
            width: (rect.width / width) * 100,
            height: (rect.height / height) * 100,
        }
    }

    return (
        <div
            style={{ position: 'relative', width: '100%', height: '100%' }}
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
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
                        left: rect.x,
                        top: rect.y,
                        width: rect.width,
                        height: rect.height,
                        border: '2px dashed red',
                        pointerEvents: 'none',
                    }}
                />
            )}
        </div>
    )
}
