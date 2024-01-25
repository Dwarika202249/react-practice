import './App.css';
import Accordian from './components/accordian/Accordian';
import RandomColor from './components/randomcolor/RandomColor';
import StarRating from './components/starrating/StarRating';

function App() {
  return (
    <>
      {/* Accordian Component */}
      <Accordian />
      {/* Random Color Component */}
      <RandomColor />
      {/* Start Rating Component */}
      <StarRating noOfStars={5} />
    </>
  );
}

export default App;
