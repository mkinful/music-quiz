import './app.css';
import { useState } from 'react';
import Questions from './components/Questions';
import Quiz from './components/Quiz';

function App() {
  const [questionNumb, setQuestionNumb] = useState(1);

  <Questions />;

  const rewardSection = [
    { id: 1, amount: '$500' },
    { id: 2, amount: '$1000' },
    { id: 3, amount: '$2000' },
    { id: 4, amount: '$3000' },
    { id: 5, amount: '$5000' },
    { id: 6, amount: '$7500' },
    { id: 7, amount: '$10,000' },
    { id: 8, amount: '$12,500' },
    { id: 9, amount: '$15,000' },
    { id: 10, amount: '$25,000' },
    { id: 11, amount: '$50,000' },
    { id: 12, amount: '$100,000' },
    { id: 13, amount: '$250,000' },
    { id: 14, amount: '$500,000' },
    { id: 15, amount: '$1,000,000' },
  ].reverse();
  return (
    <div className="container">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Quiz />
        </div>
      </div>
      <div className="reward">
        <ul className="rewardList">
          {rewardSection.map((m) => (
            <li
              className={
                questionNumb === m.id
                  ? 'rewardListItem active'
                  : 'rewardListItem'
              }
            >
              <span className="rewardListItemNumb">{m.id}</span>
              <span className="rewardListItemAmt">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
