import fs from 'fs';
import type { controller } from '../../Helpers/response';
import { isEmpty } from '../../Helpers/validate';

export function getCv(origin: string): Promise<controller> {
  try {
    isEmpty(origin);
    const files = fs.readdirSync('src/public/cv/');

    const send = files.map((file) => ({
      name: file.replace(/_/g, ' ').split('.')[0],
      url: `http://localhost:3003/cv/${file}`,
    }));
    const data = {
      statusOk: 200,
      message: send,
    };

    const promise = new Promise((resolve) => {
      resolve(data);
    });
    return promise;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export function getTeacher(): Promise<controller> {
  const data = [
    {
      name: 'Alfonso Nicolas Romero Arias',
      img: 'http://localhost:3003/cvImg/Alfonso_Nicolas_Romero_Arias.png',
      titulo:
        'Licenciado en Matematicas y Fisica, Universidad de los Llanos, 2022',
      asignaturas: [
        'Fisica y Laboratiorios Mecanica',
        'Estadistica Descriptiva',
        'Fisica Fluidos y Ondas',
        'Algebra Lineal',
        'Calculo Diferencial',
        'Laboratirio Mecanica',
      ],
    },
    {
      name: 'Carlos Alberto Osorio Perez',
      img: 'http://localhost:3003/cvImg/Carlos_Alberto_Osorio_Pérez.png',
      titulo:
        'icenciado en matemáticas y física. Universidad de los llanos 2010',
      asignaturas: [
        'Probabilidad y estadistica',
        'Estadistica descriptiva',
        'Matematica basica',
        'Logica matematica',
        'Algebra lineal',
        'calculo diferencial',
        'Fisica II fluidos y ondas',
        'Fisica III electromagnetismo',
      ],
      tutorias: 'Miércoles de 04:00 a 6:00 P.M y Viernes de 08:00 - 12:00',
    },
    {
      name: 'David Felipe Castaneda Angarita',
      img: 'http://localhost:3003/cvImg/David_Felipe_Castañeda_Angarita.png',
      titulo:
        'Licenciado en matemáticas y física. Universidad de los llanos. 2022',
      asignaturas: [
        'cálculo multivariado',
        'matemáticas básicas',
        'Ecuaciones diferenciales',
        'calculo integral',
        'Logica matematica',
        'Fisica I mecanica y laboratorio',
      ],
      tutorias: 'Lunes a viernes 4:00 a 6:00 pm',
    },
    {
      name: 'Fidel Bautista Rodríguez Puertas',
      img: 'http://localhost:3003/cvImg/Fidel_Bautista_Rodríguez_Puertas.png',
      titulo: 'Profesor Superior de Física Universidad de la Habana 1979',
      asignaturas: [
        'Física II. Sólido rígido, oscilaciones y ondas',
        'Electromagnetismo',
        'Termodinámica',
      ],
      tutorias: 'martes de 8 a 12 a.m. Oficina primer piso pantano de Vargas',
    },
    {
      name: 'Ivon Eliana Parra Cubillos',
      img: 'http://localhost:3003/cvImg/Ivon_Eliana_Parra_Cubillos.png',
      titulo: 'Licenciada en matemáticas y física (20 de enero de 2011)',
      asignaturas: [
        'Termodinámica',
        'Física III (electromagnetismo y laboratorio)',
        'matemática básica',
      ],
      tutorias: '',
    },
    {
      name: 'Jesús Alejandro González Rojas',
      img: 'http://localhost:3003/cvImg/Jesús_Alejandro_González_Rojas.png',
      titulo: 'Biólogo. (Universidad de los Llanos. 2021)',
      asignaturas: [
        'Biología general y laboratorio',
        'Biología y laboratorio',
        'Microbiología general y laboratorio',
        'Microbiología de alimentos',
        'Química general y laboratorio',
        'Diseño experimenta',
      ],
      tutorias: '',
    },
    {
      name: 'Johan Ricardo Morales Ortiz',
      img: 'http://localhost:3003/cvImg/Johan_Ricardo_Morales_Ortiz.png',
      titulo: 'Ingeniero Agroindustrial. Universidad de los Llanos. 2022',
      asignaturas: [
        'Química General',
        'Química Orgánica',
        'Balance de Materia y Energía',
        'Operaciones Unitarias',
        'Química analítica',
      ],
      tutorias:
        'lunes de 9 a 11 a.m. y miércoles de 4 a 6 p.m. Oficina primer piso pantano de Vargas',
    },
    {
      name: 'Karen Ximena Sandoval Parra',
      img: 'http://localhost:3003/cvImg/Karen_Ximena_Sandoval_Parra.png',
      titulo: 'Bióloga. Universidad de los Llanos. 2018',
      asignaturas: [
        'Biología general y laboratorio',
        'Bioquímica, 3 estudiantes',
        'Estadística descriptiva',
        'Microbiología general',
        'Química de alimentos y laboratorio',
        'Química general y laboratorio',
      ],
      tutorias:
        'lunes de 9 a 11 a.m. y miércoles de 4 a 6 p.m. Oficina primer piso pantano de Vargas',
    },
    {
      name: 'Laura Fernanda Ospitia Beltrán',
      img: 'http://localhost:3003/cvImg/LAURA_FERNANDA__OSPITIA_BELTRÁN.png',
      titulo: 'Licenciada en matemáticas y física. 2022',
      asignaturas: [
        'Cálculo Integral',
        'Matemáticas básica',
        'Estadística inferencial',
        'Estadística Descriptiva',
        'Ecuaciones diferenciales',
        'Álgebra lineal',
        'Física II,',
        'Lógica matemática',
      ],
      tutorias: 'miércoles de 8-12 am',
    },
    {
      name: 'Nicolas Barreto Montenegro',
      img: 'http://localhost:3003/cvImg/Nicolas_Andres_Barreto_Montenegro.png',
      titulo: 'Ingeniero químico (Universidad Jorge Tadeo Lozano, 2020',
      asignaturas: [
        'Química general',
        'Operaciones unitarias',
        'Transferencia de calor',
        'Balance de materia y energía',
      ],
      tutorias: '5 horas semanales',
    },
    {
      name: 'Wilder Arleht Angarita Osorio',
      img: 'http://localhost:3003/cvImg/Wilder_Arleht_Angarita_Osorio.png',
      titulo:
        ' Licenciatura en matemáticas y física (Universidad de los Llanos- 2019) ',
      asignaturas: [
        'Matematicas ecuaciones diferenciales',
        'Ecuaciones diferenciales',
        'Calculo diferencial',
        'Sistemas numericos',
        'Metodos numericos',
      ],
      tutorias: '',
    },
    {
      name: 'Wilmer Spilberg Bustos Adrada',
      img: 'http://localhost:3003/cvImg/Wilmer_Spilberg_Bustos_Adrada.png',
      titulo: 'Ingeniero químico, Universidad Nacional de Colombia - 2018',
      asignaturas: [
        'Matemáticas básicas',
        'Química inorgánica y laboratorio',
        'Calculo diferencial',
        'Química ambiental para ingenieros',
        'Algebra lineal',
        'Balance de materia y energía',
      ],
      tutorias:
        ' Martes a viernes, 8am a 10 am. Oficina 103 Ed. Pantano de Vargas.',
    },
  ];

  const promise = new Promise((resolve) => {
    resolve({
      statusOk: 200,
      message: data,
    });
  });
  return promise;
}


