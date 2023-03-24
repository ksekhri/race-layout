import React from 'react'

const UploadObject = <T extends object>({
    onObjectLoad,
    title,
    className,
}: {
    onObjectLoad: (object: T) => void
    title?: string
    className?: string
}) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (!file) {
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            const json = reader.result?.toString()
            if (!json) {
                return
            }

            const object = JSON.parse(json) as T
            onObjectLoad(object)
        }
        reader.readAsText(file)
    }

    return (
        <>
            <label
                className={className}
                style={{ position: 'relative', cursor: 'pointer' }}
            >
                {title ?? 'Upload File...'}
                <input
                    type="file"
                    accept="application/json"
                    onChange={handleFileChange}
                    className={className}
                    placeholder={title}
                    style={{
                        visibility: 'hidden',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                        padding: 0,
                    }}
                />
            </label>
        </>
    )
}

export default UploadObject
