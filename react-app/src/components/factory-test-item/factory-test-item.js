import './factory-test-item.css';
import React from 'react';
import pizza from './hot-tasty-pizza.jpg'
import blue from './blue-graphic.png'

export default class FactoryTestItem extends React.Component {

    startTime;
    mountTime;
    updateTime;
    unmountTime;

    printTime(time, moment) {
        //console.log(`(${ this.props.index+1 }) ${ moment }: Global loading ${ time }ms`)
        //console.log(`${ moment }: Global loading ${ time / 1000 }s`)
        console.log(`(${ this.props.index+1 }) ${ moment }: Component loading ${ time - this.startTime }ms`)
        //console.log(`${ moment }: Component loading ${ (time - this.startTime) / 1000 }s`)
    }

    constructor(){
        super();
        this.startTime = window.performance.now();
    }

    componentDidMount(){
        this.mountTime = window.performance.now();
        this.printTime(this.mountTime, 'mount')
    }

    componentDidUpdate(){
        this.updateTime = window.performance.now();
        this.printTime(this.updateTime, 'update')
    }

    componentWillUnmount(){
        this.unmountTime = window.performance.now();
        this.printTime(this.unmountTime, 'unmount')
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
