import './finish.css';
import done from '../finish/done.png';

function Finish() {
  return (
    <div className="finish_main-box">
      <h1>DONE!</h1>
      <p className="progression-wrapper">
        <p className="progression" style={{ width: '100%' }}></p>
      </p>
      <img src={done} alt="Logo" className="image_done" />
      <p className="correct_answers">Correct: 5 of 10</p>
    </div>
  );
}

export default Finish;
