import React from 'react';
import Left from '../../assets/icons/arrow left.svg';
import Right from '../../assets/icons/Arrow right.svg';
import './Slider.css';

interface PropsSlider {
  imgs: string[];
}

function Slider({ imgs }: PropsSlider) {
  const [imagenActual, setImagenActual] = React.useState(0);
  const cantidad = imgs?.length;

  if (cantidad === 0) {
    return <div></div>;
  }

  const nextimg = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const previmg = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <div className='ContainerSlider'>
      {imgs.map((imagen, index) => {
        return (
          <div
            className={
              imagenActual === index ? 'slide slide active' : 'DisableImg'
            }
            key={index}
          >
            <div className='ImgContainer'>
              <img className='ImgStyle' src={imagen} alt='' />
              <div className='BtnContainer'>
                <button onClick={previmg} className='BtnSlide Right'>
                  <img src={Right} alt='Right' />
                </button>
                <button onClick={nextimg} className='BtnSlide Left'>
                  <img src={Left} alt='Left' />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Slider;