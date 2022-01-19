const hoc = (WrappedComponent) => {
    const sharedFunction = () => console.log('sharedFunction');

    return ({ forwardedRef, ...props }) => {
        return (
            <WrappedComponent
                {...props}
                forwardedRef={forwardedRef}
                sharedFunction={sharedFunction}
            />
        );
    };
};

export default hoc;
