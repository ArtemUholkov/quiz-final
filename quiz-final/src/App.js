import React from 'React';
import './App.css';
import Start from './components/start/Start';
import Finish from './components/finish/finish';

const questions = [
  {
    question: 'How old are you?',
    answlist: ['20', '30', '40'],
    correct: 1,
  },
  {
    question: 'What is your Name?',
    answlist: ['Artem', 'Oleg', 'Marta'],
    correct: 2,
  },
  {
    question: 'Where did you study?',
    answlist: ['LAG', 'NULP', 'SW45'],
    correct: 0,
  },
];

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickAnswer = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Start
          questions={questions}
          step={step}
          question={question}
          onClickAnswer={onClickAnswer}
        />
      ) : (
        <Finish questions={questions} correct={correct} />
      )}
    </div>
  );
}

export default App;
