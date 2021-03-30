import React, { useEffect, useState } from "react";
import './../assets/style.css';
import quizService from "./../quizService/index";
import QuestionBox from "./../Components/QuizBee/QuestionBox";
import _ from "lodash";
import Result from "./../Components/QuizBee/Result";

function QuizBee() {
  const [questionBank, setQuestionBank] = useState([]);
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState(0);

  const getQuestions = () => {
    quizService()
      .then(res => {
        setQuestionBank(res);
      })
      .catch(err => console.error(err));
  }

  const computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      setScore(() => score + 1)
    }
    setResponse(() => response + 1)
  }

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="page-wrap">
      {response === 5 ?
        <Result score={score} playAgain={() => {
          getQuestions()
          setResponse(0)
          setScore(0)
        }} />
        : <> <div className="title">QuizBee</div>
          {!_.isEmpty(questionBank) && _.map(questionBank, ({ question, answers, correct, questionId }) => (
            <QuestionBox
              question={question}
              options={answers}
              key={questionId}
              selected={(answer) => computeAnswer(answer, correct)} />
          ))}
        </>}
    </div>
  );
}

export default QuizBee;
