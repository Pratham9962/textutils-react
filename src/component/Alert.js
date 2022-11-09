import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{     //to capitalize word this function is used
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1); //to capitalize 1st word we do charAt(0)
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert
