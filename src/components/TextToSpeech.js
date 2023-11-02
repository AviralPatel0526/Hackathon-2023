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
      <div className='flex gap-3'>
        <button onClick={handleSpeak} className='p-1 bg-green-800 rounded-3xl text-white font-bold'>Speak</button>
        <button onClick={handleCancel} className='px-2 bg-green-800 rounded-3xl text-white font-bold'>Stop</button>
      </div>
    </div>
  );
};

export default TextToSpeech;
