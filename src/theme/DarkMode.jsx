import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

const DarkMode = (props) => {
    const context = useContext(ThemeContext);

    return (
        <div
            style={{
                background: context.theme.background,
                color: context.theme.text,
            }}
            onClick={(e) => {
                if (e.target.tagName === 'BUTTON') {
                    context.toggleTheme();
                }
            }}
        >
            {props.children}
        </div>
    );
};

export default DarkMode;
