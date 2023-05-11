/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
import { create } from 'zustand';

// const area = 0.04 ** 2; // 4^2
const vetoresIntensidad = 3;
const TWO_PI = 2 * Math.PI; // 2pi;

interface State {
  stop: boolean;
  frecuencia: number;
  femInducida: number;
  area: number;
  updateStop: () => void;
  updateFrecuencia: (frecuencia: number) => void;
  updateArea: (area: number) => void;
  updateFemInducida: (frecuencia: number, time: number) => void;
}

const stateOperation = create<State>((set) => ({
  stop: false,
  frecuencia: 1,
  femInducida: 0,
  area: 0,
  updateStop: () => {
    set((state) => ({ stop: !state.stop }));
  },
  updateFrecuencia: (frecuencia: number) => {
    set({ frecuencia });
  },
  updateArea: (area: number) => {
    set({ area });
  },
  updateFemInducida: (frecuencia: number, time: number) => {
    set((state) => {
      const calcular =
        state.area *
        vetoresIntensidad *
        TWO_PI *
        Math.sin(TWO_PI * frecuencia * time);
      return { femInducida: (calcular * 100) / 100 };
    });
  },
}));

export default stateOperation;
