import React, { useState } from "react";
import { Link } from "react-router-dom";
import Progress from "./Progress";
import Question from "./Question";
import Answers from "./Answers";
const questions = require("./questions.json");

export default function Quizlet() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');  
  
  const question = questions[currentQuestion];
  
  
  const handleClick = e => {
    setCurrentAnswer(e.target.value);
    console.log('this is clicked and the current answer is,'+ e.target.value)
  };

  const renderError = () => {
    if(!error){
      return;
    }
  return <div className='error'>{error}</div>
  }
  const submit = () => {
      const answer = {questionId: question.id, answer: currentAnswer}
      if(!currentAnswer){
        setError('Please Select an Option');
        return;
      }

      answers.push(answer);
      setAnswers(answers);
      setCurrentAnswer('');
      setError('');

      if(currentQuestion + 1 < questions.length){
        setCurrentQuestion(currentQuestion + 1);
        return;
      }

      setShowResults(true);
  };

  let score = 0;

  const renderResultMark = (question, answer) => {
      if(question.correct_answer === answer.answer){
        score += 1;
      return <span className='correct'>Correct</span>
    }
      score += 0;
  return <span className='failed'>Failed </span>
  }

  const showScore = () => {
    console.log('this is the object I am working with', score);
  return <h2>{score} / {questions.length}</h2>
  }

  const renderResultsData = () => {
    return answers.map(answer => {
      const question = questions.find(question => question.id === answer.questionId);
      return (
        <div>
          <div key={question.id}>
            {question.question} - {renderResultMark(question, answer)}
          </div>
        </div>
      );
    })
  }

  const restart = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setCurrentAnswer('');
    setShowResults(false);
  };

  if(showResults) {
    return (
      <div>
        <div id='results-header'>
          <h1 className='title'>Results</h1>
          <div id='score'>{showScore()}</div>
        </div>

        <div id='results-holder'>
          <ul>{renderResultsData()}</ul>
        </div>

        <div id='button-holder'>
          <Link><button onClick={restart}> Restart</button></Link>
          <Link to='/'><button> Return to FlashCards </button></Link> 
        </div>
      </div>
    )
  } else{}
  return (
    <div>
      <div id="header">
        <div>
          <h1 className="title">The Quiz!</h1>
        </div>
      </div>

      <div id="quiz-container">
        <Progress total={questions.length} current={currentQuestion + 1} />
        <Question question={question.question} />
          {renderError()}
        <Answers
          question={question}
          currentAnswer={currentAnswer}
          handleClick={handleClick}
        />
        <button onClick={submit}> Submit </button>
      </div>
    </div>
  );
}
