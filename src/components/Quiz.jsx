import './quiz.css';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import start from '../assets/start.wav';
import correct from '../assets/correct.wav';
import wrong from '../assets/wrong.wav';

export default function Quiz({ data, setStop, questionNumb, setQuestionNumb }) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState('answer');
  const [startGame] = useSound(start);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    setQuestion(data[questionNumb - 1]);
  }, [data, questionNumb]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName('answer active');
    delay(2000, () =>
      setClassName(a.correct ? 'answer correct' : 'answer wrong')
    );
    delay(4000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumb((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="quiz">
      <div className="questions">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : 'answer'}
            onClick={() => handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
