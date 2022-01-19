import React from 'react';
import hoc from './hoc';

const Button = hoc(({ sharedFunction, ...props }) => {
    return (
        <button onClick={sharedFunction} {...props}>
            button
        </button>
    );
});

export default Button;
