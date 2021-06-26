import React from 'react'

import trendImg from '../../../assets/trendImg.png'

import './styles.scss'

const Trend = () => {
    return (
        <section className='trend'>
            <svg className='trend__line-1' width="406" height="253" viewBox="0 0 406 253" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="-0.263681" y1="252.575" x2="405.736" y2="0.575161" stroke="black"/></svg>
            <svg className='trend__line-2' width="349" height="126" viewBox="0 0 349 126" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.169025" y1="0.529436" x2="348.169" y2="125.529" stroke="black"/></svg>
            <svg className='trend__line-3' width="292" height="194" viewBox="0 0 292 194" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="291.276" y1="0.416685" x2="0.276374" y2="193.417" stroke="black"/></svg>
            <div className='container'>
                <div className='row trend__inner'>
                    <div className='col-6 trend__info'>
                        <h2 className='trend__title'>What is Lorem Ipsum?</h2>
                        <p className='text trend__info-text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                        <span className='date trend__info-date'>May 20, 2020</span>
                        <button className='button trend__link'>Read more</button>
                    </div>
                    <div className='col-6 trend__img'>
                        <img src={trendImg}/>
                    </div>
                </div>
            </div>
            <svg className='trend__miniline-1' width="168" height="90" viewBox="0 0 168 90" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="167.235" y1="0.44125" x2="0.235159" y2="89.4413" stroke="black"/></svg>
            <svg className='trend__miniline-2' width="188" height="60" viewBox="0 0 188 60" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.150444" y1="0.52317" x2="187.15" y2="59.5232" stroke="black"/></svg>
            <svg className='trend__miniline-3' width="183" height="85" viewBox="0 0 183 85" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="182.21" y1="0.45398" x2="0.209527" y2="84.454" stroke="black"/></svg>
        </section>
    )
}

export default Trend;
