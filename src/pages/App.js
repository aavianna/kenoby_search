import React, { Component } from 'react'
// import { Provider } from 'react-redux'
// import store from '../structure/store'

import api from '../services/api'

import Header from '../components/header'
import Vacancies from '../components/vacancies'

class App extends Component {

    // State
    state = {
        initialVacancies: [],
        vacancies: [],
        isLoggedIn: true
    }

    componentDidMount() {
       setTimeout(() => {
        this.loadVacancies()
       }, 3000)
    }

    loadVacancies = async () => {
        
        // Faz o get na API de vagas
        const response = await api.get('positions')
            .then((res) => {

                let data = []
                
                // Verificar se o resultado da busca veio maior que 0
                if(res.data.length > 0) {

                    // Ordena o resultado da API
                    data = res.data.sort((a, b) => {
                        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
                    })

                } else {
                    console.debug('[API] - Get retornou vazio')
                }

                return data
            })
            .catch((error) => {
                console.warn('[API]', error)
                return 'error'
            })

        // Guarda no state o retorno da APi
        this.setState({
            initialVacancies: response,
            vacancies: response,
            isLoggedIn: false
        })
    }

    updatedList = (resSearch) => {
        let list = this.state.initialVacancies
        
        list = list.filter((item) => {
            return item.name.toLowerCase().search(resSearch.toLowerCase()) !== -1
        })

        this.setState({
            vacancies: list
        })
    }

    render() {
        return (
            // <Provider store={store}>
            <div className='App'>
                <Header getChangeSearch={this.updatedList.bind(this)} />
                <Vacancies items={this.state.vacancies} isLoggedIn={this.state.isLoggedIn} />
            </div>
            // </Provider>
        )
    }
}

export default App
