import React from 'react'
import Box from './Box';

export default function Grid() {
    return (
        <div className="grid">
            <div className="row one">
                <Box />
                <Box />
                <Box />
            </div>
            <div className="row two">
                <Box />
                <Box />
                <Box />
            </div>
            <div className="row three">
                <Box />
                <Box />
                <Box />
            </div>
        </div>
    )
}
