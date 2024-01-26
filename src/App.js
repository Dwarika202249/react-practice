import './App.css';
import Accordian from './components/accordian/Accordian';
import ImageSlider from './components/imageslider/ImageSlider';
import ProductListing from './components/productlisting/ProductListing';
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

      {/* Image Slider Component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'3'} />

      {/* Product Listing Component */}
      <ProductListing />
    </>
  );
}

export default App;
