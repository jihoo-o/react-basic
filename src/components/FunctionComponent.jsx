import React, { useEffect } from 'react';

const FunctionComponent = ({ prop }) => {
    useEffect(() => {
        console.log('mount or update');
        return () => {
            console.log('clean-up function');
        };
    }, [prop]);

    useEffect(() => {
        console.log('subscribe');

        return () => {
            console.log('unsubscribe');
        };
    }, []);

    return (
        <div>
            {console.log('render')}
            useEffect
        </div>
        /**
         * -마운트
         * render ->
         * mount or update
         *
         * -업데이트
         * render ->
         * clean-up function⭐️ ->
         * mount or update⭐️
         *
         * -마운트 해제
         * clean-up function
         */
    );
};

export default FunctionComponent;
