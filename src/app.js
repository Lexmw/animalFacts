import React from "react";
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';
import FlashCardDeck from './flashcardComps/flashCardDeck'
import Transition from './transitionPage'
import Quizlet from './quizComps/quiz'



export default class App extends React.Component {

  render() {
    return (
      <div>
      <Router>
         <Route exact path='/' component={ FlashCardDeck }/>
         <Route path='/takethequiz' component={Transition} />
         <Route path='/Quiz' component={ Quizlet }/>
      </Router>
      <div>
        <p>
            Made By Lexius Waltar 12/2019 |
            See Learning Can be Fun!
        </p>
      </div>
      </div>
     
    );
  }
}