import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = ({ text }) => {
  const { speak, cancel } = useSpeechSynthesis();

  const handleSpeak = () => {
    speak({ text });
  };

  const handleCancel = () => {
    cancel();
  };

  return (
    <div>
      <p>{text}</p>
      <div>
        <button onClick={handleSpeak}>Speak</button>
        <button onClick={handleCancel}>Stop</button>
      </div>
    </div>
  );
};

export default TextToSpeech;
