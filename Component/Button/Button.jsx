import React from 'react'
import { MdMessage } from 'react-icons/md';
import styles from './Button.module.css'





function Button({ isOutline, icon, text, ...rest }) {
    return (
        <button
            {...rest}
            className={`${isOutline ? styles.isOutline_btn : styles.primary_btn}`}>
            {icon}
            {text}
        </button>
    )
}

export default Button



