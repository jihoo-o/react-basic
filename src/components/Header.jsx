import React from 'react';
import ThemeTogglerBtn from './ThemeTogglerBtn';

const Header = (props) => {
    return (
        <header id="header" style={{ border: '1px solid lightgray' }}>
            <h1>DarkMode</h1>
            <ThemeTogglerBtn />
        </header>
    );
};

export default Header;
