/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { memo, useEffect, useRef, useCallback } from 'react';
// import Circuito from './Circuito-completo';
import Faraday from './Faraday';
import stateOperation from '../../store/state';

function Oscilation() {
  const { updateFemInducida, frecuencia, femInducida, stop } = stateOperation(
    (state) => state
  );

  const meshRef = useRef<THREE.Group>(null);
  const aguja = useRef<THREE.Mesh>(null);
  const corriente = useRef<THREE.Mesh>(null);
  const currentRotation = useRef(0);

  const updateRotation = useCallback(() => {
    currentRotation.current += (2 * Math.PI * frecuencia) / 45;
    const tiempoActual = currentRotation.current / (2 * Math.PI * frecuencia);
    updateFemInducida(frecuencia, tiempoActual);

    if (aguja.current) aguja.current.rotation.x = -femInducida;
    if (corriente.current) corriente.current.scale.y = -femInducida;
    if (meshRef.current) meshRef.current.rotation.z = currentRotation.current;
  }, [femInducida, frecuencia]);

  useEffect(() => {
    let intervalRef: number | undefined;
    if (stop) intervalRef = setInterval(updateRotation, 1000 / 45);

    return () => {
      clearInterval(intervalRef);
    };
  }, [stop, updateRotation]);

  return <Faraday aguja={aguja} corriente={corriente} ref={meshRef} />;
}

export default memo(Oscilation);
