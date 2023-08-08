import './start.css';

function Start({ questions, question, onClickAnswer, step }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <div className="main-box">
      <p className="progression-wrapper">
        <p className="progression" style={{ width: `${percentage}%` }}></p>
      </p>
      <p className="question">{question.question}</p>
      <p className="answers-list">
        {question.answlist.map((text, index) => (
          <p onClick={() => onClickAnswer(index)} className="aswer" key={index}>
            {text}
          </p>
        ))}
      </p>
    </div>
  );
}

export default Start;
