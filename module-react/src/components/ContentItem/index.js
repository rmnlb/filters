import React from 'react';
import './ContentItem.scss'

export default (props) => {
    return(
        <li className='ContentItem'>
            <div>
                <h4>{props.title}</h4>
                <p>{props.tags.join(', ')}</p>
            </div>
        </li>
    )
}