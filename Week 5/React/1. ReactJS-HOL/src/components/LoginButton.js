function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default LoginButton;