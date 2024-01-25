import { useEffect, useState } from "react";
import "./imageslider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  if (loading) {
    return <div className="loading">Please Wait...</div>;
  }

  if (errorMsg !== null) {
    return <div className="error">Something Went Wrong!! {errorMsg} </div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  function handleForward() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }
 
  return (
    <div className="imageSlidercontainer">
      <h1 className="project4">PROJECT 4 - IMAGE SLIDER</h1>
      <div className="imageSlider">
        <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />
        {images && images.length
          ? images.map((img, index) => (
              <img
                key={img.id}
                src={img.download_url}
                alt={img.download_url}
                className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
              />
            ))
          : null}
        <BsArrowRightCircleFill onClick={handleForward} className="arrow arrow-right" />
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"} onClick={() => setCurrentSlide(index)}></button>)
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
