import './big-item.css';
import React from 'react';
import image from './hot-tasty-pizza.jpg'

export default class BigItem extends React.Component {
    render() {
        return (
            <div>
                <img src={image} alt="big item"  width="1500px" height='900px' />
                <a href="https://www.freepik.com/photos/pizza-table">Pizza table photo created by Racool_studio - www.freepik.com</a>
            </div>
        );
    }
}
