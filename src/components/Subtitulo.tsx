import React from 'react';


interface TitleProps {
    text: string;
    customStyle?: string;
}

function Subtitulo ({ text, customStyle }: TitleProps) {
    return (
        <h2 className={`subtitulo ${customStyle}`}>{text}</h2>
    );
}

export default Subtitulo;