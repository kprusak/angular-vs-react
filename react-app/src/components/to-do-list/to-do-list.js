import './to-do-list.css';
import React from 'react';
import ToDoListItem from '../to-do-list-item/to-do-list-item';

export default class ToDoList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            itemToAdd: "",
            toDoItems: []
        }
    }

    addItem = () => {
        this.state.toDoItems.push(this.state.itemToAdd);
        this.setState({ itemToAdd: '' });
    }

    removeItem = (index) => {
        this.state.toDoItems.splice(index,1)
        this.setState({toDoItems: this.state.toDoItems})
    }

    handleInputChange = (event) => {
        this.setState({itemToAdd: event.target.value})
    }

    render() {

        const items = this.state.toDoItems.length > 0 ? this.state.toDoItems.map((item, index) => {
            return  <div className="item-container" key={index}>
                        <ToDoListItem item={item}/>
                        <button className="remove-item-button" onClick={() => this.removeItem(index)}>x</button>
                    </div>
        }): <div className="noItems">
                Add the first item using form above.
            </div>

        return (
            <div>
                <div className="form">
                    <input className="new-item-input" type="text" placeholder="Type task name..." value={this.state.itemToAdd} onChange={this.handleInputChange}></input>
                    <button className="new-item-button" onClick={this.addItem}>add item</button>    
                </div>
                <div>{items}</div>
            </div>
        );
    }
}
