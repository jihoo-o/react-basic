import React from 'react';
import useFullscreen from './hooks/useEffect/useFullscreen.js';

function App() {
    const onFullscreenChange = () => {};

    const { imageRef, triggerFull, exitFull } =
        useFullscreen(onFullscreenChange);

    return (
        <div className="App">
            <img
                ref={imageRef}
                onClick={exitFull}
                src="https://picsum.photos/200/300"
                alt=""
            />
            <button onClick={triggerFull}>full screen</button>
        </div>
    );
}

export default App;
