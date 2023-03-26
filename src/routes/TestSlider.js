import { useState } from 'react';
import styled from 'styled-components';

function TestSlider() {
    // const [left, setLeft] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className='test_container' style={{width: "100%"}}>
      <div className='btn_list' style={{textAlign: "right"}}>
        <button
          type='button'
          onClick={() => {
            // if (left < 0) setLeft(left + 310);
              if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
          }}
        >
          왼쪽
        </button>
        <button
          type='button'
          onClick={() => {
            // if (left > -1860) setLeft(left - 310);
              if (currentIndex < 10 - 4) setCurrentIndex(currentIndex + 1);
          }}
        >
          오른쪽
        </button>
      </div>
      <SliderContainer>
        <ul style={{ left: (currentIndex * -310) + 'px' }}>
          <li>0</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </ul>
      </SliderContainer>
    </div>
  );
}

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  ul {
    position: absolute;
    top: 0;
    padding: 0;
    display: flex;
    list-style: none;
    transition: 200ms ease-in-out;
    li {
      width: 310px;
      height: 310px;
      background-color: #ff4444;
      border: 3px solid blue;
    }
  }
`;

export default TestSlider;
