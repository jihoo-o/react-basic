import React, { createRef, useEffect } from 'react';
import Input from './components/Input';
import Button from './components/Button';

function App() {
    const inputRef = createRef();

    useEffect(() => {
        console.log(inputRef.current);
    });

    return (
        <>
            <Input ref={inputRef} />
            <Button />
        </>
    );
}

export default App;
