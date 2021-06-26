import React from 'react'
import './Popup.scss'

const Popup = ({ active, setActive,  }) => {
    return (
        <div className={active ? "popup active" : "popup"} onClick={() => setActive(false)}></div>
    )
}

export default Popup;
