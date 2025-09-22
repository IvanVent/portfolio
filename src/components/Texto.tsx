import React from 'react';


interface TitleProps {
    text: string;
    customStyle?: string;
}

function Texto ({ text, customStyle }: TitleProps) {
    return (
        <p className={`texto ${customStyle}`}>{text}</p>
    );
}

export default Texto;