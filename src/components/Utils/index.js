import React from 'react'
import './style.css'

export function Button({ text, iconClass }) {
    return (
        <div className='button-container'>
            <button> 
                <i className={`fa ${iconClass}`} aria-hidden="true"></i>
                { text } 
            </button>
        </div>
    )
}