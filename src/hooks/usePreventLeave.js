import React from 'react';

const usePreventLeave = (props) => {
    const beforeUnloadListener = (event) => {
        event.preventDefault();
        return (event.returnValue = '');
    };

    const enablePrevent = () => {
        window.addEventListener('beforeunload', beforeUnloadListener);
    };

    const disablePrevent = () => {
        window.removeEventListener('beforeunload', beforeUnloadListener);
    };

    return { enablePrevent, disablePrevent };
};

export default usePreventLeave;
