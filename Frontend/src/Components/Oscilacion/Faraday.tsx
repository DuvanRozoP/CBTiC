/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unknown-property */
/* eslint-disable import/no-extraneous-dependencies */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 faraday.glb -t
*/

import type * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { type GLTF } from 'three-stdlib';
import { type RefObject, forwardRef } from 'react';

type GLTFResult = GLTF & {
  nodes: {
    Text: THREE.Mesh;
    Text001: THREE.Mesh;
    NurbsCurve: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    NurbsCurve002: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
    Cube003: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube006: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube008: THREE.Mesh;
    Cube009: THREE.Mesh;
    Cube010: THREE.Mesh;
    Cube011: THREE.Mesh;
    Cube012: THREE.Mesh;
    Cube013: THREE.Mesh;
    Cube014: THREE.Mesh;
    Cube015: THREE.Mesh;
    Cube016: THREE.Mesh;
    Cube017: THREE.Mesh;
    Cube018: THREE.Mesh;
    Text002: THREE.Mesh;
    Text003: THREE.Mesh;
    Text004: THREE.Mesh;
    Cube019: THREE.Mesh;
    Text005: THREE.Mesh;
    Cube020: THREE.Mesh;
    Text006: THREE.Mesh;
  };
  materials: {
    ['Material.003']: THREE.MeshStandardMaterial;
    ['Material.004']: THREE.MeshStandardMaterial;
    ['Material.001']: THREE.MeshStandardMaterial;
    ['Material.009']: THREE.MeshStandardMaterial;
    ['Material.011']: THREE.MeshStandardMaterial;
    ['Material.006']: THREE.MeshStandardMaterial;
    ['Material.002']: THREE.MeshStandardMaterial;
    ['Material.014']: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ['Material.007']: THREE.MeshStandardMaterial;
    ['Material.008']: THREE.MeshStandardMaterial;
  };
};

interface FaradayProps {
  aguja: RefObject<THREE.Mesh>;
  corriente: RefObject<THREE.Mesh>;
}

// MutableRefObject<undefined>
const Faraday = forwardRef<THREE.Group, FaradayProps>((props, ref) => {
  const { nodes, materials } = useGLTF('/faraday.glb') as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group name='Scene'>
        <group name='animacion' ref={ref}>
          {/* NIMERO UNO */}
          <mesh
            name='Text'
            geometry={nodes.Text.geometry}
            material={materials['Material.003']}
            position={[0, 1.1, 0]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.33}
          />
          {/* NUMERO DOS */}
          <mesh
            name='Text001'
            geometry={nodes.Text001.geometry}
            material={materials['Material.004']}
            position={[0, -1.22, 0]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={0.33}
          />
          {/* ASPIARA */}
          <mesh
            name='NurbsCurve'
            geometry={nodes.NurbsCurve.geometry}
            material={materials['Material.001']}
            position={[0, 0.05, 0.01]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          />
          {/* DS */}
          <mesh
            name='Text002'
            geometry={nodes.Text002.geometry}
            material={nodes.Text002.material}
            position={[0.12, 0.04, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.3}
          />
          <mesh
            name='Cube017'
            geometry={nodes.Cube017.geometry}
            material={materials['Material.004']}
            position={[0.25, -0.01, -0.03]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[-0.03, -0.23, -0.04]}
          />
          <mesh
            name='Cube018'
            geometry={nodes.Cube018.geometry}
            material={nodes.Cube018.material}
            position={[0.32, 0.2, -0.02]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
            scale={[-0.01, -0.05, -0.01]}
          />
          {/* CORRIENTE SENTIDO */}
          <mesh
            ref={props.corriente}
            name='Cube016'
            geometry={nodes.Cube016.geometry}
            material={materials['Material.004']}
            position={[0, 0.04, 1.38]}
            rotation={[-Math.PI, 0, 0]}
            scale={[-0.02, 0, -0.08]}
          />
          {/* FINALIZA */}
        </group>
        <mesh
          name='Cube'
          geometry={nodes.Cube.geometry}
          material={materials['Material.009']}
          position={[0, 2.07, 0.02]}
          scale={[0.28, 0.4, 1.02]}
        />
        <mesh
          name='Cube001'
          geometry={nodes.Cube001.geometry}
          material={materials['Material.011']}
          position={[0, -2.09, 0.03]}
          scale={[0.28, 0.4, 1.02]}
        />
        <mesh
          name='Cylinder'
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.006']}
          position={[0, 0.04, -3.82]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.51, 0.18, 0.51]}
        />
        <mesh
          name='Cylinder001'
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.002']}
          position={[0.01, 0.02, -2.47]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.51, 0.18, 0.51]}
        />
        <mesh
          name='NurbsCurve002'
          geometry={nodes.NurbsCurve002.geometry}
          material={materials['Material.001']}
          position={[0.45, -0.78, -0.38]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <group
          name='Cube002'
          position={[-0.01, 1.5, -3.15]}
          scale={[0.33, 0.29, 0.41]}
        >
          <mesh
            name='Cube001_1'
            geometry={nodes.Cube001_1.geometry}
            material={nodes.Cube001_1.material}
          />
          <mesh
            name='Cube001_2'
            geometry={nodes.Cube001_2.geometry}
            material={materials['Material.014']}
          />
        </group>
        <mesh
          ref={props.aguja}
          name='Cube003'
          geometry={nodes.Cube003.geometry}
          material={materials.Material}
          position={[0.28, 1.36, -3.16]}
          scale={[0.01, 0.13, 0.13]}
        />
        <mesh
          name='Cube004'
          geometry={nodes.Cube004.geometry}
          material={materials['Material.007']}
          position={[0.29, 1.43, -2.9]}
          rotation={[-2.36, 0, -Math.PI]}
          scale={[0, -0.05, -0.01]}
        />
        <mesh
          name='Cube005'
          geometry={nodes.Cube005.geometry}
          material={materials['Material.008']}
          position={[0.28, 1.43, -3.42]}
          rotation={[2.36, 0, -Math.PI]}
          scale={[0, -0.05, -0.01]}
        />
        <mesh
          name='Cube006'
          geometry={nodes.Cube006.geometry}
          material={materials['Material.004']}
          position={[0, 1.53, -0.78]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Cube007'
          geometry={nodes.Cube007.geometry}
          material={materials['Material.004']}
          position={[0, 1.53, -0.41]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Cube008'
          geometry={nodes.Cube008.geometry}
          material={materials['Material.004']}
          position={[0, 1.53, -0.01]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Cube009'
          geometry={nodes.Cube009.geometry}
          material={materials['Material.004']}
          position={[0, 1.53, 0.39]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Cube010'
          geometry={nodes.Cube010.geometry}
          material={materials['Material.004']}
          position={[0, 1.53, 0.75]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Cube011'
          geometry={nodes.Cube011.geometry}
          material={materials['Material.004']}
          position={[0, -1.45, -0.77]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Cube012'
          geometry={nodes.Cube012.geometry}
          material={materials['Material.004']}
          position={[0, -1.45, -0.4]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Cube013'
          geometry={nodes.Cube013.geometry}
          material={materials['Material.004']}
          position={[0, -1.45, 0]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Cube014'
          geometry={nodes.Cube014.geometry}
          material={materials['Material.004']}
          position={[0, -1.45, 0.39]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Cube015'
          geometry={nodes.Cube015.geometry}
          material={materials['Material.004']}
          position={[0, -1.45, 0.76]}
          rotation={[-Math.PI, 0, 0]}
          scale={[-0.01, -0.11, -0.02]}
        />
        <mesh
          name='Text003'
          geometry={nodes.Text003.geometry}
          material={nodes.Text003.material}
          position={[0.38, 1.8, 0.29]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.72}
        />
        <mesh
          name='Text004'
          geometry={nodes.Text004.geometry}
          material={nodes.Text004.material}
          position={[0.34, -2.33, 0.22]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.74}
        />
        <mesh
          name='Cube019'
          geometry={nodes.Cube019.geometry}
          material={materials['Material.009']}
          position={[0, -2.9, 0.04]}
          scale={[0.28, 0.4, 1.02]}
        />
        <mesh
          name='Text005'
          geometry={nodes.Text005.geometry}
          material={nodes.Text005.material}
          position={[0.38, -3.16, 0.3]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.72}
        />
        <mesh
          name='Cube020'
          geometry={nodes.Cube020.geometry}
          material={materials['Material.011']}
          position={[0, 2.84, 0.02]}
          scale={[0.28, 0.4, 1.02]}
        />
        <mesh
          name='Text006'
          geometry={nodes.Text006.geometry}
          material={nodes.Text006.material}
          position={[0.34, 2.6, 0.16]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.76}
        />
      </group>
    </group>
  );
});
Faraday.displayName = 'Faraday';
useGLTF.preload('/faraday.glb');
export default Faraday;
