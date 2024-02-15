import React, { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

const TextToSpeech = ({ text }) => {
  const { speak, cancel, voices } = useSpeechSynthesis();

  const [selectedVoice, setSelectedVoice] = useState(null);

  const handleSpeak = () => {
    speak({ text, voice: selectedVoice });
  };
  

  const handleCancel = () => {
    cancel();
  };

  const handleVoiceChange = (event) => {
    const selectedVoiceURI = event.target.value;
    const selectedVoice = voices.find(voice => voice.voiceURI === selectedVoiceURI);
    setSelectedVoice(selectedVoice);
  };
  
  
  
  

  return (
    <div>
      <p>{text}</p>
      <select value={selectedVoice ? selectedVoice.voiceURI : ''} onChange={handleVoiceChange}>
  {voices.map((voice) => (
    <option key={voice.name} value={voice.voiceURI}>
      {voice.name}
    </option>
  ))}
</select>

      <div className='flex gap-3'>
        <button onClick={handleSpeak} className='p-1 bg-green-800 rounded-3xl text-white font-bold'>Speak</button>
        <button onClick={handleCancel} className='px-2 bg-green-800 rounded-3xl text-white font-bold'>Stop</button>
      </div>
    </div>
  );
};

export default TextToSpeech;
