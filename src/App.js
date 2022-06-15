import { useCallback, useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Quiz from './Quiz';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [listQuiz, setListQuiz] = useState([]);
  const listColor = ['secondary', 'primary', 'success', 'info', 'warning'];
  const [totalScore, setTotalScore] = useState(0);

  const handleCalScore = useCallback(
    (value) => {
      if (value === 10) {
        toast.success(`Correct answer! Score: ${totalScore + 10}`, {
          position: 'top-right',
          autoClose: 2000,
        });
      } else {
        toast.error(`Incorrect answer! Score: ${totalScore}`, {
          position: 'top-right',
          autoClose: 2000,
        });
      }
      setTotalScore(totalScore + value);
    },
    [totalScore]
  );

  useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.results);
        setListQuiz(data.results);
      })
      .catch((error) => {
        console.log('Có chạy vào .catch, :', error);
      });
  }, []);

  return (
    <Container className="mb-5 mt-5">
      <ToastContainer />
      <div className="welcome">
        <h3>Questions Football</h3>
        <h5>Score: {totalScore}</h5>
      </div>

      {listQuiz.map((quiz, index) => {
        return (
          <Quiz
            key={index}
            color={listColor[index]}
            question={quiz.question}
            correct_answer={quiz.correct_answer}
            listAnswer={quiz.incorrect_answers}
            difficulty={quiz.difficulty}
            category={quiz.category}
            onCalScore={handleCalScore}
          />
        );
      })}
    </Container>
  );
};

export default App;
