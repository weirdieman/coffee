import React from 'react'

import './styles.scss'

const SignIn = () => {
    return (
        <section className='sign-in'>
            <div className='sign-in__inner'>
                <div className='sign-in__logo'>
                    <span className='sign-in__title'>Welcome</span>
                    <p className='sign-in__text'>We happy to see you back. Here you can sign in.</p>
                </div>
                <div className='sign-in__content'>
                    <form className='sign-in__form' action=''>
                    <input className='sign-in__input1' name='login' type='text' required placeholder='Email or Username'/>
                    <input className='sign-in__input2' name='password' type='password' required placeholder='Password'/> 
                    <a href='#' className='sign-in__help'>Forgot password</a>  
                    <button className='hero__btn'>Sign In</button> 
                    </form> 
                </div>
            </div>
        </section>
    )
}

export default SignIn;
