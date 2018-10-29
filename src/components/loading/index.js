import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div className='loading'>
                <svg className='loading__svg' viewBox="0 0 150 150">
                    <circle className='loading__svg__circle' cx="75" cy="75" r="60"/>
                </svg>
            </div>
        )
    }
}