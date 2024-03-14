import './App.css';
import {useState} from 'react';
const worker = new Worker('answer.js');

export default function App() {
  const [counter, setCounter] = useState(0);
  const [answer, setAnswer] = useState(0);
  
  const onAnswerClickHandler = () => {
    worker.postMessage("start");
    worker.onmessage = (ev) => setAnswer(ev.data);
  }

  return (
    <div className="container">
      <div class="items">
        <div>
          <h3>The Answer value is {answer}</h3>
        </div>
        <div>
          <h4>The Counter value is {counter} </h4>
        </div>
        <div className='action-btns'>
          <button className='btnCounter' onClick={() => setCounter(prevCount => prevCount + 1)}>+ 1</button>
          <button className='btnCounter' onClick={onAnswerClickHandler}>Get Answer</button>
        </div>
      </div>
    </div>
  )
}
