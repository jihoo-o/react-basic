import React, { useState } from 'react';
import Chat from './components/Chat';
import Contacts from './components/Contacts';
import Dialog from './components/Dialog';
import SplitPane from './components/SplitPane';

function App() {
    return (
        <>
            <Dialog title="welcome" message="Thank you for visiting" />
            <SplitPane left={<Contacts />} right={<Chat />} />
        </>
    );
}

export default App;
