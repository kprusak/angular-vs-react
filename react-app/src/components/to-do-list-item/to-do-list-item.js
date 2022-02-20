import './to-do-list-item.css';
import React from 'react';

export default class ToDoListItem extends React.Component {
    render() {
        return (
        <div className="item">
            <span>{this.props.item}</span>
        </div>
        );
    }
}
