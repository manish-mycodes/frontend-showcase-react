import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'
import Tribute from 'tributejs'

const EditorComponent = () => {
    const editorRef = useRef(null)

    const config = {
        placeholder: "Type '@' to mention...",
        height: '600px',
        events: {
            afterInit: (joditInstance) => {
                setTimeout(() => {
                    const editableDiv = joditInstance.editor // Get Jodit's content-editable div
                    if (!editableDiv) return

                    const tribute = new Tribute({
                        collection: [
                            {
                                trigger: '@',
                                values: [
                                    { key: 'JohnDoe', value: 'John Doe' },
                                    { key: 'JaneDoe', value: 'Jane Doe' },
                                    { key: 'Alice', value: 'Alice Wonderland' },
                                    { key: 'Bob', value: 'Bob Builder' },
                                ],
                                selectTemplate: function (item) {
                                    return `@${item.original.key}`
                                },
                            },
                        ],
                    })

                    // Ensure Tribute.js attaches only once
                    if (!editableDiv.hasAttribute('data-tribute-attached')) {
                        tribute.attach(editableDiv)
                        editableDiv.setAttribute(
                            'data-tribute-attached',
                            'true'
                        )
                    }

                    // Fix arrow key navigation inside the mention list
                    editableDiv.addEventListener('keydown', (event) => {
                        if (
                            tribute.isActive &&
                            (event.key === 'ArrowUp' ||
                                event.key === 'ArrowDown')
                        ) {
                            event.preventDefault()
                            event.stopPropagation()
                        }
                    })
                }, 300) // Small delay to ensure Jodit is fully initialized
            },
        },
    }

    return <JoditEditor ref={editorRef} config={config} />
}

export default EditorComponent
