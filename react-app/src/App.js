import './App.css';
import React from 'react';
import ToDoList from './components/to-do-list/to-do-list'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className="toolbar">
          <span className="title">React App</span>
        </div>
        <div className="content">
          <ToDoList />
        </div>
      </div>
    );
  }
}