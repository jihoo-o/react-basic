import { useRef } from 'react';

const useFullscreen = (onFullscreenChange) => {
    const element = useRef();

    const runCb = (isFull) => {
        if (typeof onFullscreenChange === 'function') {
            onFullscreenChange(isFull);
        }
    };

    const triggerFull = () => {
        if (element.current && element.current.requestFullscreen) {
            element.current.requestFullscreen();
        }
        runCb(true);
    };

    const exitFull = () => {
        if (!document.fullscreenElement) return;
        document.exitFullscreen();
        runCb(false);
    };

    return { imageRef: element, triggerFull, exitFull };
};

export default useFullscreen;
