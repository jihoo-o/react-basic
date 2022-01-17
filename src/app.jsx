import React, { useState } from 'react';
import ClassComponent from './components/ClassComponent';

function App() {
    const [mount, setMount] = useState(true);
    const [state, setState] = useState('a');

    setTimeout(() => {
        setState('b');
        setTimeout(() => {
            setMount(false);
        }, 3000);
    }, 3000);

    return mount && <ClassComponent prop={state} />;
}

export default App;
