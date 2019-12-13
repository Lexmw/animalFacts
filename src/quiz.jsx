import React from 'react';
import { Link } from 'react-router-dom'
// const questions = require('questions.json');

export default class Quizlet extends React.Component{

        render(){
            return(
                <div>
                    <h1>Cool Animal Facts Quiz!</h1>
                    <h2> what did you learn from the flashcards?</h2>
                    <Link to='/'>
                      <button> Back to FlashCards</button>    
                    </Link>

                    <h3>Question: This is where the question would go!</h3>

                    <p>Option 1</p>
                    <p>Option 2</p>
                    <p>Option 3</p>
                    <p>Option 4</p>
                    <p>Option 5</p>
                </div>
            )
        }
}