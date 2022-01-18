import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { ThemeContext, themes } from './context/theme-context';
import DarkMode from './theme/DarkMode';

function App() {
    const [theme, setTheme] = useState('dark');

    return (
        <div className="app-container">
            <ThemeContext.Provider
                value={{
                    theme: themes[theme],
                    toggleTheme: () => {
                        theme === 'dark' ? setTheme('light') : setTheme('dark');
                    },
                }}
            >
                <DarkMode>
                    <Header />
                    <Main />
                </DarkMode>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
