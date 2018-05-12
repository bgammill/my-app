import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    const { error, isLoaded, items } = this.state;
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="container">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <div className="row">
                  <div className="col-lg">
                    <h3>uid</h3>
                    <p>{item.userId}</p>
                  </div>
                  <div className="col-lg">
                    <h3>id</h3>
                    <p>{item.id}</p>
                  </div>
                  <div className="col-lg">
                    <h3>title</h3>
                    <p>{item.title}</p>
                  </div>
                  <div className="col-lg">
                    <h3>completed</h3>
                    <input type="checkbox" defaultChecked={ item.completed ? 'checked' : '' } />
                  </div>
                </div>
              </li>
              ))}
          </ul>
        </div>
      );
    }
  }
}

export default Todo;
