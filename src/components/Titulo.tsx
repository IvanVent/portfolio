import React from 'react';

interface TitleProps {
    text: string;
}

function Titulo ({ text }: TitleProps) {
    return (
        <h1 className="titulo">{text}</h1>
    );
}

export default Titulo;