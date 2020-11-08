import React from 'react';
import styles from "./button.module.css";

export function Button(props) {
    return <button className={`${styles.button} ${props.className}`} onClick = {props.onClick}>{props.children}</button>  
}