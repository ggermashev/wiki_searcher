import React, {FC} from 'react';
import styles from './TextInput.module.scss'

interface ITextInput {
    className?: string,
    value: string,
    setValue: (val: string) => void,
    placeholder: string,
    onEnter?: () => void,

}

const TextInput: FC<ITextInput> = ({className = "", value, setValue, placeholder, onEnter}) => {
    return (
        <input className={`${styles.textInput} ${className}`}
               value={value}
               onChange={e => setValue(e.target.value)}
               type={"text"}
               placeholder={placeholder}
               onKeyDown={(key) => {
                   if (key.code === 'Enter') {
                       onEnter?.()
                   }
               }}
        />

    );
};

export default TextInput;