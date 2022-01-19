import React from 'react';
import hoc from './hoc';

const Input = hoc(({ forwardedRef, sharedFunction, ...props }) => {
    return <input ref={forwardedRef} onChange={sharedFunction} {...props} />;
});

export default React.forwardRef((props, ref) => {
    return <Input {...props} forwardedRef={ref} />;
});
