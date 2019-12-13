import React from "react";
import Answer from "./Answer";

export default function Answers(props) {
  return (
    <div>
      <Answer
        letter="a"
        answer={props.question.a}
        handleClick={props.handleClick}
        selected={props.currentAnswer === "a"}
      />
      <Answer
        letter="b"
        answer={props.question.b}
        handleClick={props.handleClick}
        selected={props.currentAnswer === "b"}
      />
      <Answer
        letter="c"
        answer={props.question.c}
        handleClick={props.handleClick}
        selected={props.currentAnswer === "c"}
      />
      <Answer
        letter="d"
        answer={props.question.d}
        handleClick={props.handleClick}
        selected={props.currentAnswer === "d"}
      />
    </div>
  );
}
