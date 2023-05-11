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
  const data = [
    {
      Asignatura: 'Cálculo I',
      Descripcion: {
        Info:'',
        Temas: []
      },
      Profesores: [
       
      ],
    },
    {
      Asignatura: 'Cálculo II',
      Descripcion: {
        Info:'',
        Temas: []
      },Profesores: [
       
      ],
    },
    {
      Asignatura: 'Cálculo III',
      Descripcion: {
        Info:'',
        Temas: []
      },
      Profesores: [
       
      ],
    },
    {
      Asignatura: 'Física I',
      Descripcion: {
        Info:'',
        Temas: []
      },
      Profesores: [
       
      ],
    },
    {
      Asignatura: 'Física II',
      Descripcion: {
        Info:'',
        Temas: []
      },
      Profesores: [
       
      ],
    },
    {
      Asignatura: 'Física III',
      DescriptionAsignatura: 'Electromagnetismo',
      Descripcion: {
        Info: 'Este curso cuenta con cinco capítulos: Electrostática, Corriente eléctrica continua, Campo magnético, Inducción electromagnética y Ecuaciones de Maxwell. En cada uno de estos capítulos aparecen problemas resueltos y al final de cada uno de ellos se ha dispuesto de una colección de problemas propuestos. El texto incluye un producto multimedia',
        Temas: ['Ley de Coulomb',
        'Campo Electrostático',
        'Potencial Electrostático',
        'Ley de Gauss',
        'Condensadores',
        'Experimento de Oersted',
        'Fuerza de Lorentz',
        'Ley de Ampere',
        'Efecto Hall',
        'Ley de Faraday',
        'Campo Electromagnetico',],
      },
      Profesores: [
        {
          name: 'Fidel Bautista Rodríguez Puertas',
          img: '',
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
