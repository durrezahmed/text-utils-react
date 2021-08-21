import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar title='TextUtils' aboutText='About' />

      {/* Text Form */}
      <div className='container my-3'>
        <TextForm heading='Enter the Text to Analyze' />
      </div>
    </>
  );
}

export default App;
