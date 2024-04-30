import React from 'react';
import styled from 'styled-components';

const SpeechBubble = styled.div`
  position: relative;
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  min-width: 300px;
  max-width: 600px;
  min-height: 200px;
  height: auto;
  align-items: center;
  justify-content: center;
  display: flex;

  &:after {
    content: '';
    position: absolute;
    bottom: -50px;
    right: -30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 100px 0 0 80px;
    border-color: white transparent transparent transparent;
    transform: rotate(-45deg);
  }
`;

const WhiteSpeechBubble = ({ text }) => {
  return (
    <SpeechBubble title={text}>
      {text}
    </SpeechBubble>
  );
};

export default WhiteSpeechBubble;