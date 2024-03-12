import React from 'react';

const ChildComponent = React.memo(({ increment }) => {

    console.log('Child is being rendered....');

    return (
        <button onClick={increment}>
            Increment
        </button>
    );
});

export default ChildComponent;