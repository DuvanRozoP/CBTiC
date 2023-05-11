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
      DescriptionAsignatura:'Diferencial',
      Descripcion: {
        Info:'El cálculo diferencial integra el pensamiento analítico con el comportamiento real de los sistemas físicos. Muchas situaciones de la física, la química, la economía y otras, pueden modelarse como razones de cambio, tema del que se ocupa el Cálculo Diferencial. Para un ingeniero es indispensable aplicar las matemáticas y en especial el cálculo infinitesimal en la descripción, interpretación y modelación de fenómenos físicos y en la optimización de los recursos de un sistema y la predicción de riesgos, entre otros.',
        Temas: [
          'Matemática básica',
          'Funciones y límites',
          'Operador Derivada',
          'Aplicación de las derivadas. Puntos críticos de una función',
          'Aplicación de la derivada a problemas de la física'
        ]
      },
      Profesores: [
        {
          name:'Wilder Arleht Angarita Osorio',
          img:'http://localhost:3003/cvImg/Wilder_Arleht_Angarita_Osorio.png'
        },
       {
        name:'Alfonso Nicolas Romero Arias',
        img:'http://localhost:3003/cvImg/Alfonso_Nicolas_Romero_Arias.png'
       },
       {
        name:'Carlos Alberto Osorio Pérez',
        img:'http://localhost:3003/cvImg/Carlos_Alberto_Osorio_Pérez.png'
       },
       {
        name:'Wilmer Spilberg Bustos Adrada',
        img:'http://localhost:3003/cvImg/Wilmer_Spilberg_Bustos_Adrada.png'
       }
      ],
      Interacciones: [
        
      ]
    },
    {
      Asignatura: 'Cálculo II',
      Descripcion: {
        Info:'',
        Temas: []
      },Profesores: [
       
      ],
      Interacciones: [
        
      ]
    },
    {
      Asignatura: 'Cálculo III',
      Descripcion: {
        Info:'',
        Temas: []
      },
      Profesores: [
       
      ],
      Interacciones: [
        
      ]
    },
    {
      Asignatura: 'Física I',
      Descripcion: {
        Info:'',
        Temas: []
      },
      Profesores: [
       
      ],
      Interacciones: [
        
      ]
    },
    {
      Asignatura: 'Física II',
      Descripcion: {
        Info:'',
        Temas: []
      },
      Profesores: [
       
      ],
      Interacciones: [

      ]
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
          img: 'http://localhost:3003/cvImg/Fidel_Bautista_Rodríguez_Puertas.png',
        },
        {
          name: 'Carlos Alberto Osorio Pérez',
          img:'http://localhost:3003/cvImg/Carlos_Alberto_Osorio_Pérez.png'
        },
        {
          name: 'Ivon Eliana Parra Cubillos',
          img: 'http://localhost:3003/cvImg/Ivon_Eliana_Parra_Cubillos.png',
        }
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
