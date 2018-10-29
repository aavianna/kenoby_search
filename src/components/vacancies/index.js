import React, { Component } from 'react'

import Loading from '../loading'
import Message from '../message'
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion'

export default class Vacancies extends Component {

    markup = (vacancyDescription) => {
        return {
            __html: vacancyDescription
        }
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <Loading />
            )
        }
        else if (this.props.items === 'error') {
            return (
                <Message msg={'Desculpe, o sistema está temporariamente indisponível.<br /><br />Por favor, tente novamente mais tarde'} />
            )
        }
        else if (this.props.items.length > 0) {
            return (
                <Accordion accordion={false}>
                    {this.props.items.map((vacancy, index) =>
                        <AccordionItem key={index}>
                            <AccordionItemTitle>
                                <h3 className='accordion__title__label'>
                                    {vacancy.name}

                                    <section className='accordion__title__favorite'>
                                        <input
                                            id={`favorite_${index}`}
                                            className='hideInput accordion__title__favorite__input'
                                            type='checkbox'
                                            name='favoriteVacancy'
                                        />

                                        <label className='accordion__title__favorite__label' htmlFor={`favorite_${index}`}>
                                            <svg className='accordion__title__favorite__label__iconStar' viewBox='0 0 51 48'>
                                                <path d='m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z'/>
                                            </svg>
                                        </label>
                                    </section>
                                </h3>

                                <div className="accordion__title__arrow" role="presentation"></div>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p
                                    className='accordion__body__description'
                                    dangerouslySetInnerHTML={this.markup(vacancy.description) }
                                ></p>
                                <a
                                    className='accordion__body__button'
                                    href={vacancy.linksExternal}
                                    title='Candidate-se'
                                    target='_blank'
                                    rel='noopener noreferrer'>candidate-se</a>
                            </AccordionItemBody>
                        </AccordionItem>
                    )}
                </Accordion>
            )
        } else {
            return (
                <Message msg='Não encontrou nenhuma vaga? Envie seu currículo mesmo assim!' btn='cv' />
            )
        }
    }
}


