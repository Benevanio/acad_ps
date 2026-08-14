export type Testimonial = {
  id: number;
  name: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Aluno',
    text: 'Depoimento placeholder. Substitua por avaliações reais quando estiverem disponíveis.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Aluno',
    text: 'Depoimento placeholder. A estrutura está pronta para receber a mensagem oficial da academia.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Aluno',
    text: 'Depoimento placeholder. Ideal para destacar a experiência, o cuidado e os resultados.',
    rating: 5,
  },
];
