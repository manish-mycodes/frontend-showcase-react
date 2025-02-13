import React, { useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
//import { EditorState, convertToRaw, convertFromRaw } from 'draft-js'
import {
    EditorState,
    ContentState,
    convertFromHTML,
    convertToRaw,
    convertFromRaw,
    Modifier,
} from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import { stateFromHTML } from 'draft-js-import-html'
import htmlToDraft from 'html-to-draftjs'
import { convertToHTML } from 'draft-convert'

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './myTextEditor.css'

const MyTextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    const handleCopy = (event) => {
        event.preventDefault() // Prevent default copy behavior

        // Convert EditorState to HTML
        const rawContent = convertToRaw(editorState.getCurrentContent())
        const formattedHtml = stateToHTML(editorState.getCurrentContent())

        // Set clipboard data with formatted HTML
        event.clipboardData.setData('text/html', formattedHtml)
        event.clipboardData.setData('text/plain', JSON.stringify(rawContent))

        console.log('Copied HTML:', formattedHtml)
    }

    const handlePastedText = (text, html, editorState) => {
        if (html) {
            const blocksFromHTML = htmlToDraft(html)

            // ✅ Ensure blocksFromHTML is valid
            if (!blocksFromHTML || !blocksFromHTML.contentBlocks) {
                console.warn('Invalid HTML input:', html)
                return false // ❌ Stop processing if HTML is invalid
            }

            let contentState = ContentState.createFromBlockArray(
                blocksFromHTML.contentBlocks,
                blocksFromHTML.entityMap
            )

            // ✅ Extract and Apply Color Inline Styles
            blocksFromHTML.contentBlocks.forEach((block) => {
                if (block.inlineStyleRanges) {
                    block.inlineStyleRanges.forEach((styleRange) => {
                        if (styleRange.style.includes('color:')) {
                            const colorMatch = styleRange.style.match(
                                /color:\s*(#[0-9A-Fa-f]{3,6}|\w+)/
                            )
                            if (colorMatch) {
                                const color = colorMatch[1]
                                contentState = Modifier.applyInlineStyle(
                                    contentState,
                                    block.getEntityAt(styleRange.offset),
                                    `COLOR_${color}`
                                )
                            }
                        }
                    })
                }
            })

            const newEditorState = EditorState.push(
                editorState,
                contentState,
                'insert-fragment'
            )
            setEditorState(newEditorState)
            return true // ✅ Indicate paste handling
        }
        return false // ❌ Default behavior if no HTML
    }

    const onEditorStateChange = (newState) => {
        console.log('newState')
        console.log(newState)

        setEditorState(newState)
    }

    return (
        <div onCopy={handleCopy}>
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                editorClassName="editor-class"
                handlePastedText={handlePastedText}
                customStyleMap={{
                    COLOR_RED: { color: 'red' },
                    COLOR_BLUE: { color: 'blue' },
                    COLOR_GREEN: { color: 'green' },
                    COLOR_BLACK: { color: 'black' },
                    COLOR_ORANGE: { color: 'orange' },
                }}
                toolbar={{
                    options: [
                        'inline',
                        'blockType',
                        'fontSize',
                        'list',
                        'textAlign',
                        'colorPicker',
                        'link',
                        'embedded',
                    ],
                }}
            />
            <h3>HTML Output:</h3>
            <textarea
                style={{ width: '100%', height: '100px' }}
                value={convertToHTML(
                    convertToRaw(editorState.getCurrentContent())
                )}
                readOnly
            />
        </div>
    )
}

export default MyTextEditor
