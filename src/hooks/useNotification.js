const useNotification = (title, options) => {
    if (!('Notification' in window)) {
        throw new Error('This browser does not support notifications.');
    }

    const triggerNotification = () => {
        if (Notification.permission !== 'granted') {
            Notification.requestPermission() //
                .then((permission) => {
                    if (permission === 'granted') {
                        new Notification(title, options);
                    } else {
                        return;
                    }
                });
        } else {
            new Notification(title, options);
        }
    };

    return triggerNotification;
};

export default useNotification;
