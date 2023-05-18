// import Operation from '../Operation/Operation';
import { Suspense, lazy } from 'react';

import './LeyDeFaraday.css';
import { OrbitControls, Preload, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const LazyOscilation = lazy(
  async () => await import('../Oscilacion/Oscilacion')
);
const Operation = lazy(async () => await import('../Operation/Operation'));

function LeyDeFaraday() {
  return (
    <div className='app'>
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas
          camera={{ position: [0.1, 0.01, 0], fov: 40 }}
          eventPrefix='client'
          style={{
            width: '90%',
            height: '100vh',
          }}
        >
          <Stage>
            <LazyOscilation />
            <Preload all />
          </Stage>
          <OrbitControls/>
        </Canvas>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <Operation />
      </Suspense>
    </div>
  );
}

export default LeyDeFaraday;
