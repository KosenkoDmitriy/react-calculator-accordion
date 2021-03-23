// import logo from './logo.svg';
// import './App.scss';
// import './App.css';
import Stepper from './stepper-component/src/index.js';
import React, {Component} from 'react';
// import {Tab, Tabs} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [
        { title: 'Low-Cost', id: 'low-cost',
        collections: [
          { title: 'Pre-Production', 
            questions: [
              {
                title: "1. Do you require a concept, script and storyboard?",
                answers: [
                  {title: "We will supply the concept and script"},
                  {title: "We need a concept only"},
                  {title: "We need a concept and script"},
                  {title: "We need a concept and storyboard"},
                ]
              },
              {
                title: "2. Who will handle the project scheduling and the admin?",
                answers: [
                  {title: "We will handle all schedulintg and admin"},
                  {title: "We will share admin and scheduling with production company"},
                  {title: "Production company to perform basic scheduling tasks"},
                  {title: "Production company to perform all scheduling and admin"},
                ]
              },
            ]
          },
          { title: 'Production', 
            questions: [
            {
              title: "3. What type of film crew do you need for your shoot?",
              answers: [
                {title: "We don't need a camera for this video project"},
                {title: "One camera operator with camera, lights and audio"},
                {title: "One camera operator with two cameras lights and audio"},
                {title: "Two camera operators with two cameras lights and audio"},
              ]
            },
            {
              title: "4. How many days of shooting are required?",
              answers: [
                {title: "Half day of shooting"},
                {title: "Full day of shooting"},
                {title: "Two days of shooting"},
                {title: "Three days of shooting"},
              ]
            },
            ]
          }
        ]
        },
        { title: 'Mid-Range', id: 'mid-range' },
        { title: 'High-End', id: 'high-end',},
      ],

      
      steps: [{
        title: 'Step One',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 1)
        }
      }, {
        title: 'Step Two',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 2)
        }
      }, {
        title: 'Step Three (Disabled)',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 3)
        }
      }, {
        title: 'Step Four',
        onClick: (e) => {
          e.preventDefault()
          console.log('onClick', 4)
        }
      }],
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
        <Container>
        <Row>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            <div>
              <Stepper steps={4} currentStep={currentStep} onClick={this.onClickNext} />
              <button onClick={ this.onClickNext }>Next</button>  
            </div>
          </Tab>
            
          <Tab eventKey="profile" title="Profile">
            {/* <Collection title="" /> */}
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            {/* <Collection title="" /> */}
          </Tab>
        </Tabs>
        </Row>
        </Container>
      </header>
    </div>
    );
  }
}

export default App;
