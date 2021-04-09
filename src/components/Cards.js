import React from 'react'
import CardItem from './CardItem'
import './Cards.css'


function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        className="card-item-1"
                        text="No metter if you know or don't know what your next destination is, you still need a little bit of organization."
                        label="Organize"
                        path="/sing-up"
                        />
                        <CardItem
                        src='./../images/turkish.jpg'
                        text="We all need a little inspiration, and these people are here to provide you with some!"
                        label="Photography"
                        path="/sing-up"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='./../images/latte.jpg'
                        text="It's better to see with your own eyes!"
                        label="Video"
                        path="/sing-up"/>
                        <CardItem
                        src='./../images/espresso.jpg'
                        text="Everyone has a different experience, and we want to hear yours!"
                        label="Blog"
                        path="/sing-up"/>
                        <CardItem
                        src='./../images/espressomilk.jpg'
                        text="If you want to find secret jems all around the world or recomend them, this is the place for you!"
                        label="Reccomend"
                        path="/sing-up"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards