import style from "./Slider.module.scss";
import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import { useEffect, useState } from "react";

export const Slider = () => {
  const imageArray = [slide1, slide2, slide3];
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextIndex() {
    if (currentIndex === imageArray.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function previousIndex() {
    if (currentIndex === 0) {
      setCurrentIndex(imageArray.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      nextIndex();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <header className={style.slider}>
      <img src={imageArray[currentIndex]} alt="" />
      <h2>Vi elsker at lave brød</h2>
      <button onClick={() => previousIndex()}>left</button>
      <button onClick={() => nextIndex()}>right</button>
      <div>
        <span onClick={() => setCurrentIndex(0)}>1</span>
        <span onClick={() => setCurrentIndex(1)}>2</span>
        <span onClick={() => setCurrentIndex(2)}>3</span>
      </div>
    </header>
  );
};
