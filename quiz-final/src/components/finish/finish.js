import './finish.css';
import done from '../finish/done.png';

function Finish({ questions, correct }) {
  return (
    <div className="finish_main-box">
      <h1>DONE!</h1>
      <p className="progression-wrapper">
        <p className="progression" style={{ width: '100%' }}></p>
      </p>
      <img src={done} alt="Logo" className="image_done" />
      <p className="correct_answers">
        Correct: {correct} of {questions.length}
      </p>
    </div>
  );
}

export default Finish;
