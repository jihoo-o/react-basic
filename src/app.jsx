import React from 'react';
import useNotification from './hooks/useEffect/useNotification.js';

function App() {
    const triggerNotification = useNotification('메시지', {
        body: '안녕하세요?',
    });

    return (
        <div className="App">
            <button onClick={triggerNotification}>Notification 🔔</button>
        </div>
    );
}

export default App;
