
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Stepper from './stepper-component/src/index.js';
import React, { Component } from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

class App extends Component {
  constructor() {
    super();
    this.state = {
      costMin: 300,
      costMax: 1000,
      tabs: [
        { title: 'Low-Cost', id: 'low-cost', costMin: 300, costMax: 1000,
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
        { title: 'Mid-Range', id: 'mid-range', costMin: 1000, costMax: 5000,
          collections: [
            { title: 'Pre-Production', 
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
        { title: 'High-End', id: 'high-end', costMin: 5000, costMax: 20000,
          collections: [
            { title: 'Pre-Production', 
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
    this.updateCostRange = this.updateCostRange.bind(this);
  }

  updateCostRange(tabKey) {
    const {costMax, costMin} = this.state.tabs.filter(tab => tab.id == tabKey)[0];
    this.setState({costMin: costMin, costMax: costMax});
  }

  onClickNext() {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }

  render() {
    const { tabs, currentStep, costMin, costMax } = this.state;
    return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Calculator</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
        <Row>
          <Col>  
            <h5>Video Production Cost Range:</h5>
            ${ costMin } - ${ costMax }
          </Col>
          <Col md={10}>
            <Tabs defaultActiveKey={tabs[0].id} id="uncontrolled-tab-example" onSelect={this.updateCostRange }>
              { tabs.map((tab,index) => 
                // <Tab eventKey={tab.id} title={tab.title} onChange={(e)=>this.updateCostRange(e,index) } value={index}>
                <Tab eventKey={tab.id} title={tab.title} value={index}>
                  { tab.collections.map((collection, cid) => <div>
                    {collection.title ? <h5>{collection.title}</h5> : <h5>no content</h5>}
                    {collection.questions && collection.questions.map((question, qid) => 
                      <Accordion 
                      // defaultActiveKey="0"
                      >
                        <Card>
                          <Accordion.Toggle as={Card.Header} eventKey={`${qid}`}>
                            {question.title}
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey={`${qid}`}>
                            <Card.Body>
                              {/* <Stepper items={question.answers} /> */}
                              {question.answers && question.answers.map((answer,index) => 
                                <div 
                                class="form-check"
                                // class="form-check form-check-inline"
                                >
                                  <input class="form-check-input" type="radio" name="inlineRadioOptions" id={`inlineRadio${index}`} value={`option${index}`} />
                                  <label class="form-check-label" for={`inlineRadio${index}`}>{answer.title}</label>
                                </div>
                              )}

                              {/* <Row>
                              {question.answers && question.answers.map(answer => 
                                <Col><InputGroup.Radio aria-label="Checkbox for following text input" />{answer.title}</Col>
                              )}
                              </Row> */}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                    )}
                  </div>
                  )}
                </Tab>
              )}
            </Tabs>
          </Col>
          
        </Row>
      </Container>
    </div>
    );
  }
}

export default App;
