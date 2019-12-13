import React from "react";
import { Link } from "react-router-dom";

export default class Transition extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Cool Animal Facts</h1>
        <p id='transition-message'>
          Lets see what you remember!<br/>
          Here a few questions about the animals you saw in the flash cards!<br/>
          Good Luck!
        </p>

        <div id='transition-button-holder'>
            <Link to="/Quiz" id='a-start-quiz'>
                <button id="start-button">Start Quiz</button>
            </Link>

            <Link to="/" id='a-arrow-button'>
                <button id="back-to-flashcards">
                    <div id="triangle-left" className='arrow'></div>
                    <div id="rectangle" className='arrow'>Back to FlashCards</div>
                </button> 
            </Link>
        </div>
      </div>
    );
  }
}
