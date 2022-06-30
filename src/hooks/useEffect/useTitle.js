import { useCallback, useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle || '');

    // useCallback으로 정의할 수 없음 ⚠️
    const updateTitle = () => {
        console.log(title);
        const htmlTitle = document.querySelector('.title');
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle, [title]);

    return setTitle;
};

export default useTitle;
