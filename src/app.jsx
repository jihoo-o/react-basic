import React from 'react';
import useFadeIn from './hooks/useEffect/useFadeIn';

function App() {
    const fadeInH1 = useFadeIn({ duration: 3 });
    const fadeInP = useFadeIn({ duration: 5, delay: 2 });

    return (
        <div className="App">
            <h1 {...fadeInH1}>Fade in 3s</h1>
            <p {...fadeInP}>Fade in 5s</p>
        </div>
    );
}

export default App;
