import { React, useState } from 'react'

export default function Cell() {

    const [cell, setCell] = useState(0);

    const handleOnChange = (e) => {
        setValue(e.target.value.toUpperCase())
    }

    return (
        <div className="cell block center">
            <textarea name="" id="" className="cellValue" maxLength={1}></textarea>
        </div>
    )
}
