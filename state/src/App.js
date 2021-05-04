import React from 'react';
import './App.css';

class App extends React.Component {

  /*
  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    }
  }
  */

  // shorthand version doing the same as with the constructor
  state = {
    counter: 0,
    liked: false
  }

  clickHandler = () => {
    console.log('click');
    // don't update the state directly
    // this.state.counter = 5;
    // use setState to update the state


    // this is fine if we don't use the current state to calculate the new state
    // this.setState({
    //   counter: 5
    // })
    // this.setState({
    //   counter: this.state.counter + 1
    // })
    // 
    // https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
    // if we are calculating the new state based on the old state (meaning we have this.state... to 
    // the right of the colon in the state object) we wanna use the callback like follows:
    this.setState((state, props) => ({
      counter: state.counter + props.incrementer
    }))
  }

  likeHandler = () => {
    this.setState((state) => ({
      liked: !state.liked
    }))
  }

  render() {
    // 🚨 props are read - only
    // this.props.user = 'Alice';
    // console.log(this.props.user);
    return (
      <div className="App" >
        <header className="App-header">

          <h1>Counter: {this.state.counter}</h1>
          <button onClick={this.clickHandler}>Increment by {this.props.incrementer} 👇</button>

          <h1>{this.state.liked ? 'I like it' : 'I do not like it'}</h1>
          <button onClick={this.likeHandler}>{this.state.liked ? 'Unlike' : 'Like'}</button>

        </header>
      </div>
    );
  }
}

export default App;
