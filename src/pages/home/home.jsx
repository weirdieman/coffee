import React from 'react'

import Hero from './hero/hero'
import New from './new/index'
import Blogs from './blogs/index'
import TrendNews from './trend/index'

const Home = () => {
    return (
    <React.Fragment>
    <main>
    <Hero/>
    <New/>
    <Blogs/>
    <TrendNews/>
    </main>
    </React.Fragment>
    )  
}

export default Home;
