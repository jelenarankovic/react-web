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
                        src='./../images/capuccino.jpg'
                        text="A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam"
                        label="Capuccino"
                        path="/our-coffee"
                        />
                        <CardItem
                        src='./../images/turkish.jpg'
                        text="Turkish coffee is a method of preparation that results in a highly caffeinated, unfiltered coffee beverage"
                        label="Turkish"
                        path="/our-coffee"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='./../images/latte.jpg'
                        text="Latte is a coffee drink made with espresso and steamed milk"
                        label="Latte"
                        path="/our-coffee"/>
                        <CardItem
                        src='./../images/espresso.jpg'
                        text="Espresso is a coffee-brewing method of Italian origin"
                        label="Espresso"
                        path="/our-coffee"/>
                        <CardItem
                        src='./../images/espressomilk.jpg'
                        text="Finest Italian Espresso with steamed or cold milk"
                        label="Espresso with milk"
                        path="/our-coffee"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards