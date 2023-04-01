import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button, Container, Paper, Typography,
} from '@mui/material';
import './QuizResultWindow.css';

const btnStyles = {
  color: 'white',
  borderColor: '#F7EC59',
  '&:hover': {
    borderColor: '#FEC601',
  },
};

function QuizResultWindow({
  score,
  totalQuestions,
  setIsEnded,
  setScore,
  setIsStarted,
  setIndex,
}) {
  const crateCongratulationsText = () => {
    if (score < totalQuestions / 2) return 'Keep practicing!';
    if (score === totalQuestions / 2) return 'Nice one!';
    if (score > totalQuestions / 2 && score !== totalQuestions) return 'Good job!';
    if (score === totalQuestions) return 'Perfect!';
  };

  const tryAgain = () => {
    setScore(0);
    setIndex(0);
    setIsStarted(false);
    setIsEnded(false);
  };

  return (
    <Paper
      className="quiz-result-window"
      sx={{
        color: 'white',
        backgroundColor: '#252422',
      }}
      elevation={0}
    >
      <Typography variant="h2" gutterBottom>
        {crateCongratulationsText()}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {score} / {totalQuestions}
      </Typography>

      <Container className="buttons">
        <Button
          sx={btnStyles}
          variant='outlined'
          onClick={() => tryAgain()}
        >
            Try again
        </Button>
        <Button sx={btnStyles} variant='outlined'>
          <Link to="/quizzes">
            Back to quizzes
          </Link>
        </Button>
      </Container>
    </Paper>
  );
}

export default QuizResultWindow;