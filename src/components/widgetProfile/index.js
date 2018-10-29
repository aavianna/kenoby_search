import React, { Component } from 'react'

// Importar o avatar
import avatarAnime from '../../assets/image/anime.png'

export default class WidgetProfile extends Component {
    render() {

        // Recebe o avatar do usuário
        const widgetProfileAvatar = {
            backgroundImage: `url(${avatarAnime})`
        }

        return (
            <div className='widgetProfile'>
                <div
                    className='widgetProfile__avatar'
                    style={ widgetProfileAvatar }
                ></div>
            </div>
        )
    }
}