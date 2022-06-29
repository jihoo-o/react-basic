import { useState } from 'react';

/**
 *
 * @param {*} initValue
 * @param {function} validator returns bool
 * @returns
 */
const useInput = (initValue, validator) => {
    const [value, setValue] = useState(initValue || '');

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        let willUpdate = true;
        if (typeof validator === 'function') {
            willUpdate = validator(value);
        }

        if (willUpdate) {
            setValue(value);
        }
    };

    return { value, onChange };
};

export default useInput;
