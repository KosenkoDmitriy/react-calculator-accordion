
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Stepper from './stepper-component/src/index.js';
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
import Table from 'react-bootstrap/Table';

class App extends Component {
  constructor() {
    super();
    this.state = {
      costMin: 300,
      costMax: 1000,
      currentTabIndex: 0,
      selectedItems: [],
      tabs: [
        { title: 'Low-Cost', id: 'low-cost', index: 0, costMin: 300, costMax: 1000,
        collections: [
          { title: 'Pre-Production', 
            questions: [
              {
                title: "1. Do you require a concept, script and storyboard?",
                answers: [
                  {title: "We will supply the concept and script", isChecked: false, costMin: 0, costMax: 0 },
                  {title: "We need a concept only", isChecked: false, costMin: 100, costMax: 500 },
                  {title: "We need a concept and script", isChecked: false, costMin: 200, costMax: 700 },
                  {title: "We need a concept and storyboard", isChecked: false, costMin: 300, costMax: 1000 },
                ]
              },
              {
                title: "2. Who will handle the project scheduling and the admin?",
                answers: [
                  {title: "We will handle all schedulintg and admin", isChecked: false, costMin: 0, costMax: 0 },
                  {title: "We will share admin and scheduling with production company", isChecked: false, costMin: 100, costMax: 500 },
                  {title: "Production company to perform basic scheduling tasks", isChecked: false, costMin: 200, costMax: 700 },
                  {title: "Production company to perform all scheduling and admin", isChecked: false, costMin: 300, costMax: 1000 },
                ]
              },
            ]
          },
          { title: 'Production', 
            questions: [
            {
              title: "3. What type of film crew do you need for your shoot?",
              answers: [
                {title: "We don't need a camera for this video project", isChecked: false, costMin: 0, costMax: 0 },
                {title: "One camera operator with camera, lights and audio", isChecked: false, costMin: 100, costMax: 500 },
                {title: "One camera operator with two cameras lights and audio", isChecked: false, costMin: 200, costMax: 700 },
                {title: "Two camera operators with two cameras lights and audio", isChecked: false, costMin: 300, costMax: 1000 },
              ]
            },
            {
              title: "4. How many days of shooting are required?",
              answers: [
                {title: "Half day of shooting", isChecked: false, costMin: 0, costMax: 0 },
                {title: "Full day of shooting", isChecked: false, costMin: 100, costMax: 500 },
                {title: "Two days of shooting", isChecked: false, costMin: 200, costMax: 700 },
                {title: "Three days of shooting", isChecked: false, costMin: 300, costMax: 1000 },
              ]
            },
            ]
          }
        ]
        },
        { title: 'Mid-Range', id: 'mid-range', index: 1, costMin: 1000, costMax: 5000,
          collections: [
            { title: 'Pre-Production', 
              questions: [
              {
                title: "3. What type of film crew do you need for your shoot?",
                answers: [
                  {title: "We don't need a camera for this video project", isChecked: false, costMin: 0, costMax: 0 },
                  {title: "One camera operator with camera, lights and audio", isChecked: false, costMin: 100, costMax: 500 },
                  {title: "One camera operator with two cameras lights and audio", isChecked: false, costMin: 200, costMax: 700 },
                  {title: "Two camera operators with two cameras lights and audio", isChecked: false, costMin: 300, costMax: 1000 },
                ]
              },
              {
                title: "4. How many days of shooting are required?",
                answers: [
                  {title: "Half day of shooting", isChecked: false, costMin: 0, costMax: 0 },
                  {title: "Full day of shooting", isChecked: false, costMin: 100, costMax: 500 },
                  {title: "Two days of shooting", isChecked: false, costMin: 200, costMax: 700 },
                  {title: "Three days of shooting", isChecked: false, costMin: 300, costMax: 1000 },
                ]
              },
              ]
            }
          ]
        },
        { title: 'High-End', id: 'high-end', index: 2, costMin: 5000, costMax: 20000,
          collections: [
            { title: 'Pre-Production', 
              questions: [
              {
                title: "3. What type of film crew do you need for your shoot?",
                answers: [
                  {title: "We don't need a camera for this video project", isChecked: false, costMin: 0, costMax: 0 },
                  {title: "One camera operator with camera, lights and audio", isChecked: false, costMin: 100, costMax: 500 },
                  {title: "One camera operator with two cameras lights and audio", isChecked: false, costMin: 200, costMax: 700 },
                  {title: "Two camera operators with two cameras lights and audio", isChecked: false, costMin: 300, costMax: 1000 },
                ]
              },
              {
                title: "4. How many days of shooting are required?",
                answers: [
                  {title: "Half day of shooting", isChecked: false, costMin: 0, costMax: 0 },
                  {title: "Full day of shooting", isChecked: false, costMin: 100, costMax: 500 },
                  {title: "Two days of shooting", isChecked: false, costMin: 200, costMax: 700 },
                  {title: "Three days of shooting", isChecked: false, costMin: 300, costMax: 1000 },
                ]
              },
              ]
            }
          ]
        },
      ],
      currentStep: 0,
    };
    
    this.onClickNext = this.onClickNext.bind(this);
    this.updateCostRange = this.updateCostRange.bind(this);
    this.reCalculate = this.reCalculate.bind(this);
  }

  updateCostRange(tabKey) {
    const {index, costMax, costMin} = this.state.tabs.filter(tab => tab.id === tabKey)[0];
    this.setState({costMin: costMin, costMax: costMax, currentTabIndex: index});
  }
  
  reCalculate(e, selectedCollection, selectedQuestion, selectedAnswer) {
    // let selectedAnswer = e.target.value
    let currentTab = this.state.tabs[this.state.currentTabIndex];
    let selectedItems = []
    let totalCostMin = 0;
    let totalCostMax = 0;
    // select current answer
    let newQuestions = currentTab.collections.map(collection => collection.questions.map(question => question.answers.map(answer => {
      if (collection.title === selectedCollection.title && question.title === selectedQuestion.title) {
        if (answer.title === selectedAnswer.title) {
          answer.isChecked = true;
        } else {
          answer.isChecked = false;
        }
      }
      if (answer.isChecked) {
        selectedItems.push(answer);
        totalCostMin += answer.costMin;
        totalCostMax += answer.costMax; 
      }
      return answer;
    })));
    
    this.setState({
      costMin: totalCostMin,
      costMax: totalCostMax,
      selectedItems: selectedItems,      
      newQuestions
    })
    // e.preventDefault();
  }

  onClickNext() {
    const { currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }

  render() {
    const { selectedItems, tabs, currentStep, costMin, costMax } = this.state;
    return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">React-Bootstrap Cost Calculator</Navbar.Brand>
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
      <br/>
      <Container fluid>
        <Row>
          <Col sm={3} md={4} lg={6}>
            <Card>
              <Card.Header>Video Production Cost Range:</Card.Header>
              <Card.Body>
                <Card.Title>
                  <p className="text-center">
                  ${ costMin } - ${ costMax }
                  </p>
                </Card.Title>
                {/* <Card.Text>
                  ${ costMin } - ${ costMax }
                </Card.Text> */}
                {/* <Button variant="primary">Save as PDF</Button> */}
              </Card.Body>
            </Card>
            <br/>
            
            <Table striped bordered hover responsive="xs">
              {/* <thead>
                <tr>
                  <th>Name</th>
                  <th>Cost Range</th>
                </tr>
              </thead> */}
              <tbody>
                { selectedItems.map((item, index) => (<tr key={`selectedService${index}`}>
                  <td>
                    {item.title}
                  </td>
                  <td>                  
                    ${ item.costMin } - ${ item.costMax }
                  </td>
                </tr>
                )
                )}
              </tbody>
            </Table>
            
          </Col>
          <Col sm={9} md={8} lg={6} style={{overflowY:'scroll', height: '85vh'}}>
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
                              {question.answers && question.answers.map((answer, index) => 
                                <div className="form-check"
                                // className="form-check form-check-inline"
                                >
                                  <input className="form-check-input" type="radio" 
                                  // name="inlineRadioOptions" 
                                  id={`inlineRadio${index}`} 
                                  // value={`option${index}`} 
                                  value={answer.title}
                                  onChange={(e) => this.reCalculate(e, collection, question, answer)} 
                                  checked={answer.isChecked} />
                                  <label className="form-check-label" for={`inlineRadio${index}`}>{answer.title}</label>
                                </div>
                              )}
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
