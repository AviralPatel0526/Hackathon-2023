import React from 'react'
import TextToSpeech from './TextToSpeech'
function Footer() {
  const textToReadAloud = "Hello, this is an example text for text-to-speech. Doors allow entry and exit from the room. They may be solid or have windows, and they can be hinged, sliding, or foldingThe walls of a room provide structural support and serve as a canvas for decoration. They may include windows, doors, and possibly built-in features like shelving or a fireplace";
  return (
  <>
  <div className='h-[10vh] w-full flex items-center justify-between p-4'>
  <div><img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc57725c-8ab0-43ad-a8c1-24eb43956f47?apiKey=0e2d2b3fdaa848b2ac6dc9f62f11a5f8"/></div>
    <div><p>© Copyright 2023, All rights reserved</p></div>

  </div>
  <div>
  <h1>Text-to-Speech Example</h1>
      <TextToSpeech text={textToReadAloud} />
  </div>
  </>
  )
}

export default Footer
