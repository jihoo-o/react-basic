import React from 'react';
import useTitle from './hooks/useEffect/useTitle';

// from API
const content = [
    {
        tab: 'Section 1',
        content: "I'm the content of the Section 1",
    },
    {
        tab: 'Section 2',
        content: "I'm the content of the Section 2",
    },
];

function App() {
    const titleUpdater = useTitle('Hello world');

    setTimeout(() => {
        titleUpdater('time out!');
    }, 2000);

    return (
        <div className="App">
            <div>
                {content.map((section, idx) => (
                    <button
                        key={Math.random()}
                        onClick={() => titleUpdater(section.tab)}
                    >
                        {section.tab}
                    </button>
                ))}
            </div>
            <h1 className="title"></h1>
        </div>
    );
}

export default App;
