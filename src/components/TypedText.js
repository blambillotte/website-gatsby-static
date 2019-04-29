import React from 'react';
import Typing from 'react-typing-animation';

const TypedText = () => (
  <Typing speed={230} loop={true} startDelay={1000}>
    <span>Engineer</span>
    <Typing.Backspace count={9} delay={2000} />
    <span>Product Manager</span>
    <Typing.Backspace count={16} delay={2000} />
    <span>Musician</span>
    <Typing.Backspace count={9} delay={2000} />
  </Typing>
);

export default TypedText;
