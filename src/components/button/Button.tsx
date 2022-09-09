import "./Button.css";

type ButtonPros = {
    title: string;
    onClick: () => void;
    disabled: boolean;
}

export default function Button(props: ButtonPros) {
    return (
        <button
            id="Button"
            onClick={props.onClick}
            disabled={props.disabled}
        >{props.title}</button>
    );
}