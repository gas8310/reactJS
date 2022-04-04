import React, { Component } from 'react';

class  App extends Component {
  state = {
    hello: 'hello app js!'
    , count: 0,
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleChange = () => {
    this.setState({
      hello: 'bye app js!'
      , count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <h3>index Props</h3>
        <div classNmae="props">
          {/* Props가 들어가는 부분입니다! */}
          <span>{this.props.message}</span>
        </div>

        <h3>State</h3>
        <div className="state">
          {/*State가 들어가는 부분입니다!*/}
          {this.state.count}
          <button onClick={this.handleChange}>count up!</button>
        </div>

        <div>{this.state.hello}</div>
        <button onClick={this.handleChange}>click me!</button>
        //<div>{this.state.count}</div>

        <h3>App Props</h3>
        <div className="indide-app-props">
          <InsideApp
            count={this.state.count}
            handleChange={this.hadleChange}
          />
        </div>
      </div>
    );
    //return <div className="App">{this.state.hello}</div>
  }
}

class InsideApp extends Component {
  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.props.handleChange}>click meme!</button>
      </div>
    );
  }
}

export default App;
