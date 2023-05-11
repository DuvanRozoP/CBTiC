import type { controller } from '../../Helpers/response';

type temas = {
  Info: string;
  Temas: string[];
};

type Profesores = {
  name: string;
  img: string;
};

type Interacciones = {
  name: string;
  description: string;
  path: string;
};

type Libros = {
  name: string;
  description: string;
  autor: string;
};

type Asignatura = {
  Asignatura: string;
  DescriptionAsignatura: string;
  Descripcion: temas;
  Profesores: Profesores[];
  Interacciones: Interacciones[];
  Libros: Libros;
};

export default function getAsignaturas(): Promise<controller> {
  const data: Asignatura[] = [
    {
      Asignatura: 'Fisica III',
      DescriptionAsignatura: 'Electromagnetismo',
      Descripcion: {
        Info: '',
        Temas: ['Ley De Faraday', 'Ley De Gauss'],
      },
      Profesores: [
        {
          name: 'Fidel Bautista Rodríguez Puertas',
          img: 'se la debo',
        },
      ],
      Interacciones: [
        {
          name: 'Onda Electromagnetica',
          description: 'simulacion de la Onda Electromagnetica',
          path: '/multimedia/ondaelectromagnetica',
        },
        {
          name: 'Ley de Faraday',
          description: 'simulacion de la ley de faraday',
          path: '/multimedia/leydefaraday',
        },
      ],
      Libros: {
        name: '',
        description: '',
        autor: '',
      },
    },
  ];
  const promise = new Promise((resolve) => {
    resolve({
      statusOk: 200,
      message: data
    });
  });
  return promise;
}
