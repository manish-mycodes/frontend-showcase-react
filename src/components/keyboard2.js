import React, { useState } from 'react';
import './styles.css'; // Assuming you have a CSS file for styling

const T9Keyboard = () => {
    const [display, setDisplay] = useState('');

    const handleKeyPress = (digit) => {
        setDisplay(display + digit);
    };

    return (
        <div className="t9-keyboard">
            <div className="display">{display}</div>
            <div className="keyboard">
                <div className="row">
                    <button onClick={() => handleKeyPress('2')}>2<br/>ABC</button>
                    <button onClick={() => handleKeyPress('3')}>3<br/>DEF</button>
                    <button onClick={() => handleKeyPress('4')}>4<br/>GHI</button>
                </div>
                <div className="row">
                    <button onClick={() => handleKeyPress('5')}>5<br/>JKL</button>
                    <button onClick={() => handleKeyPress('6')}>6<br/>MNO</button>
                    <button onClick={() => handleKeyPress('7')}>7<br/>PQRS</button>
                </div>
                <div className="row">
                    <button onClick={() => handleKeyPress('8')}>8<br/>TUV</button>
                    <button onClick={() => handleKeyPress('9')}>9<br/>WXYZ</button>
                </div>
                <div className="row">
                    <button onClick={() => setDisplay('')}>Clear</button>
                </div>
            </div>
        </div>
    );
};

export default T9Keyboard;
