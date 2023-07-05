import React, {FC} from 'react';
import styles from "./Button.module.scss"

interface IButton {
    className?: string,
    children: React.ReactNode,
    onClick: () => void,
}

const Button: FC<IButton> = ({className="", children, onClick}) => {
    return (
        <button onClick={onClick} className={`${styles.btn} ${className}`}>
            {children}
        </button>
    );
};

export default Button;