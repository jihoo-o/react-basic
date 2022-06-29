import React from 'react';
import useTabs from './hooks/useTabs';

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
    const { currentItem, onChange } = useTabs(0, content);

    return (
        <div className="App">
            <div>
                {content.map((section, idx) => (
                    <button key={Math.random()} onClick={() => onChange(idx)}>
                        {section.tab}
                    </button>
                ))}
            </div>
            <div>{currentItem.content}</div>
        </div>
    );
}

export default App;
