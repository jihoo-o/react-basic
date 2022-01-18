import { createContext } from 'react';

export const themes = {
    light: {
        text: '#000000',
        background: '#eeeeee',
    },
    dark: {
        text: '#ffffff',
        background: '#222222',
    },
};

export const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});
