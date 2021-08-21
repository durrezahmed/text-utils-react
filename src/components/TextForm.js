import { useState } from 'react';

export default function TextForm({ heading }) {
  const [text, setText] = useState('Enter text here');

  //   Handler for Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //   Handler for onChange
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>{heading}</h2>
      <div className='mb-3'>
        <textarea
          className='form-control'
          id='myBox'
          rows='8'
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button onClick={handleUpClick} className='btn btn-primary'>
        Convert to Uppercase
      </button>
    </div>
  );
}
