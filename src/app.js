import React from "react";
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';
import FlashCardDeck from './flashCardDeck'
import Transition from './transitionPage'
import Quizlet from './quiz'



export default class App extends React.Component {

  render() {
    return (
      <Router>
         <Route exact path='/' component={ FlashCardDeck }/>
         <Route path='/takethequiz' component={Transition} />
         <Route path='/Quiz' component={ Quizlet }/>
      </Router>
     
    );
  }
}