import React from 'react';
import styles from './button.module.css'

export function Button({className, onClick, children}) {
    return (
        <button className={`${styles.button} ${className}`} onClick= {onClick}>{children}</button>
    );
}