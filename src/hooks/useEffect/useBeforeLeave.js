import { useEffect } from 'react';

const useBeforeLeave = (onBeforeLeave) => {
    useEffect(() => {
        if (!onBeforeLeave || typeof onBeforeLeave !== 'function') return;
        document.addEventListener('mouseleave', onBeforeLeave);
        return () => document.removeEventListener('mouseleave', onBeforeLeave);
    }, [onBeforeLeave]);
};

export default useBeforeLeave;
