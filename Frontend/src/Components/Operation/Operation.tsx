/* eslint-disable react/button-has-type */
import './Operation.css';
import { Slider } from 'antd';
import stateOperation from '../../store/state';

function Operation() {
  const {
    stop,
    frecuencia,
    area,
    femInducida,
    updateStop,
    updateFrecuencia,
    updateArea,
  } = stateOperation(state => state);

  const updateF = (checked: number) => {
    updateFrecuencia(checked);
  };

  const updateA = (checked: number) => {
    updateArea(checked);
  };

  return (
    <section className="containerOperation">
      <div>
        <p>Frecuencia: {frecuencia}</p>
        <Slider
          defaultValue={0}
          max={1}
          min={0}
          step={0.1}
          onChange={updateF}
        />
      </div>
      <div>
        <p>Area: {area}</p>
        <Slider
          defaultValue={0.01}
          max={0.05}
          min={0.01}
          step={0.01}
          onChange={updateA}
        />
      </div>
      <p>Fem inducida:</p>
      <p>{femInducida.toFixed(2)}</p>
      <button className={stop ? 'stop' : 'play'} onClick={updateStop}>
        {stop ? 'Stop' : 'Play'}
      </button>
    </section>
  );
}

export default Operation;
