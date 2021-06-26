import React from 'react'
import './Popup.scss'

const Popup2 = ({ active2, setActive2,  }) => {
    return (
        <div className={active2 ? "popup active" : "popup"} onClick={() => setActive2(false)}></div>
    )
}

export default Popup2;