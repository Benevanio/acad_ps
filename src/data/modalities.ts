export type Modality = {
  id: number;
  title: string;
  description: string;
  image: string;
  cta: string;
};

export const modalities: Modality[] = [
  {
    id: 1,
    title: 'Musculação',
    description: 'Estrutura para força, hipertrofia e evolução contínua com acompanhamento técnico.',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
    cta: 'Saiba mais',
  },
  {
    id: 2,
    title: 'Treinamento funcional',
    description: 'Movimentos integrados para mobilidade, resistência e desempenho no dia a dia.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    cta: 'Descobrir',
  },
  {
    id: 3,
    title: 'Personal Trainer',
    description: 'Planejamento específico com atenção individual, execução correta e foco em resultados.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    cta: 'Contratar',
  },
  {
    id: 4,
    title: 'Cardio',
    description: 'Treinos cardiovasculares para resistência, queima calórica e condicionamento físico.',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
    cta: 'Conhecer',
  },
  {
    id: 5,
    title: 'Emagrecimento',
    description: 'Programação inteligente com foco em composição corporal, energia e bem-estar.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    cta: 'Falar agora',
  },
  {
    id: 6,
    title: 'Hipertrofia',
    description: 'Método estruturado para ganho de massa muscular e visual mais forte e definido.',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
    cta: 'Ver plano',
  },
  {
    id: 7,
    title: 'Condicionamento físico',
    description: 'Melhora da resistência, força e capacidade cardiovascular para você evoluir todos os dias.',
    image:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80',
    cta: 'Agendar',
  },
];
