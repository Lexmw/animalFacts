import React from "react";
import Flashcard from "./flashcards.jsx";
const data = require('./animalData.json')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     AnimalFacts: []
    };
  }

  componentDidMount(){
    this.setState({AnimalFacts: data});
}

  render() {
    return (
      <div>
            <div id="header">
                <div>
                    <h1 id="title">Cool Animal Facts</h1>
                </div>
                <div id="button-holder">
                    <button className="button"> Take the Quiz! </button>
                </div>
            </div>

            <div className='flashcards'>
                {this.state.AnimalFacts.map((fact, index) => (  
                    <Flashcard 
                        name= {fact.name}
                        image= {fact.image}
                        habitat={fact.habitat}
                        food = {fact.food}
                        status = {fact.status}
                    />
                    ))
                }
            </div>        
        </div>
    );
  }
}