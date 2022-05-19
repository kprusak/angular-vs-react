import './factory-test-item.css';
import React from 'react';
import pizza from './hot-tasty-pizza.jpg'
import blue from './blue-graphic.png'

export default class FactoryTestItem extends React.Component {

    render() {
        return (
            <div>
                {this.props.componentData.textContent ? <p>{this.props.componentData.textContent}</p> : null}
                {(this.props.componentData.graphicContent && this.props.componentData.graphicContent==='./hot-tasty-pizza.jpg') ? <img src={pizza} alt="graphic" />: null}
                {(this.props.componentData.graphicContent && this.props.componentData.graphicContent==='./blue-graphic.png') ? <img src={blue} alt="graphic" />: null}
            </div>
        );
    }
}
