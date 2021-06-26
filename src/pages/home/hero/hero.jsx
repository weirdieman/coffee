import React from 'react'

import './styles.scss'

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container'>
                <div className='row hero__inner'>
                <div className='col-3 hero__description'>
                    <h1 className='hero__title'>Make better coffee</h1> 
                </div>
                <div className='col-4 hero__info'>
                    <p className='hero__text-1'>Do you want to learn how to create blogs?</p>
                    <p className='hero__text-2'>Do you want to learn how to make coffee?</p>
                    <span>So what are you waiting for, click the link bellow</span>
                    <button className='hero__btn'>Learn</button>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
