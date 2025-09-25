interface CustomButtonProps {
    text: string;
    customStyle?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

function CustomButton ({ text, customStyle, type = "button", onClick }: CustomButtonProps) {
    return (
        <button type={type} className={`boton-style ${customStyle}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default CustomButton;