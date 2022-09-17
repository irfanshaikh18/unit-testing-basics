import React from 'react';
import Output from './Output';

const Content = () => {
  const [changeText, setChangeText] = React.useState(false);
  
  const changeTextHandler = () => {
    setChangeText(true);
  }

  return (
    <div>
      <h2>Test Driven Development</h2>
      {!changeText && <Output>Testing is boring..</Output>}
      {changeText && <Output>But It is an important SDLC phase!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  )
}

export default Content;