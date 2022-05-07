import './big-item.css';
import React from 'react';
import image from './graphic.jpg'

export default class BigItem extends React.Component {
    render() {
        return (
            <img src={image} alt="big item" />
        );
    }
}
