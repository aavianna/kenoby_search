import React, { Component } from 'react'

export default class Message extends Component {

    markup = (msg) => {
        return {
            __html: msg
        }
    }

    render() {
        return (
            <div className='message'>
                <h3 dangerouslySetInnerHTML={this.markup(this.props.msg)}></h3>
                {this.props.btn === 'cv' && (
                    <a
                        className='message__btn'
                        href='https://portal.kenoby.com/kenoby/cadastrar'
                        title='Envie seu currículo!'
                        target='_blank'
                        rel='noopener noreferrer'>enviar agora</a>
                )}
            </div>
        )
    }
}
