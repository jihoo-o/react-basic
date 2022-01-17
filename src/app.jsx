import React, { useState } from 'react';
import FunctionComponent from './components/FunctionComponent';

function App() {
    const [mount, setMount] = useState(true);
    const [state, setState] = useState('a');

    setTimeout(() => {
        setState('b');
        setTimeout(() => {
            setMount(false);
        }, 4000);
    }, 4000);

    return mount && <FunctionComponent prop={state} />;
}

export default App;
