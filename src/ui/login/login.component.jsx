import './styles.css'
import {useState} from 'react';

export default function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [validationMessage, setValidationMessage] = useState({
        
        usernameValidation: true,
        passwordValidation: true,
    });


    const onClickHandler = (e) => {
        e.preventDefault();
        const vmessage = {...validationMessage};
       
            vmessage.usernameValidation = username !== '';
            vmessage.passwordValidation = password !== '';
            setValidationMessage(vmessage);
    }   

    const usernameChangedHandler = (e) => {
        const uname = e.target.value;
        const vmessage = {...validationMessage};

        vmessage.usernameValidation = uname !== '';
        
        setUsername(uname);
        setValidationMessage(vmessage);

    }

    const passwordChangedHandler = (e) => {
        
        const pwd = e.target.value;
        const vmessage = {...validationMessage};

        vmessage.passwordValidation = pwd !== '';
        
        setPassword(pwd);
        setValidationMessage(vmessage);

    }



    //console.log(validationMessage);

    return <form onSubmit={onClickHandler}>
                <div className="container">
                    <div className='items'>
                    <div>
                            <label htmlFor="username">Username:</label>
                            <input id="username" type="text" value={username} onChange={usernameChangedHandler}/>
                            <div>
                                {!(validationMessage.usernameValidation) && 
                                    <span style={{color: 'red'}}>Username is empty </span>
                                }
                            </div>
                    </div>
                    <div>
                            <label htmlFor="password">Password:</label>
                            <input id="password" type="password" value={password} onChange={passwordChangedHandler}  />
                            <div>
                                {
                                    !(validationMessage.passwordValidation) && 
                                        <span style={{color: 'red'}}>Pasword is empty </span>
                                }
                            
                            </div>
                    </div>
                    <button onClick={onClickHandler}>Login</button>
                    </div>
                </div>   
    </form> 
}