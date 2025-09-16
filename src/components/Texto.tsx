import React from 'react';

interface TitleProps {
    text: string;
}

function Texto ({ text }: TitleProps) {
    return (
        <p className="texto">{text}</p>
    );
}

export default Texto;