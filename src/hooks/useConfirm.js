const useConfirm = ({ message, onConfirm, onCancel }) => {
    if (!message) throw new Error('message가 존재하지 않습니다.');
    if (onConfirm && typeof onConfirm !== 'function')
        throw new Error('onConfirm callback이 존재하지 않습니다.');
    if (onCancel && typeof onCancel !== 'function')
        throw new Error('onCancel callback이 존재하지 않습니다.');

    const confirmAction = () => {
        if (window.confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };

    return confirmAction;
};

export default useConfirm;
