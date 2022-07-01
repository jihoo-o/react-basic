import React from 'react';
import useScroll from './hooks/useEffect/useScroll.js';

function App() {
    const { y } = useScroll();

    return (
        <div className="App">
            <div
                style={{
                    background: `${y > 100 ? 'red' : 'blue'}`,
                    width: '100wd',
                    height: '200vh',
                }}
            >
                Hello world
            </div>
        </div>
    );
}

export default App;
