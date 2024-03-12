import React, { useState, useCallback } from 'react';
import ChildComponent from './child';

const ParentComponent = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    
    const increment = useCallback(() => {
        setCount(count + 1);
    },[count]);

    const handleCount = () => {
        setCount2((prevCount) => prevCount + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <p> Parent Trigger Count : {count2}</p>
            <button onClick={handleCount}>Parent Trigger Ciunt</button>
            <ChildComponent increment={increment} />
        </div>
    );
};

export default ParentComponent


