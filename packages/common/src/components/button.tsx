import React from "react";

type Props = {
    textColor: string;
    children?: React.ReactNode;
}

const Button = (props: Props) => {
    return <button style={{ 'color': props.textColor }}>{props.children}</button>;
}

export default Button;