import React from 'react'

export const DownloadObject = <T extends unknown>({
    obj,
    className,
    fileDescription,
}: {
    obj: T
    className?: string
    fileDescription?: string
}) => {
    const [generated, setGenerated] = React.useState(false)
    const [href, setHref] = React.useState('')

    const handleGenerate = () => {
        const json = JSON.stringify(obj)
        const blob = new Blob([json], { type: 'application/json' })
        setHref(URL.createObjectURL(blob))
        setGenerated(true)
    }

    return (
        <div>
            {!generated && (
                <button className={className} onClick={handleGenerate}>
                    Generate{fileDescription ? ` ${fileDescription}` : ''}...
                </button>
            )}
            {generated && (
                <a href={href} download="text.json">
                    <button
                        className={className}
                        onClick={() => {
                            setGenerated(false)
                        }}
                    >
                        Download{fileDescription ? ` ${fileDescription}` : ''}
                    </button>
                </a>
            )}
        </div>
    )
}
