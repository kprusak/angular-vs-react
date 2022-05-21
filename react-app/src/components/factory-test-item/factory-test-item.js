import './factory-test-item.css';
import React from 'react';
import pizza from './hot-tasty-pizza.jpg'
import blue from './blue-graphic.png'

export default class FactoryTestItem extends React.Component {

    startTime;
    mountTime;
    updateTime;
    unmountTime;

    constructor(){
        super();
        this.startTime = window.performance.now();
    }

    componentDidMount(){
        this.mountTime = window.performance.now();
        console.log(`(${ this.props.index+1 }) componentDidMount: Component loading ${ this.mountTime - this.startTime }ms`)
    }

    componentDidUpdate(){
        this.updateTime = window.performance.now();
        console.log(`(${ this.props.index+1 }) componentDidUpdate: Component loading ${ this.updateTime - this.props.editTime }ms`)
    }

    componentWillUnmount(){
        this.unmountTime = window.performance.now();
        console.log(`componentWillUnmount: Component loading ${ this.unmountTime - this.props.destroyTime - 500 }ms`)
    }



    render() {
        return (
            <div>
                {this.props.textContent ? <p>{this.props.textContent}</p> : null}
                {(this.props.graphicContent && this.props.graphicContent==='./hot-tasty-pizza.jpg') ? <img src={pizza} alt="graphic" />: null}
                {(this.props.graphicContent && this.props.graphicContent==='./blue-graphic.png') ? <img src={blue} alt="graphic" />: null}
            </div>
        );
    }
}
