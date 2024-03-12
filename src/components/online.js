import {memo} from 'react';
import { useOnlineStatus } from './custom-hookex';

export default   memo(function Online(){
    
    const isOnline = useOnlineStatus();
    

    
    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
});