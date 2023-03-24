import React from 'react'
import { LayoutItemRadio } from '../../../components/LayoutItemRadio'
import { AddLayout } from './AddLayout'
import { EditLayout } from './EditLayout'

export const LayoutItemEditor = () => {
    const [state, setState] = React.useState<'view' | 'edit' | 'add'>('view')
    return (
        <div>
            <h2>Layout Item</h2>
            {state === 'view' && (
                <>
                    <LayoutItemRadio />
                    <div className="btn-row">
                        <button
                            className="btn"
                            onClick={() => setState('edit')}
                        >
                            Edit Layout...
                        </button>
                        <button
                            className="btn ml-2"
                            onClick={() => setState('add')}
                        >
                            Add New Layout...
                        </button>
                    </div>
                </>
            )}
            {state === 'edit' && <EditLayout cancel={() => setState('view')} />}
            {state === 'add' && <AddLayout cancel={() => setState('view')} />}
        </div>
    )
}
