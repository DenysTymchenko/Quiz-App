import React from 'react';
import Typography from '@mui/material/Typography';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const h1Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '4rem',
    fontWeight: 600,
  },
};

const h2Styles = {
  textAlign: 'center',
  '@media (max-width:600px)': {
    fontSize: '2rem',
  },
};

function HeroSection() {
  return (
    <section className='hero h100vh'>
      <video src='./assets/hero.mp4' autoPlay loop muted></video>
      <div className='wrapper'>
        <Typography variant='h1' gutterBottom sx={h1Styles}>
          Welcome to Code Quizzer!
        </Typography>
        <Typography variant='h2' gutterBottom sx={h2Styles}>
          Place where you can check your programing skills.
        </Typography>
        <a href='#quizzes'>
          <KeyboardDoubleArrowDownIcon style={{ width: '50px', height: '50px' }}/>
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
