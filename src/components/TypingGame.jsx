import React, { useState, useEffect, useRef } from 'react';
//import faker from 'faker';

const TypingGame = () => {
  const [text, setText] = useState('random text');
  const [userInput, setUserInput] = useState('');
  const [time, setTime] = useState(30); // Starting time in seconds
  const [isGameOver, setIsGameOver] = useState(false);
  const [wpm, setWpm] = useState(0);
  const inputRef = useRef(null);

  // Start the game and focus on input
  useEffect(() => {
    // inputRef.current.focus();
    // const interval = setInterval(() => {
    //   setTime((prevTime) => {
    //     if (prevTime <= 0) {
    //       clearInterval(interval);
    //       setIsGameOver(true);
    //       calculateWPM();
    //       return 0;
    //     }
    //     return prevTime - 1;
    //   });
    // }, 1000);

    // return () => clearInterval(interval);
  });

  const calculateWPM = () => {
    const wordsTyped = userInput.trim().split(' ').length;
    setWpm((wordsTyped / (30 - time)) * 60);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setUserInput(value);

    // Move text horizontally based on length of input
    const progress = (value.length / text.length) * 100;
    document.documentElement.style.setProperty('--text-progress', `${progress}%`);

    // Check if the text matches
    if (value === text) {
      setText('faker.lorem.sentence()'); // Generate new text
      setUserInput(''); // Reset input
    }
  };

  const handleReset = () => {
    setText('faker.lorem.sentence()0000');
    setUserInput('');
    setTime(30);
    setIsGameOver(false);
    setWpm(0);
    // inputRef.current.focus();
  };

  const handleTimeChange = (adjustment) => {
    console.log("time variation", adjustment);
    
    setTime((prevTime) => Math.max(0, prevTime + adjustment));
  };
console.log("time", time);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Test your Typing</h1>

    <div style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }}> 
      <button onClick={() => handleTimeChange(-10)} disabled={userInput.length>0}>-</button>
      <p>Time: {time}s</p>
      <i class="fa-light fa-timer"></i>
      <button onClick={() => handleTimeChange(10)} disabled={userInput.length>0}>+</button>
    </div>
      <button onClick={handleReset}>Restart</button>

      {/* <div style={{ position: 'relative', overflow: 'hidden', height: '30px' }}>
        <p style={{
          position: 'absolute',
          left: 'var(--text-progress, 50%)',
          transition: 'left 0.1s ease-out'
        }}>{text}</p>
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        ref={inputRef}
        disabled={isGameOver}
        placeholder="Start typing..."
      /> */}
      <p>WPM: {wpm}</p>
    </div>
  );
};

export default TypingGame;
