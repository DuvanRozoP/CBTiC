import React from 'react';
import './Carousel.css';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  borderRadius: '15px',
  background: '#364d79',
};

const AppCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} className="Carousel">
      <div className="Carousel">
        <h3 className="Slick">1</h3>
      </div>
      <div className="Carousel"> 
        <h3 className="Slick">2</h3>
      </div>
      <div className="Carousel">
        <h3 className="Slick">3</h3>
      </div>
      <div className="Carousel">
        <h3 className="Slick">4</h3>
      </div>
    </Carousel>
  );
};

export default AppCarousel;