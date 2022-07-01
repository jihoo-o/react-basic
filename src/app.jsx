import React from 'react';
import useConfirm from './hooks/useConfirm';
import usePreventLeave from './hooks/usePreventLeave';

function App() {
    const confirmLeave = useConfirm({
        message: 'Are you sure you want to exit?',
        onConfirm: () => {
            window.alert('Bye!');
        },
        onCancel: () => {
            window.alert('Aborted');
        },
    });

    const { enablePrevent, disablePrevent } = usePreventLeave();

    return (
        <div className="App">
            <div>
                <h3>useConfirm</h3>
                <button onClick={confirmLeave}>Leave</button>
            </div>
            <div>
                <h3>usePreventLeave</h3>
                <button onClick={enablePrevent}>protect</button>
                <button onClick={disablePrevent}>unprotect</button>
            </div>
        </div>
    );
}

export default App;
