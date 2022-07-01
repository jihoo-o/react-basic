import React from 'react';
import useNetwork from './hooks/useEffect/useNetwork.js';

function App() {
    const onLine = useNetwork((onLine) => {
        console.log(onLine);
    });

    return (
        <div className="App">
            <h1>{onLine ? 'OnLine' : 'OffLine'}</h1>
        </div>
    );
}

export default App;
