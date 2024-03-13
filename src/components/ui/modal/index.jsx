import {useState} from 'react'
import './styles.css';

export default function BasicModal() {
    
    const [displayModal, setDisplayModal] = useState(false)
   

    return <section>
        <div>
            <button onClick={() => setDisplayModal(true)}>Open Modal</button>
        </div>
        {displayModal && 
        <div className='modal'>
            {/* Modal Content */}
            <div className='modal-content'>
                <span className='close' onClick={()=>setDisplayModal(false)}>&times;</span>
                <p>Some Modal content here...</p>
            </div>

        </div>
    }
    </section>
}