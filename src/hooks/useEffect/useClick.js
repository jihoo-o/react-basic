import { useEffect, useRef } from 'react';

const useClick = ({ onClick }) => {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('click', onClick);
        }

        return ref.current && ref.current.removeEventListener('click', onClick);
    }, [onClick]);

    return ref;
};

export default useClick;
