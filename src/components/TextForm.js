import { useState } from 'react';

export default function TextForm({ heading }) {
  const [text, setText] = useState('');

  //   Handler for Uppercase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //   Handler for Lowercase
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //   Handler for Copying
  const handleCopyClick = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  //   Handler for Extra Spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
  };

  //   Handler for Clearing
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  //   Handler for onChange
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className='container'>
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
        <button onClick={handleUpClick} className='btn btn-primary mx-1'>
          Convert to Uppercase
        </button>
        <button onClick={handleLoClick} className='btn btn-primary mx-1'>
          Convert to Lowercase
        </button>
        <button onClick={handleCopyClick} className='btn btn-primary mx-1'>
          Copy Text
        </button>
        <button onClick={handleExtraSpaces} className='btn btn-primary mx-1'>
          Remove Extra Spaces
        </button>
        <button onClick={handleClearClick} className='btn btn-danger mx-1'>
          Clear Text
        </button>
      </div>
      <div className='container my-3'>
        <h3>Your Text Summary</h3>
        <p>
          {text.split(' ').length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
