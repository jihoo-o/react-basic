import { useState } from 'react';
/**
 *
 * @param {index} initialTab
 * @param {Array} allTabs
 * @returns
 */
const useTabs = (initialTab, allTabs) => {
    if (!allTabs || !Array.isArray(allTabs)) {
        throw new Error('allTabs의 값이 올바르지 않습니다.');
    }

    const [currentIndex, setCurrentIndex] = useState(initialTab);

    const onChange = (newIndex) => {
        if (
            typeof newIndex !== 'number' ||
            newIndex < 0 ||
            newIndex > allTabs.length - 1
        )
            throw new Error('변경된 탭의 인덱스 값이 유효하지 않습니다.');

        setCurrentIndex(newIndex);
    };

    return { currentItem: allTabs[currentIndex], onChange };
};

export default useTabs;
