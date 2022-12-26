import student from "../assets/images/student.png";

export interface StudentComment {
  id: number;
  name: string;
  profileImage?: string;
  comment: string;
  pastTime: number;
  subComment?: {
    name: string;
    role?: string;
    comment: string;
  };
}

export const studentComments: StudentComment[] = [
  {
    id: 1,
    name: "Samuel Vidal Hernández",
    comment:
      "Ha sido un curso muy gratificante,en el que he podido aprender muchas cosas gracias a los grandes ponentes que han colaborado y aportado sus conocimientos. Ahora toca ponerse manos a la obra y poner en practica todo lo aprendido. Estoy muy orgulloso.",
    pastTime: 2,
  },
  {
    id: 2,
    name: "Francisco José Sacedo",
    comment:
      "Seguir creciendo como profesional es necesario pero si lo haces junto a tus ídolos se convierte en un placer. Gracias por esta experiencia y espero poder comentarlo en persona con sus protagonistas muy pronto.",
    pastTime: 3,
    subComment: {
      name: "Equipo Unycos",
      comment:
        "Este texto es una simulación de una contestación del equipo o del profesor directamente. El texto tendrá un aspecto diferenciado, y también tendrá un destaque mayor.",
    },
  },
  {
    id: 3,
    name: "Ana Milena Gómez",
    profileImage: student,
    comment: "Profundizar en el entrenamiento y proceso de enseñanza",
    pastTime: 3,
    subComment: {
      name: "Mireia Belmonte",
      role: "• Profesor",
      comment:
        "Hola, Ana! Continúa a practicar y seguro que mejorarás más y más tu desempeño! Un abrazo!",
    },
  },
];
