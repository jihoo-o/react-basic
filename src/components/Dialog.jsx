import FancyBorder from './FancyBorder';

function Dialog({ title, message }) {
    return (
        <>
            <FancyBorder color="red">
                <h1 className="Dialog-title">{title}</h1>
            </FancyBorder>
            <FancyBorder color="orange">
                <p className="Dialog-message">{message}</p>
            </FancyBorder>
        </>
    );
}

export default Dialog;
