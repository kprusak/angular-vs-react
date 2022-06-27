import './big-item.css';
import React from 'react';
import image from './hot-tasty-pizza.jpg'

export default class BigItem extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={image} alt="big item"/>
                </div>
                <div className="credits">
                    Graphical components credits:
                    <a href="https://www.freepik.com/photos/pizza-table">Pizza table photo created by Racool_studio - www.freepik.com</a>
                </div>
            </div>
        );
    }
}
