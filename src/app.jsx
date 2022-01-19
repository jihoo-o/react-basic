import React from 'react';
import useInput from './hooks/useInput';
function App() {
    const maxLen = (value) => value.length < 10;
    const input = useInput('init', maxLen);
    return (
        <div className="App">
            <input type="text" {...input} />
        </div>
    );
}

export default App;
