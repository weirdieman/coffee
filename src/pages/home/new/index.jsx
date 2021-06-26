import React from 'react'

import newImg from '../../../assets/newImg.png'

import './styles.scss'

const New = () => {
    return (
        <section className='new'>
            <div className='container new__inner'>
                <div className='new__info'>
                    <h3 className='new__info-title'>Latte and Cappuccino</h3>
                    <p className='text new__info-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                    <span className='date new__info-date'>May 20th 2020</span>
                    <button className='button'>Read more</button>
                </div>
                <div className='new__img'>
                    <img src={newImg}/>
                </div>
            </div>
        </section>
    )
}

export default New
