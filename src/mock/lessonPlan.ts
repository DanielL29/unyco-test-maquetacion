export interface ILessonPlan {
  id: number;
  number: string;
  title: string;
  description: string;
}

export const lessonPlans: ILessonPlan[] = [
  {
    id: 1,
    number: "01",
    title: "Presentación",
    description:
      "Mireia, nuestra campeona, te da la bienvenida al curso que te llevará a la cima de la natación. Conocerás su técnica, su entrenamiento y muchas cosas más de la mano de un equipo de profesionales de fama internacional.",
  },
  {
    id: 2,
    number: "02",
    title: "NATACIÓN: ASPECTOS GENERALES",
    description:
      "Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.",
  },
  {
    id: 3,
    number: "03",
    title: "BASES BIOMECÁNICAS DE LA NATACIÓN",
    description:
      "Mireia es una luchadora. Su afán de superación y su preparación tanto física como mental la han llevado a lo más alto en un deporte que para ella es un estilo de vida. Conoce de la mano de nuestra deportista de élite los beneficios de esta disciplina.",
  },
  {
    id: 4,
    number: "04",
    title: "ESTILOS DE NATACIÓN",
    description:
      "Una perfecta ejecución de estos estilos, unida al control y a la resistencia, te permitirá convertirte en un nadador interdisciplinar. Mireia y su equipo te enseñarán las claves y los secretos para dominarlos todos desde cero.",
  },
  {
    id: 5,
    number: "05",
    title: "virajes y saltos",
    description: "",
  },
];
