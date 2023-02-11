import { React, useState } from 'react'

export default function Navbar() {

    const [seconds, setSeconds] = useState(0);
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hour, setHour] = useState(0);
    const [day, setDay] = useState(0);

    const changeSeconds = () => {
        let newSeconds = seconds + 1;
        setSeconds(newSeconds);
        changeTime()
    }

    setTimeout(changeSeconds, 1000);

    const changeTime = () => {
        setSecond(seconds % 60);
        setMinute((Math.floor(seconds / 60)) % 60);
        setHour((Math.floor(seconds / 3600)) % 24);
        setDay(Math.floor(seconds / 86400));
    }

    return (
        <div className="navbar">
            <h2 className='heading link center'>SUDOKU</h2>
            <div className="clock time center">{day.toString().padStart(2, 0)}:{hour.toString().padStart(2, 0)}:{minute.toString().padStart(2, 0)}:{second.toString().padStart(2, 0)}</div>
        </div>
    )
}
