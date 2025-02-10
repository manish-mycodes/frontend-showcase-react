import React from 'react'
export default function App() {
    const arr = Array.from({ length: 5 }, (v, i) => i)

    console.log('arr')
    console.log(arr)

    return <div>Hi! This is react</div>
}
