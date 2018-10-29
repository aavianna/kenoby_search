import React, { Component } from 'react';
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'

/* Action */
// import { changeSearch } from './actions'

/* Components */
import Logo from '../logo'
import Search from '../search'
import FilterFavorite from '../filterFavorite'
import WidgetProfile from '../widgetProfile'

export default class Header extends Component {

    getChangeSearch = (resSearch) => {
        // Executar a função filterSearch do App.js
        this.props.getChangeSearch(resSearch)
    }

    render() {
        return (
            <header className='header'>
                <div className='header__container'>
                    <Logo />
                    <div className='header__container__center'> 
                        <Search changeSearch={this.getChangeSearch.bind(this)} />
                        <FilterFavorite />
                    </div>
                    <WidgetProfile />
                </div>
            </header>
        )
    }
}

// const mapStateToProps = state => ({
//     search: state.todo.search
// })

// const mapDispatchToProps = dispatch => bindActionCreators(
//     {changeSearch},
//     dispatch
// )

// export default connect(mapStateToProps, mapDispatchToProps)(Header)