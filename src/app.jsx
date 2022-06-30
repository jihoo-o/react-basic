import React from 'react';
import useClick from './hooks/useEffect/useClick';

function App() {
    const ref = useClick({
        onClick: () => {
            window.alert('worked out!');
        },
    });

    return (
        <div className="App">
            <h1 ref={ref} style={{ background: 'red' }}>
                Click here!
            </h1>
        </div>
    );
}

export default App;
