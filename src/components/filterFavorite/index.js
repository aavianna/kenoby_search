import React, { Component } from 'react'

export default class FilterFavorite extends Component {
    render() {
        return (
            <div className='filterFavorites'>
                <input
                    id='filterFavorites'
                    className='filterFavorites__input filterFavorites__input--hidden'
                    type='checkbox'
                />    
                <label htmlFor='filterFavorites' className='filterFavorites__label'>
                    <svg className='filterFavorites__label__iconStar' viewBox='0 0 51 48'>
                        <path d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'/>
                    </svg>
                </label>
            </div>
        )
    }
}