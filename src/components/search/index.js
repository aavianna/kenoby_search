import React, { Component } from 'react'

export default class Search extends Component {

    onChangeSearch = (e) => {

        // Verificar se quantidade de caracteres é maior ou igual a 4
        let search = e.target.value.length >= 4 ? e.target.value : ''

        // Executar a função filterSearch do header
        this.props.changeSearch(search)
    }

    noSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className='search'>
                {/* <label>
                    <svg className='vacanciesList__item__header__favorite__label__iconStar' viewBox='0 0 51 48'>
                        <path d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'/>
                    </svg>
                </label> */}
                <form 
                    className='search__form'
                    action="/search"
                    method="get"
                    autoComplete="off"
                    onChange={this.onChangeSearch}
                    onSubmit={this.noSubmit}>

                    <input
                    className='search__form__input'
                    type='search'
                    placeholder='Encontre uma vaga...'
                    role='search' />
                </form>
            </div>
        )
    }
}