import React from 'react'
import ThumbnailItem from './ThumbnailItem.js'
export default function Thumbnails(props) {

    const thumbnails = props.inputArray.map((item, index) =>{
        console.log(props)
        return (<ThumbnailItem
            title={item.title}
            number={item.number}
            choosed={props.selected === index}
            index={index}
            onItemClick={props.onItemClick}
        />)
    }
        )
    return (
        <div>
            {thumbnails}
        </div>
    )
}
