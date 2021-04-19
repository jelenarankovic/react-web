import React from 'react'
import CardItem from './CardItem'
import './Cards.css'



function Cards() {
    return (
        <div className='cards'>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem className = 'card-1'
                        src ='https://images.pexels.com/photos/5405598/pexels-photo-5405598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="No metter if you know or don't know what your next destination is, you still need a little bit of organization."
                        label="Organize"
                        path="/join-us"
                        />
                     
                        <CardItem
                        src='https://images.pexels.com/photos/3582219/pexels-photo-3582219.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="We all need a little inspiration, and these people are here to provide you with some!"
                        label="Photography"
                        path="/join-us"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="It's better to see with your own eyes!"
                        label="Video"
                        path="/join-us"/>
                        <CardItem
                        src='https://images.pexels.com/photos/4340790/pexels-photo-4340790.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        text="Everyone has a different experience, and we want to hear yours!"
                        label="Blog"
                        path="/join-us"/>
                        <CardItem
                        src='https://images.pexels.com/photos/2533092/pexels-photo-2533092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                        text="If you want to find secret jems all around the world or recomend them, this is the place for you!"
                        label="Reccomend"
                        path="/join-us"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards