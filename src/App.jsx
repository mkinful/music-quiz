import './app.css';
import { useState, useEffect, useMemo } from 'react';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [questionNumb, setQuestionNumb] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');
  const [username, setUsername] = useState(null);

  const data = [
    {
      id: 1,
      question:
        'This "Back to the Future" composer gave The Avengers their iconic theme',
      answers: [
        {
          text: 'John Williams',
          correct: false,
        },
        {
          text: 'Shirley Walker',
          correct: false,
        },
        {
          text: 'Alan Silvestri',
          correct: true,
        },
        {
          text: 'Danny Elfman',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "This 1997 Anime gets it's name from this style of Jazz",
      answers: [
        {
          text: 'Rhapsody Blues',
          correct: false,
        },
        {
          text: 'Cowboy Bebop',
          correct: true,
        },
        {
          text: 'Gypsy Adventures',
          correct: false,
        },
        {
          text: 'Swing Steps',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question:
        'Often reffered to as the "Harry Potter" theme, what is the actual name for the theme that represents the franchise',
      answers: [
        {
          text: 'Hogwarts Forever',
          correct: false,
        },
        {
          text: "Harry's Wondrous World",
          correct: false,
        },
        {
          text: "Hedwick's Theme",
          correct: true,
        },
        {
          text: 'The Wizarding World',
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: 'The other name often given to the English Horn',
      answers: [
        {
          text: 'Cor Anglais',
          correct: true,
        },
        {
          text: 'Descant Recorder',
          correct: false,
        },
        {
          text: 'Duct Flute',
          correct: false,
        },
        {
          text: 'Hautbois',
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: 'The premier of this 1913 ballet, caused a riot in Paris',
      answers: [
        {
          text: 'The Firebird',
          correct: false,
        },
        {
          text: 'Swan Lake',
          correct: false,
        },
        {
          text: 'Daphnis and Chloe',
          correct: false,
        },
        {
          text: 'Rite of Spring',
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question:
        'Which of these movies with an iconic theme was not composed by John Williams ',
      answers: [
        {
          text: 'Raiders of the Lost Ark',
          correct: false,
        },
        {
          text: 'The Shadow',
          correct: true,
        },
        {
          text: "Schindler's List",
          correct: false,
        },
        {
          text: 'E.T.',
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question:
        'Often referred to as "Con Sord" or "Con Sordino", this marking on the sheet music tells the player to do what with their instrument?',
      answers: [
        {
          text: 'Play it with more force',
          correct: false,
        },
        {
          text: 'Play it with less force',
          correct: false,
        },
        {
          text: 'Play it with mutes',
          correct: true,
        },
        {
          text: 'Play it with a soft mallet',
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: 'The musical term meaning "To Seperate',
      answers: [
        {
          text: 'Divisi',
          correct: false,
        },
        {
          text: 'Divido',
          correct: false,
        },
        {
          text: 'Apagado',
          correct: true,
        },
        {
          text: 'Arpeggio',
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question:
        'This instrument is part of the woodwind family, despite being made of brass.',
      answers: [
        {
          text: 'Bassoon',
          correct: false,
        },
        {
          text: 'Bass Clarinet',
          correct: false,
        },
        {
          text: 'Saxophone',
          correct: true,
        },
        {
          text: 'Bass Flute',
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        'When the string players see this articulation, they are instructed to pluck their instruemtnts.',
      answers: [
        {
          text: 'Tremelo',
          correct: false,
        },
        {
          text: 'Pizzicato',
          correct: true,
        },
        {
          text: 'Ritarndo',
          correct: false,
        },
        {
          text: 'Crescendo',
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        'Known for his iconic leitmotifs and his equally iconic turtlenecks, this humble Maestro was one a Jazz Pianist',
      answers: [
        {
          text: 'Howard Shore',
          correct: true,
        },
        {
          text: 'Michael Giacchino',
          correct: false,
        },
        {
          text: 'James Horner',
          correct: false,
        },
        {
          text: 'James Horner',
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: 'To raise a note by a half step',
      answers: [
        {
          text: 'Flat',
          correct: false,
        },
        {
          text: 'Whole Step',
          correct: false,
        },
        {
          text: 'Double Flat',
          correct: false,
        },
        {
          text: 'Sharp',
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: 'How many flats does G Major have',
      answers: [
        {
          text: '6',
          correct: true,
        },
        {
          text: '12',
          correct: false,
        },
        {
          text: '3',
          correct: false,
        },
        {
          text: '1',
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: 'You will find the Celesta in this section of the orchestra.',
      answers: [
        {
          text: 'Strings',
          correct: false,
        },
        {
          text: 'Pitched Percussion',
          correct: false,
        },
        {
          text: 'Tuned Percussion',
          correct: true,
        },
        {
          text: 'Keyboard',
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question:
        'This Avant Garde music style was the driving force behind Jerry Goldsmith\'s "Freud and "Planet of the Apes" scores.',
      answers: [
        {
          text: 'Atonal',
          correct: true,
        },
        {
          text: 'Jazz',
          correct: false,
        },
        {
          text: 'Electronic',
          correct: false,
        },
        {
          text: 'New Age',
          correct: false,
        },
      ],
    },
  ];

  const rewardSection = useMemo(
    () =>
      [
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
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumb > 1 &&
      setEarned(rewardSection.find((m) => m.id === questionNumb - 1).amount);
  }, [rewardSection, questionNumb]);
  return (
    <div className="container">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned} </h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumb={questionNumb} />
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    setStop={setStop}
                    setQuestionNumb={setQuestionNumb}
                    questionNumb={questionNumb}
                  />
                </div>
              </>
            )}
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
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
