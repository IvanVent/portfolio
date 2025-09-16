import React from 'react';

interface TitleProps {
    text: string;
}

function Subtitulo ({ text }: TitleProps) {
    return (
        <h2 className="subtitulo">{text}</h2>
    );
}

export default Subtitulo;