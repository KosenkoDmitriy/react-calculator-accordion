// import logo from './logo.svg';
import './App.css';
import Stepper from './stepper-component/src/index.js';
// import Stepper from 'stepper-component';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
      currentStep: 0,
    };
    this.onClickNext = this.onClickNext.bind(this);
  }

  onClickNext() {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }
  render() {
    const { steps, currentStep } = this.state;
    return (
    <div className="App">
      <header className="App-header">
        <Stepper steps={4} currentStep={currentStep} onClick={this.onClickNext} />
        <button onClick={ this.onClickNext }>Next</button>
        
      </header>
    </div>
    );
  }
}

export default App;
